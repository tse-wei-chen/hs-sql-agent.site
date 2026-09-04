---
title: Deployment
description: Production-oriented guidance for a single hs-sql-agent instance, public MCP routing, persistence, and telemetry.
sidebar:
  group: Operations
  order: 100
---

The default repository configuration is suitable for a simple single-instance deployment: the control plane can use SQLite and process-local providers can use memory.

Before exposing the service outside development, make the externally visible and persistent parts explicit.

## Public MCP URL

Set `MCP_PUBLIC_ENDPOINT` to the URL that MCP clients can actually reach, including `/mcp`.

```env
MCP_PUBLIC_ENDPOINT=https://sql-agent.example.com/mcp
```

Do not assume it is identical to the Admin UI origin. Reverse proxies may expose the UI and MCP endpoint through different hosts, ports, or paths.

## Secrets

Replace the example HMAC and JWT keys with independent, unique secrets of at least 32 bytes.

Keep database credentials, SMTP credentials, OIDC client secrets, webhook signing secrets, and Redis connection strings outside source control.

## Persist control-plane state

The default SQLite admin database path is under `/app/data`. If you use the embedded local control plane, persist that data across container replacements.

If OIDC/TOTP or other protected state uses ASP.NET Core data protection, persist `DATA_PROTECTION_KEY_PATH` as well. Losing those keys can make protected MFA/login state unreadable.

## Observability

Prometheus metrics can be enabled on a dedicated listener. The example uses port `9000`, separate from the main API port.

An OTLP collector endpoint can also be configured with `OTLP_ENDPOINT`, with `OTEL_SERVICE_NAME` controlling the service name.

## When to move to distributed settings

If you run more than one application instance, process-local memory is no longer shared. Move the coordination-sensitive subsystems to their distributed providers and use a shared admin database. See [Distributed Deployment](/en/docs/operations/distributed-deployment).
