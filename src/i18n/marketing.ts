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
        "Database support",
        "Secure MCP access for PostgreSQL, MySQL, SQL Server, Oracle, SQLite, and Firebird.",
      ],
      features: [
        "Product capabilities",
        "Explore the compiler, Safe DML, and governance boundaries behind hs-sql-agent.",
      ],
      integrations: [
        "Integrations",
        "Connect MCP clients and embed hs-sql-agent into existing .NET applications.",
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
        "資料庫支援",
        "安全連接 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 與 Firebird。",
      ],
      features: [
        "產品功能",
        "了解 hs-sql-agent 的 SQL 編譯器、Safe DML 與存取控制邊界。",
      ],
      integrations: [
        "整合",
        "連接 MCP 用戶端，或把 hs-sql-agent 嵌入既有 .NET 應用程式。",
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
        "数据库支持",
        "安全连接 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 与 Firebird。",
      ],
      features: [
        "产品功能",
        "了解 hs-sql-agent 的 SQL 编译器、Safe DML 与访问控制边界。",
      ],
      integrations: [
        "集成",
        "连接 MCP 客户端，或将 hs-sql-agent 嵌入现有 .NET 应用。",
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
        "データベース対応",
        "PostgreSQL、MySQL、SQL Server、Oracle、SQLite、Firebird へ安全に MCP 接続できます。",
      ],
      features: [
        "製品機能",
        "hs-sql-agent の SQL コンパイラ、Safe DML、アクセス制御の境界を確認します。",
      ],
      integrations: [
        "連携",
        "MCP クライアントを接続するか、既存の .NET アプリケーションへ hs-sql-agent を組み込みます。",
      ],
    },
  },
  ko: {
    footerTagline:
      "AI가 생성한 SQL과 데이터베이스 사이에 컴파일, 접근 정책, 사용자 승인을 담당하는 안전 경계를 둡니다.",
    footerNavigation: "푸터 탐색",
    homeLabel: "홈",
    breadcrumbLabel: "경로 탐색",
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
        "데이터베이스 지원",
        "PostgreSQL, MySQL, SQL Server, Oracle, SQLite, Firebird에 안전하게 MCP로 접근합니다.",
      ],
      features: [
        "제품 기능",
        "hs-sql-agent의 SQL 컴파일러, Safe DML, 접근 제어 경계를 살펴봅니다.",
      ],
      integrations: [
        "통합",
        "MCP 클라이언트를 연결하거나 기존 .NET 애플리케이션에 hs-sql-agent를 내장합니다.",
      ],
    },
  },
};

export function useMarketingUi(locale: string = "en"): MarketingUiStrings {
  return marketingUi[locale] ?? marketingUi.en;
}
