# Content sources of truth

The website documents **hs-sql-agent 3.0.0**, pinned to immutable product commit `c40681699e4b3172c843dd567c5aee21f2f2afad` in `src/data/productRelease.ts`. The immediate historical release and documentation parent is `2.0.6`. Historical overlays remain unchanged.

This release PR is prepared for manual merge after the product release. The release label remains `v3.0.0`, while `sourceRef` pins the audited full commit so CI can verify the real sources before the tag exists. That commit declares 3.0.0 in `backend/Directory.Build.props`. Compare the final release tag against this commit before merging; repin to the tag once available. Public documentation retains release-ready wording.

## Audit: 2.0.6 → 3.0.0

| Changed surface | Authoritative product source |
| --- | --- |
| Independent encryption rings, fingerprint secret, password re-entry, bootstrap keys, rotation and ExtraSettings | `docs/secret-protection-upgrade.md`, runtime options, crypto implementation and tests |
| Atomic approval promotion, Redis/versioned resume envelopes, drain gate and one-way migrations | `docs/v3-migration.md`, approval contracts and SQLite/PostgreSQL migration tests |
| Unknown commit/rollback results, target readiness and witness proof | `docs/dml-target-execution-fence.md`, `docs/v3-target-fence-cutover.md`, coordinator/provider tests |
| Schema snapshots, type proof, iterative traversal and resource limits | `docs/sqlcore-quality-gates.md`, SqlCore lexer/binder/resource budget and tests |
| Modular registration consistency and required protection options | Server and Hosting READMEs plus integration tests |

Only changed pages are copied into the new overlay; remaining slugs inherit from 2.0.6. Marketing and `llms.txt` describe the latest product. Version-to-version prose belongs in upgrade pages.

## Claim policy

Code and tests at the pinned release source take priority over prose. Do not infer unlimited SQL depth, automatic schema freshness, fleet-wide fencing, safe retries after unknown outcomes, or automatic legacy decryption. Envelope version compatibility does not imply ciphertext compatibility.

The existing embedded Admin API reference is a historical 2.0.6 preview snapshot, not a newly generated 3.0.0 contract. Do not relabel its schema provenance. Regenerate from the released product before claiming current exhaustive API coverage.

## Localization

New technical sections, upgrade guides, metadata and reference notices are localized in Traditional Chinese, Simplified Chinese, Japanese, Korean, French and German from the verified English semantics. Existing translated bodies are preserved. API names, configuration keys, protocol names and code remain unchanged. New documentation links use the matching locale.

## Validation

Run `pnpm run content:check` against the pinned immutable source, `pnpm run content:version-neutral`, `pnpm run visual:check`, and `pnpm run build`. Format changed files. The source check resolves every path in `productRelease.sources` and validates release identity against `backend/Directory.Build.props`.
