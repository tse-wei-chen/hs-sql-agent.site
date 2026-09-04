# Documentation content

Only canonical technical documentation belongs under `src/content`.

Documentation is stored by locale and source version:

```text
src/content/<locale>/docs/<version>/<slug>.md
```

`2.0.1` is the first complete baseline. Future versions should contain only pages that changed in that version. Effective content is resolved through `src/data/docsVersions.ts`, where each version may inherit from a parent, remove inherited pages, or redirect old slugs.

The public `/docs/*` routes always resolve the configured current version. Immutable `/docs/<version>/*` routes resolve a fixed version.

Do not add product/marketing pages here, and do not add visual/theme metadata to documentation Markdown.
