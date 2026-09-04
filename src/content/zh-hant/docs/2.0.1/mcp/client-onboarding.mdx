---
title: MCP Client Onboarding
description: 連接 Streamable HTTP MCP client、設定 public endpoint，並在啟用 DML 前確認 Elicitation 能力。
sidebar:
  group: MCP
  order: 30
---

hs-sql-agent 在 `/mcp` 提供 Streamable HTTP MCP endpoint。

Request 使用以下 header 驗證：

```http
X-MCP-Server-Key: <MCP key>
```

## Public endpoint

UI 顯示與產生 client configuration 時使用的 URL 來自 server 設定：

```json
{
  "Mcp": {
    "PublicEndpoint": "https://sql-agent.example.com/mcp"
  }
}
```

等價環境變數是 `Mcp__PublicEndpoint`；repository 提供的 Compose 會將 `MCP_PUBLIC_ENDPOINT` 映射到它。

不要用 Admin UI origin 自動推導 MCP endpoint。UI 與 MCP 可能經過不同 host、port 或 reverse-proxy path。非 Development 環境要求這個值必須是 absolute HTTP/HTTPS URL。

## 產生 client configuration

在 MCP key **Issue、Rotate 或 Duplicate** 後，Admin Panel 會立即提供 Claude Desktop、Cursor 與 generic Streamable HTTP client 的直接 HTTP 設定。

Plaintext key 是刻意短暫顯示的；關閉 lifecycle dialog 後，server 不會再顯示同一個 secret。

## DML 相容性必須另外驗證

Client 能成功連線 `/mcp`，不代表它支援 DML approval。

`execute_dml_sql` 與 published DML Custom Tools 需要 form Elicitation。允許 production DML 前，請拿「實際部署的 client 版本」測兩條路徑：

1. Decline elicitation，確認 mutation 不會 commit。
2. Accept elicitation，確認核准的 mutation 可以完成。

若 client 沒有宣告並實作 form Elicitation，hs-sql-agent 會拒絕 DML。

對 query-only client，應直接限制 MCP key 的 allowed-tool list，而不是期待 client 自己永遠不呼叫 mutation tool。
