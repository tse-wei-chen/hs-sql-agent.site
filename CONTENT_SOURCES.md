# Content sources of truth

The website is a presentation layer for `hs-sql-agent`; it is not the authority for product behavior. Versioned product claims must be traceable to the immutable product source pinned by `src/data/productRelease.ts`.

## Release identity

The current documentation target is **hs-sql-agent 2.0.4**. Before the matching release tag exists, the manifest may pin an immutable 40-character product commit through `sourceRef`; after release, the immutable release tag remains the preferred source reference.

- Site release manifest: `src/data/productRelease.ts`
- Product repository: `tse-wei-chen/hs-sql-agent`
- Intended product tag: `v2.0.4`
- Current prerelease product source: commit `00acbb15c9868c1b87415bf5e4c64fff687f4d4f`
- Product version authority: `backend/Directory.Build.props` at the pinned source reference
- Documentation routing: `src/data/docsVersions.ts` derives the current version from the manifest
- Immediate documentation parent: `2.0.3`

Product `main` is **not** a source of truth for immutable current-version documentation. It may contain behavior newer than the documentation target. A current-version page may only describe behavior supported by the manifest's pinned source reference.

CI runs `pnpm run content:check`. The check verifies every file listed in `productRelease.sources` exists at the pinned source reference, confirms that the pinned `Directory.Build.props` declares the expected `VersionPrefix`, verifies the immediate historical release, and rejects stale product-version numbers in current overlay docs and latest-only marketing copy. A prerelease `sourceRef` must be either the intended release tag or an immutable 40-character commit SHA; moving branch names are deliberately rejected.

This catches version and source drift; it does not replace semantic review of product changes.

## Claim hierarchy

Use the narrowest authoritative product source for each claim. Do not treat older website copy or another translation as evidence.

| Claim | Primary source at the pinned product source |
| --- | --- |
| Release version | `backend/Directory.Build.props` |
| Product overview and supported providers | product `README.md` plus provider projects |
| Standard embedded composition | `backend/src/Modules/HsSqlAgent.Hosting/README.md` plus implementation/tests |
| Modular ASP.NET Core integration | `backend/src/Modules/HsSqlAgent.Server/README.md` plus implementation/tests |
| DML approval contracts | `HsSqlAgent.Approvals.Abstractions`, approval services, and tests |
| Official Webhook approval adapter | `HsSqlAgent.Approvals.Webhook` implementation/tests |
| Built-in MCP tool names | `backend/src/Common/Models/McpBuiltInTools.cs` plus MCP runtime/tests |
| MCP key lifecycle | MCP access-key service implementation plus tests |
| HTTP/API surface | concrete `HsSqlAgent.Server/Controllers/*.cs` files for selected capabilities |
| SQL grammar, lowering, DML safety, dialect behavior | `HsSqlAgent.SqlCore` implementation and tests |

The exact source pointers used by the site are declared in `productRelease.sources` so CI can detect a source path that disappears or moves.

When prose and code disagree, code and tests at the pinned source win. When a claim cannot be proven from the pinned source, remove it or mark the limitation explicitly instead of inheriting wording from an older release.

## Release-diff audit

A release number change is not a documentation update by itself. Before publishing a new docs version, compare the previous immutable product release with the new pinned product source and review every changed public surface.

The 2.0.3 → 2.0.4 audit for this branch currently identifies these public changes that require documentation overlays:

1. the documented five-tool built-in MCP surface is now represented by one canonical server catalog and checked against runtime reflection;
2. the previously undocumented `update_semantic_layer` MCP exposure is removed, while Semantic Layer writes remain available through the permission-protected Admin surface;
3. the Admin API tool catalog now exposes built-in/custom classification, Query/DML type, display name, and risk metadata;
4. the frontend Docker build is aligned with CI/package-manager pins and uses a frozen lockfile;
5. the inert Admin sidebar search control is removed and product branding is tightened.

Pages outside those changed surfaces inherit from 2.0.3 through `getDocsForVersion()` and are not copied into the 2.0.4 overlay.

## Current content versus history

Only Docs are versioned. Marketing pages, the homepage, SEO-facing copy, and `llms.txt` always describe the latest product model and do not receive versioned routes.

Files under `src/content/<locale>/docs/<current-version>/` are the current release overlay. `src/data/docsVersions.ts` resolves the parent lineage first and lets child pages override the same slug, so unchanged pages remain inherited instead of duplicated.

`reference/upgrade-guide.mdx` is the deliberate exception to stale-version checks: migration instructions may mention an earlier release because they require an explicit from/to boundary.

## Localization provenance

English semantics are audited against the pinned product sources first. Other locales are localized from those verified semantics while preserving exact API names, protocol names, configuration keys, SQL tokens, routes, package names, and other identifiers.

A translation is not a source of truth for another translation. Updating a product claim requires rechecking the product source and then propagating the same verified meaning to every localized page that carries the claim.

## Release update procedure

For a release under active development:

1. Update `src/data/productRelease.ts` to the target product version and intended tag.
2. If the release tag does not exist yet, pin `sourceRef` to an immutable product commit SHA that contains every documented change; never pin a moving branch name.
3. Keep the previous release as the immediate historical tag and documentation parent.
4. Confirm every source path in the manifest exists at the pinned source reference.
5. Compare the previous release and pinned product commit, then inventory changed public surfaces.
6. Add only changed pages to the new docs overlay; leave unchanged pages inherited.
7. Refresh latest-only homepage, marketing, SEO, and `llms.txt` to the current product model.
8. Update English semantics from product code/tests, then propagate the verified meaning to every locale.
9. Keep upgrade-guide history explicit; do not mass-replace historical from/to versions.
10. Run `pnpm run content:check`, lint, and the production build before merge.
11. Once the release tag exists, switch `sourceRef` to the tag (or remove it so the checker defaults to `tag`) and rerun the same checks before publishing the documentation release.
