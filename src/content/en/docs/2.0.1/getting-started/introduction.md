---
title: Introduction
description: What hs-sql-agent is, where it sits between MCP clients and databases, and how the security boundary works.
sidebar:
  group: Getting Started
  order: 10
---

hs-sql-agent is an HTTP MCP server for governed SQL access. It connects MCP clients to PostgreSQL, MySQL, SQL Server, Oracle, SQLite, and Firebird while keeping authentication, access policy, SQL validation, and mutation approval on the server side.

## The core idea

Do not make the LLM the database security boundary.

Generated SQL is treated as untrusted input. Before execution, hs-sql-agent applies the MCP key scope, parses supported SQL into structured definitions, validates the statement, checks the capabilities needed to preserve its semantics, and compiles provider-specific SQL.

Unsupported syntax is rejected instead of being silently changed into something that merely looks equivalent.

## What is governed outside the model?

The runtime can enforce controls such as:

- database binding per MCP key
- table allowlists and execution policies
- allowed MCP tools
- rate and concurrency limits
- human approval for DML
- audit and operational delivery

The Admin Panel is the control surface for databases, MCP keys, custom tools, audit records, operability, and security settings.

## Where to go next

- [Quick Start](/en/docs/getting-started/quick-start) — run the default Compose setup.
- [MCP Client Onboarding](/en/docs/mcp/client-onboarding) — connect a remote client correctly.
- [SQL Execution Model](/en/docs/sql-compiler/execution-model) — understand the compiler boundary.
- [Safe DML](/en/docs/sql-compiler/safe-dml) — understand human-approved mutations.
