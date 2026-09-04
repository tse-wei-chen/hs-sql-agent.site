---
title: Distributed Deployment
description: Shared-state requirements for running multiple hs-sql-agent instances behind one service endpoint.
sidebar:
  group: Operations
  order: 110
---

The repository includes `.env.distributed.example` for a multi-instance topology. The important difference is not simply "add Redis"; each piece of state that must be consistent across nodes needs a shared provider.

## Shared control plane

The distributed example uses PostgreSQL for the admin database instead of local SQLite:

```env
ADMIN_DATABASE_PROVIDER=Postgres
ADMIN_DATABASE_CONNECTION_STRING=Host=postgres;Port=5432;Database=hsqlagent;Username=postgres;Password=postgres;
```

All instances should point at the same control-plane database when they are serving the same logical hs-sql-agent deployment.

## Redis-backed coordination

The distributed example moves these subsystems to Redis:

- cache
- rate limiter
- security-policy synchronization
- outbound-delivery synchronization
- SQL concurrency coordination

Example:

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

## Failure mode matters

For coordination that protects an execution boundary, the example uses `FailClosed`. If the distributed coordinator is unavailable, rejecting the operation is safer than silently allowing each node to make an independent decision.

## Keep identity protection persistent

Even in a distributed deployment, persist the ASP.NET Core data-protection key material used for protected authentication/MFA state. Treat those keys as deployment state, not as disposable container files.

## Validate the topology

Before adding instances, verify which decisions are intentionally process-local and which must be shared. Scaling application replicas without moving the relevant state provider can create inconsistent rate limits, stale security policy, or uncoordinated SQL concurrency.
