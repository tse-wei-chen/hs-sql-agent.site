---
title: SQL Execution Model
description: How hs-sql-agent turns untrusted SQL into validated, provider-specific statements before execution.
sidebar:
  group: SQL Compiler
  order: 40
---

hs-sql-agent does not treat generated SQL as a trusted command. The execution boundary is designed around parse, validation, capability checks, access policy, and provider-specific compilation.

## Query path

At a high level, query execution follows this flow:

1. Authenticate the MCP key and apply its database, table, tool, and execution scope.
2. Parse the supported SQL into a structured definition / AST.
3. Validate the statement and its supported source semantics.
4. Check the target/provider capabilities needed to preserve those semantics.
5. Compile and render SQL for the configured database provider.
6. Execute within the configured runtime limits.

The SQL compiler implementation contains explicit source-validation and target-capability stages. Unsupported syntax or a capability that cannot be proven is rejected instead of being silently replaced by a superficially similar construct.

## Why fail closed?

Cross-database SQL is full of constructs that look equivalent but differ in null behavior, type rules, operator semantics, pagination, identifiers, functions, or DML behavior.

For an AI-facing execution surface, "best effort" rewriting is dangerous because a statement can remain syntactically valid while changing meaning. hs-sql-agent therefore prefers a visible rejection over an implicit semantic downgrade.

## Provider-specific output

The public MCP surface is shared, but the final SQL is provider-specific. Current database providers are:

- PostgreSQL
- MySQL
- SQL Server
- Oracle
- SQLite
- Firebird

Support is intentionally bounded. A provider being supported does not mean every syntax feature from that database is accepted; individual compiler capabilities are expanded only when their semantics are represented and validated.
