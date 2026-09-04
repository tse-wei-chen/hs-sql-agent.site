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
    headline: "Compose only the hs-sql-agent capabilities your .NET host needs.",
    description:
      "Use HsSqlAgent.Server 2.0.2 as an embeddable ASP.NET Core class library. Keep host authentication and controller mapping, then opt into Admin API, MCP, built-in identity, or Admin UI only when needed.",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: ["HsSqlAgent.Server", "ASP.NET Core MCP server", ".NET SQL MCP"],
    highlights: [
      {
        title: "AddHsSqlAgentCore",
        description: "Start with the optionless core instead of the legacy all-in-one registration preset.",
      },
      {
        title: "Compose capabilities",
        description: "Add runtime, Admin store/API, MCP, telemetry, or built-in identity independently.",
      },
      {
        title: "Host-owned pipeline",
        description: "Existing apps keep their authentication, authorization middleware, and MapControllers() ownership.",
      },
    ],
    relatedDocs: [{ label: "ASP.NET Core integration", path: "docs/integration/aspnet-core" }],
    body: [
      {
        title: "Embed into an existing ASP.NET Core host",
        paragraphs: [
          "HsSqlAgent.Server is a class-library integration surface, not a second web host hidden inside your application. In 2.0.2, new integrations begin with AddHsSqlAgentCore() and explicitly select the capabilities they need.",
          "When the application already owns login and permissions, delegate Admin authorization to the host policy instead of installing hs-sql-agent's built-in member/role identity stack.",
        ],
        code: {
          label: "ASP.NET Core 2.0.2",
          language: "csharp",
          value: "var hs = builder.Services.AddHsSqlAgentCore();\n\nhs.AddHsSqlAgentRuntime();\nhs.AddHsSqlAgentAdminStore(options =>\n{\n    options.Provider = \"Postgres\";\n    options.ConnectionString =\n        builder.Configuration.GetConnectionString(\"HsSqlAgent\")!;\n});\nhs.AddHsSqlAgentHostAuthorization(\"SqlAgentAdmin\");\nhs.AddHsSqlAgentAdminApi();\nhs.AddHsSqlAgentMcp(options =>\n{\n    options.PublicEndpoint = \"https://example.com/mcp\";\n    options.HmacSecretKey = builder.Configuration[\"HMAC_KEY\"]!;\n});\n\nvar app = builder.Build();\n\napp.UseAuthentication();\napp.UseAuthorization();\napp.UseHsSqlAgentMcp();\napp.UseHsSqlAgentAdminApi();\napp.MapControllers();",
        },
      },
      {
        title: "Built-in identity and Admin UI are opt-in",
        paragraphs: [
          "If the host wants hs-sql-agent's own JWT/member/role model, select AddHsSqlAgentBuiltInAuth() instead of host authorization. The two authorization modes are mutually exclusive.",
          "The packaged Admin UI is also optional. An existing application can expose only the Admin API and use its own frontend, or add the bundled UI when that experience is wanted.",
        ],
      },
      {
        title: "Embedding does not weaken the SQL boundary",
        paragraphs: [
          "Hosting topology changes, but query compilation, Safe DML, MCP-key scope, policy, provider capability checks, and audit still run through the same hs-sql-agent runtime boundary.",
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
    title: "把 hs-sql-agent 嵌入 ASP.NET Core",
    headline: "只組合你的 .NET host 真正需要的 hs-sql-agent capabilities。",
    description:
      "HsSqlAgent.Server 2.0.2 是可嵌入的 ASP.NET Core class library。既有應用保留自己的 authentication 與 controller mapping，再依需求選擇 Admin API、MCP、built-in identity 或 Admin UI。",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: ["HsSqlAgent.Server", "ASP.NET Core MCP server", ".NET SQL MCP"],
    highlights: [
      {
        title: "AddHsSqlAgentCore",
        description: "新 integration 從 optionless core 起手，不再把 legacy all-in-one preset 當主路徑。",
      },
      {
        title: "Composable capabilities",
        description: "Runtime、Admin store/API、MCP、telemetry、built-in identity 都可以分開選。",
      },
      {
        title: "Host-owned pipeline",
        description: "既有應用繼續掌握 authentication、authorization middleware 與 MapControllers()。",
      },
    ],
    relatedDocs: [{ label: "ASP.NET Core integration", path: "docs/integration/aspnet-core" }],
    body: [
      {
        title: "嵌入既有 ASP.NET Core Host",
        paragraphs: [
          "HsSqlAgent.Server 是 class-library integration surface，不是在你的 application 裡偷偷再開一個 web host。2.0.2 的新 integration 從 AddHsSqlAgentCore() 開始，再明確選擇需要的 capabilities。",
          "如果 application 已經有自己的 login 與 permissions，就把 Admin authorization 委派給 host policy，不需要再安裝 hs-sql-agent 的 built-in member/role identity stack。",
        ],
        code: {
          label: "ASP.NET Core 2.0.2",
          language: "csharp",
          value: "var hs = builder.Services.AddHsSqlAgentCore();\n\nhs.AddHsSqlAgentRuntime();\nhs.AddHsSqlAgentAdminStore(options =>\n{\n    options.Provider = \"Postgres\";\n    options.ConnectionString =\n        builder.Configuration.GetConnectionString(\"HsSqlAgent\")!;\n});\nhs.AddHsSqlAgentHostAuthorization(\"SqlAgentAdmin\");\nhs.AddHsSqlAgentAdminApi();\nhs.AddHsSqlAgentMcp(options =>\n{\n    options.PublicEndpoint = \"https://example.com/mcp\";\n    options.HmacSecretKey = builder.Configuration[\"HMAC_KEY\"]!;\n});\n\nvar app = builder.Build();\n\napp.UseAuthentication();\napp.UseAuthorization();\napp.UseHsSqlAgentMcp();\napp.UseHsSqlAgentAdminApi();\napp.MapControllers();",
        },
      },
      {
        title: "Built-in Identity 與 Admin UI 都是 Opt-in",
        paragraphs: [
          "如果 host 想使用 hs-sql-agent 自己的 JWT/member/role model，就選 AddHsSqlAgentBuiltInAuth()，而不是 host authorization；兩種 authorization mode 互斥。",
          "Bundled Admin UI 也不是強制項目。既有 application 可以只 expose Admin API、使用自己的 frontend；需要完整管理介面時再加入 packaged UI。",
        ],
      },
      {
        title: "Embedding 不會改變 SQL Safety Boundary",
        paragraphs: [
          "Hosting topology 改變，但 query compilation、Safe DML、MCP-key scope、policy、provider capability checks 與 audit 仍然走同一條 hs-sql-agent runtime boundary。",
        ],
      },
    ],
  },
};

export function getAspNetCoreMarketingPage(locale: string): MarketingPage {
  return pages[normalizeMarketingLocale(locale)];
}
