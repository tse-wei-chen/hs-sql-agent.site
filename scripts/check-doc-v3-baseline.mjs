import { readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const root = "src/content";
const locales = ["en", "zh-hant", "zh-hans", "ja", "ko", "fr", "de"];
const baselineVersion = "3.0.0";

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
}

process.stdout.write("Standalone v3 baseline verified: 7 locales × 31 pages; no v2 content trees.\n");
