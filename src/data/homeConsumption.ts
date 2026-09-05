const homeConsumptionLocales = [
  "en",
  "zh-hant",
  "zh-hans",
  "ja",
  "ko",
  "fr",
  "de",
] as const;

type HomeConsumptionLocale = (typeof homeConsumptionLocales)[number];

type ConsumptionPath = {
  code: "DOCKER" | "HOSTING" | "SERVER";
  title: string;
  product: string;
  description: string;
  href: string;
};

type HomeConsumptionCopy = {
  kicker: string;
  title: string;
  description: string;
  paths: readonly ConsumptionPath[];
};

const copies: Record<HomeConsumptionLocale, HomeConsumptionCopy> = {
  en: {
    kicker: "Choose how you run it",
    title: "One product, three consumption paths.",
    description:
      "Deploy the official service, embed the complete first-party host, or compose a custom ASP.NET Core integration. The SQL safety model stays the same.",
    paths: [
      {
        code: "DOCKER",
        title: "Deploy standalone",
        product: "Docker",
        description:
          "Run the official image as its own service with the standard UI, MCP endpoint, identity, telemetry, and approval configuration.",
        href: "docs/operations/deployment",
      },
      {
        code: "HOSTING",
        title: "Embed the complete product",
        product: "HsSqlAgent.Hosting",
        description:
          "Add the same batteries-included first-party composition used by the official Docker host to an ASP.NET Core application.",
        href: "docs/integration/aspnet-core",
      },
      {
        code: "SERVER",
        title: "Build a custom integration",
        product: "HsSqlAgent.Server",
        description:
          "Select runtime, persistence, MCP, Admin API, identity, telemetry, and approval capabilities explicitly inside your host.",
        href: "docs/integration/aspnet-core",
      },
    ],
  },
  "zh-hant": {
    kicker: "選擇使用方式",
    title: "同一個產品，三種使用路徑。",
    description:
      "可獨立部署官方服務、在 ASP.NET Core 中嵌入完整第一方主機，或自行組合客製整合；SQL 安全模型不變。",
    paths: [
      {
        code: "DOCKER",
        title: "獨立部署",
        product: "Docker",
        description:
          "用官方映像獨立執行完整服務，包含標準管理介面、MCP 端點、身分系統、遙測與核准設定。",
        href: "docs/operations/deployment",
      },
      {
        code: "HOSTING",
        title: "嵌入完整產品",
        product: "HsSqlAgent.Hosting",
        description:
          "把官方 Docker 主機使用的同一套完整第一方組合直接嵌入 ASP.NET Core 應用。",
        href: "docs/integration/aspnet-core",
      },
      {
        code: "SERVER",
        title: "建立客製整合",
        product: "HsSqlAgent.Server",
        description:
          "由宿主明確選擇執行環境、持久化、MCP、管理 API、身分、遙測與核准能力。",
        href: "docs/integration/aspnet-core",
      },
    ],
  },
  "zh-hans": {
    kicker: "选择使用方式",
    title: "同一个产品，三种使用路径。",
    description:
      "可以独立部署官方服务、在 ASP.NET Core 中嵌入完整第一方主机，或自行组合定制集成；SQL 安全模型保持一致。",
    paths: [
      {
        code: "DOCKER",
        title: "独立部署",
        product: "Docker",
        description:
          "使用官方镜像独立运行完整服务，包括标准管理界面、MCP 端点、身份系统、遥测和审批配置。",
        href: "docs/operations/deployment",
      },
      {
        code: "HOSTING",
        title: "嵌入完整产品",
        product: "HsSqlAgent.Hosting",
        description:
          "把官方 Docker 主机使用的同一套完整第一方组合直接嵌入 ASP.NET Core 应用。",
        href: "docs/integration/aspnet-core",
      },
      {
        code: "SERVER",
        title: "构建定制集成",
        product: "HsSqlAgent.Server",
        description:
          "由宿主明确选择运行时、持久化、MCP、管理 API、身份、遥测和审批能力。",
        href: "docs/integration/aspnet-core",
      },
    ],
  },
  ja: {
    kicker: "利用形態を選ぶ",
    title: "1 つの製品、3 つの導入方法。",
    description:
      "公式サービスを単独で動かす、ASP.NET Core に第一方の完全構成を組み込む、必要な機能だけを選んで独自統合する。どの方法でも SQL の安全モデルは変わりません。",
    paths: [
      {
        code: "DOCKER",
        title: "単独でデプロイ",
        product: "Docker",
        description:
          "公式イメージを独立したサービスとして実行し、標準の管理画面、MCP エンドポイント、認証、テレメトリ、承認設定を利用します。",
        href: "docs/operations/deployment",
      },
      {
        code: "HOSTING",
        title: "製品一式を組み込む",
        product: "HsSqlAgent.Hosting",
        description:
          "公式 Docker ホストと同じ第一方の標準構成を ASP.NET Core アプリへそのまま組み込みます。",
        href: "docs/integration/aspnet-core",
      },
      {
        code: "SERVER",
        title: "独自統合を構成する",
        product: "HsSqlAgent.Server",
        description:
          "実行環境、永続化、MCP、管理 API、認証、テレメトリ、承認をホスト側で明示的に選択します。",
        href: "docs/integration/aspnet-core",
      },
    ],
  },
  ko: {
    kicker: "사용 방식 선택",
    title: "하나의 제품, 세 가지 도입 방식.",
    description:
      "공식 서비스를 독립 배포하거나, ASP.NET Core에 완전한 공식 구성을 포함하거나, 필요한 기능만 골라 맞춤 통합할 수 있습니다. 어떤 방식이든 SQL 안전 모델은 동일합니다.",
    paths: [
      {
        code: "DOCKER",
        title: "독립 배포",
        product: "Docker",
        description:
          "공식 이미지를 독립 서비스로 실행해 표준 관리 UI, MCP 엔드포인트, 인증, 텔레메트리와 승인 구성을 사용합니다.",
        href: "docs/operations/deployment",
      },
      {
        code: "HOSTING",
        title: "전체 제품 포함",
        product: "HsSqlAgent.Hosting",
        description:
          "공식 Docker 호스트와 동일한 완전한 공식 구성을 ASP.NET Core 애플리케이션에 포함합니다.",
        href: "docs/integration/aspnet-core",
      },
      {
        code: "SERVER",
        title: "맞춤 통합 구성",
        product: "HsSqlAgent.Server",
        description:
          "런타임, 영속성, MCP, 관리 API, 인증, 텔레메트리와 승인 기능을 호스트에서 명시적으로 선택합니다.",
        href: "docs/integration/aspnet-core",
      },
    ],
  },
  fr: {
    kicker: "Choisir le mode d'utilisation",
    title: "Un produit, trois modes d'adoption.",
    description:
      "Déployez le service officiel seul, intégrez la composition officielle complète dans ASP.NET Core ou composez une intégration sur mesure. Le modèle de sécurité SQL reste identique.",
    paths: [
      {
        code: "DOCKER",
        title: "Déployer en service autonome",
        product: "Docker",
        description:
          "Exécutez l'image officielle comme service autonome avec l'interface d'administration, le point d'accès MCP, l'identité, la télémétrie et les approbations standard.",
        href: "docs/operations/deployment",
      },
      {
        code: "HOSTING",
        title: "Intégrer le produit complet",
        product: "HsSqlAgent.Hosting",
        description:
          "Intégrez dans une application ASP.NET Core la même composition officielle complète que celle de l'hôte Docker.",
        href: "docs/integration/aspnet-core",
      },
      {
        code: "SERVER",
        title: "Construire une intégration sur mesure",
        product: "HsSqlAgent.Server",
        description:
          "Choisissez explicitement l'exécution, la persistance, MCP, l'API d'administration, l'identité, la télémétrie et les approbations.",
        href: "docs/integration/aspnet-core",
      },
    ],
  },
  de: {
    kicker: "Einsatzmodell wählen",
    title: "Ein Produkt, drei Nutzungswege.",
    description:
      "Betreiben Sie den offiziellen Dienst eigenständig, betten Sie die vollständige Standardkomposition in ASP.NET Core ein oder stellen Sie eine eigene Integration zusammen. Das SQL-Sicherheitsmodell bleibt gleich.",
    paths: [
      {
        code: "DOCKER",
        title: "Eigenständig bereitstellen",
        product: "Docker",
        description:
          "Betreiben Sie das offizielle Image als eigenen Dienst mit Standard-Adminoberfläche, MCP-Endpunkt, Identität, Telemetrie und Freigabekonfiguration.",
        href: "docs/operations/deployment",
      },
      {
        code: "HOSTING",
        title: "Vollständiges Produkt einbetten",
        product: "HsSqlAgent.Hosting",
        description:
          "Betten Sie dieselbe vollständige offizielle Komposition wie beim Docker-Host in eine ASP.NET-Core-Anwendung ein.",
        href: "docs/integration/aspnet-core",
      },
      {
        code: "SERVER",
        title: "Eigene Integration aufbauen",
        product: "HsSqlAgent.Server",
        description:
          "Wählen Sie Runtime, Persistenz, MCP, Admin API, Identität, Telemetrie und Freigaben im Host ausdrücklich selbst aus.",
        href: "docs/integration/aspnet-core",
      },
    ],
  },
};

export function getHomeConsumption(locale: string): HomeConsumptionCopy {
  const normalized = homeConsumptionLocales.includes(
    locale as HomeConsumptionLocale
  )
    ? (locale as HomeConsumptionLocale)
    : "en";
  return copies[normalized];
}
