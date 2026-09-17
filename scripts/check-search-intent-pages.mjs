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
  `Search-intent output contract passed for ${expectations.length} landing pages.\n`
);
