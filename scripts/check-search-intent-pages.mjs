import { readFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const errors = [];

const expectations = [
  {
    route: "databases/index.html",
    marker: "data-seo-database-mcp-guide",
    phrases: [
      "What is a database MCP server?",
      "What should you compare in a SQL MCP server?",
      "SQL MCP server vs. direct database access",
    ],
  },
  {
    route: "databases/postgresql/index.html",
    marker: 'data-seo-provider-evidence="postgresql"',
    phrases: ["DISTINCT ON", "PostgreSQL-specific SQL stays explicit"],
  },
  {
    route: "databases/mysql/index.html",
    marker: 'data-seo-provider-evidence="mysql"',
    phrases: ["MySQL 8.0.1+", "MySQL capabilities are version- and dialect-aware"],
  },
  {
    route: "databases/sql-server/index.html",
    marker: 'data-seo-provider-evidence="sql-server"',
    phrases: ["JOIN ... USING", "SQL Server is validated as T-SQL"],
  },
  {
    route: "databases/oracle/index.html",
    marker: 'data-seo-provider-evidence="oracle"',
    phrases: ["Oracle 12.1+", "Oracle row-limiting semantics stay version-aware"],
  },
  {
    route: "databases/sqlite/index.html",
    marker: 'data-seo-provider-evidence="sqlite"',
    phrases: ["SQLite 3.8.3+", "SQLite keeps its own grammar and version floor"],
  },
  {
    route: "databases/firebird/index.html",
    marker: 'data-seo-provider-evidence="firebird"',
    phrases: ["Firebird 2.1+", "Firebird is a first-class dialect boundary"],
  },
];

const docsTitleExpectations = [
  {
    route: "docs/getting-started/quick-start/index.html",
    title: "SQL MCP Server Quick Start | hs-sql-agent",
  },
  {
    route: "docs/sql-compiler/database-dialects/index.html",
    title: "SQL Dialects: PostgreSQL, MySQL and More | hs-sql-agent",
  },
  {
    route: "ko/docs/integration/aspnet-core/index.html",
    title: "ASP.NET Core SQL MCP 통합 | hs-sql-agent",
  },
  {
    route: "de/docs/administration/mcp-keys/index.html",
    title: "MCP-Schlüssel und Datenbank-Zugriffskontrolle | hs-sql-agent",
  },
];

for (const expectation of expectations) {
  const file = path.join(distDir, expectation.route);
  let html;
  try {
    html = await readFile(file, "utf8");
  } catch {
    errors.push(`${expectation.route}: expected rendered search-intent page`);
    continue;
  }

  if (!html.includes(expectation.marker)) {
    errors.push(`${expectation.route}: missing ${expectation.marker}`);
  }

  for (const phrase of expectation.phrases) {
    if (!html.includes(phrase)) {
      errors.push(`${expectation.route}: missing search-intent phrase: ${phrase}`);
    }
  }
}

for (const expectation of docsTitleExpectations) {
  const file = path.join(distDir, expectation.route);
  let html;
  try {
    html = await readFile(file, "utf8");
  } catch {
    errors.push(`${expectation.route}: expected rendered documentation page`);
    continue;
  }

  if (!html.includes(`<title>${expectation.title}</title>`)) {
    errors.push(
      `${expectation.route}: missing search-intent title: ${expectation.title}`
    );
  }
}

if (errors.length > 0) {
  process.stderr.write(
    [
      "Search-intent output contract failed:",
      ...errors.map(error => `- ${error}`),
      "",
    ].join("\n")
  );
  process.exit(1);
}

process.stdout.write(
  `Search-intent output contract passed for ${expectations.length} landing pages and ${docsTitleExpectations.length} documentation titles.\n`
);
