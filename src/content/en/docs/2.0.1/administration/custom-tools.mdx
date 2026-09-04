---
title: Custom Tools
description: Build and publish purpose-specific Query or DML MCP tools without creating a policy bypass around hs-sql-agent.
sidebar:
  group: Administration
  order: 75
---

Custom Tools let operators expose a named, purpose-specific MCP operation backed by SQL instead of asking every client to generate the full statement from scratch.

A published tool is resolved for the database bound to the authenticated MCP key. The server loads the published definition, renders its configured SQL template from the declared arguments, then routes execution through either the typed query runtime or typed DML runtime according to the tool type.

## Tool types

A current Custom Tool has one of two execution types:

- **Query** — executes through the query compiler/runtime path and returns serialized rows.
- **DML** — parses the rendered mutation through the typed DML runtime and enters the same DML approval flow used by built-in mutation execution.

Unknown tool types are rejected.

## Publishing is part of availability

The runtime only resolves a **published** tool for the database bound to the current MCP key. A tool that exists in the Admin Panel but is not published is not available through its MCP name.

This allows editing and review to remain separate from the active MCP surface.

## Custom does not mean ungoverned

Before execution, the proxy validates tool access and database binding. Query tools use the current security policy, table whitelist, and SQL concurrency limiter. DML tools use the typed DML parser plus `TypedDmlApprovalFlow`, including table-whitelist resolution and human approval.

Execution also writes audit events. In other words, a Custom Tool is a reusable interface **inside** the same safety boundary, not an escape hatch around it.

## MCP key exposure

Custom tool names can be included in an MCP key's allowed-tool list alongside the built-in tool names. Prefer exposing only the named tools a client needs rather than leaving the tool surface unrestricted.
