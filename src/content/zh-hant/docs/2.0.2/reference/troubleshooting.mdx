---
title: Troubleshooting
description: 從 hs-sql-agent 的 runtime invariant 判斷常見 configuration 與 compatibility failure。
sidebar:
  group: 參考
  order: 140
---

Troubleshooting 先從「是哪一個 boundary 拒絕 request」開始。hs-sql-agent 在多個位置刻意 fail closed，因此 rejection 常代表 configuration/capability mismatch，不一定是暫時性 SQL error。

## Local 可連線，但 generated config URL 錯誤

檢查 `MCP_PUBLIC_ENDPOINT`。它必須是外部 client 實際可到達、包含 `/mcp` 的 absolute HTTP/HTTPS URL。Reverse proxy 若讓 Admin UI 與 MCP 走不同位置，不要用 UI URL 猜 MCP endpoint。

## Query 可用，但 DML 被拒絕

MCP connection 成功不代表 Elicitation 可用。`execute_dml_sql` 與 published DML Custom Tools 需要 form Elicitation。請用實際 client version 驗證 Decline 與 Accept 兩條流程。

## Restart 後 authentication / MFA state 壞掉

檢查 `DATA_PROTECTION_KEY_PATH` 是否持久化。若每次 container 都換掉 ASP.NET Core data-protection keys，既有 protected login/MFA state 可能無法解密。

## Multi-instance 行為不一致

確認需要協調的 provider 是否還停在 `Memory`。Distributed deployment 應替需要跨 node 一致的 cache、rate limiting、security-policy sync、outbound-delivery sync 與 SQL concurrency 使用 shared provider。

## Prometheus 不在 application port

Prometheus 啟用後使用獨立 listener；example port 是 `9000`，不要預期 metrics 自動出現在 main API listener。

## Database CLI 能跑的 SQL 卻被拒絕

這可能是正常行為。Provider support 受 compiler contract 約束；尚未表示或無法證明語意的 syntax/capability 會被拒絕，而不是任意 pass-through vendor SQL。
