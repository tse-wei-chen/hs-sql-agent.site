---
title: 架構與 Contribution Flow
description: 從 contributor 角度理解 backend、Admin frontend、文件網站與變更流程。
sidebar:
  group: 開發
  order: 130
---

hs-sql-agent 目前可分成 backend、Admin frontend，以及獨立的 static product/documentation site。

## Repository responsibility

高層次來看：

- `backend/`：server、SQL compiler/runtime modules、persistence 與 tests。
- `frontend/`：embedded Nuxt Admin Panel。
- `hs-sql-agent.site`：獨立 Astro product/documentation site。

SQL compiler 含有 F# modules 與明確 rewrite/validation stage、capability-proof 概念；server hosting 由 `HsSqlAgent.Server` 暴露 `AddHsSqlAgent` / `UseHsSqlAgent` integration point。

## Contribution flow

Main repository contribution guide 要求 contributor：

1. Fork repository。
2. 實作 focused change，補上需要的 test 或 docs。
3. Local run 並確認 tests。
4. 開 Pull Request，說明 motivation、change 與 testing evidence。

讓一個 PR 聚焦在單一 task，通常更容易 review / merge。

## Documentation change

Docs 應描述 current code behavior，而不是尚未實作的預期功能。

SQL capability、DML safety、MCP compatibility、hosting config、Admin behavior 或 deployment requirement 改變時，應同步更新對應 docs。

Site 使用 path-based locale：

```text
src/content/en/docs/<section>/<slug>.md
src/content/zh-hant/docs/<section>/<slug>.md
```

兩種語言刻意共用同 section/slug，再由 locale-prefixed route 隔離。
