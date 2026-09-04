---
title: MCP Tools Reference
description: Built-in hs-sql-agent MCP tools, their risk boundaries, and how MCP key tool allowlists control exposure.
sidebar:
  group: MCP
  order: 35
---

hs-sql-agent exposes a small built-in MCP tool surface. The current built-in names are:

| Tool | Purpose | Typical risk |
| --- | --- | --- |
| `get_schemas` | Discover schemas available through the bound database connection. | Read metadata |
| `get_tables` | Discover tables for a schema. | Read metadata |
| `get_columns` | Discover columns for a table. | Read metadata |
| `execute_query_sql` | Parse, validate, compile, and execute one supported `SELECT` statement. | Read data |
| `execute_dml_sql` | Execute a supported mutation through the Safe DML approval flow. | Write data |

MCP keys can restrict the allowed-tool set. An empty or unrestricted configuration is materially different from explicitly exposing only the read tools an agent needs.

## Schema discovery first

When the client does not know the database structure, use `get_schemas`, `get_tables`, and `get_columns` before generating SQL. Metadata tools still operate in the context of the authenticated MCP key and its database binding.

## `execute_query_sql`

`execute_query_sql` accepts one `SELECT` statement. SQL enters the F# compiler pipeline directly: parse, bind, table authorization and query-policy validation, immutable command compilation, then execution.

The current tool description explicitly calls out support for common query shapes including JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT/OFFSET, DISTINCT, CTEs, subqueries, and UNION/INTERSECT/EXCEPT. That list is not a promise that arbitrary vendor SQL is accepted; the compiler remains the final contract.

## `execute_dml_sql`

DML is intentionally a different risk class. The mutation path uses read-only impact preview where applicable, a one-time approval challenge, MCP form Elicitation, and commit-time revalidation. See [Safe DML](/en/docs/sql-compiler/safe-dml) for the protocol rather than treating the tool as a generic SQL passthrough.

## Custom tools and allowlists

Published custom tools can also be exposed through MCP and referenced by name in an MCP key's allowed-tool set. They do not bypass the authenticated database binding, table whitelist, runtime security policy, SQL concurrency limits, audit path, or DML approval flow.
