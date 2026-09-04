---
title: 資料庫 Dialect
description: 單一 MCP surface 背後的六種資料庫 provider，以及 bounded dialect support 的真正含義。
sidebar:
  group: SQL Compiler
  order: 60
---

hs-sql-agent 目前支援六種 relational database provider：PostgreSQL、MySQL、SQL Server、Oracle、SQLite 與 Firebird。

## 一個 MCP surface，不代表只有一種 SQL dialect

MCP client 面對的是共用 server contract，但 SQL semantics 仍然是 provider-specific。Compiler 必須替設定的 database provider 保留「已支援 statement」的原始語意。

這會影響 operator、type、cast、function、identifier、pagination、null semantics 與 DML behavior 等能力。

## Bounded support

Provider 出現在支援清單中，不代表該 database 的所有 vendor syntax 都會被接受。

如果 source construct 尚未被表示，或 target equivalent capability 無法被證明，compiler 會 fail closed。Capability coverage 可以持續擴充，但不需要因此放棄這條規則。

Production 使用時，應把 compiler acceptance 視為真正 contract，而不是假設 vendor CLI 能跑的任意 SQL 都會直接被 hs-sql-agent 接受。
