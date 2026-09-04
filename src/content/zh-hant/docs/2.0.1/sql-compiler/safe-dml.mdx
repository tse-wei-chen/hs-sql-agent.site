---
title: Safe DML
description: 先 preview、把 approval 綁定到 validated plan、重新驗證 row set，最後才 commit。
sidebar:
  group: SQL Compiler
  order: 50
---

DML 比 query 使用更嚴格的流程，因為真正 commit 時，人工核准的內容仍必須描述同一個 mutation。

## UPDATE 與 DELETE

對 row-set mutation，hs-sql-agent 會：

1. Parse、validate 並 compile mutation。
2. 開啟 preview transaction，只讀取目前 matching rows，不執行 mutation。
3. 建立一次性 approval challenge，綁定 validated compiled plan、policy version、affected-row count 與 row-set fingerprint。
4. 送出 MCP `elicitation/create`，要求真人明確核准。
5. Accept 後驗證並 consume one-time challenge。
6. 開啟 commit transaction，重新查詢 matching rows，比較目前 fingerprint 與核准時版本。
7. 只有 plan、policy、challenge、row count 與 row set 仍全部一致，才執行原本那個 compiled mutation。

任何綁定內容改變，operation 都會取消而不是 commit。

## INSERT VALUES

INSERT VALUES 沒有既存 matching row set，因此 preview 使用 immutable insert payload，並把 approval 綁定到該 exact compiled plan。

## Elicitation 是必要條件

`execute_dml_sql` 與 published DML Custom Tools 都需要 MCP client 支援 form Elicitation。無法完成 approval interaction 的 client 不能使用這些 mutation path。

這不是單純 UI confirmation：approval challenge 是 server-side mutation protocol 的一部分，執行前還會再次被驗證。
