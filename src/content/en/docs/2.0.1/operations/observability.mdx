---
title: Observability and Audit Operations
description: Configure health probes, slow-query thresholds, Prometheus, OTLP, audit retention, and signed outbound delivery.
sidebar:
  group: Operations
  order: 95
---

hs-sql-agent separates runtime observability from the SQL control plane. Production operators can combine health checks, metrics, telemetry export, audit retention, and outbound alert/SIEM delivery without making the database audit table the only operational signal.

## Health and slow-query monitoring

The sample environment exposes:

```text
HEALTH_PROBE_ENABLED
HEALTH_PROBE_INTERVAL_SECONDS
HEALTH_PROBE_TIMEOUT_SECONDS
HEALTH_PROBE_MAX_CONCURRENCY
SLOW_QUERY_THRESHOLD_MS
```

Health probes are optional. The slow-query threshold determines when SQL activity is classified for slow-query operational visibility.

## Prometheus and OTLP

Prometheus is served on a **separate listener** from the application API:

```text
PROMETHEUS_ENABLED=false
PROMETHEUS_HOST=0.0.0.0
PROMETHEUS_PORT=9000
```

Optional OpenTelemetry export is configured with:

```text
OTLP_ENDPOINT=
OTEL_SERVICE_NAME=hs-sql-agent
```

Use the Prometheus listener for scrape-based metrics and OTLP when a collector is part of the deployment topology.

## Alert and SIEM delivery

The server supports optional signed outbound targets:

```text
ALERT_WEBHOOK_URL=
ALERT_WEBHOOK_SECRET=
SIEM_WEBHOOK_URL=
SIEM_WEBHOOK_SECRET=
DELIVERY_MAX_ATTEMPTS=6
DELIVERY_MAX_CONCURRENCY=4
```

Leaving a target URL empty disables that integration. Persist and protect the signing secrets like any other deployment credential.

## Audit retention

Retention is controlled separately from live request handling. `AUDIT_RETENTION_DAYS=0` disables automatic retention processing. The current service implementation accepts retention modes `Archive` and `Purge`; Archive preserves expired records to the configured archive path before deletion.

Relevant settings include:

```text
AUDIT_RETENTION_DAYS
AUDIT_RETENTION_MODE
AUDIT_ARCHIVE_PATH
AUDIT_FALLBACK_PATH
AUDIT_RETENTION_RUN_HOUR_UTC
```

The fallback path is important for operational failure handling; keep the configured storage persistent when the deployment depends on archived or fallback audit output.
