---
title: Configuration
description: Understand the main hs-sql-agent configuration groups before moving from local development to production.
sidebar:
  group: Operations
  order: 90
---

The repository's `.env.example` is the practical inventory of runtime configuration. It is grouped by responsibility rather than by feature page.

## Core hosting and control plane

Important groups include:

- **Application hosting** — `ASPNETCORE_URLS`, allowed hosts.
- **Admin database** — provider and connection string for accounts, roles, keys, audit records, and control-plane state.
- **MCP** — HMAC protection for issued keys and the externally reachable `MCP_PUBLIC_ENDPOINT`.
- **Bootstrap** — optional initial database connection and MCP-key provisioning.
- **Authentication** — JWT signing, token lifetimes, and sign-in lockout.

Use unique `HMAC_KEY` and `JWT_KEY` values of at least 32 bytes. The checked-in values are examples only.

## Identity and account recovery

Optional identity-related configuration includes:

- SMTP settings for password reset delivery
- password-reset URL and token lifetime
- OIDC authority/client credentials
- claims and scopes
- role mappings and auto-provisioning
- TOTP issuer
- persistent ASP.NET Core data-protection key path

For production OIDC, keep HTTPS metadata validation enabled unless you deliberately operate a trusted local identity provider over HTTP.

## Operability

The runtime exposes configuration for:

- health probing and probe concurrency
- slow-query threshold
- signed alert and SIEM webhooks
- outbound-delivery retry/concurrency
- audit retention, archive path, and fallback path
- Prometheus and OTLP telemetry

Prometheus metrics use a separate listener from the main application API port.

## Shared-state providers

Several subsystems can use either local memory or Redis-backed state depending on deployment topology:

- cache
- rate limiter
- security-policy synchronization
- outbound-delivery synchronization
- SQL concurrency coordination

If multiple hs-sql-agent instances must agree on a runtime decision, configure the corresponding distributed provider instead of assuming process-local memory is shared.
