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
    title: "AI Agent 的 SQL MCP Server | hs-sql-agent",
    description:
      "開源 SQL MCP Server，支援 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 與 Firebird；在執行前驗證 AI 產生的 SQL、套用伺服器端存取政策，並以核准流程控管 DML。",
  },
  "zh-hans": {
    title: "面向 AI Agent 的 SQL MCP Server | hs-sql-agent",
    description:
      "开源 SQL MCP Server，支持 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 与 Firebird；在执行前验证 AI 生成的 SQL、执行服务器端访问策略，并通过审批流程控制 DML。",
  },
  ja: {
    title: "AI エージェント向け SQL MCP サーバー | hs-sql-agent",
    description:
      "PostgreSQL、MySQL、SQL Server、Oracle、SQLite、Firebird に対応するオープンソースの SQL MCP サーバー。AI が生成した SQL を実行前に検証し、サーバー側のアクセスポリシーと DML 承認を適用します。",
  },
  ko: {
    title: "AI 에이전트용 SQL MCP 서버 | hs-sql-agent",
    description:
      "PostgreSQL, MySQL, SQL Server, Oracle, SQLite, Firebird를 지원하는 오픈소스 SQL MCP 서버입니다. AI가 생성한 SQL을 실행 전에 검증하고 서버 측 접근 정책과 DML 승인 절차를 적용합니다.",
  },
  fr: {
    title: "Serveur MCP SQL pour agents IA | hs-sql-agent",
    description:
      "Serveur MCP SQL open source pour PostgreSQL, MySQL, SQL Server, Oracle, SQLite et Firebird. Validez le SQL généré par l’IA, appliquez les politiques côté serveur et soumettez les DML à approbation.",
  },
  de: {
    title: "SQL-MCP-Server für KI-Agenten | hs-sql-agent",
    description:
      "Open-Source-SQL-MCP-Server für PostgreSQL, MySQL, SQL Server, Oracle, SQLite und Firebird. KI-generiertes SQL wird vor der Ausführung geprüft, serverseitigen Richtlinien unterworfen und DML kann freigabepflichtig sein.",
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
      title: "AI Agent 的資料庫 MCP Server | hs-sql-agent",
      description:
        "以同一個受治理的 SQL MCP Server 連接 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 與 Firebird，並在執行前套用方言驗證、存取政策、DML 核准與稽核。",
    },
    features: {
      title: "AI Agent 的 SQL MCP 安全功能 | hs-sql-agent",
      description:
        "了解 hs-sql-agent 如何驗證 AI 產生的 SQL、限制資料庫與資料表存取，並以失敗即拒絕的流程控管 UPDATE 與 DELETE。",
    },
    integrations: {
      title: "SQL MCP 整合：Claude、Cursor 與 .NET | hs-sql-agent",
      description:
        "把 Claude Desktop、Cursor 或 ASP.NET Core 應用程式連到同一個受治理的 SQL MCP Server，資料庫權限仍由伺服器端掌控。",
    },
  },
  "zh-hans": {
    databases: {
      title: "面向 AI Agent 的数据库 MCP Server | hs-sql-agent",
      description:
        "使用同一个受治理的 SQL MCP Server 连接 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 与 Firebird，并在执行前进行方言验证、访问控制、DML 审批和审计。",
    },
    features: {
      title: "AI Agent 的 SQL MCP 安全功能 | hs-sql-agent",
      description:
        "了解 hs-sql-agent 如何验证 AI 生成的 SQL、限制数据库与表的访问，并通过默认拒绝的流程控制 UPDATE 与 DELETE。",
    },
    integrations: {
      title: "SQL MCP 集成：Claude、Cursor 与 .NET | hs-sql-agent",
      description:
        "将 Claude Desktop、Cursor 或 ASP.NET Core 应用连接到同一个受治理的 SQL MCP Server，并把数据库权限保留在服务器端。",
    },
  },
  ja: {
    databases: {
      title: "AI エージェント向けデータベース MCP サーバー | hs-sql-agent",
      description:
        "PostgreSQL、MySQL、SQL Server、Oracle、SQLite、Firebird を 1 つの統制された SQL MCP サーバーから利用し、方言検証、アクセスポリシー、DML 承認、監査を実行前に適用します。",
    },
    features: {
      title: "AI エージェント向け SQL MCP セキュリティ | hs-sql-agent",
      description:
        "AI が生成した SQL の検証、データベースとテーブルのアクセス制御、UPDATE・DELETE の承認付き実行をどのように実現するかを確認できます。",
    },
    integrations: {
      title: "SQL MCP 連携：Claude、Cursor、.NET | hs-sql-agent",
      description:
        "Claude Desktop、Cursor、ASP.NET Core アプリケーションを同じ統制された SQL MCP サーバーへ接続し、データベース権限をサーバー側に保ちます。",
    },
  },
  ko: {
    databases: {
      title: "AI 에이전트용 데이터베이스 MCP 서버 | hs-sql-agent",
      description:
        "PostgreSQL, MySQL, SQL Server, Oracle, SQLite, Firebird를 하나의 통제된 SQL MCP 서버로 연결하고 실행 전에 방언 검증, 접근 정책, DML 승인, 감사를 적용합니다.",
    },
    features: {
      title: "AI 에이전트용 SQL MCP 보안 | hs-sql-agent",
      description:
        "AI가 생성한 SQL 검증, 데이터베이스·테이블 접근 제어, UPDATE·DELETE 승인 절차를 hs-sql-agent가 어떻게 서버에서 강제하는지 확인하세요.",
    },
    integrations: {
      title: "SQL MCP 통합: Claude, Cursor, .NET | hs-sql-agent",
      description:
        "Claude Desktop, Cursor 또는 ASP.NET Core 애플리케이션을 하나의 통제된 SQL MCP 서버에 연결하고 데이터베이스 권한은 서버 측에 유지합니다.",
    },
  },
  fr: {
    databases: {
      title: "Serveur MCP pour bases de données et agents IA | hs-sql-agent",
      description:
        "Un serveur MCP SQL gouverné pour PostgreSQL, MySQL, SQL Server, Oracle, SQLite et Firebird, avec validation des dialectes, politiques d’accès, approbation DML et audit.",
    },
    features: {
      title: "Sécurité SQL MCP pour agents IA | hs-sql-agent",
      description:
        "Découvrez comment hs-sql-agent valide le SQL généré par l’IA, contrôle l’accès aux bases et aux tables, et encadre UPDATE et DELETE par un flux à refus par défaut.",
    },
    integrations: {
      title: "Intégrations SQL MCP : Claude, Cursor et .NET | hs-sql-agent",
      description:
        "Connectez Claude Desktop, Cursor ou une application ASP.NET Core au même serveur MCP SQL gouverné tout en conservant l’autorité sur la base côté serveur.",
    },
  },
  de: {
    databases: {
      title: "Datenbank-MCP-Server für KI-Agenten | hs-sql-agent",
      description:
        "Ein kontrollierter SQL-MCP-Server für PostgreSQL, MySQL, SQL Server, Oracle, SQLite und Firebird mit Dialektprüfung, Zugriffsrichtlinien, DML-Freigabe und Audit.",
    },
    features: {
      title: "SQL-MCP-Sicherheit für KI-Agenten | hs-sql-agent",
      description:
        "Erfahren Sie, wie hs-sql-agent KI-generiertes SQL prüft, Datenbank- und Tabellenzugriffe begrenzt und UPDATE sowie DELETE mit einem sicheren Ablehnungs- und Freigabeprozess steuert.",
    },
    integrations: {
      title: "SQL-MCP-Integrationen: Claude, Cursor und .NET | hs-sql-agent",
      description:
        "Verbinden Sie Claude Desktop, Cursor oder eine ASP.NET-Core-Anwendung mit demselben kontrollierten SQL-MCP-Server und behalten Sie Datenbankberechtigungen auf dem Server.",
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
  "zh-hant": {
    "features/sql-compiler": {
      title: "AI SQL 安全與失敗即拒絕編譯器 | hs-sql-agent",
      description:
        "在執行前以型別化、失敗即拒絕的 SQL 編譯器驗證 AI 產生的原始 SQL，檢查語意、資料庫能力、存取政策與對應資料庫的 SQL 輸出。",
    },
    "features/safe-dml": {
      title: "AI Agent 的安全 DML 核准 | hs-sql-agent",
      description:
        "先預覽 UPDATE 與 DELETE 的影響範圍，取得明確核准，並在提交交易中重新驗證目標資料列後才允許修改。",
    },
    "features/access-control": {
      title: "AI 資料庫存取控制 | hs-sql-agent",
      description:
        "以受限 MCP 金鑰、資料表允許清單、工具限制、速率限制、撤銷與稽核政策，把資料庫授權留在模型之外。",
    },
    "integrations/claude-desktop": {
      title: "Claude Desktop 的 SQL MCP Server | hs-sql-agent",
      description:
        "讓 Claude Desktop 透過受治理的 SQL MCP Server 探索結構、執行已驗證查詢、限制資料庫範圍，並以核准流程控管 DML。",
    },
    "integrations/cursor": {
      title: "Cursor 的 SQL MCP Server | hs-sql-agent",
      description:
        "讓 Cursor 連到受治理的 SQL MCP Server，AI 產生的 SQL 仍須經過方言驗證、受限資料庫存取、DML 核准與伺服器端稽核。",
    },
    "integrations/aspnet-core": {
      title: "ASP.NET Core 的 SQL MCP Server | hs-sql-agent",
      description:
        "使用 HsSqlAgent.Server 套件把 SQL MCP Server 嵌入 ASP.NET Core，同時保留相同的 SQL 編譯與治理邊界。",
    },
  },
  "zh-hans": {
    "features/sql-compiler": {
      title: "AI SQL 安全与默认拒绝编译器 | hs-sql-agent",
      description:
        "在执行前使用类型化、默认拒绝的 SQL 编译器验证 AI 生成的原始 SQL，检查语义、数据库能力、访问策略和目标数据库 SQL 输出。",
    },
    "features/safe-dml": {
      title: "AI Agent 的安全 DML 审批 | hs-sql-agent",
      description:
        "先预览 UPDATE 与 DELETE 的影响范围，取得明确审批，并在提交事务中重新验证目标行之后才允许修改。",
    },
    "features/access-control": {
      title: "AI 数据库访问控制 | hs-sql-agent",
      description:
        "通过受限 MCP 密钥、表白名单、工具限制、速率限制、撤销与审计策略，把数据库授权留在模型之外。",
    },
    "integrations/claude-desktop": {
      title: "Claude Desktop 的 SQL MCP Server | hs-sql-agent",
      description:
        "让 Claude Desktop 通过受治理的 SQL MCP Server 探索数据库结构、执行已验证查询、限制数据库范围，并通过审批流程控制 DML。",
    },
    "integrations/cursor": {
      title: "Cursor 的 SQL MCP Server | hs-sql-agent",
      description:
        "让 Cursor 连接受治理的 SQL MCP Server，AI 生成的 SQL 仍须经过方言验证、受限数据库访问、DML 审批和服务器端审计。",
    },
    "integrations/aspnet-core": {
      title: "ASP.NET Core 的 SQL MCP Server | hs-sql-agent",
      description:
        "使用 HsSqlAgent.Server 包把 SQL MCP Server 嵌入 ASP.NET Core，同时保留相同的 SQL 编译与治理边界。",
    },
  },
  ja: {
    "features/sql-compiler": {
      title: "AI SQL の安全性とフェイルクローズ型コンパイラ | hs-sql-agent",
      description:
        "AI が生成した生の SQL を実行前に型付きのフェイルクローズ型コンパイラで検証し、意味、データベース機能、アクセスポリシー、接続先向け SQL を確認します。",
    },
    "features/safe-dml": {
      title: "AI エージェント向け安全な DML 承認 | hs-sql-agent",
      description:
        "UPDATE・DELETE の影響範囲を事前確認し、人の明示的な承認を取得し、コミット時に対象行を再検証してから変更を確定します。",
    },
    "features/access-control": {
      title: "AI データベースのアクセス制御 | hs-sql-agent",
      description:
        "権限を絞った MCP キー、テーブル許可リスト、ツール制限、レート制限、失効、監査によってデータベース権限をモデルの外側で管理します。",
    },
    "integrations/claude-desktop": {
      title: "Claude Desktop 向け SQL MCP サーバー | hs-sql-agent",
      description:
        "Claude Desktop から統制された SQL MCP サーバーへ接続し、スキーマ探索、検証済みクエリ、限定されたデータベースアクセス、承認付き DML を利用できます。",
    },
    "integrations/cursor": {
      title: "Cursor 向け SQL MCP サーバー | hs-sql-agent",
      description:
        "Cursor を統制された SQL MCP サーバーへ接続し、生成 SQL に方言検証、限定アクセス、DML 承認、サーバー側監査を適用します。",
    },
    "integrations/aspnet-core": {
      title: "ASP.NET Core 向け SQL MCP サーバー | hs-sql-agent",
      description:
        "HsSqlAgent.Server パッケージで SQL MCP サーバーを ASP.NET Core へ組み込み、同じ SQL コンパイラと統制境界を維持します。",
    },
  },
  ko: {
    "features/sql-compiler": {
      title: "AI SQL 안전성과 실패 시 차단형 컴파일러 | hs-sql-agent",
      description:
        "AI가 생성한 원시 SQL을 실행 전에 타입 기반 컴파일러로 검증하고 의미, 데이터베이스 기능, 접근 정책, 대상 데이터베이스용 SQL을 확인합니다.",
    },
    "features/safe-dml": {
      title: "AI 에이전트용 안전한 DML 승인 | hs-sql-agent",
      description:
        "UPDATE와 DELETE의 영향 범위를 먼저 확인하고 명시적 승인을 받은 뒤 커밋 트랜잭션에서 대상 행을 재검증한 경우에만 변경합니다.",
    },
    "features/access-control": {
      title: "AI 데이터베이스 접근 제어 | hs-sql-agent",
      description:
        "범위를 제한한 MCP 키, 테이블 허용 목록, 도구 제한, 요청 속도 제한, 키 폐기, 감사를 통해 데이터베이스 권한을 모델 밖에서 관리합니다.",
    },
    "integrations/claude-desktop": {
      title: "Claude Desktop용 SQL MCP 서버 | hs-sql-agent",
      description:
        "Claude Desktop을 통제된 SQL MCP 서버에 연결해 스키마 탐색, 검증된 쿼리, 제한된 데이터베이스 접근, 승인 기반 DML을 사용합니다.",
    },
    "integrations/cursor": {
      title: "Cursor용 SQL MCP 서버 | hs-sql-agent",
      description:
        "Cursor를 통제된 SQL MCP 서버에 연결하고 생성된 SQL에 방언 검증, 제한된 데이터베이스 접근, DML 승인, 서버 측 감사를 적용합니다.",
    },
    "integrations/aspnet-core": {
      title: "ASP.NET Core용 SQL MCP 서버 | hs-sql-agent",
      description:
        "HsSqlAgent.Server 패키지로 SQL MCP 서버를 ASP.NET Core 애플리케이션에 내장하면서 동일한 SQL 컴파일러와 통제 경계를 유지합니다.",
    },
  },
  fr: {
    "features/sql-compiler": {
      title: "Sécurité SQL pour l’IA et compilateur à refus par défaut | hs-sql-agent",
      description:
        "Validez le SQL brut généré par l’IA avant exécution avec un compilateur typé qui refuse par défaut ce qui ne peut pas être prouvé : sémantique, capacités du moteur, politiques d’accès et rendu SQL.",
    },
    "features/safe-dml": {
      title: "DML sécurisé pour agents IA | hs-sql-agent",
      description:
        "Prévisualisez l’impact de UPDATE et DELETE, exigez une approbation explicite, puis revérifiez les lignes dans la transaction avant toute modification.",
    },
    "features/access-control": {
      title: "Contrôle d’accès aux bases de données pour l’IA | hs-sql-agent",
      description:
        "Gardez l’autorisation hors du modèle grâce aux clés MCP à portée limitée, listes de tables autorisées, restrictions d’outils, limites de débit, révocation et audit.",
    },
    "integrations/claude-desktop": {
      title: "Serveur MCP SQL pour Claude Desktop | hs-sql-agent",
      description:
        "Connectez Claude Desktop à un serveur MCP SQL gouverné pour explorer le schéma, exécuter des requêtes validées, limiter l’accès aux bases et soumettre les DML à approbation.",
    },
    "integrations/cursor": {
      title: "Serveur MCP SQL pour Cursor | hs-sql-agent",
      description:
        "Connectez Cursor à un serveur MCP SQL gouverné et appliquez au SQL généré la validation du dialecte, un accès limité, l’approbation DML et l’audit côté serveur.",
    },
    "integrations/aspnet-core": {
      title: "Serveur MCP SQL pour ASP.NET Core | hs-sql-agent",
      description:
        "Intégrez le serveur MCP SQL dans ASP.NET Core avec le package HsSqlAgent.Server tout en conservant le même compilateur SQL et la même frontière de gouvernance.",
    },
  },
  de: {
    "features/sql-compiler": {
      title: "SQL-Sicherheit für KI und Fail-Closed-Compiler | hs-sql-agent",
      description:
        "Prüfen Sie KI-generiertes Roh-SQL vor der Ausführung mit einem typisierten Compiler, der unsichere Fälle ablehnt und Semantik, Datenbankfähigkeiten, Zugriffsrichtlinien sowie Ziel-SQL validiert.",
    },
    "features/safe-dml": {
      title: "Sicheres DML für KI-Agenten | hs-sql-agent",
      description:
        "Prüfen Sie die Auswirkungen von UPDATE und DELETE vorab, verlangen Sie eine ausdrückliche Freigabe und validieren Sie die Zielzeilen in der Commit-Transaktion erneut.",
    },
    "features/access-control": {
      title: "Datenbank-Zugriffskontrolle für KI | hs-sql-agent",
      description:
        "Halten Sie Datenbankberechtigungen mit begrenzten MCP-Schlüsseln, Tabellenfreigaben, Tool-Einschränkungen, Rate Limits, Widerruf und Audit außerhalb des Modells.",
    },
    "integrations/claude-desktop": {
      title: "SQL-MCP-Server für Claude Desktop | hs-sql-agent",
      description:
        "Verbinden Sie Claude Desktop mit einem kontrollierten SQL-MCP-Server für Schema-Erkundung, validierte Abfragen, begrenzten Datenbankzugriff und freigabepflichtiges DML.",
    },
    "integrations/cursor": {
      title: "SQL-MCP-Server für Cursor | hs-sql-agent",
      description:
        "Verbinden Sie Cursor mit einem kontrollierten SQL-MCP-Server und erzwingen Sie für generiertes SQL Dialektprüfung, begrenzten Zugriff, DML-Freigabe und serverseitiges Audit.",
    },
    "integrations/aspnet-core": {
      title: "SQL-MCP-Server für ASP.NET Core | hs-sql-agent",
      description:
        "Betten Sie den SQL-MCP-Server mit dem Paket HsSqlAgent.Server in ASP.NET Core ein und behalten Sie denselben SQL-Compiler sowie dieselbe Governance-Grenze bei.",
    },
  },
};

const databaseProviderBySlug: Record<string, string> = {
  postgresql: "PostgreSQL",
  mysql: "MySQL",
  "sql-server": "SQL Server",
  oracle: "Oracle",
  sqlite: "SQLite",
  firebird: "Firebird",
};

function getDatabasePageSearchIntentSeo(
  locale: string,
  provider: string,
  siteTitle: string
): SearchIntentSeo {
  switch (locale) {
    case "zh-hant":
      return {
        title: `${provider} MCP Server for AI Agent | ${siteTitle}`,
        description: `以受治理的 ${provider} MCP Server 讓 AI Agent 探索資料庫結構並執行已驗證 SQL，同時保留伺服器端存取政策、DML 核准與稽核。`,
      };
    case "zh-hans":
      return {
        title: `${provider} MCP Server for AI Agent | ${siteTitle}`,
        description: `使用受治理的 ${provider} MCP Server 让 AI Agent 探索数据库结构并执行已验证 SQL，同时保留服务器端访问策略、DML 审批和审计。`,
      };
    case "ja":
      return {
        title: `AI エージェント向け ${provider} MCP サーバー | ${siteTitle}`,
        description: `統制された ${provider} MCP サーバーで AI エージェントからスキーマを探索し、検証済み SQL を実行。アクセスポリシー、DML 承認、監査はサーバー側で維持します。`,
      };
    case "ko":
      return {
        title: `AI 에이전트용 ${provider} MCP 서버 | ${siteTitle}`,
        description: `통제된 ${provider} MCP 서버에서 AI 에이전트가 스키마를 탐색하고 검증된 SQL을 실행하도록 하면서 접근 정책, DML 승인, 감사를 서버 측에 유지합니다.`,
      };
    case "fr":
      return {
        title: `Serveur MCP ${provider} pour agents IA | ${siteTitle}`,
        description: `Utilisez un serveur MCP ${provider} gouverné pour explorer le schéma et exécuter du SQL validé depuis un agent IA, avec politiques d’accès, approbation DML et audit côté serveur.`,
      };
    case "de":
      return {
        title: `${provider}-MCP-Server für KI-Agenten | ${siteTitle}`,
        description: `Nutzen Sie einen kontrollierten ${provider}-MCP-Server für Schema-Erkundung und validiertes SQL durch KI-Agenten, während Zugriffsrichtlinien, DML-Freigaben und Audit serverseitig bleiben.`,
      };
    default:
      return {
        title: `${provider} MCP Server for AI Agents | ${siteTitle}`,
        description: `Open-source ${provider} MCP server for AI agents. Discover schema and run validated SQL behind server-side access policy, Safe DML, and audit controls.`,
      };
  }
}

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

  if (page.section === "databases") {
    const provider =
      databaseProviderBySlug[page.slug] ??
      page.title.replace(/\s+MCP (?:Server|サーバー|서버)$/, "");
    return getDatabasePageSearchIntentSeo(page.locale, provider, siteTitle);
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

  const provider = databaseProviderBySlug[page.slug] ?? page.title;

  switch (page.locale) {
    case "en":
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
    case "zh-hant":
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
    case "zh-hans":
      return {
        headline: `面向 AI Agent 的 ${provider} MCP Server。`,
        title: `为什么不直接把 ${provider} 账号交给 AI？`,
        paragraphs: [
          `如果 MCP 客户端直接持有数据库凭据，模型能做什么往往只剩数据库账号权限这一道边界。hs-sql-agent 将真正的 ${provider} 连接保留在服务器端，SQL 执行前还会经过编译器、MCP 密钥范围、表访问策略、工具限制和运行时限制。`,
          "这样既能保留受支持范围内的原始 SQL 能力，也不会把“能够生成 SQL”等同于“拥有不受限制的数据库权限”。",
        ],
        bullets: [
          "受支持的语句仍可使用原始 SQL",
          "数据库凭据保留在服务器边界内",
          "无法证明安全语义时先拒绝再执行",
          "数据修改可以要求人工明确审批",
        ],
      };
    case "ja":
      return {
        headline: `AI エージェント向け ${provider} MCP サーバー。`,
        title: `なぜ ${provider} の認証情報を AI に直接渡さないのか？`,
        paragraphs: [
          `MCP クライアントがデータベース認証情報を直接持つと、モデルの権限境界はそのアカウントが実行できる操作にほぼ依存します。hs-sql-agent は実際の ${provider} 接続をサーバー側に保持し、SQL を実行する前にコンパイラ、MCP キーの範囲、テーブルポリシー、ツール制限、実行時制限を確認します。`,
          "これにより、対応範囲の生 SQL はそのまま使いながら、SQL を生成できることとデータベースへの無制限アクセスを切り離せます。",
        ],
        bullets: [
          "対応する文では生 SQL を利用可能",
          "データベース認証情報はサーバー側に保持",
          "安全な意味を証明できない場合は実行前に拒否",
          "DML は人の明示的な承認を必須にできる",
        ],
      };
    case "ko":
      return {
        headline: `AI 에이전트용 ${provider} MCP 서버.`,
        title: `왜 ${provider} 계정 정보를 AI에 직접 주지 않아야 할까요?`,
        paragraphs: [
          `MCP 클라이언트가 데이터베이스 자격 증명을 직접 가지면 모델의 권한 경계는 사실상 해당 계정이 할 수 있는 작업에 의존하게 됩니다. hs-sql-agent는 실제 ${provider} 연결을 서버에 유지하고 SQL 실행 전에 컴파일러, MCP 키 범위, 테이블 정책, 도구 제한, 런타임 제한을 확인합니다.`,
          "따라서 지원되는 원시 SQL의 표현력은 유지하면서 SQL을 생성할 수 있다는 사실이 무제한 데이터베이스 권한으로 이어지지 않게 할 수 있습니다.",
        ],
        bullets: [
          "지원되는 구문에서는 원시 SQL 사용 가능",
          "데이터베이스 자격 증명은 서버 경계 안에 유지",
          "안전한 의미를 증명할 수 없으면 실행 전에 거부",
          "DML은 사람의 명시적 승인을 요구하도록 설정 가능",
        ],
      };
    case "fr":
      return {
        headline: `Serveur MCP ${provider} pour agents IA.`,
        title: `Pourquoi ne pas donner directement les identifiants ${provider} à l’IA ?`,
        paragraphs: [
          `Si le client MCP détient directement les identifiants de la base, la limite de pouvoir du modèle correspond pratiquement à tout ce que ce compte ${provider} peut exécuter. hs-sql-agent conserve la connexion réelle côté serveur et vérifie, avant toute exécution, le compilateur SQL, la portée de la clé MCP, les politiques de tables, les outils autorisés et les limites d’exécution.`,
          "On conserve ainsi l’expressivité du SQL brut pour les instructions prises en charge sans transformer la génération de SQL en accès illimité à la base.",
        ],
        bullets: [
          "le SQL brut reste disponible pour les instructions prises en charge",
          "les identifiants de base restent derrière la frontière serveur",
          "les sémantiques non prouvées sont refusées avant exécution",
          "les DML peuvent exiger une approbation humaine explicite",
        ],
      };
    case "de":
      return {
        headline: `${provider}-MCP-Server für KI-Agenten.`,
        title: `Warum sollten ${provider}-Zugangsdaten nicht direkt an die KI gehen?`,
        paragraphs: [
          `Wenn der MCP-Client Datenbankzugangsdaten direkt besitzt, entspricht die Berechtigungsgrenze des Modells im Wesentlichen allem, was dieses ${provider}-Konto ausführen darf. hs-sql-agent hält die echte Verbindung auf dem Server und prüft vor der Ausführung SQL-Compiler, MCP-Schlüsselumfang, Tabellenrichtlinien, erlaubte Tools und Laufzeitgrenzen.`,
          "So bleibt Roh-SQL für unterstützte Anweisungen verfügbar, ohne dass die Fähigkeit, SQL zu erzeugen, zu uneingeschränkter Datenbankautorität wird.",
        ],
        bullets: [
          "Roh-SQL bleibt für unterstützte Anweisungen verfügbar",
          "Datenbankzugangsdaten bleiben hinter der Servergrenze",
          "nicht beweisbare Semantik wird vor der Ausführung abgelehnt",
          "DML kann eine ausdrückliche menschliche Freigabe erfordern",
        ],
      };
    default:
      return undefined;
  }
}
