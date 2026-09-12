export type MarketingUiStrings = {
  footerTagline: string;
  footerNavigation: string;
  homeLabel: string;
  breadcrumbLabel: string;
  learnMore: string;
  integrations: {
    claudeDesktop: string;
    cursor: string;
    aspNetCore: string;
  };
  sections: {
    databases: [title: string, description: string];
    features: [title: string, description: string];
    integrations: [title: string, description: string];
  };
};

const marketingUi: Record<string, MarketingUiStrings> = {
  en: {
    footerTagline:
      "A compiler, policy, and human-approval boundary between AI-generated SQL and your databases.",
    footerNavigation: "Footer navigation",
    homeLabel: "Home",
    breadcrumbLabel: "Breadcrumb",
    learnMore: "Learn more",
    integrations: {
      claudeDesktop: "Direct Streamable HTTP MCP with a scoped server key.",
      cursor: "Remote MCP plus custom headers, with policy kept server-side.",
      aspNetCore: "Embed with the HsSqlAgent.Server NuGet package.",
    },
    sections: {
      databases: [
        "Database MCP Server for AI agents",
        "Use one governed SQL MCP server with PostgreSQL, MySQL, SQL Server, Oracle, SQLite, or Firebird.",
      ],
      features: [
        "SQL MCP security features",
        "Validate AI-generated SQL, enforce server-side access policy, and gate database mutations before execution.",
      ],
      integrations: [
        "SQL MCP integrations",
        "Connect Claude Desktop, Cursor, or an ASP.NET Core application to the same governed SQL MCP server.",
      ],
    },
  },
  "zh-hant": {
    footerTagline:
      "在 AI 產生的 SQL 與資料庫之間建立編譯、存取政策與人工核准的安全邊界。",
    footerNavigation: "頁尾導覽",
    homeLabel: "首頁",
    breadcrumbLabel: "麵包屑導覽",
    learnMore: "了解更多",
    integrations: {
      claudeDesktop:
        "使用受限的伺服器金鑰，透過 Streamable HTTP 直接連接 MCP。",
      cursor: "透過自訂要求標頭連接遠端 MCP，存取政策仍由伺服器端執行。",
      aspNetCore: "使用 HsSqlAgent.Server NuGet 套件嵌入既有 .NET 主機。",
    },
    sections: {
      databases: [
        "AI Agent 的 SQL 資料庫 MCP Server",
        "以同一個受治理的 SQL MCP Server 連接 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 或 Firebird。",
      ],
      features: [
        "SQL MCP 安全功能",
        "在 SQL 執行前驗證 AI 產生的內容、套用伺服器端存取政策，並控管資料修改。",
      ],
      integrations: [
        "SQL MCP 整合",
        "讓 Claude Desktop、Cursor 或 ASP.NET Core 應用程式連到同一個受治理的 SQL MCP Server。",
      ],
    },
  },
  "zh-hans": {
    footerTagline:
      "在 AI 生成的 SQL 与数据库之间建立编译、访问策略和人工审批的安全边界。",
    footerNavigation: "页脚导航",
    homeLabel: "首页",
    breadcrumbLabel: "面包屑导航",
    learnMore: "了解更多",
    integrations: {
      claudeDesktop:
        "使用权限受限的服务器密钥，通过 Streamable HTTP 直接连接 MCP。",
      cursor: "通过自定义请求头连接远程 MCP，访问策略仍由服务器端执行。",
      aspNetCore: "使用 HsSqlAgent.Server NuGet 包嵌入现有 .NET 宿主。",
    },
    sections: {
      databases: [
        "面向 AI Agent 的数据库 MCP Server",
        "通过同一个受治理的 SQL MCP Server 连接 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 或 Firebird。",
      ],
      features: [
        "SQL MCP 安全功能",
        "在 SQL 执行前验证 AI 生成的内容、执行服务器端访问策略，并控制数据修改。",
      ],
      integrations: [
        "SQL MCP 集成",
        "将 Claude Desktop、Cursor 或 ASP.NET Core 应用连接到同一个受治理的 SQL MCP Server。",
      ],
    },
  },
  ja: {
    footerTagline:
      "AI が生成する SQL とデータベースの間に、コンパイル、アクセスポリシー、人による承認の安全境界を設けます。",
    footerNavigation: "フッターナビゲーション",
    homeLabel: "ホーム",
    breadcrumbLabel: "パンくずリスト",
    learnMore: "詳しく見る",
    integrations: {
      claudeDesktop:
        "権限を絞ったサーバーキーを使い、Streamable HTTP で MCP へ直接接続します。",
      cursor:
        "カスタム要求ヘッダーでリモート MCP へ接続し、アクセスポリシーはサーバー側で適用します。",
      aspNetCore:
        "HsSqlAgent.Server NuGet パッケージを使って既存の .NET ホストへ組み込みます。",
    },
    sections: {
      databases: [
        "AI エージェント向けデータベース MCP サーバー",
        "1 つの統制された SQL MCP サーバーから PostgreSQL、MySQL、SQL Server、Oracle、SQLite、Firebird を利用できます。",
      ],
      features: [
        "SQL MCP のセキュリティ機能",
        "AI が生成した SQL を実行前に検証し、サーバー側のアクセスポリシーとデータ変更の制御を適用します。",
      ],
      integrations: [
        "SQL MCP 連携",
        "Claude Desktop、Cursor、ASP.NET Core アプリケーションを同じ統制された SQL MCP サーバーへ接続します。",
      ],
    },
  },
  ko: {
    footerTagline:
      "AI가 생성한 SQL과 데이터베이스 사이에 컴파일, 접근 정책, 사람의 승인을 담당하는 안전 경계를 둡니다.",
    footerNavigation: "푸터 내비게이션",
    homeLabel: "홈",
    breadcrumbLabel: "이동 경로",
    learnMore: "자세히 보기",
    integrations: {
      claudeDesktop:
        "권한 범위를 제한한 서버 키를 사용해 Streamable HTTP로 MCP에 직접 연결합니다.",
      cursor:
        "사용자 지정 요청 헤더로 원격 MCP에 연결하고 접근 정책은 서버에서 적용합니다.",
      aspNetCore:
        "HsSqlAgent.Server NuGet 패키지로 기존 .NET 호스트에 내장합니다.",
    },
    sections: {
      databases: [
        "AI 에이전트용 데이터베이스 MCP 서버",
        "하나의 통제된 SQL MCP 서버에서 PostgreSQL, MySQL, SQL Server, Oracle, SQLite, Firebird를 연결합니다.",
      ],
      features: [
        "SQL MCP 보안 기능",
        "AI가 생성한 SQL을 실행 전에 검증하고 서버 측 접근 정책과 데이터 변경 제어를 적용합니다.",
      ],
      integrations: [
        "SQL MCP 통합",
        "Claude Desktop, Cursor 또는 ASP.NET Core 애플리케이션을 하나의 통제된 SQL MCP 서버에 연결합니다.",
      ],
    },
  },
  fr: {
    footerTagline:
      "Une couche de contrôle pour la compilation, les politiques d’accès et l’approbation humaine entre le SQL généré par l’IA et vos bases de données.",
    footerNavigation: "Navigation du pied de page",
    homeLabel: "Accueil",
    breadcrumbLabel: "Fil d’Ariane",
    learnMore: "En savoir plus",
    integrations: {
      claudeDesktop:
        "Connexion MCP directe via Streamable HTTP avec une clé serveur à périmètre limité.",
      cursor:
        "MCP distant avec en-têtes personnalisés, tandis que les politiques d’accès restent appliquées côté serveur.",
      aspNetCore:
        "Intégration dans un hôte .NET existant avec le package NuGet HsSqlAgent.Server.",
    },
    sections: {
      databases: [
        "Serveur MCP pour bases de données et agents IA",
        "Utilisez un même serveur MCP SQL gouverné avec PostgreSQL, MySQL, SQL Server, Oracle, SQLite ou Firebird.",
      ],
      features: [
        "Sécurité SQL MCP",
        "Validez le SQL généré par l’IA avant exécution, appliquez les politiques d’accès côté serveur et contrôlez les modifications.",
      ],
      integrations: [
        "Intégrations SQL MCP",
        "Connectez Claude Desktop, Cursor ou une application ASP.NET Core au même serveur MCP SQL gouverné.",
      ],
    },
  },
  de: {
    footerTagline:
      "Eine Sicherheitsgrenze für Kompilierung, Zugriffsrichtlinien und menschliche Freigaben zwischen KI-generiertem SQL und Ihren Datenbanken.",
    footerNavigation: "Fußzeilennavigation",
    homeLabel: "Startseite",
    breadcrumbLabel: "Breadcrumb-Navigation",
    learnMore: "Mehr erfahren",
    integrations: {
      claudeDesktop:
        "Direkte MCP-Verbindung über Streamable HTTP mit einem Server-Schlüssel mit eingeschränktem Berechtigungsumfang.",
      cursor:
        "Remote-MCP-Verbindung mit benutzerdefinierten Anforderungsheadern; Zugriffsrichtlinien bleiben serverseitig.",
      aspNetCore:
        "Mit dem NuGet-Paket HsSqlAgent.Server in einen vorhandenen .NET-Host einbetten.",
    },
    sections: {
      databases: [
        "Datenbank-MCP-Server für KI-Agenten",
        "Verbinden Sie PostgreSQL, MySQL, SQL Server, Oracle, SQLite oder Firebird über einen gemeinsamen kontrollierten SQL-MCP-Server.",
      ],
      features: [
        "SQL-MCP-Sicherheitsfunktionen",
        "Prüfen Sie KI-generiertes SQL vor der Ausführung, erzwingen Sie serverseitige Zugriffsrichtlinien und kontrollieren Sie Datenänderungen.",
      ],
      integrations: [
        "SQL-MCP-Integrationen",
        "Verbinden Sie Claude Desktop, Cursor oder eine ASP.NET-Core-Anwendung mit demselben kontrollierten SQL-MCP-Server.",
      ],
    },
  },
};

export function useMarketingUi(locale: string = "en"): MarketingUiStrings {
  return marketingUi[locale] ?? marketingUi.en;
}
