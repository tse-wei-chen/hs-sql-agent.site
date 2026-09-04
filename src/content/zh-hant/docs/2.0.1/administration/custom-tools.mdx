---
title: Custom Tools
description: 建立並 publish purpose-specific Query / DML MCP tool，同時保留 hs-sql-agent 的完整 policy boundary。
sidebar:
  group: Administration
  order: 75
---

Custom Tools 讓 operator 暴露具名、purpose-specific MCP operation，由已設定 SQL 支援，而不是每次都要求 client 從頭產生完整 statement。

Published tool 會依 authenticated MCP key 綁定的 database 解析。Server 讀取 published definition、依 declared arguments render SQL template，再根據 tool type 進入 typed query runtime 或 typed DML runtime。

## Tool type

目前 Custom Tool 有兩種 execution type：

- **Query** — 經 query compiler/runtime path 執行並回傳 serialized rows。
- **DML** — rendered mutation 先進 typed DML runtime，再進入與 built-in mutation 相同的 DML approval flow。

未知 tool type 直接拒絕。

## Publish 才代表可用

Runtime 只會為目前 MCP key 綁定的 database 找到 **published** tool。Admin Panel 裡存在、但尚未 publish 的定義，不會透過該 MCP tool name 提供給 client。

因此 editing/review 與 active MCP surface 可以分開。

## Custom 不代表 ungoverned

Execution 前 proxy 先驗證 tool access 與 database binding。Query tool 使用目前 security policy、table whitelist 與 SQL concurrency limiter；DML tool 使用 typed DML parser 與 `TypedDmlApprovalFlow`，包含 table-whitelist resolution 與 human approval。

Execution 同時寫入 audit event。換句話說，Custom Tool 是同一安全 boundary **裡面**的 reusable interface，不是繞過 boundary 的 escape hatch。

## MCP key exposure

Custom tool name 可以跟 built-in tool name 一起放進 MCP key allowed-tool list。建議只暴露 client 真正需要的具名 tool，不要把整個 tool surface 保持 unrestricted。
