# Documentation migration map

This repository intentionally does **not** mirror the legacy GitHub Wiki page-for-page.
The site is organized by user journey and product capability so URLs can remain stable as the documentation grows.

| Legacy source | New documentation cluster | Migration rule |
| --- | --- | --- |
| Getting Started | `getting-started/*` | Split installation from MCP onboarding. |
| Configuration | `operations/configuration` | Group by runtime responsibility instead of one flat environment-variable page. |
| Admin Panel | `administration/*` | Start with an operator hub; split databases, MCP keys, semantic metadata, custom tools, audit, operability, and security as content grows. |
| MCP Tools Reference | `mcp/*` + `sql-compiler/*` | Separate transport/tool usage from SQL language/compiler guarantees. |
| Security Governance | `security/*` | Separate access boundary, identity/MFA, and operational security when source material is available. |
| Deployment | `operations/deployment` | Keep single-instance production deployment focused. |
| Distributed Deployment | `operations/distributed-deployment` | Keep shared-state/Redis/Postgres concerns isolated from the basic deployment guide. |
| NuGet Package | `integration/aspnet-core` | Document the embeddable server as an integration, not as deployment. |
| API Reference | `reference/*` | Reserve for stable HTTP/API contracts; do not mix with conceptual docs. |
| Troubleshooting | `reference/troubleshooting` | Organize by symptoms and invariants, not chronology. |
| Development | `development/*` | Architecture, building/testing, and contribution flow become separate pages as needed. |

## Content-source rule

Migration is source-driven. Content may be rewritten, split, merged, or presented through reusable MDX components, but factual behavior must be traceable to the matching hs-sql-agent source/release (README, source code, checked-in guides, configuration examples, or the legacy Wiki where appropriate).

For version-specific documentation, prefer the corresponding product tag. The `2.0.1` baseline should describe behavior supported by `v2.0.1`, not silently inherit later `main` behavior.

If a legacy Wiki page cannot be retrieved reliably, do not invent its details. Migrate the parts that can be verified from the product repository first, then fill remaining sections when authoritative source material is available.

## Documentation version rule

Documentation versioning starts at **2.0.1**. Earlier versions are intentionally not published by this site.

`2.0.1` is the first complete baseline under:

```text
src/content/<locale>/docs/2.0.1/
```

Future versions are deltas, not full copies. Version metadata and parent relationships live in `src/data/docsVersions.ts`. If `2.1.0` inherits from `2.0.1`, only pages that changed in 2.1.0 should be added under `docs/2.1.0/`; every other page resolves from the parent baseline.

A version manifest may declare:

- `parent`: the version to inherit from;
- `removed`: inherited slugs that must not reappear through fallback;
- `redirects`: old slugs that moved to a new slug in that version.

Do not put `version` or inheritance metadata in individual MDX frontmatter.

Public `/docs/*` URLs always represent the configured current version. `/docs/<version>/*` URLs are immutable version-specific routes. This separation lets external links target latest documentation while preserving stable historical documentation once a newer version becomes current.

## MDX and theme boundary

Documentation is **MDX-first**, but that does not mean every paragraph should become JSX.

Normal explanatory prose, headings, lists, tables, and code should remain ordinary Markdown syntax inside `.mdx` files. Reusable visual semantics may use the shared components under `src/components/docs/mdx/`, including cards, callouts, steps, flows, badges, and reference surfaces.

The boundary is:

- **content MDX** owns technical meaning and intentional documentation structure;
- **shared MDX components** own reusable documentation presentation patterns;
- **DocsLayout/theme** owns site-wide navigation, hero treatment, code chrome, SVG visuals, version switching, search metadata, responsive behavior, and global styling;
- **product/marketing pages** remain Astro product UI, not documentation content.

Do not put one-off theme settings in frontmatter, and do not build product landing pages inside the docs content collection.
