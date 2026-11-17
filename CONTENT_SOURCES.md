# Content sources of truth

## 3.1.0 release source — documentation promotion pending

The product **v3.1.0** release has been published. This site `develop` branch pins its immutable release commit `c077f5703f2c0c8e6446a6e6017f3d375523976b` in `src/data/productRelease.ts`. The site production branch (`main`) remains on its previously published documentation until the maintainer explicitly merges the `develop → main` release PR. Do not assume a product tag automatically authorizes a site deployment.

The historical `3.0.0` documentation is retained as a standalone 31-page-per-locale baseline, preserving the effective content previously inherited through `2.0.6`. **3.1.0 inherits the unchanged 3.0.0 baseline and overrides exactly two SQL Compiler pages per locale:** `sql-compiler/sql-support` and `sql-compiler/safe-dml`. Both are grounded in the published `v3.1.0` Host: up to 16 approved DML statements share one server-owned atomic transaction, while a strictly limited SQLite `INSERT ... SELECT` may be included with native schema attestation. Neither DDL execution nor U2–U8's unpublished development work is promoted by these overrides. All seven locale overrides must remain in sync.

### Release source references

- F# bounded DQL/DML compilation: `backend/src/Modules/HsSqlAgent.SqlCore/RewriteResourceBudget.fs`; DDL schema analysis is internal, not an executable 3.1.0 release feature: `RewriteSchemaAnalyzer.fs`.
- Host Query and DML tool boundaries: `backend/src/Modules/HsSqlAgent.Server/Tools/SqlAgentTool.Query.cs`, `SqlAgentTool.Dml.cs`.
- Capability and permission contracts: `backend/src/Common/Models/McpBuiltInTools.cs`, Server/Hosting README and first-party code/tests. Internal DDL tool/compiler code in the pinned candidate must **not** be advertised as released 3.1.0 MCP functionality.
- The previous `docs/*.md` paths no longer exist in product `develop`. Release source checks intentionally use existing code and contract files, **not** fabricated legacy documentation paths.

### Promotion gate

1. Verify the released `v3.1.0` tag resolves to the exact pinned source commit and that 3.0.0's inherited public documentation remains applicable.
2. Run site `pnpm run content:check`, `content:version-neutral`, `visual:check`, `lint`, and `build` on the release branch.
3. Audit the five publicly selectable MCP built-ins (four read/query defaults, DML opt-in), verify DDL execution is **not** advertised as released in 3.1.0, and confirm all seven locales inherit the unchanged 3.0.0 pages except the two verified and synchronized 3.1.0 SQL Compiler overrides before any `develop → main` promotion.
4. Never mutate historical 3.0.0 content to advertise v3.1.0 features.

## Historical 3.0.0 source audit

The published **hs-sql-agent v3.0.0** historical baseline was pinned to immutable product commit `c40681699e4b3172c843dd567c5aee21f2f2afad`; its original documentation overlay inherited from `2.0.6`; the archived v2 source chain has since been materialized into the standalone 3.0.0 baseline. This paragraph describes historical release provenance, not the current 3.1.0 candidate manifest.

The historical 3.0.0 audit below captures its original release preparation. The 3.1.0 release source and separate website promotion gate are stated above.

## Audit: 2.0.6 → 3.0.0

| Changed surface | Authoritative product source |
| --- | --- |
| Independent encryption rings, fingerprint secret, password re-entry, bootstrap keys, rotation and ExtraSettings | `docs/secret-protection-upgrade.md`, runtime options, crypto implementation and tests |
| Atomic approval promotion, Redis/versioned resume envelopes, drain gate and one-way migrations | `docs/v3-migration.md`, approval contracts and SQLite/PostgreSQL migration tests |
| Unknown commit/rollback results, target readiness and witness proof | `docs/dml-target-execution-fence.md`, `docs/v3-target-fence-cutover.md`, coordinator/provider tests |
| Schema snapshots, type proof, iterative traversal and resource limits | `docs/sqlcore-quality-gates.md`, SqlCore lexer/binder/resource budget and tests |
| Modular registration consistency and required protection options | Server and Hosting READMEs plus integration tests |

Originally, only pages changed by 3.0.0 existed in its overlay; unchanged pages were inherited from 2.0.6. Those inherited pages now live directly in the complete 3.0.0 baseline without semantic edits. The 3.1.0 documentation set inherits 3.0.0 and now has **two release-verified SQL Compiler overlays per locale** (14 files). Marketing and `llms.txt` describe the latest documented product. Version-to-version prose belongs in upgrade pages.

## Claim policy

Code and tests at the pinned release source take priority over prose. Do not infer unlimited SQL depth, automatic schema freshness, fleet-wide fencing, safe retries after unknown outcomes, or automatic legacy decryption. Envelope version compatibility does not imply ciphertext compatibility.

The existing embedded Admin API reference is a historical 2.0.6 preview snapshot, not a newly generated 3.0.0 contract. Do not relabel its schema provenance. Regenerate from the released product before claiming current exhaustive API coverage.

## Localization

New technical sections, upgrade guides, metadata and reference notices are localized in Traditional Chinese, Simplified Chinese, Japanese, Korean, French and German from the verified English semantics. Existing translated bodies are preserved. API names, configuration keys, protocol names and code remain unchanged. New documentation links use the matching locale.

## Validation

Run `pnpm run content:check` against the pinned immutable source, `pnpm run content:version-neutral`, `pnpm run visual:check`, and `pnpm run build`. Format changed files. The source check resolves every path in `productRelease.sources` and validates release identity against `backend/Directory.Build.props`.
