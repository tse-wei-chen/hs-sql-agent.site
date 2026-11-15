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

Migration is source-driven. Content may be rewritten, split, merged, or presented through reusable MDX components, but factual behavior must be traceable to the matching immutable hs-sql-agent release tag.

The retained documentation baseline is **3.0.0**. For public contract claims, use the matching immutable product release tag; never import unverified behavior from product `main`. Earlier versions may still be mentioned as historical upgrade context.

If a legacy Wiki page cannot be retrieved reliably, do not invent its details. Migrate the parts that can be verified from the product repository first, then fill remaining sections when authoritative source material is available. See `CONTENT_SOURCES.md` for the claim/source hierarchy.

## Documentation version rule

This site's maintained documentation history starts at **3.0.0**. The old v2 chain was consolidated into a standalone baseline, with 31 pages in each of the seven locales:

```text
src/content/<locale>/docs/3.0.0/
```

Subsequent versions are deltas, not full copies. `src/data/docsVersions.ts` tracks the parent release, removed slugs, and redirects. `3.1.0` currently inherits unchanged `3.0.0` pages.

Public `/docs/*` URLs resolve to the current version; only v3 onward uses versioned documentation URLs. Retired v2 URLs 301-redirect to their current slug via the Cloudflare static-assets `public/_redirects` file.

Historical versions in upgrade guides must stay accurate (for example, 2.0.6 → 3.0.0); deleting an obsolete docs tree does not erase migration facts or product Git history.

## MDX and theme boundary

Documentation is **MDX-first**, but that does not mean every paragraph should become JSX.

Normal explanatory prose, headings, lists, tables, and code should remain ordinary Markdown syntax inside `.mdx` files. Reusable visual semantics may use the shared components under `src/components/docs/mdx/`, including cards, callouts, steps, flows, badges, and reference surfaces.

The boundary is:

- **content MDX** owns technical meaning and intentional documentation structure;
- **shared MDX components** own reusable documentation presentation patterns;
- **DocsLayout/theme** owns site-wide navigation, hero treatment, code chrome, SVG visuals, version switching, search metadata, responsive behavior, and global styling;
- **product/marketing pages** remain Astro product UI, not documentation content.

Do not put one-off theme settings in frontmatter, and do not build product landing pages inside the docs content collection.
