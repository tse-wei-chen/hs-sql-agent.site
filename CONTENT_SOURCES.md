# Content sources of truth

## 3.1.0 release candidate — staging only

This `develop` release candidate documents **hs-sql-agent 3.1.0** and pins its source to immutable product commit `051ad8d9b19199dfaa3cc339c9e4cc342128aa4c` via `src/data/productRelease.ts`. The product release tag `v3.1.0` is **not published yet**. Do not merge this documentation candidate to site `main` or deploy until the maintainer publishes the corresponding product version and verifies the final tag's source against the pinned candidate. Repin the manifest to the final immutable tag/commit before site promotion if the product HEAD changes.

The historical `3.0.0` documentation remains immutable and inherits from `2.0.6`; `3.1.0` inherits from **3.0.0**. The two seven-locale SQL Compiler pages previously amended under `3.0.0` have been moved to the new `3.1.0` overlay and the published 3.0.0 versions restored.

### Current candidate proof sources

- F# DQL/DML/DDL compiler and schema impact: `backend/src/Modules/HsSqlAgent.SqlCore/RewriteDdlCompiler.fs`, `RewriteDdlPreview.fs`, `RewriteSchemaAnalyzer.fs`, `RewriteResourceBudget.fs`.
- Host Query, DML and opt-in DDL tool boundaries: `backend/src/Modules/HsSqlAgent.Server/Tools/SqlAgentTool.Query.cs`, `SqlAgentTool.Dml.cs`, `SqlAgentTool.Ddl.cs`.
- Capability and permission contracts: `backend/src/Common/Models/McpBuiltInTools.cs`, Server/Hosting README and first-party code/tests.
- The previous `docs/*.md` paths no longer exist in product `develop`. Release source checks intentionally use existing code and contract files, **not** fabricated legacy documentation paths.

### Promotion gate

1. Verify the final released `v3.1.0` tag exists and the product implementation matches the documented provider/version/operation subset.
2. Run site `pnpm run content:check`, `content:version-neutral`, `visual:check`, `lint`, and `build` on the final release candidate.
3. Audit six MCP built-ins with four read-only defaults, DML/DDL opt-in, approval/outcome semantics, and all seven locale overlays before any `develop → main` promotion.
4. Never mutate historical 3.0.0 content to advertise v3.1.0 features.

## Historical 3.0.0 source audit

The published **hs-sql-agent v3.0.0** historical baseline was pinned to immutable product commit `c40681699e4b3172c843dd567c5aee21f2f2afad`; its immediate documentation parent is `2.0.6`. This paragraph describes historical release provenance, not the current 3.1.0 candidate manifest.

The historical 3.0.0 audit below captures its original release preparation. The 3.1.0 staging source and release gate are stated above.

## Audit: 2.0.6 → 3.0.0

| Changed surface | Authoritative product source |
| --- | --- |
| Independent encryption rings, fingerprint secret, password re-entry, bootstrap keys, rotation and ExtraSettings | `docs/secret-protection-upgrade.md`, runtime options, crypto implementation and tests |
| Atomic approval promotion, Redis/versioned resume envelopes, drain gate and one-way migrations | `docs/v3-migration.md`, approval contracts and SQLite/PostgreSQL migration tests |
| Unknown commit/rollback results, target readiness and witness proof | `docs/dml-target-execution-fence.md`, `docs/v3-target-fence-cutover.md`, coordinator/provider tests |
| Schema snapshots, type proof, iterative traversal and resource limits | `docs/sqlcore-quality-gates.md`, SqlCore lexer/binder/resource budget and tests |
| Modular registration consistency and required protection options | Server and Hosting READMEs plus integration tests |

Only pages changed by 3.0.0 were copied to its historical overlay; other historical slugs inherit from 2.0.6. The 3.1.0 overlay now inherits from 3.0.0. Marketing and `llms.txt` describe the latest product. Version-to-version prose belongs in upgrade pages.

## Claim policy

Code and tests at the pinned release source take priority over prose. Do not infer unlimited SQL depth, automatic schema freshness, fleet-wide fencing, safe retries after unknown outcomes, or automatic legacy decryption. Envelope version compatibility does not imply ciphertext compatibility.

The existing embedded Admin API reference is a historical 2.0.6 preview snapshot, not a newly generated 3.0.0 contract. Do not relabel its schema provenance. Regenerate from the released product before claiming current exhaustive API coverage.

## Localization

New technical sections, upgrade guides, metadata and reference notices are localized in Traditional Chinese, Simplified Chinese, Japanese, Korean, French and German from the verified English semantics. Existing translated bodies are preserved. API names, configuration keys, protocol names and code remain unchanged. New documentation links use the matching locale.

## Validation

Run `pnpm run content:check` against the pinned immutable source, `pnpm run content:version-neutral`, `pnpm run visual:check`, and `pnpm run build`. Format changed files. The source check resolves every path in `productRelease.sources` and validates release identity against `backend/Directory.Build.props`.
