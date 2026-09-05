import type { MarketingPage } from "./marketing";

const safeDmlMarketingLocales = [
  "en",
  "zh-hant",
  "zh-hans",
  "ja",
  "ko",
  "fr",
  "de",
] as const;

type SafeDmlMarketingLocale = (typeof safeDmlMarketingLocales)[number];
type SafeDmlMarketingPage = Omit<MarketingPage, "locale"> & {
  locale: SafeDmlMarketingLocale;
};

const pages: Record<SafeDmlMarketingLocale, SafeDmlMarketingPage> = {
  en: {
    locale: "en",
    section: "features",
    slug: "safe-dml",
    order: 20,
    visual: "dml",
    title: "Safe DML with atomic transaction approval",
    headline: "Approve the exact mutation evidence, then commit all or nothing.",
    description:
      "execute_dml_sql handles one or more supported mutations through preview, approval, commit-time revalidation, and one server-owned atomic transaction. MCP Elicitation is the default approval path, with official Webhook and custom provider options.",
    eyebrow: "Safe DML",
    keywords: [
      "Safe DML",
      "atomic SQL transaction",
      "MCP approval",
      "DML webhook approval",
    ],
    highlights: [
      {
        title: "One tool, one transaction",
        description:
          "Semicolon-separated mutations stay inside execute_dml_sql, receive one approval, and commit atomically in original order.",
      },
      {
        title: "Evidence-bound approval",
        description:
          "UPDATE and DELETE bind exact row sets; INSERT VALUES binds immutable payloads and compiled commands.",
      },
      {
        title: "Pluggable approval",
        description:
          "Use MCP Elicitation, the official Webhook adapter, or a custom IDmlApprovalProvider without handing over SQL execution authority.",
      },
    ],
    relatedDocs: [
      { label: "Safe DML protocol", path: "docs/sql-compiler/safe-dml" },
      { label: "MCP Tools Reference", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "Atomic multi-statement DML without another tool",
        paragraphs: [
          "The built-in MCP surface stays small. execute_dml_sql itself accepts one or more supported UPDATE, DELETE, or INSERT VALUES statements separated by semicolons. A batch is approved once and committed as one server-owned transaction; any stale or failed statement rolls the whole transaction back.",
        ],
      },
      {
        title: "Approval never becomes execution authority",
        paragraphs: [
          "Approval providers receive transport-neutral evidence rather than a database connection, transaction, validated plan, or commit primitive. hs-sql-agent keeps validation, evidence binding, revalidation, and execution inside the server boundary.",
        ],
      },
      {
        title: "Durable external workflows still revalidate",
        paragraphs: [
          "An asynchronous provider can return Pending. A later completion reloads current authorization and database configuration, reparses and previews the DML, compares approved evidence, and only then creates a fresh short-lived execution challenge.",
        ],
      },
    ],
  },
  "zh-hant": {
    locale: "zh-hant",
    section: "features",
    slug: "safe-dml",
    order: 20,
    visual: "dml",
    title: "具原子交易核准的 Safe DML",
    headline: "核准精確的 Mutation Evidence，再決定整批提交或全部回滾。",
    description:
      "execute_dml_sql 以 Preview、核准、commit 前重新驗證與單一伺服器 Transaction 執行一個或多個受支援 DML。第一方預設是 MCP Elicitation，也可使用官方 Webhook 或客製 Provider。",
    eyebrow: "Safe DML",
    keywords: ["Safe DML", "原子 SQL 交易", "MCP 核准", "DML Webhook 核准"],
    highlights: [
      {
        title: "一個 Tool，一個 Transaction",
        description:
          "分號分隔的 DML 仍由 execute_dml_sql 處理，只核准一次，並依原順序原子提交。",
      },
      {
        title: "Evidence-bound 核准",
        description:
          "UPDATE / DELETE 綁定精確 Row Set；INSERT VALUES 綁定不可變 Payload 與編譯 Command。",
      },
      {
        title: "可替換核准 Provider",
        description:
          "可用 MCP Elicitation、官方 Webhook adapter 或客製 IDmlApprovalProvider，而且不會把 SQL 執行權交出去。",
      },
    ],
    relatedDocs: [
      { label: "Safe DML 協定", path: "docs/sql-compiler/safe-dml" },
      { label: "MCP Tools 參考", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "不新增 Tool，也能做原子 multi-statement DML",
        paragraphs: [
          "Built-in MCP Surface 維持精簡。execute_dml_sql 本身接受一個或多個以分號分隔的 UPDATE、DELETE、INSERT VALUES。Batch 只核准一次，由伺服器以單一 Transaction 提交；任何 Statement stale 或失敗都會整批 rollback。",
        ],
      },
      {
        title: "核准永遠不等於執行權",
        paragraphs: [
          "核准 Provider 收到的是 transport-neutral Evidence，不是 Database Connection、Transaction、已驗證 Plan 或 commit primitive。驗證、Evidence Binding、重新驗證與執行都留在 hs-sql-agent。",
        ],
      },
      {
        title: "Durable 外部流程仍會重新驗證",
        paragraphs: [
          "非同步 Provider 可回傳 Pending。後續完成決策會重新載入目前授權與資料庫設定、重新 Parse / Preview DML、比對核准 Evidence，再建立新的短效 Execution Challenge。",
        ],
      },
    ],
  },
  "zh-hans": {
    locale: "zh-hans",
    section: "features",
    slug: "safe-dml",
    order: 20,
    visual: "dml",
    title: "具备原子事务审批的 Safe DML",
    headline: "审批精确的 Mutation Evidence，再决定整批提交或全部回滚。",
    description:
      "execute_dml_sql 通过 Preview、审批、commit 前重新验证和单一服务器 Transaction 执行一个或多个受支持 DML。第一方默认是 MCP Elicitation，也可使用官方 Webhook 或自定义 Provider。",
    eyebrow: "Safe DML",
    keywords: ["Safe DML", "原子 SQL 事务", "MCP 审批", "DML Webhook 审批"],
    highlights: [
      {
        title: "一个 Tool，一个 Transaction",
        description:
          "用分号分隔的 DML 仍由 execute_dml_sql 处理，只审批一次，并按原顺序原子提交。",
      },
      {
        title: "Evidence-bound 审批",
        description:
          "UPDATE / DELETE 绑定精确 Row Set；INSERT VALUES 绑定不可变 Payload 和编译 Command。",
      },
      {
        title: "可替换审批 Provider",
        description:
          "可使用 MCP Elicitation、官方 Webhook adapter 或自定义 IDmlApprovalProvider，同时不把 SQL 执行权交给审批系统。",
      },
    ],
    relatedDocs: [
      { label: "Safe DML 协议", path: "docs/sql-compiler/safe-dml" },
      { label: "MCP Tools 参考", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "不新增 Tool，也能执行原子 multi-statement DML",
        paragraphs: [
          "Built-in MCP Surface 保持精简。execute_dml_sql 本身接受一个或多个以分号分隔的 UPDATE、DELETE、INSERT VALUES。Batch 只审批一次，由服务器在一个 Transaction 中提交；任意 Statement stale 或失败都会整批 rollback。",
        ],
      },
      {
        title: "审批永远不等于执行权",
        paragraphs: [
          "审批 Provider 收到的是 transport-neutral Evidence，不是 Database Connection、Transaction、已验证 Plan 或 commit primitive。验证、Evidence Binding、重新验证和执行都留在 hs-sql-agent。",
        ],
      },
      {
        title: "Durable 外部流程仍会重新验证",
        paragraphs: [
          "异步 Provider 可返回 Pending。后续完成决策会重新加载当前授权和数据库配置、重新 Parse / Preview DML、比对审批 Evidence，再创建新的短效 Execution Challenge。",
        ],
      },
    ],
  },
  ja: {
    locale: "ja",
    section: "features",
    slug: "safe-dml",
    order: 20,
    visual: "dml",
    title: "原子的な Transaction 承認を備えた Safe DML",
    headline: "正確な Mutation Evidence を承認し、全件 commit か全件 rollback かを決めます。",
    description:
      "execute_dml_sql は Preview、承認、commit 直前の再検証、1 つのサーバー所有 Transaction を通して 1 つ以上の対応 DML を実行します。第一方の既定は MCP Elicitation で、公式 Webhook や独自 Provider も利用できます。",
    eyebrow: "Safe DML",
    keywords: ["Safe DML", "atomic SQL transaction", "MCP 承認", "DML Webhook 承認"],
    highlights: [
      {
        title: "1 Tool、1 Transaction",
        description:
          "セミコロン区切りの DML は execute_dml_sql のまま扱い、1 回承認して元の順序で原子的に commit します。",
      },
      {
        title: "Evidence に結び付く承認",
        description:
          "UPDATE / DELETE は正確な Row Set、INSERT VALUES は不変 Payload と Compile 済み Command に結び付きます。",
      },
      {
        title: "差し替え可能な承認 Provider",
        description:
          "MCP Elicitation、公式 Webhook adapter、独自 IDmlApprovalProvider を使えますが、SQL 実行権限は渡しません。",
      },
    ],
    relatedDocs: [
      { label: "Safe DML プロトコル", path: "docs/sql-compiler/safe-dml" },
      { label: "MCP Tools Reference", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "Tool を増やさず atomic multi-statement DML",
        paragraphs: [
          "Built-in MCP Surface は小さいままです。execute_dml_sql 自体がセミコロンで区切った UPDATE、DELETE、INSERT VALUES を 1 つ以上受け取り、Batch を 1 回だけ承認して 1 つの Transaction で commit します。どれかが stale または失敗なら全体を rollback します。",
        ],
      },
      {
        title: "承認は実行権限にならない",
        paragraphs: [
          "承認 Provider が受け取るのは transport-neutral Evidence です。Database Connection、Transaction、検証済み Plan、commit primitive は渡りません。検証、Evidence Binding、再検証、実行は hs-sql-agent が所有します。",
        ],
      },
      {
        title: "Durable な外部 Workflow も再検証する",
        paragraphs: [
          "非同期 Provider は Pending を返せます。後の完了 Decision では現在の認可と DB 設定を再読み込みし、DML を再 Parse / Preview して Evidence を比較し、新しい短命 Execution Challenge を作ります。",
        ],
      },
    ],
  },
  ko: {
    locale: "ko",
    section: "features",
    slug: "safe-dml",
    order: 20,
    visual: "dml",
    title: "원자적 Transaction 승인을 갖춘 Safe DML",
    headline: "정확한 Mutation Evidence를 승인한 뒤 전체 commit 또는 전체 rollback을 결정합니다.",
    description:
      "execute_dml_sql은 Preview, 승인, commit 직전 재검증, 하나의 서버 소유 Transaction을 통해 하나 이상의 지원 DML을 실행합니다. 기본 공식 방식은 MCP Elicitation이며 공식 Webhook 또는 자체 Provider도 사용할 수 있습니다.",
    eyebrow: "Safe DML",
    keywords: ["Safe DML", "atomic SQL transaction", "MCP 승인", "DML Webhook 승인"],
    highlights: [
      {
        title: "하나의 Tool, 하나의 Transaction",
        description:
          "세미콜론으로 구분한 DML을 execute_dml_sql에서 그대로 처리하고 한 번 승인해 원래 순서대로 원자적으로 commit합니다.",
      },
      {
        title: "Evidence에 바인딩되는 승인",
        description:
          "UPDATE / DELETE는 정확한 Row Set, INSERT VALUES는 불변 Payload와 Compile된 Command에 바인딩됩니다.",
      },
      {
        title: "교체 가능한 승인 Provider",
        description:
          "MCP Elicitation, 공식 Webhook adapter, 자체 IDmlApprovalProvider를 사용할 수 있지만 SQL 실행 권한은 넘기지 않습니다.",
      },
    ],
    relatedDocs: [
      { label: "Safe DML 프로토콜", path: "docs/sql-compiler/safe-dml" },
      { label: "MCP Tools Reference", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "Tool을 늘리지 않고 atomic multi-statement DML",
        paragraphs: [
          "Built-in MCP Surface를 작게 유지합니다. execute_dml_sql 자체가 세미콜론으로 구분한 UPDATE, DELETE, INSERT VALUES를 하나 이상 받아 Batch를 한 번 승인하고 하나의 Transaction에서 commit합니다. 하나라도 stale 또는 실패하면 전체를 rollback합니다.",
        ],
      },
      {
        title: "승인은 실행 권한이 아니다",
        paragraphs: [
          "승인 Provider는 transport-neutral Evidence를 받을 뿐 Database Connection, Transaction, 검증된 Plan, commit primitive를 받지 않습니다. 검증, Evidence Binding, 재검증, 실행은 hs-sql-agent가 소유합니다.",
        ],
      },
      {
        title: "Durable 외부 Workflow도 재검증",
        paragraphs: [
          "비동기 Provider는 Pending을 반환할 수 있습니다. 나중의 완료 Decision에서는 현재 권한과 DB 설정을 다시 읽고 DML을 재 Parse / Preview해 Evidence를 비교한 뒤 새로운 단기 Execution Challenge를 만듭니다.",
        ],
      },
    ],
  },
  fr: {
    locale: "fr",
    section: "features",
    slug: "safe-dml",
    order: 20,
    visual: "dml",
    title: "Safe DML avec approbation de Transaction atomique",
    headline: "Approuvez les Mutation Evidence exactes, puis commit tout ou rien.",
    description:
      "execute_dml_sql exécute une ou plusieurs mutations prises en charge après Preview, approbation, revalidation avant commit et dans une seule Transaction contrôlée par le serveur. MCP Elicitation reste la voie officielle par défaut, avec Webhook officiel ou Provider personnalisé en option.",
    eyebrow: "Safe DML",
    keywords: ["Safe DML", "transaction SQL atomique", "approbation MCP", "approbation Webhook DML"],
    highlights: [
      {
        title: "Un Tool, une Transaction",
        description:
          "Les DML séparées par des points-virgules restent dans execute_dml_sql, reçoivent une seule approbation et sont commit atomiquement dans l'ordre d'origine.",
      },
      {
        title: "Approbation liée aux Evidence",
        description:
          "UPDATE / DELETE lient les Row Sets exacts ; INSERT VALUES lie les Payloads immuables et les Commands compilées.",
      },
      {
        title: "Provider d'approbation remplaçable",
        description:
          "Utilisez MCP Elicitation, l'adapter Webhook officiel ou un IDmlApprovalProvider personnalisé sans céder l'autorité d'exécution SQL.",
      },
    ],
    relatedDocs: [
      { label: "Protocole Safe DML", path: "docs/sql-compiler/safe-dml" },
      { label: "Référence des outils MCP", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "DML multi-statement atomique sans ajouter de Tool",
        paragraphs: [
          "La surface MCP built-in reste petite. execute_dml_sql accepte lui-même une ou plusieurs instructions UPDATE, DELETE ou INSERT VALUES séparées par des points-virgules. Le Batch reçoit une seule approbation et est commit dans une Transaction ; tout Statement stale ou en échec entraîne un rollback complet.",
        ],
      },
      {
        title: "L'approbation ne devient jamais autorité d'exécution",
        paragraphs: [
          "Le Provider reçoit des Evidence indépendantes du transport, pas une Database Connection, une Transaction, un Plan validé ou une primitive de commit. hs-sql-agent conserve validation, Evidence Binding, revalidation et exécution.",
        ],
      },
      {
        title: "Les Workflows externes durables restent revalidés",
        paragraphs: [
          "Un Provider asynchrone peut retourner Pending. Une décision ultérieure recharge l'autorisation et la configuration DB actuelles, Parse et Preview de nouveau le DML, compare les Evidence et crée ensuite un nouveau Execution Challenge de courte durée.",
        ],
      },
    ],
  },
  de: {
    locale: "de",
    section: "features",
    slug: "safe-dml",
    order: 20,
    visual: "dml",
    title: "Safe DML mit atomarer Transaction-Freigabe",
    headline: "Exakte Mutation Evidence freigeben und danach alles oder nichts committen.",
    description:
      "execute_dml_sql verarbeitet eine oder mehrere unterstützte Mutationen über Preview, Freigabe, Revalidierung vor dem Commit und eine einzige serverseitige Transaction. MCP Elicitation bleibt der offizielle Standard; offizieller Webhook oder eigener Provider sind ebenfalls möglich.",
    eyebrow: "Safe DML",
    keywords: ["Safe DML", "atomare SQL-Transaktion", "MCP Freigabe", "DML Webhook Freigabe"],
    highlights: [
      {
        title: "Ein Tool, eine Transaction",
        description:
          "Durch Semikolons getrennte DML bleibt in execute_dml_sql, wird einmal freigegeben und in Originalreihenfolge atomar committet.",
      },
      {
        title: "Evidence-gebundene Freigabe",
        description:
          "UPDATE / DELETE bindet exakte Row Sets; INSERT VALUES bindet unveränderliche Payloads und kompilierte Commands.",
      },
      {
        title: "Austauschbarer Freigabe-Provider",
        description:
          "MCP Elicitation, offizieller Webhook-Adapter oder eigener IDmlApprovalProvider sind möglich, ohne SQL-Ausführungsautorität zu übertragen.",
      },
    ],
    relatedDocs: [
      { label: "Safe-DML-Protokoll", path: "docs/sql-compiler/safe-dml" },
      { label: "MCP Tools Reference", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "Atomare Multi-Statement-DML ohne zusätzliches Tool",
        paragraphs: [
          "Die Built-in-MCP-Oberfläche bleibt klein. execute_dml_sql akzeptiert selbst eine oder mehrere durch Semikolons getrennte UPDATE-, DELETE- oder INSERT-VALUES-Anweisungen. Der Batch wird einmal freigegeben und in einer Transaction committet; jedes stale oder fehlgeschlagene Statement führt zum vollständigen Rollback.",
        ],
      },
      {
        title: "Freigabe wird nie zu Ausführungsautorität",
        paragraphs: [
          "Der Provider erhält transportneutrale Evidence statt Database Connection, Transaction, validiertem Plan oder Commit-Primitive. Validierung, Evidence Binding, Revalidierung und Ausführung bleiben bei hs-sql-agent.",
        ],
      },
      {
        title: "Durable externe Workflows werden weiterhin revalidiert",
        paragraphs: [
          "Ein asynchroner Provider kann Pending zurückgeben. Eine spätere Entscheidung lädt aktuelle Autorisierung und DB-Konfiguration neu, parst und previewt das DML erneut, vergleicht die Evidence und erstellt erst dann einen neuen kurzlebigen Execution Challenge.",
        ],
      },
    ],
  },
};

export function getSafeDmlMarketingPage(locale: string): SafeDmlMarketingPage {
  const normalized = safeDmlMarketingLocales.includes(
    locale as SafeDmlMarketingLocale
  )
    ? (locale as SafeDmlMarketingLocale)
    : "en";
  return pages[normalized];
}
