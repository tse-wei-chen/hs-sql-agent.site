import type { MarketingPage } from "./marketing";

const aspNetCoreMarketingLocales = [
  "en",
  "zh-hant",
  "zh-hans",
  "ja",
  "ko",
  "fr",
  "de",
] as const;

type AspNetCoreMarketingLocale = (typeof aspNetCoreMarketingLocales)[number];
type AspNetCoreMarketingPage = Omit<MarketingPage, "locale"> & {
  locale: AspNetCoreMarketingLocale;
};

const standardHostCode =
  "using HsSqlAgent.Hosting;\n\nvar builder = WebApplication.CreateBuilder(args);\nbuilder.AddHsSqlAgentStandardHost();\n\nvar app = builder.Build();\napp.UseHsSqlAgentStandardHost();\nawait app.RunAsync();";
const modularHostCode =
  'var hs = builder.Services.AddHsSqlAgentCore();\n\nhs.AddHsSqlAgentRuntime();\nhs.AddHsSqlAgentAdminStore(options =>\n{\n    options.Provider = "Postgres";\n    options.ConnectionString =\n        builder.Configuration.GetConnectionString("HsSqlAgent")!;\n});\nhs.AddHsSqlAgentHostAuthorization("SqlAgentAdmin");\nhs.AddHsSqlAgentAdminApi();';

const pages: Record<AspNetCoreMarketingLocale, AspNetCoreMarketingPage> = {
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
        title: "Complete embedded product",
        description:
          "HsSqlAgent.Hosting embeds the same standard first-party composition and configuration contract as Docker.",
      },
      {
        title: "Custom integration",
        description:
          "HsSqlAgent.Server lets the host select runtime, persistence, MCP, Admin API, identity, telemetry, and approvals explicitly.",
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
          value: standardHostCode,
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
          value: modularHostCode,
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
        title: "嵌入完整產品",
        description:
          "HsSqlAgent.Hosting 使用與 Docker 相同的第一方標準組合與設定契約。",
      },
      {
        title: "客製整合",
        description:
          "HsSqlAgent.Server 讓宿主自行選擇執行環境、持久化、MCP、管理 API、身分驗證、遙測與核准能力。",
      },
      {
        title: "邊界由宿主掌握",
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
          value: standardHostCode,
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
          value: modularHostCode,
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
  "zh-hans": {
    locale: "zh-hans",
    section: "integrations",
    slug: "aspnet-core",
    order: 30,
    visual: "integration",
    title: "在 ASP.NET Core 中嵌入 hs-sql-agent",
    headline: "完整产品用 Hosting；需要自定义集成时用 Server。",
    description:
      "HsSqlAgent.Hosting 提供与官方 Docker 镜像一致的完整组合；已有 ASP.NET Core 应用如果要自己掌握身份验证、中间件、管理界面、遥测或审批流程，则使用 HsSqlAgent.Server。",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: [
      "HsSqlAgent.Hosting",
      "HsSqlAgent.Server",
      "ASP.NET Core MCP server",
      ".NET SQL MCP",
    ],
    highlights: [
      {
        title: "嵌入完整产品",
        description:
          "HsSqlAgent.Hosting 使用与 Docker 相同的第一方标准组合和配置契约。",
      },
      {
        title: "自定义集成",
        description:
          "HsSqlAgent.Server 让宿主明确选择运行时、持久化、MCP、管理 API、身份体系、遥测与审批能力。",
      },
      {
        title: "边界由宿主掌握",
        description:
          "现有应用可以继续使用自己的身份验证、授权、前端、异常处理、遥测和中间件顺序。",
      },
    ],
    relatedDocs: [
      { label: "ASP.NET Core 集成", path: "docs/integration/aspnet-core" },
      { label: "部署", path: "docs/operations/deployment" },
    ],
    body: [
      {
        title: "三种使用方式",
        paragraphs: [
          "独立服务直接部署官方 Docker 镜像；.NET 应用若要嵌入同一套完整产品组合，使用 HsSqlAgent.Hosting；只有在需要替换或省略某些能力时，才直接使用 HsSqlAgent.Server。",
        ],
        bullets: [
          "独立部署：官方 Docker 镜像",
          "嵌入完整产品：HsSqlAgent.Hosting",
          "自定义 ASP.NET Core 集成：HsSqlAgent.Server",
        ],
        code: {
          label: "嵌入完整主机",
          language: "csharp",
          value: standardHostCode,
        },
      },
      {
        title: "用 HsSqlAgent.Server 保留现有应用的控制权",
        paragraphs: [
          "现有 API 从 AddHsSqlAgentCore() 开始，只添加实际需要的能力。管理端授权可以委托给宿主已有的策略，DML 审批提供程序也可以独立替换。",
        ],
        code: {
          label: "模块化集成",
          language: "csharp",
          value: modularHostCode,
        },
      },
      {
        title: "审批集成不会取得 SQL 执行权",
        paragraphs: [
          "MCP Elicitation 仍是第一方默认审批方式。标准 Hosting 可通过配置选择官方 Webhook 适配器；模块化宿主则可注册 HsSqlAgent.Approvals.Webhook 或自己的 IDmlApprovalProvider。SQL 验证、审批证据绑定、提交前重新验证以及原子执行仍由 HsSqlAgent 负责。",
        ],
      },
    ],
  },
  ja: {
    locale: "ja",
    section: "integrations",
    slug: "aspnet-core",
    order: 30,
    visual: "integration",
    title: "ASP.NET Core に hs-sql-agent を組み込む",
    headline:
      "製品一式を組み込むなら Hosting、構成を選びたいなら Server。",
    description:
      "HsSqlAgent.Hosting は公式 Docker イメージと同じ標準構成を .NET ホストへ組み込みます。既存の ASP.NET Core アプリが認証、ミドルウェア、管理 UI、テレメトリ、承認フローを自ら管理する場合は HsSqlAgent.Server を使います。",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: [
      "HsSqlAgent.Hosting",
      "HsSqlAgent.Server",
      "ASP.NET Core MCP server",
      ".NET SQL MCP",
    ],
    highlights: [
      {
        title: "製品一式を組み込む",
        description:
          "HsSqlAgent.Hosting は Docker と同じ第一方の標準構成と設定契約を提供します。",
      },
      {
        title: "必要な機能だけ構成する",
        description:
          "HsSqlAgent.Server では実行環境、永続化、MCP、管理 API、認証、テレメトリ、承認をホスト側で選べます。",
      },
      {
        title: "ホストの境界を維持する",
        description:
          "既存アプリの認証、認可、フロントエンド、例外処理、テレメトリ、ミドルウェア順序をそのまま管理できます。",
      },
    ],
    relatedDocs: [
      { label: "ASP.NET Core 統合", path: "docs/integration/aspnet-core" },
      { label: "デプロイ", path: "docs/operations/deployment" },
    ],
    body: [
      {
        title: "3 つの利用方法",
        paragraphs: [
          "独立サービスなら公式 Docker イメージをデプロイします。.NET アプリに同じ製品一式を組み込むなら HsSqlAgent.Hosting、個別の機能を差し替えたり省いたりするなら HsSqlAgent.Server を使います。",
        ],
        bullets: [
          "独立サービス：公式 Docker イメージ",
          "製品一式の組み込み：HsSqlAgent.Hosting",
          "カスタム ASP.NET Core 統合：HsSqlAgent.Server",
        ],
        code: {
          label: "標準ホストを組み込む",
          language: "csharp",
          value: standardHostCode,
        },
      },
      {
        title: "HsSqlAgent.Server で既存アプリの主導権を保つ",
        paragraphs: [
          "既存 API では AddHsSqlAgentCore() から始め、必要な機能だけ追加します。管理 API の認可は既存ホストのポリシーへ委譲でき、DML 承認プロバイダーも独立して差し替えられます。",
        ],
        code: {
          label: "モジュール式統合",
          language: "csharp",
          value: modularHostCode,
        },
      },
      {
        title: "承認先に SQL 実行権限は渡さない",
        paragraphs: [
          "既定の第一方承認は MCP Elicitation です。標準 Hosting は設定で公式 Webhook アダプターを選択でき、モジュール式ホストは HsSqlAgent.Approvals.Webhook または独自の IDmlApprovalProvider を登録できます。SQL 検証、承認証跡の結び付け、コミット直前の再検証、原子的な実行は HsSqlAgent が担います。",
        ],
      },
    ],
  },
  ko: {
    locale: "ko",
    section: "integrations",
    slug: "aspnet-core",
    order: 30,
    visual: "integration",
    title: "ASP.NET Core에 hs-sql-agent 포함하기",
    headline:
      "전체 제품 구성이 필요하면 Hosting, 맞춤 구성이 필요하면 Server를 사용하세요.",
    description:
      "HsSqlAgent.Hosting은 공식 Docker 이미지와 같은 표준 구성을 .NET 호스트에 포함합니다. 기존 ASP.NET Core 애플리케이션이 인증, 미들웨어, 관리 UI, 텔레메트리 또는 승인 흐름을 직접 관리해야 한다면 HsSqlAgent.Server를 사용합니다.",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: [
      "HsSqlAgent.Hosting",
      "HsSqlAgent.Server",
      "ASP.NET Core MCP server",
      ".NET SQL MCP",
    ],
    highlights: [
      {
        title: "전체 제품 포함",
        description:
          "HsSqlAgent.Hosting은 Docker와 동일한 공식 표준 구성과 설정 계약을 제공합니다.",
      },
      {
        title: "맞춤 통합",
        description:
          "HsSqlAgent.Server에서는 런타임, 영속성, MCP, 관리 API, 인증, 텔레메트리와 승인 기능을 호스트가 직접 선택합니다.",
      },
      {
        title: "호스트 경계 유지",
        description:
          "기존 애플리케이션의 인증, 권한 부여, 프런트엔드, 예외 처리, 텔레메트리와 미들웨어 순서를 그대로 유지할 수 있습니다.",
      },
    ],
    relatedDocs: [
      { label: "ASP.NET Core 통합", path: "docs/integration/aspnet-core" },
      { label: "배포", path: "docs/operations/deployment" },
    ],
    body: [
      {
        title: "세 가지 사용 방식",
        paragraphs: [
          "독립 서비스는 공식 Docker 이미지를 배포합니다. .NET 애플리케이션에 같은 전체 제품 구성을 포함하려면 HsSqlAgent.Hosting을 사용하고, 일부 기능을 교체하거나 제외해야 할 때는 HsSqlAgent.Server를 사용합니다.",
        ],
        bullets: [
          "독립 배포: 공식 Docker 이미지",
          "전체 제품 포함: HsSqlAgent.Hosting",
          "맞춤 ASP.NET Core 통합: HsSqlAgent.Server",
        ],
        code: {
          label: "표준 호스트 포함",
          language: "csharp",
          value: standardHostCode,
        },
      },
      {
        title: "HsSqlAgent.Server로 기존 애플리케이션의 제어권 유지",
        paragraphs: [
          "기존 API는 AddHsSqlAgentCore()에서 시작해 필요한 기능만 추가합니다. 관리 API 권한 부여는 호스트의 기존 정책에 위임할 수 있고 DML 승인 공급자도 별도로 교체할 수 있습니다.",
        ],
        code: {
          label: "모듈식 통합",
          language: "csharp",
          value: modularHostCode,
        },
      },
      {
        title: "승인 시스템에 SQL 실행 권한을 넘기지 않음",
        paragraphs: [
          "MCP Elicitation이 기본 공식 승인 방식입니다. 표준 Hosting은 설정으로 공식 Webhook 어댑터를 선택할 수 있고, 모듈형 호스트는 HsSqlAgent.Approvals.Webhook 또는 자체 IDmlApprovalProvider를 등록할 수 있습니다. SQL 검증, 승인 증거 결합, 커밋 직전 재검증과 원자적 실행은 계속 HsSqlAgent가 담당합니다.",
        ],
      },
    ],
  },
  fr: {
    locale: "fr",
    section: "integrations",
    slug: "aspnet-core",
    order: 30,
    visual: "integration",
    title: "Intégrer hs-sql-agent dans ASP.NET Core",
    headline:
      "Hosting pour le produit complet ; Server pour une intégration sur mesure.",
    description:
      "HsSqlAgent.Hosting intègre dans un hôte .NET la même composition standard que l'image Docker officielle. Utilisez HsSqlAgent.Server lorsqu'une application ASP.NET Core existante doit conserver la maîtrise de l'authentification, des middlewares, de l'interface d'administration, de la télémétrie ou des approbations.",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: [
      "HsSqlAgent.Hosting",
      "HsSqlAgent.Server",
      "serveur MCP ASP.NET Core",
      "SQL MCP .NET",
    ],
    highlights: [
      {
        title: "Produit complet intégré",
        description:
          "HsSqlAgent.Hosting fournit la même composition officielle et le même contrat de configuration standard que Docker.",
      },
      {
        title: "Intégration sur mesure",
        description:
          "HsSqlAgent.Server laisse l'hôte choisir explicitement l'exécution, la persistance, MCP, l'API d'administration, l'identité, la télémétrie et les approbations.",
      },
      {
        title: "Frontières conservées par l'hôte",
        description:
          "L'application existante peut garder son authentification, son autorisation, son interface, sa gestion des erreurs, sa télémétrie et l'ordre de ses middlewares.",
      },
    ],
    relatedDocs: [
      { label: "Intégration ASP.NET Core", path: "docs/integration/aspnet-core" },
      { label: "Déploiement", path: "docs/operations/deployment" },
    ],
    body: [
      {
        title: "Trois modes d'utilisation",
        paragraphs: [
          "Pour un service autonome, déployez l'image Docker officielle. Pour intégrer la même composition complète dans une application .NET, utilisez HsSqlAgent.Hosting. Pour remplacer ou omettre certaines capacités, utilisez HsSqlAgent.Server.",
        ],
        bullets: [
          "Service autonome : image Docker officielle",
          "Produit complet intégré : HsSqlAgent.Hosting",
          "Intégration ASP.NET Core sur mesure : HsSqlAgent.Server",
        ],
        code: {
          label: "Hôte standard intégré",
          language: "csharp",
          value: standardHostCode,
        },
      },
      {
        title: "Conserver la maîtrise de l'application avec HsSqlAgent.Server",
        paragraphs: [
          "Dans une API existante, partez de AddHsSqlAgentCore() puis ajoutez uniquement les capacités nécessaires. L'autorisation d'administration peut être déléguée à une policy de l'hôte et le fournisseur d'approbation DML peut être remplacé indépendamment.",
        ],
        code: {
          label: "Intégration modulaire",
          language: "csharp",
          value: modularHostCode,
        },
      },
      {
        title: "Le système d'approbation n'obtient pas le droit d'exécuter le SQL",
        paragraphs: [
          "MCP Elicitation reste le mécanisme d'approbation officiel par défaut. Le Hosting standard peut sélectionner l'adaptateur Webhook officiel par configuration ; un hôte modulaire peut enregistrer HsSqlAgent.Approvals.Webhook ou son propre IDmlApprovalProvider. HsSqlAgent conserve la validation SQL, la liaison des preuves d'approbation, la revalidation avant commit et l'exécution atomique.",
        ],
      },
    ],
  },
  de: {
    locale: "de",
    section: "integrations",
    slug: "aspnet-core",
    order: 30,
    visual: "integration",
    title: "hs-sql-agent in ASP.NET Core einbetten",
    headline:
      "Hosting für das vollständige Produkt, Server für eine eigene Integration.",
    description:
      "HsSqlAgent.Hosting bettet dieselbe Standardkomposition wie das offizielle Docker-Image in einen .NET-Host ein. Verwenden Sie HsSqlAgent.Server, wenn eine bestehende ASP.NET-Core-Anwendung Authentifizierung, Middleware, Admin-Oberfläche, Telemetrie oder Freigaben selbst steuern soll.",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: [
      "HsSqlAgent.Hosting",
      "HsSqlAgent.Server",
      "ASP.NET Core MCP Server",
      ".NET SQL MCP",
    ],
    highlights: [
      {
        title: "Vollständiges Produkt einbetten",
        description:
          "HsSqlAgent.Hosting bietet dieselbe offizielle Standardkomposition und denselben Konfigurationsvertrag wie Docker.",
      },
      {
        title: "Eigene Integration",
        description:
          "Mit HsSqlAgent.Server wählt der Host Runtime, Persistenz, MCP, Admin API, Identität, Telemetrie und Freigaben ausdrücklich selbst.",
      },
      {
        title: "Host-Grenzen beibehalten",
        description:
          "Die bestehende Anwendung behält Authentifizierung, Autorisierung, Frontend, Fehlerbehandlung, Telemetrie und Middleware-Reihenfolge.",
      },
    ],
    relatedDocs: [
      {
        label: "ASP.NET-Core-Integration",
        path: "docs/integration/aspnet-core",
      },
      { label: "Bereitstellung", path: "docs/operations/deployment" },
    ],
    body: [
      {
        title: "Drei Nutzungswege",
        paragraphs: [
          "Für einen eigenständigen Dienst deployen Sie das offizielle Docker-Image. Soll eine .NET-Anwendung dieselbe vollständige Produktkomposition einbetten, verwenden Sie HsSqlAgent.Hosting. Wenn einzelne Funktionen ersetzt oder weggelassen werden sollen, verwenden Sie HsSqlAgent.Server.",
        ],
        bullets: [
          "Eigenständiger Dienst: offizielles Docker-Image",
          "Vollständiges Produkt einbetten: HsSqlAgent.Hosting",
          "Eigene ASP.NET-Core-Integration: HsSqlAgent.Server",
        ],
        code: {
          label: "Standard-Host einbetten",
          language: "csharp",
          value: standardHostCode,
        },
      },
      {
        title: "Mit HsSqlAgent.Server die Kontrolle beim Host behalten",
        paragraphs: [
          "Eine bestehende API beginnt mit AddHsSqlAgentCore() und fügt nur die benötigten Funktionen hinzu. Admin-Autorisierung kann an eine vorhandene Host-Policy delegiert werden; auch der DML-Freigabe-Provider lässt sich unabhängig austauschen.",
        ],
        code: {
          label: "Modulare Integration",
          language: "csharp",
          value: modularHostCode,
        },
      },
      {
        title: "Das Freigabesystem erhält keine SQL-Ausführungsrechte",
        paragraphs: [
          "MCP Elicitation bleibt der offizielle Standard für Freigaben. Standard Hosting kann den offiziellen Webhook-Adapter per Konfiguration wählen; modulare Hosts können HsSqlAgent.Approvals.Webhook oder einen eigenen IDmlApprovalProvider registrieren. SQL-Validierung, Bindung der Freigabenachweise, erneute Prüfung vor dem Commit und atomare Ausführung bleiben bei HsSqlAgent.",
        ],
      },
    ],
  },
};

export function getAspNetCoreMarketingPage(
  locale: string
): AspNetCoreMarketingPage {
  const normalized = aspNetCoreMarketingLocales.includes(
    locale as AspNetCoreMarketingLocale
  )
    ? (locale as AspNetCoreMarketingLocale)
    : "en";
  return pages[normalized];
}
