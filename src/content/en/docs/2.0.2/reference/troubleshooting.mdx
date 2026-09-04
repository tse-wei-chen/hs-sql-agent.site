---
title: Troubleshooting
description: Common configuration and compatibility failures that can be diagnosed from hs-sql-agent's runtime invariants.
sidebar:
  group: Reference
  order: 140
---

Start troubleshooting from the boundary that rejected the request. hs-sql-agent intentionally fails closed in several places, so a rejection often indicates a configuration or capability mismatch rather than a transient SQL error.

## Client connects locally but generated config is wrong

Check `MCP_PUBLIC_ENDPOINT`.

It must be the externally reachable absolute HTTP or HTTPS MCP URL, including `/mcp`. Do not infer it from the Admin UI URL when a reverse proxy exposes them differently.

## Query works but DML is refused

A working MCP connection does not prove Elicitation support.

`execute_dml_sql` and published DML Custom Tools require form Elicitation. Test the exact client version with both Decline and Accept flows. If the client does not support that capability, use query-only tools instead.

## Authentication or MFA state breaks after restart

Check whether `DATA_PROTECTION_KEY_PATH` is persisted. Protected login/MFA state may become unreadable if the ASP.NET Core data-protection key material is replaced with every container.

## Multi-instance behavior is inconsistent

Check whether coordination-sensitive providers are still using `Memory`.

For a distributed deployment, configure shared providers for the subsystems that must agree across nodes, such as cache, rate limiting, security-policy synchronization, outbound-delivery synchronization, and SQL concurrency.

## Prometheus is not on the application port

Prometheus uses its own listener when enabled. The example configuration uses port `9000`; do not expect metrics to appear automatically on the main application API listener.

## SQL is rejected even though the database itself accepts it

This can be expected. Database-provider support is bounded by the compiler contract. Syntax or semantics that are not represented and proven are rejected rather than passed through as arbitrary vendor SQL.
