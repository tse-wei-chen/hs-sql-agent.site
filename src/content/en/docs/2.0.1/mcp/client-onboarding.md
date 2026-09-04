---
title: MCP Client Onboarding
description: Connect Streamable HTTP MCP clients, configure the public endpoint, and verify Elicitation before enabling DML.
sidebar:
  group: MCP
  order: 30
---

hs-sql-agent exposes a Streamable HTTP MCP endpoint at `/mcp`.

Authenticate requests with:

```http
X-MCP-Server-Key: <MCP key>
```

## Public endpoint

The URL shown to operators and generated client configurations comes from the server setting:

```json
{
  "Mcp": {
    "PublicEndpoint": "https://sql-agent.example.com/mcp"
  }
}
```

The equivalent environment variable is `Mcp__PublicEndpoint`; the provided Compose configuration maps `MCP_PUBLIC_ENDPOINT` to it.

Do not derive the MCP endpoint from the Admin UI origin. The UI and MCP endpoint may be exposed through different hosts, ports, or reverse-proxy paths. In non-Development environments the server requires an absolute HTTP or HTTPS public endpoint.

## Generated client configuration

The Admin Panel generates direct HTTP configuration for Claude Desktop, Cursor, and generic Streamable HTTP clients immediately after an MCP key is issued, rotated, or duplicated.

The plaintext key is intentionally transient. Once the lifecycle dialog is closed, the server cannot display that same secret again.

## DML compatibility is a separate check

A client successfully connecting to `/mcp` does **not** prove that it supports DML approval.

`execute_dml_sql` and published DML Custom Tools require form Elicitation. Before allowing DML in production, test the exact installed client version and verify both paths:

1. Decline an elicitation request and confirm the mutation is not committed.
2. Accept an elicitation request and confirm the approved mutation completes.

If a client does not declare and implement form Elicitation, hs-sql-agent refuses the DML operation.

For query-only clients, prefer an MCP key whose allowed-tool list excludes mutation tools instead of leaving the key unrestricted.
