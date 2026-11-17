# Documentation content

Only canonical technical documentation belongs under `src/content`, using MDX and the shared components in `src/components/docs/mdx/`.

## Version model

Versioned source paths follow `src/content/<locale>/docs/<version>/<slug>.mdx`.

**3.0.0 is the standalone documentation baseline.** Its 31 effective pages per locale were materialized from the previously inherited v2 documentation chain without changing their content. The old `2.x` source trees and published routes are retired; only documentation from major version 3 onward is retained.

**3.1.0 inherits 3.0.0 except two release-verified SQL Compiler overrides in all seven locales:** `sql-compiler/sql-support` and `sql-compiler/safe-dml`. They document published atomic DML batch and narrowly attested SQLite source-insert behavior without advertising unreleased features. Future releases should contain only pages with verified changes. Effective documentation is resolved through `src/data/docsVersions.ts`, using parent inheritance, removals and redirects.

The public `/docs/*` routes always resolve the configured current version. Immutable `/docs/<version>/*` routes are retained only for documented versions (3.0.0 onward). Former 2.x URLs redirect to the current slug through `public/_redirects`.

## Content rules

- Keep the same slug across all seven locales.
- Preserve source locale and version in the file path, not in frontmatter.
- Write ordinary Markdown prose where shared MDX UI adds no value.
- Verify version-specific claims against the matching immutable hs-sql-agent release tag.
- Audit the previous and next product tags before adding an override; don't perform blind version string replacements.
- Explicit version transitions belong in upgrade guides. Historical upgrade facts may mention pre-v3 versions.
- Keep the full 3.0.0 baseline immutable in meaning; subsequent versions inherit it and override only changed pages.

See `CONTENT_SOURCES.md` for the release audit and documentation source hierarchy.
