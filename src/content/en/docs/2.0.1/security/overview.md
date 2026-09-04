---
title: Security Overview
description: The server-side controls that keep database governance outside the LLM and the operational settings that protect them.
sidebar:
  group: Security
  order: 120
---

hs-sql-agent is designed so the AI model is not the security boundary. Authentication, database scope, table policy, tool restrictions, SQL validation, and mutation approval are enforced by the server.

## MCP access boundary

MCP clients authenticate with an issued key. Runtime policy can bind a key to a database and constrain the tables and tools it may use.

For query-only clients, restrict the allowed-tool list instead of relying on the client to avoid DML voluntarily.

## SQL boundary

Generated SQL is parsed and validated before provider-specific compilation. Unsupported language or target capabilities fail closed instead of being silently downgraded.

DML adds a separate approval protocol. Human acceptance is bound to the validated mutation plan; row-set mutations are revalidated inside the commit transaction before execution.

## Administrative identity

The server supports local authentication plus optional OIDC/SSO and TOTP MFA-related configuration. OIDC settings include authority, client credentials, claim mappings, scopes, role mappings, verified-email requirements, and auto-provisioning.

Persist the configured data-protection key path when protected login or MFA state must survive application restarts.

## Operational protection

Security-related runtime settings include:

- sign-in lockout threshold and duration
- global/request rate limiting
- distributed security-policy synchronization
- signed alert and SIEM webhooks
- audit retention and archive/fallback paths
- fail-closed coordination modes for distributed controls

## Reporting a vulnerability

Do not disclose security vulnerabilities in a public issue. Use the repository's GitHub Security Advisory **Report a Vulnerability** flow so the issue can be investigated and fixed through responsible disclosure.
