export type DocsSearchIntentSlug =
  | "getting-started/quick-start"
  | "sql-compiler/database-dialects"
  | "integration/aspnet-core"
  | "administration/mcp-keys";

const docsSearchIntentTitles: Partial<
  Record<string, Partial<Record<DocsSearchIntentSlug, string>>>
> = {
  en: {
    "getting-started/quick-start": "SQL MCP Server Quick Start",
    "sql-compiler/database-dialects":
      "SQL Dialects: PostgreSQL, MySQL and More",
    "integration/aspnet-core": "ASP.NET Core SQL MCP Integration",
    "administration/mcp-keys": "MCP Keys and Database Access Control",
  },
  ja: {
    "getting-started/quick-start": "SQL MCP サーバー クイックスタート",
    "sql-compiler/database-dialects": "SQL 方言：PostgreSQL、MySQL ほか",
    "integration/aspnet-core": "ASP.NET Core の SQL MCP 統合",
    "administration/mcp-keys": "MCP キーとデータベースアクセス制御",
  },
  ko: {
    "getting-started/quick-start": "SQL MCP 서버 빠른 시작",
    "sql-compiler/database-dialects": "SQL 방언: PostgreSQL, MySQL 등",
    "integration/aspnet-core": "ASP.NET Core SQL MCP 통합",
    "administration/mcp-keys": "MCP 키와 데이터베이스 접근 제어",
  },
  de: {
    "getting-started/quick-start": "SQL-MCP-Server: Schnellstart",
    "sql-compiler/database-dialects":
      "SQL-Dialekte: PostgreSQL, MySQL und mehr",
    "integration/aspnet-core": "ASP.NET Core: SQL-MCP-Integration",
    "administration/mcp-keys": "MCP-Schlüssel und Datenbank-Zugriffskontrolle",
  },
  fr: {
    "getting-started/quick-start": "Serveur MCP SQL : démarrage rapide",
    "sql-compiler/database-dialects":
      "Dialectes SQL : PostgreSQL, MySQL et plus",
    "integration/aspnet-core": "ASP.NET Core : intégration MCP SQL",
    "administration/mcp-keys": "Clés MCP et contrôle d’accès aux bases",
  },
  "zh-hans": {
    "getting-started/quick-start": "SQL MCP Server 快速开始",
    "sql-compiler/database-dialects": "SQL 方言：PostgreSQL、MySQL 等",
    "integration/aspnet-core": "ASP.NET Core SQL MCP 集成",
    "administration/mcp-keys": "MCP 密钥与数据库访问控制",
  },
  "zh-hant": {
    "getting-started/quick-start": "SQL MCP Server 快速開始",
    "sql-compiler/database-dialects": "SQL 方言：PostgreSQL、MySQL 等",
    "integration/aspnet-core": "ASP.NET Core SQL MCP 整合",
    "administration/mcp-keys": "MCP 金鑰與資料庫存取控制",
  },
};

export function getDocsSearchIntentTitle(
  locale: string,
  slug: string,
  fallbackTitle: string
): string {
  return (
    docsSearchIntentTitles[locale]?.[slug as DocsSearchIntentSlug] ??
    fallbackTitle
  );
}
