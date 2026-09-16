import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const siteOrigin = "https://sql-agent.net";
const versionedDocsPattern = /\/docs\/\d+\.\d+\.\d+(?:\/|$)/;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(absolutePath)));
    } else {
      files.push(absolutePath);
    }
  }

  return files;
}

function getAttribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']+)["']`, "i"))?.[1];
}

function findTags(html, tagName) {
  return html.match(new RegExp(`<${tagName}\\b[^>]*>`, "gi")) ?? [];
}

function hasNoindexFollow(html) {
  return findTags(html, "meta").some(tag => {
    if (getAttribute(tag, "name")?.toLowerCase() !== "robots") return false;
    const directives = (getAttribute(tag, "content") ?? "")
      .toLowerCase()
      .split(",")
      .map(value => value.trim());

    return directives.includes("noindex") && directives.includes("follow");
  });
}

function routePathForHtml(filePath) {
  const relativePath = path.relative(distDir, filePath).split(path.sep).join("/");
  if (relativePath === "index.html") return "/";
  if (relativePath.endsWith("/index.html")) {
    return `/${relativePath.slice(0, -"index.html".length)}`;
  }
  if (relativePath.endsWith(".html")) return `/${relativePath}`;
  return null;
}

function assertCanonicalUrl(value, source, errors) {
  let url;

  try {
    url = new URL(value);
  } catch {
    errors.push(`${source}: invalid URL ${value}`);
    return;
  }

  if (url.origin !== siteOrigin) {
    errors.push(`${source}: unexpected origin ${url.origin}`);
  }
  if (url.search || url.hash) {
    errors.push(`${source}: canonical/alternate must not contain query or hash: ${url}`);
  }

  const lastSegment = url.pathname.split("/").filter(Boolean).at(-1) ?? "";
  const isFileLike = lastSegment.includes(".");
  if (url.pathname !== "/" && !isFileLike && !url.pathname.endsWith("/")) {
    errors.push(`${source}: page URL must end with "/": ${url}`);
  }
}

const files = await walk(distDir);
const htmlFiles = files.filter(file => file.endsWith(".html"));
const sitemapFiles = files.filter(file => /sitemap-\d+\.xml$/.test(file));
const errors = [];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const routePath = routePathForHtml(file);
  if (!routePath) continue;

  const canonicalTags = findTags(html, "link").filter(
    tag => getAttribute(tag, "rel")?.toLowerCase() === "canonical"
  );
  if (canonicalTags.length !== 1) {
    errors.push(`${routePath}: expected exactly one canonical link, found ${canonicalTags.length}`);
  } else {
    const href = getAttribute(canonicalTags[0], "href");
    if (href) assertCanonicalUrl(href, routePath, errors);
  }

  for (const tag of findTags(html, "link").filter(
    tag =>
      getAttribute(tag, "rel")?.toLowerCase() === "alternate" &&
      Boolean(getAttribute(tag, "hreflang"))
  )) {
    const href = getAttribute(tag, "href");
    if (href) assertCanonicalUrl(href, `${routePath} hreflang`, errors);
  }

  if (versionedDocsPattern.test(routePath) && !hasNoindexFollow(html)) {
    errors.push(`${routePath}: version-pinned docs must be noindex,follow`);
  }
  if (/^\/(?:[^/]+\/)?search\/$/.test(routePath) && !hasNoindexFollow(html)) {
    errors.push(`${routePath}: site search pages must be noindex,follow`);
  }
}

for (const file of sitemapFiles) {
  const xml = await readFile(file, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);

  for (const loc of locs) {
    let url;
    try {
      url = new URL(loc);
    } catch {
      errors.push(`${path.basename(file)}: invalid sitemap URL ${loc}`);
      continue;
    }

    if (url.origin !== siteOrigin) {
      errors.push(`${path.basename(file)}: unexpected sitemap origin: ${loc}`);
    }
    if (versionedDocsPattern.test(url.pathname)) {
      errors.push(`${path.basename(file)}: version-pinned docs must not appear in sitemap: ${loc}`);
    }
    if (/^\/(?:[^/]+\/)?search\/?$/.test(url.pathname)) {
      errors.push(`${path.basename(file)}: search pages must not appear in sitemap: ${loc}`);
    }
    if (url.pathname !== "/" && !url.pathname.endsWith("/")) {
      errors.push(`${path.basename(file)}: sitemap page URL must end with "/": ${loc}`);
    }
  }
}

if (errors.length > 0) {
  process.stderr.write(
    ["SEO output contract failed:", ...errors.map(error => `- ${error}`), ""].join(
      "\n"
    )
  );
  process.exit(1);
}

process.stdout.write(
  `SEO output contract passed for ${htmlFiles.length} HTML files and ${sitemapFiles.length} sitemap files.\n`
);
