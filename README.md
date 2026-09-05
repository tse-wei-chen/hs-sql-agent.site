# hs-sql-agent.site

Official product website and documentation for [hs-sql-agent](https://github.com/tse-wei-chen/hs-sql-agent).

The site is built with Astro and is intentionally static/SEO-first. It combines a product landing experience, search-oriented database/feature/integration pages, and the canonical technical documentation that replaces the old GitHub Wiki structure.

## Local development

Requires Node.js 22.12+ and pnpm.

```bash
pnpm install
pnpm dev
```

Validation and production build:

```bash
pnpm run content:check
pnpm run lint
pnpm run build
```

The production build runs `astro check`, generates the static site, and builds the Pagefind search index. `content:check` independently verifies current content against the pinned product release manifest.

## Information architecture

Public routes are locale-prefixed:

```text
/en/
/zh-hant/

/<locale>/features/*
/<locale>/databases/*
/<locale>/integrations/*
/<locale>/docs/*
/<locale>/docs/<version>/*
```

The root route is handled by Astro i18n and redirects to the configured default locale.

### Product / SEO pages

Product pages are Astro UI, not content-collection documents. Core English/Traditional Chinese definitions live in `src/data/marketing.ts` and the dedicated ASP.NET Core definition, while additional localized detail copy lives under `src/data/marketingLocales/`. `src/data/marketingCatalog.ts` resolves the unified seven-locale page catalog used by routes and locale switching.

This keeps landing/product pages free to use purpose-built components, visuals, and animation without pretending marketing copy is technical source authority.

### Documentation

Canonical technical documentation is MDX-first and lives under:

```text
src/content/<locale>/docs/<version>/**/*.mdx
```

Most prose still uses ordinary Markdown syntax. Reusable documentation UI such as cards, callouts, steps, flows, badges, and reference-table surfaces comes from:

```text
src/components/docs/mdx/
```

Use those shared components instead of embedding one-off page-specific HTML/JSX whenever a reusable documentation pattern exists.

The **currently published documentation baseline is 2.0.2**, pinned to the immutable product tag `v2.0.2` through `src/data/productRelease.ts`. Earlier product releases are not published as version trees by this site. Documentation versions are declared in `src/data/docsVersions.ts`; future versions may inherit unchanged pages from a parent while explicitly removing or redirecting slugs.

The public routes deliberately separate stable latest URLs from immutable version URLs:

```text
/<locale>/docs/*                 -> current effective documentation set
/<locale>/docs/2.0.2/*           -> fixed 2.0.2 documentation set
```

When the current version advances, `/docs/*` moves to the new effective set while `/docs/2.0.2/*` remains fixed.

The documentation is organized by product responsibility rather than by historical GitHub Wiki page names:

- Getting Started
- MCP
- SQL Compiler
- Administration
- Integration
- Operations
- Security
- Development
- Reference

See [`CONTENT_MIGRATION.md`](./CONTENT_MIGRATION.md) for migration/versioning rules and [`CONTENT_SOURCES.md`](./CONTENT_SOURCES.md) for product source-of-truth rules.

## i18n content model

Locale and source version are structural and come from the content path. Do **not** add `locale` or `version` to frontmatter.

Translations intentionally share the same slug inside the same version:

```text
src/content/en/docs/2.0.2/sql-compiler/safe-dml.mdx
src/content/zh-hant/docs/2.0.2/sql-compiler/safe-dml.mdx
```

which is available through both the current alias and immutable version route while 2.0.2 is current:

```text
/en/docs/sql-compiler/safe-dml
/en/docs/2.0.2/sql-compiler/safe-dml

/zh-hant/docs/sql-compiler/safe-dml
/zh-hant/docs/2.0.2/sql-compiler/safe-dml
```

Language switching preserves the selected documentation version. If a translation does not exist, the user falls back to the target-language index for that version instead of a 404.

## Documentation design system

The docs use an MDX-first design system inspired by modern developer-documentation sites while keeping content source readable and reviewable.

A page may use shared components when the content benefits from stronger visual structure:

- `CardGrid` / `DocCard` for choices, hubs, and next steps
- `Callout` for warnings, constraints, and operational notes
- `Steps` / `Step` for procedures
- `Flow` for execution paths and architecture sequences
- `Badge` for compact status/type labels
- theme-provided table, list, code, hero, navigation, and SVG enhancements

Not every paragraph needs a component. Prefer normal Markdown prose for explanation and use MDX components where they materially improve scanning, comprehension, or interaction.

Animations are progressive enhancement: content remains usable without JavaScript and `prefers-reduced-motion` disables motion-heavy effects.

## Search

Pagefind indexes static output. Search pages carry locale and documentation-version metadata so a docs-scoped search can stay within the active language and effective version rather than mixing historical/current results.

## SEO

The site generates static pages with:

- canonical URLs
- locale `hreflang` and `x-default`
- sitemap and robots.txt
- Open Graph / X metadata
- branded dynamic OG image
- structured data for docs and marketing pages
- Pagefind search
- internal links between the homepage, SEO landing pages, and technical docs

The current version's immutable `/docs/<version>/*` routes canonicalize to the stable `/docs/*` aliases to avoid duplicate indexing. Once a version becomes historical, its fixed routes become the canonical historical URLs.

Before publishing, ensure the configured `site.url` matches the real production domain because canonical, sitemap, OG, and hreflang URLs depend on it.

## GitHub Actions

`.github/workflows/ci.yml` runs on pushes and pull requests. The Quality job checks changed-file formatting, runs the product source-of-truth validation, and runs ESLint. The Build job runs the production static build.

The source-of-truth validation is intentionally read-only: CI may reject stale or untraceable content, but it does not rewrite documentation or push commits back to a branch.

## Source truth and attribution

Product and technical claims must be verified against the matching immutable hs-sql-agent release tag. Product `main`, historical Wiki content, previous website copy, and another translation are not authorities for a versioned runtime contract.

The current release mapping and source hierarchy are documented in [`CONTENT_SOURCES.md`](./CONTENT_SOURCES.md).

This site started from AstroPaper and retains the upstream MIT license attribution for derived portions. See [`LICENSE`](./LICENSE).
