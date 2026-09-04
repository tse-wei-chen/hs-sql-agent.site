import { getRelativeLocaleUrl } from "astro:i18n";
import type { CollectionEntry } from "astro:content";
import {
  docsVersions,
  getDocsVersionDefinition,
  getDocsVersionLineage,
  isDocsVersion,
} from "@/data/docsVersions";

export type LocalizedContentIdentity = {
  locale: string;
  section: "docs";
  version: string;
  slug: string;
};

export function parseLocalizedContentId(id: string): LocalizedContentIdentity {
  const parts = id.replace(/^\/+|\/+$/g, "").split("/");

  if (
    parts.length < 4 ||
    parts[1] !== "docs" ||
    !isDocsVersion(parts[2])
  ) {
    throw new Error(
      `Invalid localized documentation id "${id}". Expected <locale>/docs/<version>/<slug>.`
    );
  }

  return {
    locale: parts[0],
    section: "docs",
    version: parts[2],
    slug: parts.slice(3).join("/"),
  };
}

export function getContentLocale(id: string, _section: "docs" = "docs"): string {
  return parseLocalizedContentId(id).locale;
}

export function getDocSourceVersion(id: string): string {
  return parseLocalizedContentId(id).version;
}

export function getLocalizedSlug(id: string, _section: "docs" = "docs"): string {
  return parseLocalizedContentId(id).slug;
}

export function getDocsByLocale(
  docs: CollectionEntry<"docs">[],
  locale: string
): CollectionEntry<"docs">[] {
  return docs.filter(doc => getContentLocale(doc.id) === locale);
}

/**
 * Builds the effective documentation set for a version.
 * Parent content is applied first, then child overrides, removals and redirects.
 */
export function getDocsForVersion(
  docs: CollectionEntry<"docs">[],
  locale: string,
  version: string
): CollectionEntry<"docs">[] {
  const localizedDocs = getDocsByLocale(docs, locale);
  const effective = new Map<string, CollectionEntry<"docs">>();

  for (const definition of getDocsVersionLineage(version)) {
    for (const doc of localizedDocs) {
      const identity = parseLocalizedContentId(doc.id);
      if (identity.version === definition.version) {
        effective.set(identity.slug, doc);
      }
    }

    for (const slug of Object.keys(definition.redirects ?? {})) {
      effective.delete(slug);
    }

    for (const slug of definition.removed ?? []) {
      effective.delete(slug);
    }
  }

  return [...effective.values()];
}

export function hasDocInVersion(
  docs: CollectionEntry<"docs">[],
  locale: string,
  version: string,
  slug: string
): boolean {
  return getDocsForVersion(docs, locale, version).some(
    doc => getLocalizedSlug(doc.id) === slug
  );
}

export function sortDocs(
  docs: CollectionEntry<"docs">[],
  locale: string
): CollectionEntry<"docs">[] {
  return [...docs].sort((a, b) => {
    const orderA = a.data.sidebar?.order ?? 999;
    const orderB = b.data.sidebar?.order ?? 999;
    return orderA - orderB || a.data.title.localeCompare(b.data.title, locale);
  });
}

/**
 * routeVersion = null means the stable latest alias (/docs/<slug>).
 * A concrete version produces an immutable versioned URL (/docs/2.0.2/<slug>).
 */
export function getDocsRouteUrl(
  locale: string,
  slug: string,
  routeVersion: string | null = null
): string {
  const path = routeVersion
    ? `docs/${routeVersion}/${slug}`
    : `docs/${slug}`;
  return getRelativeLocaleUrl(locale, path.replace(/\/$/, ""));
}

export function getDocsIndexUrl(
  locale: string,
  routeVersion: string | null = null
): string {
  return routeVersion
    ? getRelativeLocaleUrl(locale, `docs/${routeVersion}`)
    : getRelativeLocaleUrl(locale, "docs");
}

export function getDocUrl(
  doc: CollectionEntry<"docs">,
  routeVersion: string | null = null
): string {
  const { locale, slug } = parseLocalizedContentId(doc.id);
  return getDocsRouteUrl(locale, slug, routeVersion);
}

export function getDocSection(doc: CollectionEntry<"docs">): string {
  const slug = getLocalizedSlug(doc.id);
  const [first] = slug.split("/");
  return first || "overview";
}

export function getDocGroupLabel(doc: CollectionEntry<"docs">): string {
  if (doc.data.sidebar?.group) return doc.data.sidebar.group;

  return getDocSection(doc)
    .split("-")
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getCurrentDocsVersion(): string {
  return docsVersions.current;
}

export function getDocsVersionLabel(version: string): string {
  return getDocsVersionDefinition(version)?.label ?? version;
}
