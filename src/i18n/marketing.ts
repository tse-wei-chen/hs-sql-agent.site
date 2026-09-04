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
      cursor:
        "Remote MCP plus custom headers, with policy kept server-side.",
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
      "在 AI-generated SQL 與資料庫之間建立 compiler、policy 與 human approval boundary。",
    footerNavigation: "頁尾導覽",
    homeLabel: "首頁",
    breadcrumbLabel: "麵包屑導覽",
    learnMore: "了解更多",
    integrations: {
      claudeDesktop: "Direct Streamable HTTP MCP，使用 scoped server key。",
      cursor: "Remote MCP + custom header，policy 保留在 server-side。",
      aspNetCore: "透過 HsSqlAgent.Server NuGet package 嵌入既有 .NET host。",
    },
    sections: {
      databases: [
        "資料庫支援",
        "安全連接 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 與 Firebird。",
      ],
      features: [
        "產品能力",
        "了解 hs-sql-agent 的 compiler、Safe DML 與 governance boundary。",
      ],
      integrations: [
        "整合",
        "連接 MCP Client，或把 hs-sql-agent 嵌入既有 .NET 應用程式。",
      ],
    },
  },
  "zh-hans": {
    footerTagline:
      "在 AI 生成的 SQL 与数据库之间建立 compiler、policy 与人工批准边界。",
    footerNavigation: "页脚导航",
    homeLabel: "首页",
    breadcrumbLabel: "面包屑导航",
    learnMore: "了解更多",
    integrations: {
      claudeDesktop: "Direct Streamable HTTP MCP，使用 scoped server key。",
      cursor: "Remote MCP + custom header，policy 保持在 server-side。",
      aspNetCore: "通过 HsSqlAgent.Server NuGet package 嵌入现有 .NET host。",
    },
    sections: {
      databases: [
        "数据库支持",
        "安全连接 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 与 Firebird。",
      ],
      features: [
        "产品能力",
        "了解 hs-sql-agent 的 compiler、Safe DML 与 governance boundary。",
      ],
      integrations: [
        "集成",
        "连接 MCP Client，或将 hs-sql-agent 嵌入现有 .NET 应用。",
      ],
    },
  },
  ja: {
    footerTagline:
      "AI が生成する SQL とデータベースの間に compiler、policy、人による承認の境界を設けます。",
    footerNavigation: "フッターナビゲーション",
    homeLabel: "ホーム",
    breadcrumbLabel: "パンくずリスト",
    learnMore: "詳しく見る",
    integrations: {
      claudeDesktop:
        "scoped server key を使う Direct Streamable HTTP MCP 接続。",
      cursor:
        "custom header を使う Remote MCP。policy は server-side に保持します。",
      aspNetCore:
        "HsSqlAgent.Server NuGet package で既存の .NET host に組み込みます。",
    },
    sections: {
      databases: [
        "データベースサポート",
        "PostgreSQL、MySQL、SQL Server、Oracle、SQLite、Firebird への安全な MCP アクセス。",
      ],
      features: [
        "製品機能",
        "hs-sql-agent の compiler、Safe DML、governance boundary を確認します。",
      ],
      integrations: [
        "連携",
        "MCP client を接続するか、既存の .NET application に hs-sql-agent を組み込みます。",
      ],
    },
  },
  ko: {
    footerTagline:
      "AI가 생성한 SQL과 데이터베이스 사이에 compiler, policy, 사용자 승인 경계를 둡니다.",
    footerNavigation: "푸터 탐색",
    homeLabel: "홈",
    breadcrumbLabel: "경로 탐색",
    learnMore: "자세히 보기",
    integrations: {
      claudeDesktop:
        "scoped server key를 사용하는 Direct Streamable HTTP MCP 연결.",
      cursor:
        "custom header를 사용하는 Remote MCP. policy는 server-side에 유지합니다.",
      aspNetCore:
        "HsSqlAgent.Server NuGet package로 기존 .NET host에 내장합니다.",
    },
    sections: {
      databases: [
        "데이터베이스 지원",
        "PostgreSQL, MySQL, SQL Server, Oracle, SQLite, Firebird에 대한 안전한 MCP 접근.",
      ],
      features: [
        "제품 기능",
        "hs-sql-agent의 compiler, Safe DML, governance boundary를 살펴봅니다.",
      ],
      integrations: [
        "통합",
        "MCP client를 연결하거나 기존 .NET application에 hs-sql-agent를 내장합니다.",
      ],
    },
  },
};

export function useMarketingUi(locale: string = "en"): MarketingUiStrings {
  return marketingUi[locale] ?? marketingUi.en;
}
