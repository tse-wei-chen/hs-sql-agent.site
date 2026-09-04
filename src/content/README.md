# Documentation content

Only canonical technical documentation belongs under `src/content`.

Documentation is stored by locale and source version:

```text
src/content/<locale>/docs/<version>/<slug>.mdx
```

Documentation is **MDX-first**. Most explanatory text should still use ordinary Markdown syntax; use the shared components under `src/components/docs/mdx/` for reusable documentation patterns such as cards, callouts, steps, flows, badges, and reference surfaces.

Do not embed product/marketing pages here. Product pages are Astro UI and live outside the documentation content collection.

## Version model

`2.0.1` is the first complete baseline. Future versions should contain only pages that changed in that version. Effective content is resolved through `src/data/docsVersions.ts`, where each version may inherit from a parent, remove inherited pages, or redirect old slugs.

The public `/docs/*` routes always resolve the configured current version. Immutable `/docs/<version>/*` routes resolve a fixed version.

## Content rules

- Locale and version come from the path; do not duplicate them in frontmatter.
- Keep the same slug across translations of the same page/version.
- Use semantic frontmatter for title, description, draft state, and sidebar ordering; do not store visual theme choices in frontmatter.
- Prefer shared MDX components over one-off HTML/JSX.
- Keep normal prose as Markdown when a component does not improve comprehension.
- Version-specific behavior must be checked against the matching hs-sql-agent release/tag rather than inferred from historical Wiki content.
- When a page is unchanged in a new version, inherit it instead of copying the file.
