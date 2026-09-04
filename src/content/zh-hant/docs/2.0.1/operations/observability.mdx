---
title: Observability 與 Audit Operations
description: 設定 health probe、slow-query threshold、Prometheus、OTLP、audit retention 與 signed outbound delivery。
sidebar:
  group: Operations
  order: 95
---

hs-sql-agent 把 runtime observability 與 SQL control plane 分開。Production operator 可以組合 health check、metrics、telemetry export、audit retention 與 outbound alert/SIEM delivery，不需要把 database audit table 當成唯一 operational signal。

## Health 與 slow-query monitoring

Sample environment 提供：

```text
HEALTH_PROBE_ENABLED
HEALTH_PROBE_INTERVAL_SECONDS
HEALTH_PROBE_TIMEOUT_SECONDS
HEALTH_PROBE_MAX_CONCURRENCY
SLOW_QUERY_THRESHOLD_MS
```

Health probe 是 optional；slow-query threshold 用來判斷 SQL activity 何時進入 slow-query operational visibility。

## Prometheus 與 OTLP

Prometheus 使用與 application API **分離的 listener**：

```text
PROMETHEUS_ENABLED=false
PROMETHEUS_HOST=0.0.0.0
PROMETHEUS_PORT=9000
```

Optional OpenTelemetry export：

```text
OTLP_ENDPOINT=
OTEL_SERVICE_NAME=hs-sql-agent
```

Prometheus listener 適合 scrape-based metrics；部署 topology 有 collector 時可使用 OTLP。

## Alert 與 SIEM delivery

Server 支援 optional signed outbound target：

```text
ALERT_WEBHOOK_URL=
ALERT_WEBHOOK_SECRET=
SIEM_WEBHOOK_URL=
SIEM_WEBHOOK_SECRET=
DELIVERY_MAX_ATTEMPTS=6
DELIVERY_MAX_CONCURRENCY=4
```

Target URL 留空就停用該 integration。Signing secret 應跟其他 deployment credential 一樣持久保存與保護。

## Audit retention

Retention 與 live request handling 分開控制。`AUDIT_RETENTION_DAYS=0` 會停用 automatic retention processing。目前 service implementation 接受 `Archive` 與 `Purge`；Archive 會先把 expired records 保存到設定 archive path，再刪除 live records。

相關設定：

```text
AUDIT_RETENTION_DAYS
AUDIT_RETENTION_MODE
AUDIT_ARCHIVE_PATH
AUDIT_FALLBACK_PATH
AUDIT_RETENTION_RUN_HOUR_UTC
```

Fallback path 對 operational failure handling 很重要；若部署依賴 archived/fallback audit output，對應 storage 必須 persistent。
