---
title: MCP Tools Reference
description: hs-sql-agent 目前的 built-in MCP tools、風險邊界，以及 MCP key tool allowlist 如何控制暴露範圍。
sidebar:
  group: MCP
  order: 35
---

hs-sql-agent 刻意維持小型 built-in MCP tool surface。目前 built-in 名稱是：

| Tool | 用途 | 典型風險 |
| --- | --- | --- |
| `get_schemas` | 探索綁定 database connection 可用的 schemas。 | Metadata read |
| `get_tables` | 探索某 schema 的 tables。 | Metadata read |
| `get_columns` | 探索某 table 的 columns。 | Metadata read |
| `execute_query_sql` | Parse、validate、compile 並執行一個已支援的 `SELECT` statement。 | Data read |
| `execute_dml_sql` | 經過 Safe DML approval flow 執行已支援 mutation。 | Data write |

MCP key 可以限制 allowed-tool set。空白/不限制與「只明確暴露 Agent 真正需要的 read tools」是不同安全模型。

## 先做 schema discovery

Client 不知道 database structure 時，先使用 `get_schemas`、`get_tables`、`get_columns`，再產生 SQL。Metadata tool 仍在 authenticated MCP key 與 database binding 的 context 內執行。

## `execute_query_sql`

`execute_query_sql` 接受一個 `SELECT` statement。SQL 直接進入 F# compiler pipeline：parse、bind、table authorization / query-policy validation、immutable command compilation，最後才 execution。

目前 tool description 明確列出 JOIN、WHERE、GROUP BY、HAVING、ORDER BY、LIMIT/OFFSET、DISTINCT、CTE、subquery、UNION/INTERSECT/EXCEPT 等常見 query shape。這不代表任意 vendor SQL 都會被接受；真正 contract 仍是 compiler acceptance。

## `execute_dml_sql`

DML 刻意屬於不同風險等級。Mutation path 在適用情況下先做 read-only impact preview，再建立 one-time approval challenge、透過 MCP form Elicitation 核准，並在 commit-time 重新驗證。完整 protocol 請看 [Safe DML](/zh-hant/docs/sql-compiler/safe-dml)，不要把它理解成 generic SQL passthrough。

## Custom tools 與 allowlist

Published custom tool 也能透過 MCP 暴露，並以 tool name 放進 MCP key allowed-tool set。它們不會繞過 authenticated database binding、table whitelist、runtime security policy、SQL concurrency limit、audit path 或 DML approval flow。
