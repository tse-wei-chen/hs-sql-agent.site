---
title: 資料庫管理
description: 設定與操作 hs-sql-agent 2.0.1 對外提供的資料庫連線。
sidebar:
  group: Administration
  order: 72
---

Database Management 是 Admin control plane 中管理資料庫連線的區域，之後 MCP key 會綁定到這些連線。資料庫 entry 保存 provider 與 connection metadata；MCP client 不會在每次 request 中自行提供任意 connection string。

## 支援的 provider

2.0.1 透過共用 SQL provider runtime 支援：

- PostgreSQL
- MySQL
- SQL Server
- Oracle
- SQLite
- Firebird

設定的 provider 同時決定 query / DML 執行時使用的 SQL dialect 與 capability profile。

## 連線欄位

2.0.1 database request model 包含：

| 欄位 | 用途 |
| --- | --- |
| `Name` | 操作者辨識此連線的名稱 |
| `SqlProvider` | 資料庫 provider / dialect |
| `Host` | DB host 或 provider-specific location |
| `Port` | 以文字保存的 provider port |
| `Username` | DB login user |
| `Password` | DB password；只有 SQLite 不要求密碼 |
| `Database` | 交給 provider connection-string factory 的 database/catalog/file 值 |
| `ExtraSettings` | 選用的 provider-specific connection settings |

`CreatedBy`、`UpdatedBy` 也存在 service request model，但屬於 control-plane metadata，不是 MCP client 可以控制的欄位。

## 建立連線

在 **Runtime → Database Management**：

1. 建立 database entry，使用清楚且穩定的操作名稱。
2. 選擇 provider。
3. 輸入 provider 所需的連線欄位。
4. 使用只具備 hs-sql-agent 實際需要權限的專用 DB account。
5. 儲存後先驗證連線，再綁定 production MCP key。

Backend 會拒絕空白 `Name`。除 SQLite 外，其餘 provider 也會拒絕缺少 password 的建立要求。

## 測試連線

Admin runtime 提供 connection test。測試既有 Database Management entry 時，server 會載入已保存的連線資料、解密 password、重新建立 provider connection string，再執行 provider connection test。

如果這一步失敗，應先視為 connection/configuration 問題，而不是先追 MCP SQL 行為。

常見原因包括：

- hs-sql-agent process 無法連到 host / port；
- database/catalog 名稱錯誤；
- credentials 無效；
- `ExtraSettings` 缺少 TLS/encryption 設定；
- DB firewall 或 network policy；
- provider-specific authentication requirement。

## 瀏覽 metadata

具有 `/runtime/db-management` 的 `view` permission 時，Admin API 可以從已保存連線讀取 provider metadata：

- schemas；
- 某 schema 下的 tables；
- 某 table 的 columns。

這些操作使用保存的 Database Management entry 重建 provider connection。它與 MCP schema discovery 不完全相同；MCP discovery 還會套用已驗證 MCP key 的 table whitelist 與 semantic enrichment。

## 綁定 MCP key

Production MCP key 必須指向一個 Database Management entry，該 connection 就成為 key 的 database boundary。

MCP key 還可以再縮小權限：

- tool allowlist；
- table whitelist；
- CORS origins；
- expiration；
- rate-limit mode / overrides。

請見 [MCP Keys](/zh-hant/docs/administration/mcp-keys)。

## Table whitelist 不存在 database entry 上

Database Management 定義 connection；table authorization 則套用在 MCP key。

因此多個 MCP key 可以共用同一個實體 DB connection，但各自擁有不同 table/tool scope。例如 reporting key 只暴露報表 tables，另一個 operator workflow key 則可以擁有不同 table 集合與 DML 能力。

## Semantic metadata 綁定 Database Management

Table/column 的 display name、description、synonyms、relationships、metrics 都關聯到 Database Management entry。Schema discovery 因此可以在不修改實體 DB schema 的情況下提供更豐富的 MCP metadata。

請見 [Semantic Metadata](/zh-hant/docs/administration/semantic-metadata)。

## Permissions

2.0.1 Admin API 對 Database Management operation 使用明確 permission：

| Operation | Permission |
| --- | --- |
| list/read connections 與 metadata | `/runtime/db-management` → `view` |
| create | `/runtime/db-management` → `create` |
| edit | `/runtime/db-management` → `edit` |
| delete | `/runtime/db-management` → `delete` |
| view semantic metadata | `/runtime/db-management/semantic` → `view` |
| edit semantic metadata | `/runtime/db-management/semantic` → `edit` |

因此 Admin user 已登入不代表自動具備所有 operation；每個 operation 還會做 authorization check。

## 操作建議

Database Management entry 應使用穩定名稱，避免在 active MCP keys 仍綁定時偷偷改變該 connection 所代表的資料庫意義。如果 key 必須移動到另一個 database boundary，建議明確走 key lifecycle 並重新確認 table/tool scope。

Database credentials 與 provider-specific secret 應視為 secret。不要把它們寫進 Custom Tool template 或 client configuration；client 只需要 MCP endpoint 與 MCP key。
