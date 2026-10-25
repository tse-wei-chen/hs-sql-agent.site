# Content sources of truth

The website documents **hs-sql-agent 3.0.0**, pinned to the immutable release tag `v3.0.0` in `src/data/productRelease.ts`. The immediate historical release and documentation parent is `2.0.6`. Historical overlays remain unchanged.

This release PR is prepared for manual merge after the product release. The release-tag check is intentionally expected to fail until `v3.0.0` exists; do not merge or deploy before then. Source audit used product commit `c40681699e4b3172c843dd567c5aee21f2f2afad`, whose `backend/Directory.Build.props` declares 3.0.0. Reconcile any later release changes before merging.

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

Existing translated page bodies are preserved. New technical supplement sections and upgrade guides currently use verified English semantics in en/zh-hans/ja/ko/fr/de; the Traditional Chinese upgrade guide is localized. Remaining supplemental translations are explicitly unfinished and must not be described as fully localized.

## Validation

Run `pnpm run content:check` after the release tag exists, `pnpm run content:version-neutral`, `pnpm run visual:check`, and `pnpm run build`. Format changed files. The source check resolves every path in `productRelease.sources` and validates release identity against `backend/Directory.Build.props`.
