---
title: SQL 支援參考
 description: hs-sql-agent 2.0.1 的 SQL 語法與六資料庫 capability 摘要。
sidebar:
  group: SQL Compiler
  order: 62
---

hs-sql-agent 2.0.1 不會把資料庫供應商完整 SQL 語法直接視為可信任輸入。SQL 必須先能被 F# parser 表示、通過來源語意驗證、證明所需 capability，並由對應 provider runtime 編譯成不可變命令後才會執行。

本頁是 2.0.1 contract 的人類可讀摘要。真正權威仍是 compiler：不支援或需要特定 runtime profile 的語法會 fail closed，不會偷偷以近似語意改寫。

## Query 基礎範圍

`execute_query_sql` 接受單一 `SELECT` statement。公開 tool contract 明確列出下列常見 query shape：

- `JOIN`
- `WHERE`
- `GROUP BY`
- `HAVING`
- `ORDER BY`
- `LIMIT` / `OFFSET`
- `DISTINCT`
- CTE
- subquery
- `UNION`、`INTERSECT`、`EXCEPT`

巢狀 expression、function、window expression、CAST、operator、temporal value、JSON operation 與其他進階語法仍會經過 capability 檢查。不要因為基礎清單包含某類語法，就推論任意 vendor extension 一定可用。

## DML 基礎範圍

`execute_dml_sql` 接受單一受支援 mutation，並一律走 Safe DML approval。

| Statement | 2.0.1 MCP DML 狀態 | Approval model |
| --- | --- | --- |
| `UPDATE` | parse/provider capability 合法時支援 | Preview 受影響資料列、將 approval 綁定精確 primary-key row set、commit transaction 內再次驗證 |
| `DELETE` | parse/provider capability 合法時支援 | Preview 受影響資料列、將 approval 綁定精確 primary-key row set、commit transaction 內再次驗證 |
| `INSERT ... VALUES` | parse/provider capability 合法時支援 | Approval 綁定不可變 literal payload 與 compiled command，commit 時驗證已核准 payload row count |
| `INSERT ... SELECT` | 拒絕 | 2.0.1 尚未定義 source-rowset approval semantics，因此 fail closed |

完整流程請見 [Safe DML](/zh-hant/docs/sql-compiler/safe-dml)。

## 六資料庫 capability model

SQL Core 對 PostgreSQL、MySQL、SQL Server、Oracle、SQLite、Firebird 都有 provider capability contract。Capability 狀態可分為：

- **supported** — target 本身具備所需 native semantics；
- **translated** — Core 有明確、可保持語意的 provider lowering；
- **rejected** — 對該 provider/profile 沒有已證明的 contract。

部分 capability 還依賴 target server version，SQL Server 另可能依賴 compatibility level。若某能力需要 runtime version 且 Core 沒有安全 baseline，在沒有明確 profile 時就保持停用。

## 重要 provider 差異

下表整理 2.0.1 幾個重要差異；它不是 `CapabilityMatrix.fs` 全部 capability ID 的完整 dump。

| Capability | PostgreSQL | MySQL | SQL Server | Oracle | SQLite | Firebird |
| --- | --- | --- | --- | --- | --- | --- |
| `RIGHT JOIN` | translated | translated | translated | translated | target profile 3.39+ | translated |
| `FULL JOIN` | translated | rejected | translated | translated | target profile 3.39+ | translated |
| aggregate `FILTER` | native；PostgreSQL 9.4+ | rejected | rejected | Oracle 26ai+ profile，且 predicate 額外受限 | 明確 3.30+ profile | 明確 4.0+ profile |
| aggregate-local ordering | native | native | SQL Server 14.0+ 且 compatibility level 110+ | Oracle 11.2+ | 明確 3.44+ profile | rejected |
| DML `RETURNING` | translated | rejected | rejected | rejected | 明確 3.35+ profile | 明確 5.0+ profile |
| upsert contract | translated | rejected | rejected | rejected | 明確 3.24+ profile | rejected |
| 保留 UTC offset 的 timestamp | translated | rejected | translated | translated | translated | 明確 4.0+ profile |
| standalone `TIME` | translated | translated | translated | rejected | translated | translated |

SQL Core 有 `RETURNING` 或 upsert capability，不代表可繞過 MCP Safe DML；mutation 仍必須通過 DML runtime 的 supported-statement 與 approval contract。

## JSON capabilities

2.0.1 capability matrix 對 PostgreSQL、MySQL、SQLite 宣告 portable JSON extraction lowering。Canonical JSON-set mutation contract 則宣告於 PostgreSQL、MySQL、SQLite、SQL Server。

PostgreSQL native `->` / `->>` operator 因為 JSON 與 text result semantics 是 provider-specific，所以使用獨立 model；它不會被任意 cross-provider lowering，且需要符合宣告版本條件的 PostgreSQL target。

## Aggregate `FILTER`

Aggregate `FILTER` 明確受 runtime version 限制：

- PostgreSQL 從 9.4 起有 native contract；如果明確宣告更舊 target version，會拒絕。
- SQLite 需要明確 3.30+ server profile。
- Firebird 需要明確 4.0+ server profile。
- Oracle 需要 26ai/26.0+ profile，且 Core 在 Oracle lowering 前還會拒絕包含 subquery、window function 或 outer reference 的 FILTER predicate。
- MySQL 與 SQL Server 在 2.0.1 沒有宣告 portable target contract。

這正是「資料庫本身能執行」仍不足以代表 hs-sql-agent 應該接受該 SQL 的例子。

## JOIN 版本條件

SQLite `RIGHT JOIN` 與 `FULL JOIN` 需要 target capability profile 明確為 SQLite 3.39+。MySQL 的 `FULL JOIN` 在 2.0.1 capability matrix 仍是 rejected。

無法證明 target contract 時，依賴這些能力的 query 會在執行前被拒絕。

## DML RETURNING 與 upsert

2.0.1 target contracts 包含：

- PostgreSQL `RETURNING` 與 upsert lowering；
- SQLite 在明確 3.35+ profile 下的 `RETURNING`；
- Firebird 在明確 5.0+ profile 下的 `RETURNING`；
- PostgreSQL 與 SQLite 3.24+ 的 upsert contract。

其他 provider target 對這些 canonical capability 在 2.0.1 matrix 中維持 rejected。

## Fail-closed diagnostics

Capability failure 不是一般資料庫 execution error。SQL Core 會區分 source validation/source capability、target capability 等 stage，因此在語意無法安全表示或降低時可以在真正執行前拒絕。

操作上，這類錯誤表示應調整 SQL shape 或改用目前 provider/profile 已支援的能力，而不是繞過 compiler。

## 本頁不保證的內容

本頁不宣稱每個 function name、operator spelling、CAST target、JSON path、window frame 或 vendor extension 都已支援。2.0.1 capability matrix 比單一文件表格更細，且包含 runtime-version gates。

MCP client 請搭配 [MCP Tools Reference](/zh-hant/docs/mcp/tools-reference) 查看公開 tool contract，實際 compiler acceptance 才是最終 bounded SQL contract。
