---
title: OIDC SSO and TOTP MFA
description: Configure enterprise OIDC identity, claim mapping, role provisioning, MFA policy, and persistent data-protection keys.
sidebar:
  group: Security
  order: 115
---

hs-sql-agent can use an external OpenID Connect provider for Admin identity while keeping local runtime authorization and MCP access policy under server control.

## OIDC connection

The server options include:

```text
OidcEnabled
Authority
ClientId
ClientSecret
RequireHttpsMetadata
```

Production deployments should keep HTTPS metadata validation enabled unless a deliberately trusted local identity provider is being used over HTTP.

The default OIDC scopes are `openid`, `profile`, and `email`.

## Claim mapping and provisioning

Identity options let operators map the incoming email, display-name, role, and email-verification claims. The service can require a verified email, map external roles into local role names, and auto-provision users when enabled.

Important concepts include:

- email and name claim selection;
- role claim selection and role mappings;
- verified-email enforcement;
- default local roles / auto provisioning;
- the frontend callback path used by the login flow.

Treat role mapping as authorization configuration, not cosmetic identity metadata.

## MFA policy

TOTP is available as the second-factor mechanism. The server options include a TOTP issuer name and a list of roles that require MFA. This makes it possible to require stronger authentication for privileged Admin roles while leaving the identity provider responsible for the primary sign-in.

## Persist data-protection keys

Protected MFA secrets and login state depend on ASP.NET Core data-protection keys. The deployment configuration includes a data-protection key path. Persist that directory across restarts; replacing it can make previously protected state unreadable.

## MCP keys are a separate boundary

Admin SSO/MFA protects the management plane. MCP clients authenticate with MCP server keys and remain subject to their own database, table, tool, and runtime-policy scope. Do not treat Admin SSO as a replacement for MCP key governance.
