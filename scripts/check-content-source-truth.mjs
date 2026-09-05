import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const releasePath = join(root, "src/data/productRelease.ts");
const releaseSource = await readFile(releasePath, "utf8");

function extract(pattern, label) {
  const match = releaseSource.match(pattern);
  if (!match)
    throw new Error(`Cannot read ${label} from src/data/productRelease.ts.`);
  return match[1];
}

const repository = extract(/repository:\s*"([^"]+)"/, "repository");
const version = extract(/version:\s*"([^"]+)"/, "version");
const tag = extract(/tag:\s*"([^"]+)"/, "tag");
const historicalTagsSource = extract(
  /historicalTags:\s*\[([^\]]*)\]/,
  "historical tags"
);
const historicalTags = [...historicalTagsSource.matchAll(/"([^"]+)"/g)].map(
  match => match[1]
);
const historicalVersions = historicalTags.map(historicalTag =>
  historicalTag.startsWith("v") ? historicalTag.slice(1) : historicalTag
);
const sourcesBlock = extract(
  /sources:\s*{([\s\S]*?)}\s*,?\n}\s+as const;/,
  "sources"
);
const sourceEntries = [
  ...sourcesBlock.matchAll(/\b([A-Za-z][A-Za-z0-9]*):\s*"([^"]+)"/g),
].map(([, key, path]) => ({ key, path }));

if (tag !== `v${version}`) {
  throw new Error(`Release tag ${tag} does not match product version ${version}.`);
}
if (historicalTags.includes(tag)) {
  throw new Error(`Current release tag ${tag} must not also be historical.`);
}
for (const historicalTag of historicalTags) {
  if (!/^v\d+\.\d+\.\d+$/.test(historicalTag)) {
    throw new Error(
      `Historical product tag ${historicalTag} is not a release tag.`
    );
  }
}
if (sourceEntries.length === 0) {
  throw new Error(
    "productRelease.sources must contain pinned product source files."
  );
}

const docsVersions = await readFile(
  join(root, "src/data/docsVersions.ts"),
  "utf8"
);
if (!docsVersions.includes('from "./productRelease"')) {
  throw new Error(
    "docsVersions.ts must derive the current version from productRelease.ts."
  );
}
if (!docsVersions.includes("version: productRelease.version")) {
  throw new Error(
    "docsVersions.ts must expose productRelease.version as a documentation version."
  );
}
if (
  historicalVersions.length > 0 &&
  !docsVersions.includes(`parent: "${historicalVersions[0]}"`)
) {
  throw new Error(
    `Current documentation must inherit from the immediate historical release ${historicalVersions[0]}.`
  );
}

const errors = [];
let currentDocsCount = 0;

function staleVersionsIn(text) {
  return historicalVersions.filter(stale =>
    new RegExp(
      `(^|[^0-9])${stale.replaceAll(".", "\\.")}([^0-9]|$)`
    ).test(text)
  );
}

function stripObjectEntry(source, key) {
  const marker = `"${key}":`;
  const propertyStart = source.indexOf(marker);
  if (propertyStart < 0) return source;

  const braceStart = source.indexOf("{", propertyStart + marker.length);
  if (braceStart < 0) return source;

  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let index = braceStart; index < source.length; index += 1) {
    const char = source[index];

    if (quote) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === quote) quote = null;
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "{") {
      depth += 1;
      continue;
    }
    if (char !== "}") continue;

    depth -= 1;
    if (depth === 0) {
      return source.slice(0, propertyStart) + source.slice(index + 1);
    }
  }

  return source;
}

async function walkDocs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walkDocs(path);
    else if (entry.isFile() && entry.name.endsWith(".mdx"))
      await checkDoc(path);
  }
}

async function checkDoc(path) {
  const normalized = relative(root, path).split(sep).join("/");
  if (!normalized.includes(`/docs/${version}/`)) return;
  currentDocsCount += 1;

  if (normalized.endsWith("/reference/upgrade-guide.mdx")) return;

  const text = await readFile(path, "utf8");
  for (const stale of staleVersionsIn(text)) {
    errors.push(
      `${normalized}: current ${version} content contains stale product version ${stale}`
    );
  }
}

await walkDocs(join(root, "src/content"));

const latestCopyPaths = [
  "src/data/marketing.ts",
  "src/data/marketingAspNetCore.ts",
  "src/data/marketingSafeDml.ts",
  "src/data/marketingLocales",
  "public/llms.txt",
];

async function checkLatestCopy(path) {
  const absolute = join(root, path);
  const info = await stat(absolute);
  if (info.isDirectory()) {
    for (const entry of await readdir(absolute, { withFileTypes: true })) {
      if (entry.isDirectory()) await checkLatestCopy(join(path, entry.name));
      else if (entry.isFile() && entry.name.endsWith(".ts")) {
        await checkLatestCopy(join(path, entry.name));
      }
    }
    return;
  }

  let text = await readFile(absolute, "utf8");
  if (path.startsWith("src/data/marketingLocales/")) {
    // This legacy override is intentionally unreachable: marketingCatalog routes
    // integrations/aspnet-core for every locale through marketingAspNetCore.ts.
    // Keep validating every other supplemental marketing entry for stale versions.
    text = stripObjectEntry(text, "integrations/aspnet-core");
  }

  for (const stale of staleVersionsIn(text)) {
    errors.push(`${path}: latest-only copy contains stale product version ${stale}`);
  }
}

for (const path of latestCopyPaths) await checkLatestCopy(path);

const fetchedSources = new Map();
for (const { key, path } of sourceEntries) {
  const sourceUrl = `https://raw.githubusercontent.com/${repository}/${tag}/${path}`;
  const response = await fetch(sourceUrl);
  if (!response.ok) {
    errors.push(
      `Pinned product source ${key} is unavailable: ${repository}@${tag}/${path} (${response.status}).`
    );
    continue;
  }
  fetchedSources.set(key, await response.text());
}

const productVersionSource = fetchedSources.get("version");
if (!productVersionSource) {
  errors.push(
    "productRelease.sources.version must resolve to the product version authority."
  );
} else {
  const escapedVersion = version.replaceAll(".", "\\.");
  const productVersionPattern = new RegExp(
    `<VersionPrefix[^>]*>${escapedVersion}</VersionPrefix>`
  );
  if (!productVersionPattern.test(productVersionSource)) {
    errors.push(
      `Pinned product version source ${repository}@${tag} does not declare VersionPrefix ${version}.`
    );
  }
}

for (const historicalTag of historicalTags) {
  const historyUrl = `https://raw.githubusercontent.com/${repository}/${historicalTag}/${sourceEntries.find(entry => entry.key === "version")?.path ?? "backend/Directory.Build.props"}`;
  const response = await fetch(historyUrl);
  if (!response.ok) {
    errors.push(
      `Historical product tag ${historicalTag} cannot be verified (${response.status}).`
    );
  }
}

if (currentDocsCount === 0) {
  errors.push(`No current documentation overlay was found under */docs/${version}/.`);
}

if (errors.length > 0) {
  process.stderr.write(
    `Content source-of-truth check failed:\n\n${errors.map(error => `- ${error}`).join("\n")}\n`
  );
  process.exit(1);
}

process.stdout.write(
  `Content source of truth verified: ${repository}@${tag}, version ${version}, ${historicalTags.length} historical release tag(s), ${sourceEntries.length} pinned source files, ${currentDocsCount} current overlay docs.\n`
);
