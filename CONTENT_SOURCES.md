# Content sources of truth

The website is a presentation layer for `hs-sql-agent`; it is not the authority for product behavior. Versioned product claims must be traceable to the immutable product source pinned by `src/data/productRelease.ts`.

## Release identity

The current documentation target is **hs-sql-agent 2.0.5**. Before the matching release tag exists, the manifest pins an immutable 40-character product commit through `sourceRef`; after release, the immutable release tag is preferred.

- Site release manifest: `src/data/productRelease.ts`
- Product repository: `tse-wei-chen/hs-sql-agent`
- Intended product tag: `v2.0.5`
- Current prerelease product source: commit `26f7da26ee1c718c440a834c45497a56e1442083`
- Product version authority: `backend/Directory.Build.props` at the pinned source reference
- Documentation routing: `src/data/docsVersions.ts`
- Immediate documentation parent: `2.0.4`

The pinned product commit passed the full product workflow before being selected as documentation truth. Product `main` and moving feature branches are not valid immutable current-version sources.

CI runs `pnpm run content:check`. It verifies every file declared in `productRelease.sources`, confirms the pinned `Directory.Build.props` declares the expected `VersionPrefix`, verifies historical release tags, rejects moving prerelease refs, and rejects stale version numbers in current overlays and latest-only copy.

## Claim hierarchy

Use the narrowest authoritative product source for each claim.

| Claim | Primary source at the pinned product source |
| --- | --- |
| Release version | `backend/Directory.Build.props` |
| Product overview and supported providers | product `README.md` plus provider projects |
| Standard embedded composition | `HsSqlAgent.Hosting` README plus implementation/tests |
| Modular ASP.NET Core integration | `HsSqlAgent.Server` README plus implementation/tests |
| Structured MCP result contracts | `HsSqlAgent.Server/Models/McpToolResults.cs` plus built-in tool tests |
| Built-in MCP tool names | `McpBuiltInTools.cs` plus MCP runtime/tests |
| SQL Explain / Policy Simulator | `SqlExplainController.cs`, `SqlExplainContextController.cs`, compiler/runtime code, and Server tests |
| Configuration Doctor | `RuntimeDoctorController.cs`, `RuntimeDoctorAnalyzer.cs`, and Server tests |
| Home launch readiness | `frontend/app/lib/systemReadiness.ts` plus frontend tests |
| DML approval behavior | approval abstractions, DML flow, runtime, and tests |
| SQL grammar and safety boundaries | `HsSqlAgent.SqlCore` implementation and tests |

When prose and code disagree, code and tests at the pinned source win. If a claim cannot be proven from the pinned source, remove it or mark the limitation explicitly.

## Release-diff audit

The 2.0.4 → 2.0.5 audit for this branch identifies these public documentation changes:

1. all five built-in MCP tools publish typed structured results through MCP `structuredContent` and inferred output schemas;
2. `execute_query_sql` exposes provider, row count, duration, rows, and machine-readable errors without requiring text parsing;
3. `get_schemas`, `get_tables`, and `get_columns` expose structured discovery payloads and authorized Semantic Layer metadata;
4. `execute_dml_sql` exposes `committed`, `pending`, `rejected`, and `failed`, plus approval identifiers, affected rows, returned rows, human-readable detail, and machine-readable error information for actual failures;
5. the Security page adds compile-only SQL Explain / Policy Simulator backed by the real compiler pipeline and verified target capability profile;
6. SQL Explain can simulate an MCP Key's tool/table scope and returns rendered SQL, parameters, compiler decision/diagnostic data, capability evidence, and policy evidence without executing SQL;
7. Runtime → Operability adds Configuration Doctor at `GET /api/runtime/operability/doctor`, returning `Healthy`, `Warning`, or `Error` checks without returning secret values;
8. Doctor diagnoses security-secret posture, MCP public endpoint, storage, Data Protection, coordination topology, Redis completeness, DML approval, OIDC, telemetry/outbound webhook configuration, and onboarding state;
9. coordination is classified as `SingleNode`, `Distributed`, or `Mixed`;
10. Home System Readiness becomes one launch path: configuration blockers → database → public MCP endpoint → MCP key → first governed agent request;
11. Doctor warnings remain reviewable while Doctor errors are launch blockers;
12. default MCP-key posture is unchanged: the four read/query tools remain selected by default and `execute_dml_sql` remains opt-in;
13. the release does not relax SQL compiler validation, table/tool authorization, DML approval, revalidation, rollback, or server-owned transaction ownership, and does not require an Admin Store schema migration.

Only pages covering changed public surfaces are duplicated into the 2.0.5 overlay. Unchanged pages inherit from 2.0.4.

## Current content versus history

Only Docs are versioned. Marketing pages, the homepage, SEO-facing copy, and `llms.txt` always describe the latest product model.

Files under `src/content/<locale>/docs/<current-version>/` are the current release overlay. `src/data/docsVersions.ts` resolves the parent lineage first and lets child pages override the same slug.

`reference/upgrade-guide.mdx` is the deliberate exception to stale-version checks because migration instructions require explicit from/to version numbers.

## Localization provenance

English semantics are audited against pinned product sources first. Other locales are localized from those verified semantics while preserving exact API names, protocol names, configuration keys, SQL tokens, routes, package names, field names, and other identifiers.

A translation is not a source of truth for another translation.

## Release update procedure

1. Set the target version and tag in `src/data/productRelease.ts`.
2. Before a release tag exists, pin `sourceRef` to an immutable product commit containing every documented change and a green full product workflow.
3. Keep the previous release as the immediate historical tag and documentation parent.
4. Compare the previous release with the pinned product source and inventory changed public surfaces.
5. Add only changed pages to the new docs overlay.
6. Refresh latest-only copy such as `llms.txt`.
7. Audit English semantics against code/tests, then propagate the verified meaning to every locale.
8. Run `pnpm run content:check`, lint, and the production build.
9. When the release tag exists, switch the pin to that immutable tag and rerun the checks.
