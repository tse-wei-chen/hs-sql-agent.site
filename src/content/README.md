# Documentation content

Only canonical technical documentation belongs under `src/content`.

Documentation is stored by locale and source version:

```text
src/content/<locale>/docs/<version>/<slug>.mdx
```

Documentation is **MDX-first**. Most explanatory text should still use ordinary Markdown syntax; use the shared components under `src/components/docs/mdx/` for reusable documentation patterns such as cards, callouts, steps, flows, badges, and reference surfaces.

Do not embed product/marketing pages here. Product pages are Astro UI and live outside the documentation content collection.

## Version model

The currently published baseline is **2.0.2**, pinned to product tag `v2.0.2` through `src/data/productRelease.ts`. Earlier product versions are not published as documentation trees by this site.

Future versions should contain only pages that changed in that version. Effective content is resolved through `src/data/docsVersions.ts`, where each version may inherit from a parent, remove inherited pages, or redirect old slugs.

The public `/docs/*` routes always resolve the configured current version. Immutable `/docs/<version>/*` routes resolve a fixed version.

## Content rules

- Locale and version come from the path; do not duplicate them in frontmatter.
- Keep the same slug across translations of the same page/version.
- Use semantic frontmatter for title, description, draft state, and sidebar ordering; do not store visual theme choices in frontmatter.
- Prefer shared MDX components over one-off HTML/JSX.
- Keep normal prose as Markdown when a component does not improve comprehension.
- Version-specific behavior must be checked against the matching immutable hs-sql-agent tag, not product `main`, historical Wiki content, previous site copy, or another translation.
- Review the product tag-to-tag diff before creating a new docs version; a version-number replacement is not a semantic audit.
- When a page is unchanged in a new version, inherit it instead of copying the file.
- Keep historical from/to version numbers in upgrade guides explicit.

See the repository-level `CONTENT_SOURCES.md` for the source hierarchy and release audit procedure.
