---
title: 快速開始
description: 使用 Docker Compose 啟動 hs-sql-agent、建立第一位管理員，並簽發 MCP key。
sidebar:
  group: 開始使用
  order: 20
---

## 前置準備

Repository 已提供 Compose 設定與 `.env.example`。預設單機路徑先複製環境範例：

```bash
cp .env.example .env
```

啟動前請把 `HMAC_KEY` 與 `JWT_KEY` 換成彼此獨立、至少 32 bytes 的唯一 secret。範例值只能用來提示設定格式，不應直接用於 production。

## 啟動服務

```bash
docker compose up -d
```

預設 application listener 為 `8080`。本機環境可開啟 `http://localhost:8080` 進入 Admin Panel。

## 建立 MCP key

完成第一位 administrator 初始化後：

1. 前往 **Runtime → MCP Keys**。
2. 依需要設定 database 與 tool scope，簽發一把 key。
3. 在 issue dialog 立即複製 plaintext key；同一個 secret 關閉後不會再次顯示。
4. 使用 UI 產生的 client config，或以 `X-MCP-Server-Key` header 呼叫 Streamable HTTP endpoint。

預設 MCP endpoint 是 `/mcp`。若 client 位於外部網路，請把 `MCP_PUBLIC_ENDPOINT` 設為真正可從 client 端連到的 absolute HTTP/HTTPS URL，且包含 `/mcp`。

## 下一步

- 啟用 DML 前先看 [MCP Client Onboarding](/zh-hant/docs/mcp/client-onboarding)。
- 想理解安全邊界請看 [SQL 執行模型](/zh-hant/docs/sql-compiler/execution-model)。
- 上 production 前請看 [Configuration](/zh-hant/docs/operations/configuration)。
