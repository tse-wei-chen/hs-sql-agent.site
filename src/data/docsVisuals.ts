import { useDocsUi } from "@/i18n/docs";

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

export function getDocVisualKind(slug: string): DocVisualKind | undefined {
  return visualBySlug[slug];
}

export function getDocSectionLabel(slug: string, locale: string): string {
  const docsUi = useDocsUi(locale);
  if (!slug) return docsUi.centerLabel;
  const section = slug.split("/")[0];
  return docsUi.sections[section] ?? section;
}
