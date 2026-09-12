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


export type DatabaseSearchIntentContent = {
  headline: string;
  title: string;
  paragraphs: string[];
  bullets: string[];
};

export function getDatabaseSearchIntentContent(
  page: LocalizedMarketingPage
): DatabaseSearchIntentContent | undefined {
  if (page.section !== "databases") return undefined;

  const provider = page.title.replace(/\s+MCP Server$/, "");

  if (page.locale === "en") {
    return {
      headline: `${provider} MCP Server for AI agents.`,
      title: `Why use a ${provider} MCP server instead of direct database access?`,
      paragraphs: [
        `Direct database credentials make the model or MCP client responsible for everything the database account can do. hs-sql-agent keeps the real ${provider} connection server-side and evaluates SQL against the compiler, MCP-key scope, table policy, tool restrictions, and runtime limits before execution.`,
        "That keeps raw SQL available as an expressive agent interface without turning generated SQL into unrestricted database authority.",
      ],
      bullets: [
        "raw SQL remains available for supported statements",
        "database credentials stay behind the server boundary",
        "unsupported semantics fail closed before execution",
        "DML can require explicit human approval",
      ],
    };
  }

  if (page.locale === "zh-hant") {
    return {
      headline: `給 AI Agent 使用的 ${provider} MCP Server。`,
      title: `為什麼不直接把 ${provider} 帳號交給 AI？`,
      paragraphs: [
        `若 MCP 用戶端直接持有資料庫帳密，模型能做什麼往往只剩資料庫帳號權限這一道邊界。hs-sql-agent 把真正的 ${provider} 連線保留在伺服器端，SQL 執行前還會經過編譯器、MCP 金鑰範圍、資料表政策、工具限制與執行期限制。`,
        "因此 Agent 仍可使用支援範圍內的原始 SQL，不必把「能產生 SQL」等同於「擁有不受限制的資料庫權限」。",
      ],
      bullets: [
        "支援範圍內仍可使用原始 SQL",
        "資料庫帳密保留在伺服器邊界內",
        "無法證明安全語意時先拒絕再執行",
        "資料修改可以要求真人明確核准",
      ],
    };
  }

  return undefined;
}
