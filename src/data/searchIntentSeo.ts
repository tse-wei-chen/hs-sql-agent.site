import type {
  LocalizedMarketingPage,
  MarketingSection,
} from "./marketingCatalog";

export type SearchIntentSeo = {
  title: string;
  description: string;
};

const homeSeo: Partial<Record<string, SearchIntentSeo>> = {
  en: {
    title: "SQL MCP Server for AI Agents | hs-sql-agent",
    description:
      "Open-source SQL MCP server for PostgreSQL, MySQL, SQL Server, Oracle, SQLite, and Firebird. Validate AI-generated SQL, enforce server-side policy, and gate DML before execution.",
  },
  "zh-hant": {
    title: "AI Agent 安全 SQL MCP Server | hs-sql-agent",
    description:
      "開源 SQL MCP Server，支援 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 與 Firebird；先驗證 AI 產生的 SQL、套用伺服器端存取政策，再允許執行或進入 DML 核准流程。",
  },
};

const sectionSeo: Partial<
  Record<string, Partial<Record<MarketingSection, SearchIntentSeo>>>
> = {
  en: {
    databases: {
      title: "Database MCP Server for SQL AI Agents | hs-sql-agent",
      description:
        "One governed SQL MCP server for PostgreSQL, MySQL, SQL Server, Oracle, SQLite, and Firebird, with dialect-aware validation, access policy, Safe DML, and audit controls.",
    },
    features: {
      title: "SQL MCP Security for AI Agents | hs-sql-agent",
      description:
        "See how hs-sql-agent validates AI-generated SQL, enforces database and table access policy, and gates UPDATE and DELETE with a fail-closed Safe DML workflow.",
    },
    integrations: {
      title: "SQL MCP Integrations: Claude, Cursor & .NET | hs-sql-agent",
      description:
        "Connect Claude Desktop, Cursor, or an ASP.NET Core application to the same governed SQL MCP server and keep database authority on the server side.",
    },
  },
  "zh-hant": {
    databases: {
      title: "SQL Database MCP Server | hs-sql-agent",
      description:
        "以單一受治理的 SQL MCP Server 連接 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 與 Firebird，並在執行前套用方言驗證、存取政策、Safe DML 與稽核。",
    },
  },
};

const pageSeo: Partial<Record<string, Record<string, SearchIntentSeo>>> = {
  en: {
    "features/sql-compiler": {
      title: "AI SQL Safety & Fail-Closed Compiler | hs-sql-agent",
      description:
        "Validate AI-generated raw SQL before execution with a typed, fail-closed compiler that checks semantics, database capabilities, access policy, and provider-specific rendering.",
    },
    "features/safe-dml": {
      title: "Safe DML for AI Agents | hs-sql-agent",
      description:
        "Gate AI-generated UPDATE and DELETE with impact preview, explicit approval, transaction-time row-set revalidation, and server-owned commit boundaries.",
    },
    "features/access-control": {
      title: "AI Database Access Control | hs-sql-agent",
      description:
        "Keep database authorization outside the LLM with scoped MCP keys, table allowlists, tool restrictions, rate limits, revocation, and auditable server-side policy.",
    },
    "integrations/claude-desktop": {
      title: "Claude Desktop SQL MCP Server | hs-sql-agent",
      description:
        "Connect Claude Desktop to a governed SQL MCP server for schema discovery, validated queries, scoped database access, and approval-gated DML.",
    },
    "integrations/cursor": {
      title: "Cursor SQL MCP Server | hs-sql-agent",
      description:
        "Connect Cursor to a governed SQL MCP server and keep generated SQL behind dialect validation, scoped database access, Safe DML, and server-side audit controls.",
    },
    "integrations/aspnet-core": {
      title: "ASP.NET Core SQL MCP Server | hs-sql-agent",
      description:
        "Embed the hs-sql-agent SQL MCP server in an ASP.NET Core application with the HsSqlAgent.Server package while keeping the same compiler and governance boundary.",
    },
  },
};

export function getHomeSearchIntentSeo(
  locale: string,
  fallbackTitle: string,
  fallbackDescription: string
): SearchIntentSeo {
  return (
    homeSeo[locale] ?? {
      title: fallbackTitle,
      description: fallbackDescription,
    }
  );
}

export function getSectionSearchIntentSeo(
  locale: string,
  section: MarketingSection,
  fallbackTitle: string,
  fallbackDescription: string
): SearchIntentSeo {
  return (
    sectionSeo[locale]?.[section] ?? {
      title: fallbackTitle,
      description: fallbackDescription,
    }
  );
}

export function getMarketingPageSearchIntentSeo(
  page: LocalizedMarketingPage,
  siteTitle: string
): SearchIntentSeo {
  const key = `${page.section}/${page.slug}`;
  const explicit = pageSeo[page.locale]?.[key];
  if (explicit) return explicit;

  if (page.locale === "en" && page.section === "databases") {
    const provider = page.title.replace(/\s+MCP Server$/, "");
    return {
      title: `${provider} MCP Server for AI Agents | ${siteTitle}`,
      description: `Open-source ${provider} MCP server for AI agents. Discover schema and run validated SQL behind server-side access policy, Safe DML, and audit controls.`,
    };
  }

  return {
    title: `${page.title} | ${siteTitle}`,
    description: page.description,
  };
}
