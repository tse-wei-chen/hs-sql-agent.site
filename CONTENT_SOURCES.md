# Content sources of truth

The website is a presentation layer for `hs-sql-agent`; it is not the authority for product behavior. Versioned product claims must be traceable to the immutable product release tag pinned by `src/data/productRelease.ts`.

## Release identity

The current published documentation is pinned to **hs-sql-agent 2.0.3** at product tag `v2.0.3`.

- Site release manifest: `src/data/productRelease.ts`
- Product repository: `tse-wei-chen/hs-sql-agent`
- Product version authority: `backend/Directory.Build.props` at the pinned tag
- Documentation routing: `src/data/docsVersions.ts` derives the current version from the manifest
- Immediate documentation parent: `2.0.2`

Product `main` is **not** a source of truth for immutable 2.0.3 documentation. It may contain post-release or unreleased behavior. A current-version page may only describe behavior supported by the pinned release tag.

CI runs `pnpm run content:check`. The check verifies every file listed in `productRelease.sources` exists at the pinned tag, confirms that the pinned `Directory.Build.props` declares the expected `VersionPrefix`, verifies the immediate historical release, and rejects stale product-version numbers in current overlay docs and latest-only marketing copy. This catches version drift; it does not replace semantic review of product changes.

## Claim hierarchy

Use the narrowest authoritative product source for each claim. Do not treat older website copy or another translation as evidence.

| Claim | Primary source at the pinned product tag |
| --- | --- |
| Release version | `backend/Directory.Build.props` |
| Product overview and supported providers | product `README.md` plus provider projects |
| Standard embedded composition | `backend/src/Modules/HsSqlAgent.Hosting/README.md` plus implementation/tests |
| Modular ASP.NET Core integration | `backend/src/Modules/HsSqlAgent.Server/README.md` plus implementation/tests |
| DML approval contracts | `HsSqlAgent.Approvals.Abstractions`, approval services, and tests |
| Official Webhook approval adapter | `HsSqlAgent.Approvals.Webhook` implementation/tests |
| Built-in MCP tool names and key lifecycle | MCP tool/service implementation plus tests |
| HTTP/API surface | concrete `HsSqlAgent.Server/Controllers/*.cs` files for selected capabilities |
| SQL grammar, lowering, DML safety, dialect behavior | `HsSqlAgent.SqlCore` implementation and tests |

The exact source pointers used by the site are declared in `productRelease.sources` so CI can detect a source path that disappears or moves.

When prose and code disagree, code and tests at the pinned tag win. When a claim cannot be proven from the pinned release, remove it or mark the limitation explicitly instead of inheriting wording from an older release.

## Release-diff audit

A release number change is not a documentation update by itself. Before publishing a new docs version, compare the previous immutable product tag with the new tag and review every changed public surface.

The 2.0.2 → 2.0.3 audit identified four public product changes that require documentation overlays:

1. atomic multi-statement DML through the existing `execute_dml_sql` tool;
2. transport-neutral and durable DML approval providers;
3. the official generic Webhook approval adapter;
4. `HsSqlAgent.Hosting` as the batteries-included composition shared with the Docker product.

Pages outside those changed surfaces inherit from 2.0.2 through `getDocsForVersion()` and are not copied into the 2.0.3 overlay.

## Current content versus history

Only Docs are versioned. Marketing pages, the homepage, SEO-facing copy, and `llms.txt` always describe the latest product model and do not receive versioned routes.

Files under `src/content/<locale>/docs/<current-version>/` are the current release overlay. `src/data/docsVersions.ts` resolves the parent lineage first and lets child pages override the same slug, so unchanged pages remain inherited instead of duplicated.

`reference/upgrade-guide.mdx` is the deliberate exception to stale-version checks: migration instructions may mention an earlier release because they require an explicit from/to boundary.

## Localization provenance

English semantics are audited against the pinned product sources first. Other locales are localized from those verified semantics while preserving exact API names, protocol names, configuration keys, SQL tokens, routes, package names, and other identifiers.

A translation is not a source of truth for another translation. Updating a product claim requires rechecking the product source and then propagating the same verified meaning to every localized page that carries the claim.

## Release update procedure

For a new release:

1. Update `src/data/productRelease.ts` to the new product version and immutable tag.
2. Keep the previous release as the immediate historical tag and documentation parent.
3. Confirm every source path in the manifest still exists at the new tag.
4. Compare the previous and new product tags and inventory changed public surfaces.
5. Add only changed pages to the new docs overlay; leave unchanged pages inherited.
6. Refresh latest-only homepage, marketing, SEO, and `llms.txt` to the current product model.
7. Update English semantics from product code/tests, then propagate the verified meaning to every locale.
8. Keep upgrade-guide history explicit; do not mass-replace historical from/to versions.
9. Run `pnpm run content:check`, lint, and the production build before merge.
