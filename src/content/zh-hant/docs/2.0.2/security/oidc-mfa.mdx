---
title: OIDC SSO 與 TOTP MFA
description: 設定 enterprise OIDC identity、claim mapping、role provisioning、MFA policy 與 persistent data-protection keys。
sidebar:
  group: Security
  order: 115
---

hs-sql-agent 可以使用 external OpenID Connect provider 處理 Admin identity，同時讓 local runtime authorization 與 MCP access policy 保持在 server 控制範圍內。

## OIDC connection

Server options 包含：

```text
OidcEnabled
Authority
ClientId
ClientSecret
RequireHttpsMetadata
```

Production 應維持 HTTPS metadata validation，除非明確是在可信任 local identity provider 上使用 HTTP。

Default OIDC scopes 是 `openid`、`profile`、`email`。

## Claim mapping 與 provisioning

Identity options 可對 incoming email、display-name、role、email-verification claims 做 mapping。Service 可以要求 verified email、把 external role map 到 local role name，並在啟用時 auto-provision user。

重要概念包含：

- email / name claim selection；
- role claim selection 與 role mappings；
- verified-email enforcement；
- default local role / auto provisioning；
- login flow 使用的 frontend callback path。

Role mapping 是 authorization configuration，不只是外觀 identity metadata。

## MFA policy

TOTP 是可用的 second-factor mechanism。Server options 包含 TOTP issuer name 與要求 MFA 的 role list，因此可以針對 privileged Admin role 提高 authentication 強度，同時讓 identity provider 負責 primary sign-in。

## Persist data-protection keys

Protected MFA secret 與 login state 依賴 ASP.NET Core data-protection keys。Deployment configuration 提供 data-protection key path；這個 directory 必須跨 restart persist，否則原本 protected state 可能無法解讀。

## MCP key 是另一條 boundary

Admin SSO/MFA 保護 management plane；MCP Client 使用 MCP server key authentication，並各自受到 database、table、tool 與 runtime-policy scope 約束。不要把 Admin SSO 當成 MCP key governance 的替代品。
