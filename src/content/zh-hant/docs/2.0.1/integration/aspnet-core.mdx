---
title: ASP.NET Core 整合
description: 把 hs-sql-agent server 與可選的 Admin UI embed 到既有 ASP.NET Core application。
sidebar:
  group: 整合
  order: 80
---

`HsSqlAgent.Server` 可以直接 host 在既有 ASP.NET Core application，不一定要只使用 repository 的 standalone service。

## 安裝 package

```bash
dotnet add package HsSqlAgent.Server
```

## 註冊與 mapping

```csharp
builder.Services.AddHsSqlAgent(options =>
{
    // Configure service options here.
});

app.UseHsSqlAgent();
```

`UseHsSqlAgent()` 會提供 hs-sql-agent API/MCP pipeline，不要求 packaged Admin UI 一定存在。

若同時提供 API 與 embedded Admin UI：

```csharp
app.UseHsSqlAgent().ServeAdminUi();
```

## Pipeline 預設值

目前 pipeline options 預設：

- MCP endpoint：`/mcp`
- Admin API prefix：`/api`
- Admin UI request path：`/`
- Admin UI content root：`wwwroot`

Service options 涵蓋 MCP public endpoint、bootstrap、enterprise identity、operability、telemetry、admin database、authentication、rate limiting、distributed synchronization、SQL concurrency、DML approval storage 與 cache。

Embed package 仍然是同一套 security boundary；production 必須使用正式 secret、正確 public endpoint 與需要持久化的 deployment state。
