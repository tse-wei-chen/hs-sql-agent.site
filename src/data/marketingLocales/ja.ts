import type { MarketingSection } from "../marketing";
import { aspNetCoreCode, databaseProviders } from "./common";
import type { MarketingCopy } from "./types";

const pages: Record<string, MarketingCopy> = {
  "features/sql-compiler": {
    title: "フェイルクローズな SQL コンパイラ",
    headline: "AI が生成した SQL を、信頼できない入力として扱う。",
    description:
      "hs-sql-agent は SQL を型付きコンパイラパイプラインで解析し、ソース側の意味とポリシーを検証し、ターゲットの capability を確認してから、各データベース向けの SQL を生成します。",
    eyebrow: "SQL コンパイラ",
    keywords: [
      "SQL コンパイラ",
      "MCP SQL",
      "AI SQL セキュリティ",
      "fail closed SQL",
    ],
    highlights: [
      {
        title: "まず解析",
        description:
          "SQL をデータベースドライバへ直接渡さず、構造化された parser に通します。",
      },
      {
        title: "Capability を検証",
        description:
          "ソースまたはターゲットの意味を保証できない場合は、暗黙に弱い意味へ変換せず拒否します。",
      },
      {
        title: "Provider ごとにコンパイル",
        description: "データベース固有の差異を明示的な実行境界の中で扱います。",
      },
    ],
    relatedDocs: [
      { label: "SQL 実行モデル", path: "docs/sql-compiler/execution-model" },
      {
        label: "データベース方言",
        path: "docs/sql-compiler/database-dialects",
      },
    ],
    body: [
      {
        title: "生成 SQL は入力であって、権限ではない",
        paragraphs: [
          "LLM は SQL を提案できますが、データベースがその SQL を解析できるという理由だけで実行可能になるわけではありません。hs-sql-agent はモデルと接続の間にコンパイラとポリシーの境界を置きます。",
          "安全に表現または証明できない文は、実行させるために別の意味へ書き換えるのではなく拒否します。",
        ],
      },
      {
        title: "型付きの実行経路",
        paragraphs: [
          "Query は parsing、binding、validation、capability check、provider-specific compilation、immutable command execution の順に進みます。ポリシーは raw SQL 文字列だけではなく、構造化された statement を対象に判断できます。",
        ],
        bullets: [
          "単一 statement の Query 検証",
          "テーブル認可と Query ポリシー",
          "source / target dialect の capability 境界",
          "検証後にだけ行う provider-specific rendering",
        ],
      },
      {
        title: "安全契約を崩さず SQL 対応範囲を広げる",
        paragraphs: [
          "新しい構文は parser、型付きモデル、validation、capability proof、renderer、テストのすべてで意味を扱えるようになって初めてサポートされます。対応範囲を増やしても fail-closed の原則は変わりません。",
        ],
      },
    ],
  },
  "features/safe-dml": {
    title: "人の承認を必須にする Safe DML",
    headline: "プレビューし、承認し、再検証してからコミット。",
    description:
      "UPDATE と DELETE は複数段階の承認プロトコルを通り、人の承認を検証済みプランに結び付け、コミット用トランザクション内で対象行セットを再確認します。",
    eyebrow: "Safe DML",
    keywords: ["Safe DML", "MCP 承認", "SQL 人手承認", "AI データベース更新"],
    highlights: [
      {
        title: "プレビュー",
        description: "Mutation を実行する前に、影響を受ける行を確認します。",
      },
      {
        title: "承認",
        description:
          "一回限りの承認用チャレンジを、検証済みの操作に結び付けます。",
      },
      {
        title: "再検証",
        description:
          "コミット前にトランザクション内で行セットをもう一度確認します。",
      },
    ],
    relatedDocs: [
      { label: "Safe DML プロトコル", path: "docs/sql-compiler/safe-dml" },
    ],
    body: [
      {
        title: "承認はダイアログではなくプロトコル",
        paragraphs: [
          "AI が生成した mutation が本番データを変更できるなら、確認ボタンだけでは不十分です。hs-sql-agent は影響プレビュー、明示的な承認、トランザクション時の再検証、コミットを別々の段階として扱います。",
        ],
      },
      {
        title: "確認した内容そのものに承認を結び付ける",
        paragraphs: [
          "承認フローは、検証済みの操作とその時点で観測した影響を基準に構成されます。コミット前に、plan、policy、challenge、row count、row set が承認時の context と一致しているかをサーバーが確認します。",
        ],
        bullets: [
          "読み取り専用の影響プレビュー",
          "一回限りの承認用チャレンジ",
          "人の判断を取得する MCP form Elicitation",
          "トランザクション内での row-set 再検証",
        ],
      },
      {
        title: "Custom DML Tool も同じ境界を通る",
        paragraphs: [
          "公開済み Custom Tool が DML を実行する場合も、同じ型付き承認フローを通ります。Tool として公開する方法が変わっても、mutation の安全契約は変わりません。",
        ],
      },
    ],
  },
  "features/access-control": {
    title: "AI エージェント向けデータベースアクセス制御",
    headline: "認可をモデルの外側に置く。",
    description:
      "各 MCP key を、公開するデータベース、Tool、テーブル、Rate Limit、Runtime Policy に限定します。LLM が prompt からその境界を書き換えることはできません。",
    eyebrow: "ガバナンス",
    keywords: [
      "MCP アクセス制御",
      "AI データベースガバナンス",
      "SQL table allowlist",
      "MCP key セキュリティ",
    ],
    highlights: [
      {
        title: "Key ごとの Scope",
        description:
          "Credential を具体的なデータベースと許可する MCP Tool に結び付けます。",
      },
      {
        title: "テーブル境界",
        description:
          "モデルの指示とは独立して table allowlist と Query Policy を適用します。",
      },
      {
        title: "運用上の制限",
        description:
          "Rate Limit、並列数、失効、Audit を prompt の外側で適用します。",
      },
    ],
    relatedDocs: [
      { label: "セキュリティ概要", path: "docs/security/overview" },
      { label: "MCP Tools Reference", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "ポリシーはサーバーに置く",
        paragraphs: [
          "Prompt は認可システムではありません。hs-sql-agent は SQL が実行段階へ進む前に、認証済み key、データベース binding、許可 Tool、テーブル境界、Runtime Security Policy を評価します。",
        ],
      },
      {
        title: "Key には必要最小限の機能だけを公開する",
        paragraphs: [
          "MCP key は、Client が実際に必要とするデータベースと Tool に限定できます。組み込み Tool と公開済み Custom Tool は、呼び出し前に key configuration と照合されます。",
        ],
        bullets: [
          "database binding",
          "許可する MCP Tool",
          "table whitelist",
          "実効 Rate Limit",
          "失効・有効期限状態",
        ],
      },
      {
        title: "実行境界を Audit できる状態にする",
        paragraphs: [
          "Query と DML の実行では、Tool、operation、timing、返却・影響行数、承認状態、compiler-derived facts などの Audit context を記録できます。モデルとの対話が終わった後もガバナンスを検証できます。",
        ],
      },
    ],
  },
  "integrations/claude-desktop": {
    title: "Claude Desktop + hs-sql-agent",
    headline: "Claude に、管理された SQL MCP エンドポイントを提供する。",
    description:
      "Claude Desktop を MCP 経由で hs-sql-agent に接続し、データベース探索、Query、Custom Tool、承認が必要な DML をサーバー側ポリシーの内側に保ちます。",
    eyebrow: "Claude Desktop · MCP",
    keywords: [
      "Claude Desktop MCP SQL",
      "Claude database MCP",
      "Claude PostgreSQL MCP",
    ],
    highlights: [
      {
        title: "MCP に準拠",
        description: "他の互換 Client と同じ MCP Server surface を利用します。",
      },
      {
        title: "Scope された Credential",
        description:
          "Claude が利用できるデータベースと Tool にだけ紐付く MCP key を発行します。",
      },
      {
        title: "DML は人が承認",
        description:
          "Mutation はコミット前に MCP form Elicitation を要求できます。",
      },
    ],
    relatedDocs: [
      {
        label: "MCP Client のセットアップ",
        path: "docs/mcp/client-onboarding",
      },
      { label: "MCP Tools Reference", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "Client を接続し、データベースのパスワードは渡さない",
        paragraphs: [
          "Claude Desktop は MCP を通じて hs-sql-agent と通信します。実際のデータベース接続、認可、ポリシー、コンパイラ、Audit の責務はサーバー側に残ります。",
        ],
      },
      {
        title: "Client が必要な Tool だけを公開する",
        paragraphs: [
          "Claude 専用の MCP key を、metadata discovery、SELECT 実行、選択した Custom Tool、またはワークフローに応じた DML のみに制限できます。",
        ],
      },
    ],
  },
  "integrations/cursor": {
    title: "Cursor + hs-sql-agent",
    headline: "Cursor から管理された SQL Tool を使う。",
    description:
      "Cursor を MCP で hs-sql-agent に接続し、生成 SQL を本番と同じコンパイラ、データベース Scope、Tool Policy、Audit 境界の内側で扱います。",
    eyebrow: "Cursor · MCP",
    keywords: [
      "Cursor MCP SQL",
      "Cursor database MCP",
      "Cursor PostgreSQL MCP",
    ],
    highlights: [
      {
        title: "Schema Discovery",
        description:
          "認証済み metadata Tool から schema、table、column を確認できます。",
      },
      {
        title: "コンパイル済み Query",
        description:
          "生成された SELECT は実行前に型付き Query Runtime を通ります。",
      },
      {
        title: "制御された Mutation",
        description: "DML は Safe DML 承認プロトコルで引き続き制御できます。",
      },
    ],
    relatedDocs: [
      {
        label: "MCP Client のセットアップ",
        path: "docs/mcp/client-onboarding",
      },
      { label: "SQL 実行モデル", path: "docs/sql-compiler/execution-model" },
    ],
    body: [
      {
        title: "コーディング支援とデータベース権限を分離する",
        paragraphs: [
          "Cursor は SQL Tool を生成・呼び出せますが、実際にデータベースへ到達してよい操作を決めるのは hs-sql-agent です。モデルの context がデータベース認可に変わることはありません。",
        ],
      },
      {
        title: "開発中も本番と同じ境界を使う",
        paragraphs: [
          "開発用 Client でも、本番と同じ MCP key scope、compiler、Query Policy、Safe DML、Audit path を利用できます。利便性のためだけに別の unrestricted connection を作る必要はありません。",
        ],
      },
    ],
  },
  "integrations/aspnet-core": {
    title: "hs-sql-agent を ASP.NET Core に組み込む",
    headline:
      ".NET ホストが必要とする hs-sql-agent capability だけを組み合わせる。",
    description:
      "HsSqlAgent.Server 2.0.2 を組み込み可能な ASP.NET Core class library として利用します。既存ホストの認証と controller mapping を維持し、Admin API、MCP、組み込み Identity、Admin UI は必要なものだけ有効化できます。",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: ["HsSqlAgent.Server", "ASP.NET Core MCP server", ".NET SQL MCP"],
    highlights: [
      {
        title: "AddHsSqlAgentCore",
        description:
          "従来の all-in-one registration ではなく、options を持たない core から開始します。",
      },
      {
        title: "Capability を組み合わせる",
        description:
          "Runtime、Admin Store/API、MCP、Telemetry、組み込み Identity を個別に追加できます。",
      },
      {
        title: "Pipeline は Host が所有",
        description:
          "既存アプリが authentication、authorization middleware、MapControllers() を引き続き管理します。",
      },
    ],
    relatedDocs: [
      { label: "ASP.NET Core 連携", path: "docs/integration/aspnet-core" },
    ],
    body: [
      {
        title: "既存 ASP.NET Core Host に組み込む",
        paragraphs: [
          "HsSqlAgent.Server は class-library integration surface であり、アプリケーションの内部に別の Web Host を隠して起動する仕組みではありません。2.0.2 の新規連携は AddHsSqlAgentCore() から始め、必要な capability を明示的に選びます。",
          "アプリケーションがすでに login と permission を管理している場合は、hs-sql-agent の組み込み member/role identity stack を導入せず、Admin authorization を Host Policy に委譲できます。",
        ],
        code: {
          label: "ASP.NET Core 2.0.2",
          language: "csharp",
          value: aspNetCoreCode,
        },
      },
      {
        title: "組み込み Identity と Admin UI は任意",
        paragraphs: [
          "Host が hs-sql-agent 自身の JWT/member/role model を必要とする場合は、Host Authorization の代わりに AddHsSqlAgentBuiltInAuth() を選びます。2 つの authorization mode は同時には使えません。",
          "同梱 Admin UI も任意です。既存アプリは Admin API だけを公開して自前 Frontend を使うことも、必要に応じて packaged UI を追加することもできます。",
        ],
      },
      {
        title: "組み込みでも SQL の安全境界は変わらない",
        paragraphs: [
          "Hosting topology が変わっても、Query compilation、Safe DML、MCP-key scope、Policy、Provider capability check、Audit は同じ hs-sql-agent Runtime 境界を通ります。",
        ],
      },
    ],
  },
};

function databaseCopy(provider: string): MarketingCopy {
  return {
    title: `${provider} MCP Server`,
    headline: `${provider} への AI アクセスをサーバー側で管理する。`,
    description: `hs-sql-agent の MCP surface、型付き SQL コンパイラ、アクセス制御、Safe DML、Audit 境界を通じて、AI Client を ${provider} に安全に接続します。`,
    eyebrow: `${provider} · MCP`,
    keywords: [
      `${provider} MCP server`,
      `${provider} AI agent`,
      `安全な ${provider} MCP`,
      `${provider} SQL コンパイラ`,
    ],
    highlights: [
      {
        title: "管理された単一 MCP surface",
        description: `モデルに無制限のデータベース接続を渡さず ${provider} を公開します。`,
      },
      {
        title: "Dialect-aware compiler",
        description: `${provider} 固有の SQL 意味論を明示的な source / target capability 境界で扱います。`,
      },
      {
        title: "実行前に Policy",
        description:
          "Database scope、table policy、Tool 制限、Rate Limit、Safe DML、Audit をコミットより前に適用します。",
      },
    ],
    relatedDocs: [
      {
        label: "データベース方言",
        path: "docs/sql-compiler/database-dialects",
      },
      { label: "SQL 実行モデル", path: "docs/sql-compiler/execution-model" },
      {
        label: "MCP Client のセットアップ",
        path: "docs/mcp/client-onboarding",
      },
    ],
    body: [
      {
        title: `${provider} もコンパイラ境界の内側に置く`,
        paragraphs: [
          `モデルが生成した ${provider} SQL を、データベース自身が実行できるという理由だけで信頼することはありません。まず型付き validation と capability pipeline を通します。`,
          "Provider support は、接続、metadata discovery、対応 statement のコンパイル、Policy 下での実行が可能という意味です。ベンダー固有のあらゆる構文を自動的に許可するという意味ではありません。",
        ],
      },
      {
        title: "Schema を推測する前に Metadata を使う",
        paragraphs: [
          `MCP Client は ${provider} SQL を組み立てる前に、組み込み metadata Tool から schema、table、column を取得できます。盲目的な schema 推測を減らし、同じ認証済み database scope の内側で discovery を行えます。`,
        ],
        bullets: [
          "get_schemas",
          "get_tables",
          "get_columns",
          "execute_query_sql",
          "execute_dml_sql",
        ],
      },
      {
        title: "意味を証明できなければ拒否する",
        paragraphs: [
          `他の Provider と同様に ${provider} でも、未対応の構文や cross-provider semantics は適切な validation / capability 境界で拒否します。異なる動作の SQL へ暗黙に書き換えることはありません。`,
        ],
      },
    ],
  };
}

export function getJaMarketingCopy(
  section: MarketingSection,
  slug: string
): MarketingCopy | undefined {
  if (section === "databases") {
    const provider = databaseProviders[slug];
    return provider ? databaseCopy(provider) : undefined;
  }
  return pages[`${section}/${slug}`];
}
