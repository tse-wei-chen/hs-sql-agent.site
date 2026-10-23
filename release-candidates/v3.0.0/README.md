# hs-sql-agent v3.0.0 documentation release candidate

**Staging only — not published product documentation.** Product PR: https://github.com/tse-wei-chen/hs-sql-agent/pull/299

This folder deliberately lives **outside** `src/content`, so Astro's glob loader cannot publish the unpublished major release as a current or versioned documentation route. It must not be added to `docsVersions.ts`, `productRelease.ts`, marketing copy, the sitemap, or `llms.txt` while PR #299 is Draft.

## Source provenance and status

- Verified product source: `tse-wei-chen/hs-sql-agent@4265650907c475389562194ea7f3248ccfe65984` ([14/14 CI](https://github.com/tse-wei-chen/hs-sql-agent/actions/runs/39818590211)).
- Documentation correction since that green source: `56f03458b3573e8ffeb66f8db5af4a383138c77a` clarifies Oracle Witness-key probe isolation only, with no implementation change.
- Product references: `docs/v3-migration.md`, `docs/v3-compatibility-contract.md`, `docs/v3-target-fence-cutover.md`, `docs/dml-target-execution-fence.md`, `backend/src/Modules/SqlAgent.Service/Core/Execution/DmlTargetFenceReadinessProbe.cs`, and Admin Store migration implementations.
- Planned localizations: `en`, `zh-hant`, `zh-hans`, `ja`, `ko`, `de`, `fr`. Identifiers, error codes and package names remain literal. No translation is used as an authority for another.

## Publication gate — do not skip

1. Merge the reviewed product PR; run all required CI on the final head and produce an immutable `v3.0.0` product tag and release artifacts.
2. Complete a supervised v2→v3 drain, approval reconciliation and old-worker stop/credential withdrawal exercise; document unsupported multi-node Target Fence guarantees. This cannot be demonstrated by CI alone.
3. Re-audit every staged guide against the **released immutable tag**, including any changes after this source pin. Correct translations against code, not another translation.
4. Move localized MDX pages under `src/content/<locale>/docs/3.0.0/reference/upgrade-guide.mdx` only during release promotion.
5. Update `src/data/productRelease.ts` to `version: "3.0.0"`, `tag: "v3.0.0"`, `sourceRef: "v3.0.0"`, include `v2.0.6` in historical tags; update `src/data/docsVersions.ts` so current v3 inherits v2.0.6. Audit **all** affected versioned and latest-only pages, not just the upgrade guide.
6. Update `CONTENT_SOURCES.md`, any generated API/OpenAPI versioned artifacts, navigation/SEO and all seven localizations. Run `pnpm run content:check`, lint, site build, and source/tag checks before merging the documentation release.
7. Ensure no draft-only "production-ready" assertions remain. Experimental `target-fence-v1` does not prove all workers have been enrolled and does not allow automatic reconciliation of `Executing` approvals.

**Explicit non-goals:** changing the published website current version, modifying canonical MCP tool count, turning DML on by default, or treating a missing Witness as proof of a rolled-back COMMIT.
