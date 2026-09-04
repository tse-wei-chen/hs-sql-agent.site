# hs-sql-agent.site

Official product website and documentation for [hs-sql-agent](https://github.com/tse-wei-chen/hs-sql-agent).

The site is built with Astro and is intentionally static/SEO-first. It combines a product landing experience, search-oriented database/feature/integration pages, and the canonical technical documentation that replaces the old GitHub Wiki structure.

## Local development

Requires Node.js 22.12+ and pnpm.

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
```

The build runs `astro check`, generates the static site, and builds the Pagefind search index.

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

Product pages are Astro UI, not Markdown content. Their localized copy is defined in:

```text
src/data/marketing.ts
```

and rendered through the shared marketing route/layout. This keeps landing/product pages free to use custom components, visuals, and animation without coupling those concerns to documentation Markdown.

### Documentation

Canonical technical documentation lives under:

```text
src/content/<locale>/docs/<version>/
```

`2.0.1` is the first complete documentation baseline. Documentation versions are declared in `src/data/docsVersions.ts` and form an inheritance chain. Future versions should contain only pages that changed in that version; unchanged pages are inherited from the parent version. A version can also explicitly remove inherited slugs or redirect old slugs.

The public routes deliberately separate stable latest URLs from immutable version URLs:

```text
/<locale>/docs/*                 -> current effective documentation set
/<locale>/docs/2.0.1/*           -> fixed 2.0.1 documentation set
```

When the current version advances, `/docs/*` moves to the new effective set while `/docs/2.0.1/*` remains fixed.

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

See [`CONTENT_MIGRATION.md`](./CONTENT_MIGRATION.md) for the migration rules.

## i18n content model

Locale and source version are structural and come from the content path. Do **not** add `locale` or `version` to frontmatter.

Translations intentionally share the same slug inside the same version:

```text
src/content/en/docs/2.0.1/sql-compiler/safe-dml.md
src/content/zh-hant/docs/2.0.1/sql-compiler/safe-dml.md
```

which is available through both the current alias and immutable version route while 2.0.1 is current:

```text
/en/docs/sql-compiler/safe-dml
/en/docs/2.0.1/sql-compiler/safe-dml

/zh-hant/docs/sql-compiler/safe-dml
/zh-hant/docs/2.0.1/sql-compiler/safe-dml
```

Language switching preserves the selected documentation version. If a translation does not exist, the user falls back to the target-language index for that version instead of a 404.

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

## Design and animation

The public site follows the hs-sql-agent Admin Panel design language while remaining a separate Astro application. The homepage uses CSS-first animation for the SQL compiler pipeline, Safe DML flow, database marquee, scroll reveals, and lightweight pointer interaction.

Documentation Markdown stays renderer-agnostic. Visual documentation heroes, inline SVG animations, code framing, step styling, navigation, and version selection are added by the Astro docs theme rather than embedded as MDX components.

Animations are progressive enhancement: content remains visible without JavaScript and `prefers-reduced-motion` disables motion-heavy effects.

## GitHub Actions

This repository intentionally does not include a GitHub Actions workflow. Build and deployment are expected to run in the chosen external hosting/deployment environment or locally.

## Source and attribution

Product and technical claims should be verified against the current `hs-sql-agent` source repository rather than copied blindly from historical Wiki content.

This site started from AstroPaper and retains the upstream MIT license attribution for derived portions. See [`LICENSE`](./LICENSE).
