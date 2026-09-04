---
title: Security 概覽
description: 把資料庫 governance 留在 server side 的控制，以及保護這些控制的 operational settings。
sidebar:
  group: 安全性
  order: 120
---

hs-sql-agent 的設計前提是：AI model 不是 security boundary。Authentication、database scope、table policy、tool restriction、SQL validation 與 mutation approval 都由 server 執行。

## MCP access boundary

MCP client 使用 issued key 驗證。Runtime policy 可以把 key 綁到特定 database，並限制可用 table 與 tool。

Query-only client 應限制 allowed-tool list，而不是期待 client 自願不呼叫 DML。

## SQL boundary

Generated SQL 執行前必須 parse / validate，再進行 provider-specific compilation。無法支援或證明的 language / target capability 會 fail closed。

DML 還有額外 approval protocol：human acceptance 綁定 validated mutation plan，row-set mutation 在 commit transaction 裡再次驗證後才執行。

## Administrative identity

Server 支援 local authentication，以及可選的 OIDC/SSO 與 TOTP MFA 相關設定。OIDC configuration 包含 authority、client credential、claim mapping、scope、role mapping、verified-email requirement 與 auto-provisioning。

需要跨 restart 保留 protected login/MFA state 時，必須 persist data-protection key path。

## Operational protection

Runtime 還包含 sign-in lockout、rate limiting、distributed security-policy sync、signed alert/SIEM webhook、audit retention，以及 distributed control 的 fail-closed coordination mode。

## 回報漏洞

不要在 public Issue 公開安全漏洞。請使用 repository 的 GitHub Security Advisory **Report a Vulnerability** 流程進行 responsible disclosure。
