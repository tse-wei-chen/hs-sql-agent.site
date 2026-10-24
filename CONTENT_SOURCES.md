# Content sources of truth

Documentation is the presentation of product behavior; implementation and tests at the pinned immutable product revision take precedence over editorial copy.

## Release identity

- Current documentation: **3.0.0**, release tag `v3.0.0`.
- Product repository: `tse-wei-chen/hs-sql-agent`.
- Source identity: `src/data/productRelease.ts`; at merge time its `sourceRef` must refer to the **published immutable release tag**.
- Immediate documentation parent: **2.0.6**. Historical versioned URLs remain intact; latest routes resolve 3.0.0.
- Routing and inheritance: `src/data/docsVersions.ts`.

## Authority per surface

| Contract | Product source |
| --- | --- |
| Version | `backend/Directory.Build.props` |
| Five MCP tool names; four preselected read tools | `backend/src/Common/Models/McpBuiltInTools.cs` |
| DML structured states, `CommitConfirmed`, errors | `backend/src/Modules/HsSqlAgent.Server/Models/McpToolResults.cs` |
| Single/batch DML and atomic transaction flow | `SqlAgentTool.Dml.cs`, `TypedDmlRuntime.cs`, `DmlCoordinator.cs`, `DmlAtomicTransactionCoordinator.cs` |
| `TryPromoteAsync`, Redis challenge format | Approval abstraction, Redis implementation and integration tests |
| Database admission/drain migration | SQLite and PostgreSQL Admin Store EF migrations plus real-database tests |
| .NET hosting | `HsSqlAgent.Hosting`, `HsSqlAgent.Server` and external packed-consumer tests |
| SQL grammar and policy | `HsSqlAgent.SqlCore`, positive/negative grammar test matrix |
| Migration operations and target-fence limitations | `docs/v3-migration.md`, `docs/v3-target-fence-cutover.md` |

## 2.0.6 → 3.0.0 content changes

- Atomic `IDmlApprovalChallengeStore.TryPromoteAsync` becomes required even for one-statement DML. Redis challenge keys use the `{dml-approval}:` hash slot and versioned payload.
- The encrypted durable-resume envelope is versioned, and `ApprovalPlanBinding` prevents approval-plan substitution.
- SQLite/PostgreSQL refuse migration while any `Pending` or `Executing` request remains. `AdmissionProtocolVersion` prevents legacy new/renewed approvals; direct target write privileges need separate revocation.
- DML distinguishes `outcome_unknown` from `failed`, with non-retryable COMMIT/ROLLBACK uncertainty and nullable `CommitConfirmed`. Auditing failures do not overwrite a confirmed COMMIT result.
- Input resource bounds and provably always-true DML predicates fail closed where selectivity is required.
- Schema freshness and `target-fence-v1` are opt-in; test coverage is not a fleet enrollment/credential cutover guarantee.
- Five built-in MCP tools remain unchanged, four read/query tools remain selected by default and DML remains opt-in.

## Content and localization rules

Only changed version-specific content is duplicated into `src/content/<locale>/docs/3.0.0`; unchanged pages inherit from the preceding version. Keep general feature/reference pages version-neutral. Explicit from/to versions belong in upgrade guides.

Audit English claims against the immutable product source; localize independently to Traditional Chinese, Simplified Chinese, Japanese, Korean, German and French. Preserve actual SQL, API names, .NET symbols, configuration keys, and error codes. Marketing and `public/llms.txt` describe the current version.

## Merge requirements

The documentation PR is merged **only after hs-sql-agent v3.0.0 has been published**. Before merging, repin `productRelease.sourceRef` from the reviewed immutable commit to the published `v3.0.0` tag; confirm that tag matches the audited release and contains the behavior described.

Regenerate the Admin REST OpenAPI snapshot from the final published product source; keep the component and metadata versions synchronized. Run `pnpm run content:check`, `pnpm run content:version-neutral`, `pnpm lint`, and `pnpm run build` to validate all routes, seven locales, and SEO output. Merge the site only when it already contains complete official documentation, never partial staged notices.
