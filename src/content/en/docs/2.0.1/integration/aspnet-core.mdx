---
title: ASP.NET Core Integration
description: Embed the hs-sql-agent server and optional Admin UI in an existing ASP.NET Core application.
sidebar:
  group: Integration
  order: 80
---

`HsSqlAgent.Server` can be hosted inside an existing ASP.NET Core application instead of running only as the repository's standalone service.

## Install the package

```bash
dotnet add package HsSqlAgent.Server
```

## Register and map hs-sql-agent

```csharp
builder.Services.AddHsSqlAgent(options =>
{
    // Configure service options here.
});

app.UseHsSqlAgent();
```

`UseHsSqlAgent()` exposes the hs-sql-agent API/MCP pipeline without requiring the packaged Admin UI.

To serve both the API and embedded Admin UI:

```csharp
app.UseHsSqlAgent().ServeAdminUi();
```

## Pipeline defaults

The current pipeline options use these defaults:

- MCP endpoint: `/mcp`
- Admin API prefix: `/api`
- Admin UI request path: `/`
- Admin UI content root: `wwwroot`

The service options include MCP public endpoint, bootstrap settings, enterprise identity, operability, telemetry, admin database, authentication, rate limiting, distributed synchronization, SQL concurrency, DML approval storage, and cache configuration.

## Hosting guidance

Treat the embedded package as the same security boundary as the standalone server. Configure unique HMAC/JWT secrets, an externally correct MCP public endpoint, persistent data-protection keys when required, and the same provider/cache/distributed settings you would use in a standalone deployment.
