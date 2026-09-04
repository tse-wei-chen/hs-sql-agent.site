---
title: Admin Panel 概覽
description: hs-sql-agent Admin Panel 目前提供的主要 control-plane 區域。
sidebar:
  group: 管理
  order: 70
---

Admin Panel 是 hs-sql-agent 的 operational control surface。Operator 在這裡設定 access 與 runtime policy；MCP client 則透過受治理的 `/mcp` endpoint 工作。

## Runtime 區域

目前 Admin UI 有獨立 runtime area：

- **Database management** — 管理 agent 可用的 database connections。
- **MCP keys** — 簽發與管理 client credential 及 runtime scope。
- **Custom tools** — 定義與 publish 受治理 SQL tools。
- **Audit** — 檢視 execution / security activity。
- **Operability** — 檢視 operational state 與 health/delivery 相關設定。
- **Security** — 管理 runtime security policy。

Account 與 authorization 頁面則與上述 runtime area 分開。

## MCP key lifecycle

Key 在 Issue、Rotate 或 Duplicate 時，UI 可以產生 direct Streamable HTTP client configuration。Plaintext secret 只會在該 lifecycle dialog 顯示，不會保留成日後可再次顯示的值。

因此 operator 應在關閉 dialog 前完成複製。

## Library consumer 可選擇不提供 Admin UI

把 hs-sql-agent embed 到 ASP.NET Core 時，`UseHsSqlAgent()` 可以只提供 API/MCP pipeline；再呼叫 `.ServeAdminUi()` 才會一併提供 packaged Admin UI。

請參考 [ASP.NET Core 整合](/zh-hant/docs/integration/aspnet-core)。
