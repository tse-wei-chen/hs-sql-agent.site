import {
  normalizeMarketingLocale,
  type MarketingLocale,
  type MarketingPage,
} from "./marketing";

const pages: Record<MarketingLocale, MarketingPage> = {
  en: {
    locale: "en",
    section: "integrations",
    slug: "aspnet-core",
    order: 30,
    visual: "integration",
    title: "Embed hs-sql-agent in ASP.NET Core",
    headline:
      "Choose a complete host or compose only the capabilities you need.",
    description:
      "Use HsSqlAgent.Hosting for the same batteries-included composition as the official Docker image, or HsSqlAgent.Server when an existing ASP.NET Core application needs to own authentication, middleware, UI, telemetry, or approval composition.",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: [
      "HsSqlAgent.Hosting",
      "HsSqlAgent.Server",
      "ASP.NET Core MCP server",
      ".NET SQL MCP",
    ],
    highlights: [
      {
        title: "HsSqlAgent.Hosting",
        description:
          "Embed the complete first-party product with the same standard composition and configuration contract as Docker.",
      },
      {
        title: "HsSqlAgent.Server",
        description:
          "Build a custom integration by selecting runtime, persistence, MCP, Admin API, identity, telemetry, and approval capabilities explicitly.",
      },
      {
        title: "Host-owned boundaries",
        description:
          "Existing applications can keep their authentication, authorization, frontend, exception handling, telemetry, and middleware ordering.",
      },
    ],
    relatedDocs: [
      {
        label: "ASP.NET Core integration",
        path: "docs/integration/aspnet-core",
      },
      { label: "Deployment", path: "docs/operations/deployment" },
    ],
    body: [
      {
        title: "Three ways to consume hs-sql-agent",
        paragraphs: [
          "Deploy the official Docker image for a standalone service. Use HsSqlAgent.Hosting when a .NET application should embed that same complete product composition. Use HsSqlAgent.Server when the host needs to replace or omit individual capabilities.",
        ],
        bullets: [
          "Standalone service: official Docker image",
          "Complete embedded product: HsSqlAgent.Hosting",
          "Custom ASP.NET Core integration: HsSqlAgent.Server",
        ],
        code: {
          label: "Complete embedded host",
          language: "csharp",
          value:
            "using HsSqlAgent.Hosting;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.AddHsSqlAgentStandardHost();\n\nvar app = builder.Build();\napp.UseHsSqlAgentStandardHost();\nawait app.RunAsync();",
        },
      },
      {
        title: "Keep application ownership with HsSqlAgent.Server",
        paragraphs: [
          "For an existing API, start with AddHsSqlAgentCore() and select only the capabilities the host needs. Host authorization can replace the built-in member/role identity stack, and approval providers can be supplied independently.",
        ],
        code: {
          label: "Modular integration",
          language: "csharp",
          value:
            'var hs = builder.Services.AddHsSqlAgentCore();\n\nhs.AddHsSqlAgentRuntime();\nhs.AddHsSqlAgentAdminStore(options =>\n{\n    options.Provider = "Postgres";\n    options.ConnectionString =\n        builder.Configuration.GetConnectionString("HsSqlAgent")!;\n});\nhs.AddHsSqlAgentHostAuthorization("SqlAgentAdmin");\nhs.AddHsSqlAgentAdminApi();',
        },
      },
      {
        title: "Approval integration stays outside the SQL execution primitive",
        paragraphs: [
          "MCP Elicitation remains the default first-party approval path. Standard hosting can select the official Webhook adapter through configuration, while modular hosts can register HsSqlAgent.Approvals.Webhook or their own IDmlApprovalProvider. HsSqlAgent still owns validation, approval evidence binding, commit-time revalidation, and atomic execution.",
        ],
      },
    ],
  },
  "zh-hant": {
    locale: "zh-hant",
    section: "integrations",
    slug: "aspnet-core",
    order: 30,
    visual: "integration",
    title: "在 ASP.NET Core 中嵌入 hs-sql-agent",
    headline: "要完整產品就用 Hosting；需要客製整合就用 Server。",
    description:
      "HsSqlAgent.Hosting 提供與官方 Docker 映像相同的完整組合；既有 ASP.NET Core 應用若要自行掌握驗證、Middleware、管理介面、遙測或核准流程，則使用 HsSqlAgent.Server。",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: [
      "HsSqlAgent.Hosting",
      "HsSqlAgent.Server",
      "ASP.NET Core MCP server",
      ".NET SQL MCP",
    ],
    highlights: [
      {
        title: "HsSqlAgent.Hosting",
        description:
          "把官方完整產品嵌入 .NET 應用，使用與 Docker 相同的標準組合與設定契約。",
      },
      {
        title: "HsSqlAgent.Server",
        description:
          "需要客製時，再明確選擇執行環境、持久化、MCP、管理 API、身分驗證、遙測與核准能力。",
      },
      {
        title: "由宿主掌握邊界",
        description:
          "既有應用可保留自己的驗證、授權、前端、例外處理、遙測與 Middleware 順序。",
      },
    ],
    relatedDocs: [
      { label: "ASP.NET Core 整合", path: "docs/integration/aspnet-core" },
      { label: "部署", path: "docs/operations/deployment" },
    ],
    body: [
      {
        title: "三種使用方式",
        paragraphs: [
          "獨立服務直接部署官方 Docker 映像；.NET 應用若要嵌入同一套完整產品組合，使用 HsSqlAgent.Hosting；需要替換或省略個別能力時，才直接使用 HsSqlAgent.Server。",
        ],
        bullets: [
          "獨立部署：官方 Docker 映像",
          "嵌入完整產品：HsSqlAgent.Hosting",
          "客製 ASP.NET Core 整合：HsSqlAgent.Server",
        ],
        code: {
          label: "嵌入完整主機",
          language: "csharp",
          value:
            "using HsSqlAgent.Hosting;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.AddHsSqlAgentStandardHost();\n\nvar app = builder.Build();\napp.UseHsSqlAgentStandardHost();\nawait app.RunAsync();",
        },
      },
      {
        title: "用 HsSqlAgent.Server 保留既有應用的主導權",
        paragraphs: [
          "既有 API 從 AddHsSqlAgentCore() 開始，只加入實際需要的能力。管理端授權可以委派給宿主既有 policy，不必安裝內建 member/role 身分系統；DML 核准提供者也可以獨立替換。",
        ],
        code: {
          label: "模組化整合",
          language: "csharp",
          value:
            'var hs = builder.Services.AddHsSqlAgentCore();\n\nhs.AddHsSqlAgentRuntime();\nhs.AddHsSqlAgentAdminStore(options =>\n{\n    options.Provider = "Postgres";\n    options.ConnectionString =\n        builder.Configuration.GetConnectionString("HsSqlAgent")!;\n});\nhs.AddHsSqlAgentHostAuthorization("SqlAgentAdmin");\nhs.AddHsSqlAgentAdminApi();',
        },
      },
      {
        title: "核准整合不會取得 SQL 執行權",
        paragraphs: [
          "MCP Elicitation 仍是第一方預設核准方式。標準 Hosting 可透過設定切換官方 Webhook adapter；模組化宿主則可註冊 HsSqlAgent.Approvals.Webhook 或自己的 IDmlApprovalProvider。SQL 驗證、核准證據綁定、提交前重新驗證與原子交易仍由 HsSqlAgent 掌握。",
        ],
      },
    ],
  },
};

export function getAspNetCoreMarketingPage(locale: string): MarketingPage {
  return pages[normalizeMarketingLocale(locale)];
}
