# Content sources of truth

The website is a presentation layer for `hs-sql-agent`; it is not the authority for product behavior. Versioned product claims must be traceable to the immutable product release tag pinned by `src/data/productRelease.ts`.

## Release identity

The current published documentation is pinned to **hs-sql-agent 2.0.2** at product tag `v2.0.2`.

- Site release manifest: `src/data/productRelease.ts`
- Product repository: `tse-wei-chen/hs-sql-agent`
- Product version authority: `backend/Directory.Build.props` at the pinned tag
- Documentation routing: `src/data/docsVersions.ts` derives the current version from the manifest

`main` in the product repository is **not** a source of truth for immutable 2.0.2 documentation. It may contain post-release or unreleased behavior. A current-version page may only describe behavior supported by the pinned release tag.

CI runs `pnpm run content:check`. The check verifies every file listed in `productRelease.sources` exists at the pinned tag, confirms that the pinned `Directory.Build.props` declares the expected `VersionPrefix`, and rejects stale product-version numbers in current docs and marketing copy. This catches version drift; it does not replace semantic review of product changes.

## Claim hierarchy

Use the narrowest authoritative product source for each claim. Do not treat older website copy or another translation as evidence.

| Claim | Primary source at the pinned product tag |
| --- | --- |
| Release version | `backend/Directory.Build.props` |
| Product overview and supported providers | product `README.md` plus provider projects |
| ASP.NET Core embedding, capabilities, auth ownership, public mounts | `backend/src/Modules/HsSqlAgent.Server/README.md` plus implementation/tests |
| Canonical permission identifiers | `PermissionCanonicalPaths.cs` plus authorization/seed usage |
| Built-in MCP tool names and key lifecycle | `McpAccessKeyService.cs` plus request models/tests |
| MCP key rate-limit JSON enum | `McpKeyRateLimitMode.cs` plus Admin request/response models |
| HTTP/API surface | the concrete `HsSqlAgent.Server/Controllers/*.cs` files for the selected capability, with server composition rules |
| SQL grammar, lowering, DML safety, dialect behavior | `HsSqlAgent.SqlCore` implementation and tests |

The exact file pointers used by the site are declared in `productRelease.sources` so CI can detect a source path that disappears or moves.

When prose and code disagree, code and tests at the pinned tag win. When a claim cannot be proven from the pinned release, remove it or mark the limitation explicitly instead of inheriting wording from an older release.

## Release-diff audit

A release number change is not a documentation update by itself. Before publishing a new docs version, compare the previous immutable product tag with the new tag and review every changed public surface.

For 2.0.2, that audit includes the composable server host, built-in versus host authorization, canonical permission identities, controller exposure, MCP-key rate-limit serialization, and frontend permission mapping. Pages that touch those surfaces need semantic review; pages outside the changed product surface may only need version-label cleanup if their underlying contract is unchanged.

## Current content versus history

Files under `src/content/<locale>/docs/<current-version>/` describe the current product unless the page is explicitly historical. They must not call the current product an older version.

`reference/upgrade-guide.mdx` is the deliberate exception: migration instructions may mention an earlier release because they require an explicit from/to boundary. Historical release numbers elsewhere require an intentional, reviewable reason.

## Localization provenance

English semantics are audited against the pinned product sources first. Other locales are localized from those verified semantics while preserving exact API names, protocol names, configuration keys, SQL tokens, routes, and other identifiers.

A translation is not a source of truth for another translation. Updating a product claim requires rechecking the product source and then propagating the same verified meaning to every localized page that carries the claim.

## Release update procedure

For a new release:

1. Update `src/data/productRelease.ts` to the new product version and immutable tag.
2. Update the previous-tag pointer used for release-diff review.
3. Confirm every source path in the manifest still exists at the new tag.
4. Compare the previous and new product tags and inventory changed public surfaces.
5. Create or update the corresponding current docs tree.
6. Update English semantics from product code/tests, then propagate the verified meaning to every locale.
7. Keep upgrade-guide history explicit; do not mass-replace historical from/to versions.
8. Run `pnpm run content:check`, lint, and the production build before merge.
