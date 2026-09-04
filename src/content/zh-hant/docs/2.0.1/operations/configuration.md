---
title: Configuration
description: 從 local development 進入 production 前，先理解 hs-sql-agent 主要 runtime configuration 群組。
sidebar:
  group: 維運
  order: 90
---

Repository 的 `.env.example` 是目前 runtime configuration 最直接的 inventory，並依責任分組。

## Core hosting 與 control plane

主要群組包含：

- **Application hosting** — `ASPNETCORE_URLS`、allowed hosts。
- **Admin database** — 儲存 accounts、roles、keys、audit records 與 control-plane state 的 provider / connection string。
- **MCP** — issued key 的 HMAC protection 與 externally reachable `MCP_PUBLIC_ENDPOINT`。
- **Bootstrap** — 可選的初始 database connection / MCP key provisioning。
- **Authentication** — JWT signing、token lifetime、sign-in lockout。

`HMAC_KEY` 與 `JWT_KEY` 應使用彼此獨立、至少 32 bytes 的唯一值；checked-in example 不是 production secret。

## Identity 與 account recovery

可選設定包含 SMTP/password reset、OIDC authority/client credential、claims/scopes、role mappings、auto-provisioning、TOTP issuer 與 ASP.NET Core data-protection key path。

Production OIDC 通常應保持 HTTPS metadata validation 開啟。

## Operability

Runtime 也提供 health probe、slow-query threshold、signed alert/SIEM webhook、delivery retry/concurrency、audit retention/archive、Prometheus 與 OTLP telemetry 設定。

Prometheus metrics 使用獨立 listener，不與 main application API port 共用。

## Shared-state provider

Cache、rate limiter、security-policy synchronization、outbound-delivery synchronization 與 SQL concurrency 都可依 topology 選擇 Memory 或 Redis-backed provider。

多 instance 若必須對同一個 runtime decision 達成一致，就不能假設 process-local memory 是共享的。
