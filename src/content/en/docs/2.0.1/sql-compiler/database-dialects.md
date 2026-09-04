---
title: Database Dialects
description: The six database providers behind the shared MCP surface and what bounded dialect support means.
sidebar:
  group: SQL Compiler
  order: 60
---

hs-sql-agent currently targets six relational database providers:

| Provider | Role |
| --- | --- |
| PostgreSQL | Source and target SQL dialect |
| MySQL | Source and target SQL dialect |
| SQL Server | Source and target SQL dialect |
| Oracle | Source and target SQL dialect |
| SQLite | Source and target SQL dialect |
| Firebird | Source and target SQL dialect |

## One MCP surface does not mean one SQL dialect

MCP clients interact with a shared server contract, but SQL semantics remain provider-specific. The compiler is responsible for preserving the supported meaning of the statement for the configured database provider.

That distinction matters for features such as operators, types, casts, functions, identifiers, pagination, null semantics, and DML behavior.

## Bounded support

A database appearing in the provider list does not imply that every syntax feature offered by that database is accepted.

The compiler deliberately fails closed when a source construct is not represented or when an equivalent target capability cannot be proven. Capability coverage can grow without weakening that rule.

For production use, treat compiler acceptance as the contract rather than assuming arbitrary SQL accepted by a vendor CLI will also be accepted by hs-sql-agent.
