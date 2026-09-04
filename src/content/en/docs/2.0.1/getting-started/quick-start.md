---
title: Quick Start
description: Run hs-sql-agent with Docker Compose, create the first admin, and issue an MCP key.
sidebar:
  group: Getting Started
  order: 20
---

## Prerequisites

The repository ships with a Compose setup and an `.env.example`. For the default single-instance path, copy the example first:

```bash
cp .env.example .env
```

Before starting the service, replace `HMAC_KEY` and `JWT_KEY` with unique secrets of at least 32 bytes. The example values are placeholders and must not be used in production.

## Start the service

```bash
docker compose up -d
```

The default application listener is port `8080`. Open the Admin Panel at `http://localhost:8080` for a local setup.

## Create an MCP key

After the initial administrator account is ready:

1. Open **Runtime → MCP Keys**.
2. Issue a key for the database and tool scope you want the client to use.
3. Copy the plaintext key from the issue dialog. It is only shown in that lifecycle dialog and is not stored for later display.
4. Use the generated client configuration, or send the key as `X-MCP-Server-Key` to the Streamable HTTP endpoint.

The default MCP endpoint is `/mcp`. For clients outside the local machine, configure `MCP_PUBLIC_ENDPOINT` to the externally reachable absolute HTTP or HTTPS URL, including `/mcp`.

## Next steps

- Read [MCP client onboarding](/en/docs/mcp/client-onboarding) before enabling DML.
- Read [SQL execution model](/en/docs/sql-compiler/execution-model) to understand the compiler boundary.
- Read [Configuration](/en/docs/operations/configuration) before production deployment.
