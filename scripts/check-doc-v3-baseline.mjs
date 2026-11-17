import { readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const root = "src/content";
const locales = ["en", "zh-hant", "zh-hans", "ja", "ko", "fr", "de"];
const baselineVersion = "3.0.0";
const releaseVersion = "3.1.0";
const expectedReleaseOverlays = [
  "sql-compiler/safe-dml.mdx",
  "sql-compiler/sql-support.mdx",
];

async function listDocs(dir) {
  const paths = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      paths.push(...(await listDocs(fullPath)));
    } else if (entry.name.endsWith(".mdx")) {
      paths.push(fullPath);
    }
  }
  return paths;
}

let baseline = null;
let releaseOverlays = null;
for (const locale of locales) {
  const docsRoot = join(root, locale, "docs");
  const versions = (await readdir(docsRoot, { withFileTypes: true }))
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);
  if (
    !versions.includes(baselineVersion) ||
    versions.some(version => Number(version.split(".")[0]) < 3)
  ) {
    throw new Error(`${locale}: standalone 3.0.0 baseline required; pre-v3 sources forbidden; found ${versions.join(", ")}`);
  }

  const paths = (await listDocs(join(docsRoot, baselineVersion)))
    .map(path => relative(join(docsRoot, baselineVersion), path).split(sep).join("/"))
    .sort();

  if (paths.length !== 31) {
    throw new Error(`${locale}: expected 31 effective 3.0.0 pages, found ${paths.length}`);
  }
  if (baseline && JSON.stringify(paths) !== JSON.stringify(baseline)) {
    throw new Error(`${locale}: page slugs differ from the English 3.0.0 baseline`);
  }
  if (locale === "en") baseline = paths;

  if (!versions.includes(releaseVersion)) {
    throw new Error(`${locale}: missing ${releaseVersion} release-specific documentation overlay`);
  }
  const overlays = (await listDocs(join(docsRoot, releaseVersion)))
    .map(path => relative(join(docsRoot, releaseVersion), path).split(sep).join("/"))
    .sort();
  if (expectedReleaseOverlays.some(slug => !overlays.includes(slug))) {
    throw new Error(`${locale}: missing a verified ${releaseVersion} SQL Compiler override`);
  }
  if (releaseOverlays && JSON.stringify(overlays) !== JSON.stringify(releaseOverlays)) {
    throw new Error(`${locale}: ${releaseVersion} overlay slugs differ from the English release set`);
  }
  if (locale === "en") releaseOverlays = overlays;
}

process.stdout.write("Standalone v3 baseline verified: 7 locales × 31 pages; matching v3.1.0 SQL Compiler overlays; no v2 content trees.\n");
