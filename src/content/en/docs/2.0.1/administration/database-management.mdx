---
title: Database Management
description: Configure and operate database connections exposed through hs-sql-agent 2.0.1.
sidebar:
  group: Administration
  order: 72
---

Database Management is the Admin control-plane area for database connections that can later be bound to MCP keys. A database entry stores provider and connection metadata; MCP clients do not supply arbitrary connection strings at request time.

## Supported providers

2.0.1 supports these provider identifiers through the shared SQL provider runtime:

- PostgreSQL
- MySQL
- SQL Server
- Oracle
- SQLite
- Firebird

The configured provider also determines the SQL dialect and capability profile used by query and DML execution.

## Connection fields

The 2.0.1 database request model contains these fields:

| Field | Purpose |
| --- | --- |
| `Name` | Operator-facing name for the connection |
| `SqlProvider` | Database provider/dialect |
| `Host` | Database host or provider-specific location |
| `Port` | Provider port as text |
| `Username` | Database login user |
| `Password` | Database password; SQLite is the only provider that does not require one |
| `Database` | Database/catalog/file value consumed by the provider connection-string factory |
| `ExtraSettings` | Optional provider-specific connection settings |

`CreatedBy` and `UpdatedBy` exist in the service request model but are control-plane metadata rather than fields an MCP client controls.

## Create a connection

In **Runtime → Database Management**:

1. Create a database entry and give it a clear operator-facing name.
2. Select the provider.
3. Enter the provider connection fields.
4. Use a dedicated database account with only the privileges hs-sql-agent actually needs.
5. Save the entry, then verify connectivity before binding production MCP keys.

The API rejects an empty name. For every provider except SQLite, the backend also rejects a missing password.

## Test connectivity

The Admin runtime exposes a connection-test operation. When testing an existing Database Management entry, the server loads the stored connection data, decrypts the saved password, reconstructs the provider connection string, and runs the provider's connection test.

A failed test should be treated as a connection/configuration problem before debugging MCP SQL behavior.

Typical causes include:

- host or port not reachable from the hs-sql-agent process;
- incorrect database/catalog name;
- invalid credentials;
- TLS/encryption settings missing from `ExtraSettings`;
- database firewall or network policy;
- provider-specific authentication requirements.

## Metadata browsing

With `view` permission on `/runtime/db-management`, the Admin API can read provider metadata for a saved connection:

- schemas;
- tables for a schema;
- columns for a table.

These operations construct the provider connection from the saved database entry. They are distinct from MCP schema discovery, which also applies the authenticated MCP key's table whitelist and semantic enrichment.

## Bind an MCP key

A production MCP key must reference a Database Management entry. The key then inherits this connection as its database boundary.

Additional MCP-key restrictions can narrow the surface further:

- tool allowlist;
- table whitelist;
- CORS origins;
- expiration;
- rate-limit mode/overrides.

See [MCP Keys](/en/docs/administration/mcp-keys).

## Table whitelist is not stored on the database

Database Management defines the connection. Table authorization is applied on the MCP key.

This separation lets several MCP keys share one physical database connection while receiving different table/tool scopes. For example, one key can expose read access to reporting tables while another key for an operator workflow can expose a different set of tables and DML.

## Semantic metadata belongs to the database model

Table/column display names, descriptions, synonyms, relationships, and metrics are associated with the Database Management entry. Schema discovery can then enrich MCP-visible metadata without changing the physical database schema.

See [Semantic Metadata](/en/docs/administration/semantic-metadata).

## Permissions

The 2.0.1 Admin API applies explicit permissions to Database Management operations:

| Operation | Permission |
| --- | --- |
| list/read connections and metadata | `/runtime/db-management` → `view` |
| create | `/runtime/db-management` → `create` |
| edit | `/runtime/db-management` → `edit` |
| delete | `/runtime/db-management` → `delete` |
| view semantic metadata | `/runtime/db-management/semantic` → `view` |
| edit semantic metadata | `/runtime/db-management/semantic` → `edit` |

A signed-in Admin user being authenticated is therefore not sufficient by itself; authorization is checked per operation.

## Operational guidance

Use stable names for Database Management entries and avoid changing a connection's meaning underneath active MCP keys. If a key must move to another database boundary, prefer an explicit key lifecycle operation and re-verify its table/tool scope.

Treat database credentials and provider-specific secrets as secrets. Do not put them into Custom Tool templates or client configuration; clients should only receive the MCP endpoint and MCP key.
