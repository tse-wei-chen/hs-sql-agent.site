import { readdir, readFile } from "node:fs/promises";
import { basename, join, relative, sep } from "node:path";

const root = process.cwd();
const releaseSource = await readFile(
  join(root, "src/data/productRelease.ts"),
  "utf8"
);

function extract(pattern, label) {
  const match = releaseSource.match(pattern);
  if (!match) {
    throw new Error(`Cannot read ${label} from src/data/productRelease.ts.`);
  }
  return match[1];
}

const currentVersion = extract(/version:\s*"([^"]+)"/, "version");
const historicalTagsSource = extract(
  /historicalTags:\s*\[([^\]]*)\]/,
  "historical tags"
);
const productVersions = [
  currentVersion,
  ...[...historicalTagsSource.matchAll(/"([^"]+)"/g)].map(([, tag]) =>
    tag.startsWith("v") ? tag.slice(1) : tag
  ),
].filter((value, index, values) => values.indexOf(value) === index);

function isMigrationDoc(path) {
  const file = basename(path).toLowerCase();
  return file.includes("upgrade") || file.includes("migrat");
}

function versionPattern(version) {
  const escaped = version.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^0-9A-Za-z])v?${escaped}(?=$|[^0-9A-Za-z])`, "g");
}

function lineNumberAt(text, index) {
  return text.slice(0, index).split("\n").length;
}

const errors = [];
let checkedDocs = 0;
let migrationDocs = 0;

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(path);
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith(".mdx")) continue;

    const normalized = relative(root, path).split(sep).join("/");
    if (!normalized.includes("/docs/")) continue;
    if (isMigrationDoc(normalized)) {
      migrationDocs += 1;
      continue;
    }

    checkedDocs += 1;
    const text = await readFile(path, "utf8");
    for (const version of productVersions) {
      const pattern = versionPattern(version);
      for (const match of text.matchAll(pattern)) {
        const versionOffset = match[0].lastIndexOf(version);
        const index = (match.index ?? 0) + Math.max(versionOffset, 0);
        errors.push(
          `${normalized}:${lineNumberAt(text, index)}: evergreen documentation must not mention product version ${version}`
        );
      }
    }
  }
}

await walk(join(root, "src/content"));

if (errors.length > 0) {
  process.stderr.write(
    `Documentation version-neutrality check failed:\n\n${errors
      .map(error => `- ${error}`)
      .join("\n")}\n\nMove release-to-release wording into migration/upgrade pages, or rewrite evergreen documentation without a product version number.\n`
  );
  process.exit(1);
}

process.stdout.write(
  `Documentation version neutrality verified across ${checkedDocs} evergreen docs; ${migrationDocs} migration/upgrade docs exempted.\n`
);
