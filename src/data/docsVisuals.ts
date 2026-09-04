export type DocVisualKind =
  | "overview"
  | "compiler"
  | "safe-dml"
  | "mcp"
  | "databases"
  | "security"
  | "distributed"
  | "observability";

const visualBySlug: Record<string, DocVisualKind> = {
  "": "overview",
  "mcp/client-onboarding": "mcp",
  "mcp/tools-reference": "mcp",
  "sql-compiler/execution-model": "compiler",
  "sql-compiler/safe-dml": "safe-dml",
  "sql-compiler/database-dialects": "databases",
  "security/overview": "security",
  "security/oidc-mfa": "security",
  "operations/distributed-deployment": "distributed",
  "operations/observability": "observability",
};

const sectionLabels = {
  en: {
    administration: "Administration",
    development: "Development",
    "getting-started": "Getting Started",
    integration: "Integration",
    mcp: "MCP",
    operations: "Operations",
    reference: "Reference",
    security: "Security",
    "sql-compiler": "SQL Compiler",
  },
  "zh-hant": {
    administration: "管理",
    development: "開發",
    "getting-started": "開始使用",
    integration: "整合",
    mcp: "MCP",
    operations: "維運",
    reference: "參考",
    security: "安全",
    "sql-compiler": "SQL Compiler",
  },
} as const;

export function getDocVisualKind(slug: string): DocVisualKind | undefined {
  return visualBySlug[slug];
}

export function getDocSectionLabel(slug: string, locale: string): string {
  if (!slug) return locale === "zh-hant" ? "文件中心" : "Documentation";
  const section = slug.split("/")[0] as keyof typeof sectionLabels.en;
  const labels = locale === "zh-hant" ? sectionLabels["zh-hant"] : sectionLabels.en;
  return labels[section] ?? section;
}
