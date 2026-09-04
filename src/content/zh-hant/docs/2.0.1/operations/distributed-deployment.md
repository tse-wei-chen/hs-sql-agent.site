---
title: Distributed Deployment
description: 多個 hs-sql-agent instance 共用服務端點時，需要共享哪些 control-plane 與 coordination state。
sidebar:
  group: 維運
  order: 110
---

Repository 提供 `.env.distributed.example` 作為 multi-instance topology 範例。重點不只是「加 Redis」，而是每個跨 node 必須一致的 state 都要有共享 provider。

## Shared control plane

Distributed example 使用 PostgreSQL 作為 admin database，而不是 local SQLite：

```env
ADMIN_DATABASE_PROVIDER=Postgres
ADMIN_DATABASE_CONNECTION_STRING=Host=postgres;Port=5432;Database=hsqlagent;Username=postgres;Password=postgres;
```

同一個 logical hs-sql-agent deployment 的所有 instance 應指向相同 control-plane database。

## Redis-backed coordination

範例把以下 subsystem 移到 Redis：

- cache
- rate limiter
- security-policy synchronization
- outbound-delivery synchronization
- SQL concurrency coordination

例如：

```env
CACHE_PROVIDER=Redis
CACHE_CONNECTION_STRING=redis:6379
RATE_LIMITER_PROVIDER=Redis
RATE_LIMITER_CONNECTION_STRING=redis:6379
RATE_LIMITER_FAILURE_MODE=FailClosed
SQL_CONCURRENCY_PROVIDER=Redis
SQL_CONCURRENCY_CONNECTION_STRING=redis:6379
SQL_CONCURRENCY_FAILURE_MODE=FailClosed
```

## Failure mode 有安全意義

對保護 execution boundary 的 coordination，example 使用 `FailClosed`。Distributed coordinator 不可用時拒絕 operation，比讓每個 node 各自做獨立判斷更安全。

增加 replicas 前，先確認哪些 decision 可以 process-local、哪些必須 shared；否則可能出現 inconsistent rate limit、stale security policy 或 uncoordinated SQL concurrency。
