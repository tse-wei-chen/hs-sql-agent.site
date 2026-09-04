---
title: Deployment
description: 單一 hs-sql-agent instance 上 production 時的 public MCP routing、持久化與 telemetry 基本原則。
sidebar:
  group: 維運
  order: 100
---

預設 repository configuration 適合簡單 single-instance deployment：control plane 可使用 SQLite，process-local provider 可使用 Memory。

正式對外前，請把外部 URL、secret 與 persistence 明確設定。

## Public MCP URL

把 `MCP_PUBLIC_ENDPOINT` 設成 MCP client 真正能連到的 URL，且包含 `/mcp`：

```env
MCP_PUBLIC_ENDPOINT=https://sql-agent.example.com/mcp
```

不要假設它一定與 Admin UI origin 相同；reverse proxy 可能把兩者放在不同 host、port 或 path。

## Secrets

把 example HMAC / JWT key 換成互相獨立、至少 32 bytes 的 unique secret。Database credential、SMTP credential、OIDC client secret、webhook signing secret 與 Redis connection string 不應進 source control。

## Persist control-plane state

預設 SQLite admin DB 位於 `/app/data` 下。若使用 embedded local control plane，container replacement 後仍需要保留這些 data。

若 OIDC/TOTP 或其他 protected state 使用 ASP.NET Core data protection，也要 persist `DATA_PROTECTION_KEY_PATH`；遺失 key material 可能讓既有 MFA/login state 無法讀取。

## Observability

Prometheus 可在獨立 listener 啟用；example 使用 `9000`，與 main API port 分離。也可使用 `OTLP_ENDPOINT` 設定 collector，並以 `OTEL_SERVICE_NAME` 指定 service name。

多 instance deployment 請改看 [Distributed Deployment](/zh-hant/docs/operations/distributed-deployment)。
