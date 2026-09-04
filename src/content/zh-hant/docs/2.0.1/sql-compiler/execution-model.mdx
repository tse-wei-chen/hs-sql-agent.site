---
title: SQL 執行模型
description: hs-sql-agent 如何把不可信 SQL 轉成通過驗證的 provider-specific statement，再進入執行階段。
sidebar:
  group: SQL Compiler
  order: 40
---

hs-sql-agent 不會把 AI 產生的 SQL 視為可信指令。執行邊界建立在 parsing、validation、capability check、access policy 與 provider-specific compilation 上。

## Query 路徑

大致流程如下：

1. 驗證 MCP key，套用 database、table、tool 與 execution scope。
2. 把支援的 SQL parse 成結構化 definition / AST。
3. 驗證 statement 與 source semantics。
4. 確認 target/provider 有能力保留需要的語意。
5. 為設定的 database provider compile / render 最終 SQL。
6. 在 runtime limits 內執行。

SQL compiler 內有明確的 source validation 與 target capability 概念。無法表示的語法或無法證明的 capability 會直接被拒絕，而不是用看似相近的 construct 偷偷替代。

## 為什麼要 fail closed？

跨資料庫 SQL 裡有大量「看起來相同、語意卻不同」的細節，例如 null behavior、type rules、operator semantics、pagination、identifier、function 與 DML 行為。

對 AI-facing execution surface 來說，best-effort rewrite 可能讓 statement 保持 syntactically valid，卻改變真正含義。因此 hs-sql-agent 寧可明確拒絕，也不做隱性 semantic downgrade。

## Provider-specific output

MCP surface 是共用的，但最後輸出的 SQL 仍依 provider 區分。目前支援 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 與 Firebird。

「支援 provider」不代表該資料庫所有語法都可直接通過；compiler capability 會在語意能被表示與驗證後逐步擴充。
