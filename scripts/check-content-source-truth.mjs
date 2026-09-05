import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const releasePath = join(root, "src/data/productRelease.ts");
const releaseSource = await readFile(releasePath, "utf8");

function extract(pattern, label) {
  const match = releaseSource.match(pattern);
  if (!match) throw new Error(`Cannot read ${label} from src/data/productRelease.ts.`);
  return match[1];
}

const repository = extract(/repository:\s*"([^"]+)"/, "repository");
const version = extract(/version:\s*"([^"]+)"/, "version");
const tag = extract(/tag:\s*"([^"]+)"/, "tag");
const sourcesBlock = extract(/sources:\s*{([\s\S]*?)}\s*,?\n}\s+as const;/, "sources");
const sourceEntries = [...sourcesBlock.matchAll(/\b([A-Za-z][A-Za-z0-9]*):\s*"([^"]+)"/g)].map(
  ([, key, path]) => ({ key, path })
);

if (tag !== `v${version}`) {
  throw new Error(`Release tag ${tag} does not match product version ${version}.`);
}
if (sourceEntries.length === 0) {
  throw new Error("productRelease.sources must contain pinned product source files.");
}

const docsVersions = await readFile(join(root, "src/data/docsVersions.ts"), "utf8");
if (!docsVersions.includes('from "./productRelease"')) {
  throw new Error("docsVersions.ts must derive the current version from productRelease.ts.");
}

const semver = /\b\d+\.\d+\.\d+\b/g;
const errors = [];
let currentDocsCount = 0;

async function walkDocs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walkDocs(path);
    else if (entry.isFile() && entry.name.endsWith(".mdx")) await checkDoc(path);
  }
}

async function checkDoc(path) {
  const normalized = relative(root, path).split(sep).join("/");
  if (!normalized.includes(`/docs/${version}/`)) return;
  currentDocsCount += 1;

  if (normalized.endsWith("/reference/upgrade-guide.mdx")) return;

  const text = await readFile(path, "utf8");
  for (const found of new Set(text.match(semver) ?? [])) {
    if (found !== version) {
      errors.push(`${normalized}: current ${version} content contains stale version ${found}`);
    }
  }
}

await walkDocs(join(root, "src/content"));

for (const path of [
  "README.md",
  "CONTENT_MIGRATION.md",
  "CONTENT_SOURCES.md",
  "src/content/README.md",
]) {
  const text = await readFile(join(root, path), "utf8");
  for (const found of new Set(text.match(semver) ?? [])) {
    if (found !== version) {
      errors.push(`${path}: current-content governance contains stale version ${found}`);
    }
  }
}

const marketingPaths = [
  "src/data/marketing.ts",
  "src/data/marketingAspNetCore.ts",
  "src/data/marketingLocales",
];

async function checkMarketing(path) {
  const absolute = join(root, path);
  const info = await stat(absolute);
  if (info.isDirectory()) {
    for (const entry of await readdir(absolute, { withFileTypes: true })) {
      if (entry.isDirectory()) await checkMarketing(join(path, entry.name));
      else if (entry.isFile() && entry.name.endsWith(".ts")) {
        await checkMarketing(join(path, entry.name));
      }
    }
    return;
  }

  const text = await readFile(absolute, "utf8");
  for (const found of new Set(text.match(semver) ?? [])) {
    if (found !== version) {
      errors.push(`${path}: marketing copy contains stale product version ${found}`);
    }
  }
}

for (const path of marketingPaths) await checkMarketing(path);

const fetchedSources = new Map();
for (const { key, path } of sourceEntries) {
  const sourceUrl = `https://raw.githubusercontent.com/${repository}/${tag}/${path}`;
  const response = await fetch(sourceUrl);
  if (!response.ok) {
    errors.push(`Pinned product source ${key} is unavailable: ${repository}@${tag}/${path} (${response.status}).`);
    continue;
  }
  fetchedSources.set(key, await response.text());
}

const productVersionSource = fetchedSources.get("version");
if (!productVersionSource) {
  errors.push("productRelease.sources.version must resolve to the product version authority.");
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

if (currentDocsCount === 0) {
  errors.push(`No current documentation was found under */docs/${version}/.`);
}

if (errors.length > 0) {
  console.error("Content source-of-truth check failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Content source of truth verified: ${repository}@${tag}, version ${version}, ${sourceEntries.length} pinned source files, ${currentDocsCount} current docs.`
);
