export type MarketingSection = "databases" | "features" | "integrations";
export type MarketingLocale = "en" | "zh-hant";
export type MarketingVisual = "compiler" | "dml" | "policy" | "database" | "integration";

export type MarketingHighlight = {
  title: string;
  description: string;
};

export type MarketingRelatedDoc = {
  label: string;
  path: string;
};

export type MarketingBodySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  code?: {
    label?: string;
    language?: string;
    value: string;
  };
};

export type MarketingPage = {
  locale: MarketingLocale;
  section: MarketingSection;
  slug: string;
  order: number;
  visual: MarketingVisual;
  title: string;
  description: string;
  eyebrow: string;
  headline?: string;
  keywords: string[];
  highlights: MarketingHighlight[];
  relatedDocs: MarketingRelatedDoc[];
  body: MarketingBodySection[];
};

type LocalizedPageCopy = Omit<
  MarketingPage,
  "locale" | "section" | "slug" | "order" | "visual"
>;

type MarketingPageDefinition = {
  section: MarketingSection;
  slug: string;
  order: number;
  visual: MarketingVisual;
  copy: Record<MarketingLocale, LocalizedPageCopy>;
};

const definitions: MarketingPageDefinition[] = [
  {
    section: "features",
    slug: "sql-compiler",
    order: 10,
    visual: "compiler",
    copy: {
      en: {
        title: "Fail-closed SQL compiler",
        headline: "Treat AI-generated SQL as untrusted input.",
        description:
          "hs-sql-agent parses SQL into a typed compiler pipeline, validates source semantics and policy, proves target capabilities, and only then emits provider-specific SQL.",
        eyebrow: "SQL Compiler",
        keywords: ["SQL compiler", "MCP SQL", "AI SQL safety", "fail closed SQL"],
        highlights: [
          { title: "Parse first", description: "SQL enters a structured parser instead of going directly to a database driver." },
          { title: "Prove capabilities", description: "Unsupported source or target semantics are rejected instead of silently downgraded." },
          { title: "Compile per provider", description: "The execution boundary keeps database-specific behavior explicit." },
        ],
        relatedDocs: [
          { label: "SQL execution model", path: "docs/sql-compiler/execution-model" },
          { label: "Database dialects", path: "docs/sql-compiler/database-dialects" },
        ],
        body: [
          {
            title: "Generated SQL is input, not authority",
            paragraphs: [
              "An LLM can propose SQL, but the proposal does not become executable merely because it parses on a database. hs-sql-agent places a compiler and policy boundary between the model and the connection.",
              "The pipeline is designed to fail closed: a statement that cannot be represented or proven safely is rejected rather than rewritten into a different meaning just to make it run.",
            ],
          },
          {
            title: "A typed execution path",
            paragraphs: [
              "Queries pass through parsing, binding, validation, capability checks, provider-specific compilation, and immutable command execution. That gives policy enforcement a structured statement to reason about instead of raw text alone.",
            ],
            bullets: [
              "single-statement query validation",
              "table authorization and query policy checks",
              "source and target dialect capability boundaries",
              "provider-specific rendering only after validation",
            ],
          },
          {
            title: "Capability growth without silent fallback",
            paragraphs: [
              "The supported SQL surface can expand over time without weakening the safety contract. New syntax is added by teaching the parser, typed model, validation, capability proofs, rendering, and tests about the new semantics.",
            ],
          },
        ],
      },
      "zh-hant": {
        title: "Fail-closed SQL compiler",
        headline: "把 AI 產生的 SQL 當成不可信輸入。",
        description:
          "hs-sql-agent 先把 SQL 送進 typed compiler pipeline，驗證來源語意與 policy、證明 target capability，最後才產生 provider-specific SQL。",
        eyebrow: "SQL Compiler",
        keywords: ["SQL compiler", "MCP SQL", "AI SQL 安全", "fail closed SQL"],
        highlights: [
          { title: "先 Parse", description: "SQL 不會直接送進 database driver，而是先進入結構化 parser。" },
          { title: "證明 Capability", description: "來源或目標語意無法證明時直接拒絕，不偷偷降級。" },
          { title: "依 Provider Compile", description: "不同資料庫的差異留在明確的執行邊界裡處理。" },
        ],
        relatedDocs: [
          { label: "SQL execution model", path: "docs/sql-compiler/execution-model" },
          { label: "Database dialects", path: "docs/sql-compiler/database-dialects" },
        ],
        body: [
          {
            title: "AI 產生的 SQL 只是輸入，不是授權",
            paragraphs: [
              "LLM 可以提出 SQL，但不是只要資料庫本身能 parse，就代表這段 SQL 應該被執行。hs-sql-agent 在模型與連線之間建立 compiler 與 policy boundary。",
              "整條 pipeline 採 fail-closed：無法安全表示或證明的 statement 直接拒絕，不會為了『能跑』而改寫成語意不同的 SQL。",
            ],
          },
          {
            title: "Typed execution path",
            paragraphs: [
              "Query 依序經過 parsing、binding、validation、capability check、provider-specific compilation 與 immutable command execution，讓安全政策面對的是結構化 statement，而不是只靠 raw SQL text。",
            ],
            bullets: [
              "single-statement query validation",
              "table authorization 與 query policy",
              "source / target dialect capability boundary",
              "驗證完成後才做 provider-specific rendering",
            ],
          },
          {
            title: "擴充語法，不犧牲 fail-closed",
            paragraphs: [
              "SQL 支援面可以持續擴充，但不需要放棄安全契約。新的語法必須同時進入 parser、typed model、validation、capability proof、renderer 與測試，才算真正被支援。",
            ],
          },
        ],
      },
    },
  },
  {
    section: "features",
    slug: "safe-dml",
    order: 20,
    visual: "dml",
    copy: {
      en: {
        title: "Human-approved Safe DML",
        headline: "Preview, approve, revalidate, then commit.",
        description:
          "UPDATE and DELETE follow a multi-stage approval protocol that binds human approval to the validated plan and rechecks the affected row set inside the commit transaction.",
        eyebrow: "Safe DML",
        keywords: ["safe DML", "MCP approval", "SQL human approval", "AI database mutation"],
        highlights: [
          { title: "Preview", description: "Inspect the affected rows before the mutation is allowed to execute." },
          { title: "Approve", description: "Bind a one-time human approval challenge to the validated operation." },
          { title: "Revalidate", description: "Check the row set again inside the transaction before commit." },
        ],
        relatedDocs: [{ label: "Safe DML protocol", path: "docs/sql-compiler/safe-dml" }],
        body: [
          {
            title: "Approval is a protocol, not a dialog",
            paragraphs: [
              "A confirmation button is not enough when a generated mutation can affect production data. hs-sql-agent separates impact preview, explicit approval, transaction-time revalidation, and commit into distinct stages.",
            ],
          },
          {
            title: "Bind approval to what was reviewed",
            paragraphs: [
              "The approval flow is designed around the validated operation and its observed impact. Before commit, the server checks that the plan, policy, challenge, row count, and row set still match the approved context.",
            ],
            bullets: [
              "read-only impact preview",
              "one-time approval challenge",
              "MCP form elicitation for the human decision",
              "transaction-time row-set revalidation",
            ],
          },
          {
            title: "Custom DML tools use the same boundary",
            paragraphs: [
              "Published custom tools that perform DML enter the same typed approval flow rather than bypassing the safety path. The tool abstraction changes how an operation is exposed, not the mutation safety contract.",
            ],
          },
        ],
      },
      "zh-hant": {
        title: "人工核准的 Safe DML",
        headline: "Preview、Approve、Revalidate，最後才 Commit。",
        description:
          "UPDATE / DELETE 走多階段 approval protocol，把真人核准綁定到已驗證計畫，並在 commit transaction 內重新檢查 affected row set。",
        eyebrow: "Safe DML",
        keywords: ["Safe DML", "MCP approval", "SQL 人工核准", "AI 資料庫修改"],
        highlights: [
          { title: "Preview", description: "真正 mutation 前先看到即將受影響的資料列。" },
          { title: "Approve", description: "用 one-time challenge 把真人核准綁定到已驗證操作。" },
          { title: "Revalidate", description: "進入 transaction 後再次確認 row set 才允許 commit。" },
        ],
        relatedDocs: [{ label: "Safe DML protocol", path: "docs/sql-compiler/safe-dml" }],
        body: [
          {
            title: "Approval 是 protocol，不是一個確認視窗",
            paragraphs: [
              "當 AI 產生的 mutation 可能影響 production data，只有一個確認按鈕不夠。hs-sql-agent 把 impact preview、explicit approval、transaction-time revalidation 與 commit 拆成不同階段。",
            ],
          },
          {
            title: "核准必須綁定到使用者實際看到的內容",
            paragraphs: [
              "Approval flow 圍繞已驗證 operation 與當下觀察到的 impact 建立。commit 前，server 會確認 plan、policy、challenge、row count 與 row set 仍然符合被核准的 context。",
            ],
            bullets: [
              "read-only impact preview",
              "one-time approval challenge",
              "透過 MCP form elicitation 取得真人決策",
              "transaction-time row-set revalidation",
            ],
          },
          {
            title: "Custom DML tool 也不能繞過安全路徑",
            paragraphs: [
              "已發布的 Custom Tool 若屬於 DML，仍會進入相同的 typed approval flow。Tool abstraction 只改變 operation 如何暴露，不會改變 mutation 的安全契約。",
            ],
          },
        ],
      },
    },
  },
  {
    section: "features",
    slug: "access-control",
    order: 30,
    visual: "policy",
    copy: {
      en: {
        title: "Database access control for AI agents",
        headline: "Keep authorization outside the model.",
        description:
          "Scope every MCP key to the database, tools, tables, rate limits, and runtime policy you intend to expose. The LLM does not get to redefine those boundaries.",
        eyebrow: "Governance",
        keywords: ["MCP access control", "AI database governance", "SQL table allowlist", "MCP key security"],
        highlights: [
          { title: "Per-key scope", description: "Bind credentials to a concrete database and permitted MCP tools." },
          { title: "Table boundaries", description: "Enforce table allowlists and query policy independently of model instructions." },
          { title: "Operational limits", description: "Apply rate limiting, concurrency limits, revocation, and audit outside the prompt." },
        ],
        relatedDocs: [
          { label: "Security overview", path: "docs/security/overview" },
          { label: "MCP tools reference", path: "docs/mcp/tools-reference" },
        ],
        body: [
          {
            title: "Policy belongs to the server",
            paragraphs: [
              "Prompt text is not an authorization system. hs-sql-agent evaluates the authenticated key, database binding, allowed tools, table boundaries, and runtime security policy before SQL reaches execution.",
            ],
          },
          {
            title: "Keys expose the minimum useful surface",
            paragraphs: [
              "An MCP key can be scoped to the database and tools that a client actually needs. Built-in tools and published custom tools are checked against the key configuration before invocation.",
            ],
            bullets: [
              "database binding",
              "allowed MCP tools",
              "table whitelist",
              "effective rate limits",
              "revocation and expiry state",
            ],
          },
          {
            title: "Audit the execution boundary",
            paragraphs: [
              "Query and DML execution emit audit context that can record the tool, operation, timing, returned or affected rows, approval state, and compiler-derived facts. Governance remains inspectable after the model interaction is over.",
            ],
          },
        ],
      },
      "zh-hant": {
        title: "AI Agent 的資料庫存取控制",
        headline: "把 authorization 留在模型之外。",
        description:
          "每把 MCP key 都只暴露指定 database、tools、tables、rate limits 與 runtime policy；LLM 無法靠 prompt 重新定義這些邊界。",
        eyebrow: "Governance",
        keywords: ["MCP 存取控制", "AI database governance", "SQL table allowlist", "MCP key security"],
        highlights: [
          { title: "Per-key scope", description: "Credential 綁定到實際 database 與允許的 MCP tools。" },
          { title: "Table boundaries", description: "Table allowlist 與 query policy 不受模型指令影響。" },
          { title: "Operational limits", description: "Rate limit、concurrency、revocation 與 audit 都在 prompt 之外執行。" },
        ],
        relatedDocs: [
          { label: "Security overview", path: "docs/security/overview" },
          { label: "MCP tools reference", path: "docs/mcp/tools-reference" },
        ],
        body: [
          {
            title: "Policy 應該存在 Server，而不是 Prompt",
            paragraphs: [
              "Prompt 不是 authorization system。hs-sql-agent 會先檢查 authenticated key、database binding、allowed tools、table boundary 與 runtime security policy，之後 SQL 才可能進入 execution。",
            ],
          },
          {
            title: "每把 Key 只暴露必要能力",
            paragraphs: [
              "MCP key 可以只綁定 client 真正需要的 database 與 tools。Built-in tool 與已發布的 Custom Tool 在 invocation 前都會經過 key configuration 檢查。",
            ],
            bullets: [
              "database binding",
              "allowed MCP tools",
              "table whitelist",
              "effective rate limits",
              "revocation 與 expiry state",
            ],
          },
          {
            title: "Execution boundary 必須可 Audit",
            paragraphs: [
              "Query 與 DML execution 會留下 tool、operation、timing、returned / affected rows、approval state 與 compiler-derived facts 等 audit context。模型互動結束後，治理仍然可以被檢查。",
            ],
          },
        ],
      },
    },
  },
  ...[
    ["postgresql", "PostgreSQL", 10],
    ["mysql", "MySQL", 20],
    ["sql-server", "SQL Server", 30],
    ["oracle", "Oracle", 40],
    ["sqlite", "SQLite", 50],
    ["firebird", "Firebird", 60],
  ].map(([slug, provider, order]) => ({
    section: "databases" as const,
    slug: slug as string,
    order: order as number,
    visual: "database" as const,
    copy: {
      en: {
        title: `${provider} MCP Server`,
        headline: `Governed AI access to ${provider}.`,
        description: `Connect AI clients to ${provider} through hs-sql-agent's MCP surface, typed SQL compiler, access policy, Safe DML workflow, and audit boundary.`,
        eyebrow: `${provider} · MCP`,
        keywords: [`${provider} MCP server`, `${provider} AI agent`, `secure ${provider} MCP`, `${provider} SQL compiler`],
        highlights: [
          { title: "One governed MCP surface", description: `Expose ${provider} without handing the model an unrestricted database connection.` },
          { title: "Dialect-aware compiler", description: `Keep ${provider}-specific SQL semantics inside an explicit source/target capability boundary.` },
          { title: "Policy before execution", description: "Apply database scope, table policy, tool restrictions, rate limits, Safe DML, and audit before commit." },
        ],
        relatedDocs: [
          { label: "Database dialects", path: "docs/sql-compiler/database-dialects" },
          { label: "SQL execution model", path: "docs/sql-compiler/execution-model" },
          { label: "MCP client onboarding", path: "docs/mcp/client-onboarding" },
        ],
        body: [
          {
            title: `${provider} stays behind a compiler boundary`,
            paragraphs: [
              `hs-sql-agent does not treat a model-generated ${provider} statement as trusted simply because the provider could execute it. SQL first enters the typed validation and capability pipeline.`,
              `Provider support means the runtime can connect, inspect metadata, compile supported statements, and execute them under policy. It does not mean every vendor-specific syntax form is accepted automatically.`,
            ],
          },
          {
            title: "Use metadata before guessing schema",
            paragraphs: [
              `MCP clients can discover schemas, tables, and columns through the built-in metadata tools before constructing ${provider} SQL. This reduces blind schema guessing and keeps discovery inside the same authenticated database scope.`,
            ],
            bullets: ["get_schemas", "get_tables", "get_columns", "execute_query_sql", "execute_dml_sql"],
          },
          {
            title: "Fail closed when semantics are not proven",
            paragraphs: [
              `The ${provider} path follows the same rule as every other provider: unsupported syntax or cross-provider semantics are rejected at the appropriate validation/capability boundary rather than silently rewritten into a query with different behavior.`,
            ],
          },
        ],
      },
      "zh-hant": {
        title: `${provider} MCP Server`,
        headline: `讓 AI 受治理地存取 ${provider}。`,
        description: `透過 hs-sql-agent 的 MCP surface、typed SQL compiler、access policy、Safe DML 與 audit boundary，安全連接 AI client 與 ${provider}。`,
        eyebrow: `${provider} · MCP`,
        keywords: [`${provider} MCP server`, `${provider} AI agent`, `安全 ${provider} MCP`, `${provider} SQL compiler`],
        highlights: [
          { title: "單一受治理 MCP surface", description: `讓模型使用 ${provider}，但不直接交出 unrestricted database connection。` },
          { title: "Dialect-aware compiler", description: `${provider} 專屬 SQL 語意留在明確的 source / target capability boundary 裡。` },
          { title: "Execution 前先過 Policy", description: "Database scope、table policy、tool restriction、rate limit、Safe DML 與 audit 都先於 commit。" },
        ],
        relatedDocs: [
          { label: "Database dialects", path: "docs/sql-compiler/database-dialects" },
          { label: "SQL execution model", path: "docs/sql-compiler/execution-model" },
          { label: "MCP client onboarding", path: "docs/mcp/client-onboarding" },
        ],
        body: [
          {
            title: `${provider} 仍然位於 compiler boundary 後面`,
            paragraphs: [
              `即使 ${provider} 本身能執行某段 SQL，也不代表 model-generated statement 就應該被信任。SQL 會先進入 typed validation 與 capability pipeline。`,
              `Provider support 代表 runtime 能連線、讀取 metadata、compile 已支援 statement，並在 policy 下執行；不代表所有 vendor-specific syntax 都自動放行。`,
            ],
          },
          {
            title: "先用 Metadata，不要讓模型猜 Schema",
            paragraphs: [
              `MCP client 可以先透過 built-in metadata tools 取得 schemas、tables 與 columns，再產生 ${provider} SQL，降低盲猜 schema，同時維持在相同 authenticated database scope 裡。`,
            ],
            bullets: ["get_schemas", "get_tables", "get_columns", "execute_query_sql", "execute_dml_sql"],
          },
          {
            title: "語意無法證明就 Fail Closed",
            paragraphs: [
              `${provider} 與其他 provider 遵守同一規則：不支援的 syntax 或無法證明的 cross-provider semantics 會在正確的 validation / capability boundary 被拒絕，不會偷偷改寫成行為不同的 SQL。`,
            ],
          },
        ],
      },
    },
  } satisfies MarketingPageDefinition)),
  {
    section: "integrations",
    slug: "claude-desktop",
    order: 10,
    visual: "integration",
    copy: {
      en: {
        title: "Claude Desktop + hs-sql-agent",
        headline: "Give Claude a governed SQL MCP endpoint.",
        description:
          "Connect Claude Desktop to hs-sql-agent over MCP so database discovery, queries, custom tools, and approved DML stay behind server-side policy.",
        eyebrow: "Claude Desktop · MCP",
        keywords: ["Claude Desktop MCP SQL", "Claude database MCP", "Claude PostgreSQL MCP"],
        highlights: [
          { title: "MCP-native", description: "Use the same MCP server surface exposed to other compatible clients." },
          { title: "Scoped credentials", description: "Issue an MCP key bound to the database and tools Claude is allowed to use." },
          { title: "Human approval for DML", description: "Mutations can require MCP form elicitation before commit." },
        ],
        relatedDocs: [
          { label: "MCP client onboarding", path: "docs/mcp/client-onboarding" },
          { label: "MCP tools reference", path: "docs/mcp/tools-reference" },
        ],
        body: [
          {
            title: "Connect the client, not the database password",
            paragraphs: [
              "Claude Desktop talks to hs-sql-agent through MCP. The server keeps the real database connection, authorization, policy, compiler, and audit responsibilities on the server side.",
            ],
          },
          {
            title: "Expose only the tools the client needs",
            paragraphs: [
              "A dedicated MCP key can be limited to metadata discovery, SELECT execution, selected custom tools, or DML depending on the intended workflow.",
            ],
          },
        ],
      },
      "zh-hant": {
        title: "Claude Desktop + hs-sql-agent",
        headline: "給 Claude 一個受治理的 SQL MCP endpoint。",
        description:
          "讓 Claude Desktop 透過 MCP 連到 hs-sql-agent，database discovery、query、Custom Tool 與需核准的 DML 都留在 server-side policy 後面。",
        eyebrow: "Claude Desktop · MCP",
        keywords: ["Claude Desktop MCP SQL", "Claude database MCP", "Claude PostgreSQL MCP"],
        highlights: [
          { title: "MCP-native", description: "使用與其他相容 client 相同的 MCP server surface。" },
          { title: "Scoped credentials", description: "MCP key 只綁定 Claude 被允許使用的 database 與 tools。" },
          { title: "DML 需要真人核准", description: "Mutation 可以在 commit 前要求 MCP form elicitation。" },
        ],
        relatedDocs: [
          { label: "MCP client onboarding", path: "docs/mcp/client-onboarding" },
          { label: "MCP tools reference", path: "docs/mcp/tools-reference" },
        ],
        body: [
          {
            title: "連接 Client，不是把 Database Password 交給 Client",
            paragraphs: [
              "Claude Desktop 透過 MCP 與 hs-sql-agent 溝通。真正的 database connection、authorization、policy、compiler 與 audit responsibility 都留在 server side。",
            ],
          },
          {
            title: "只暴露 Client 真正需要的 Tools",
            paragraphs: [
              "可以替 Claude 發一把專用 MCP key，只允許 metadata discovery、SELECT、指定 Custom Tool，或依工作流程開放 DML。",
            ],
          },
        ],
      },
    },
  },
  {
    section: "integrations",
    slug: "cursor",
    order: 20,
    visual: "integration",
    copy: {
      en: {
        title: "Cursor + hs-sql-agent",
        headline: "Use governed SQL tools from Cursor.",
        description:
          "Connect Cursor to hs-sql-agent through MCP and keep generated SQL behind the same compiler, database scope, tool policy, and audit boundary used in production.",
        eyebrow: "Cursor · MCP",
        keywords: ["Cursor MCP SQL", "Cursor database MCP", "Cursor PostgreSQL MCP"],
        highlights: [
          { title: "Schema discovery", description: "Let the client inspect schemas, tables, and columns through authenticated metadata tools." },
          { title: "Compiled queries", description: "Generated SELECT statements enter the typed query runtime before execution." },
          { title: "Controlled mutations", description: "DML can remain gated by the Safe DML approval protocol." },
        ],
        relatedDocs: [
          { label: "MCP client onboarding", path: "docs/mcp/client-onboarding" },
          { label: "SQL execution model", path: "docs/sql-compiler/execution-model" },
        ],
        body: [
          {
            title: "Keep coding assistance and database authority separate",
            paragraphs: [
              "Cursor can generate and invoke SQL tools while hs-sql-agent remains responsible for what is actually allowed to reach the database. Model context does not become database authorization.",
            ],
          },
          {
            title: "Use the same production boundary during development",
            paragraphs: [
              "The same MCP key scope, compiler, query policy, Safe DML, and audit path can be used from a developer client instead of introducing a separate unrestricted connection just for convenience.",
            ],
          },
        ],
      },
      "zh-hant": {
        title: "Cursor + hs-sql-agent",
        headline: "在 Cursor 裡使用受治理的 SQL tools。",
        description:
          "讓 Cursor 透過 MCP 連到 hs-sql-agent，generated SQL 仍然經過 production 使用的 compiler、database scope、tool policy 與 audit boundary。",
        eyebrow: "Cursor · MCP",
        keywords: ["Cursor MCP SQL", "Cursor database MCP", "Cursor PostgreSQL MCP"],
        highlights: [
          { title: "Schema discovery", description: "透過 authenticated metadata tools 取得 schemas、tables、columns。" },
          { title: "Compiled queries", description: "Generated SELECT 先進 typed query runtime，之後才 execution。" },
          { title: "Controlled mutations", description: "DML 仍然可以被 Safe DML approval protocol gate 住。" },
        ],
        relatedDocs: [
          { label: "MCP client onboarding", path: "docs/mcp/client-onboarding" },
          { label: "SQL execution model", path: "docs/sql-compiler/execution-model" },
        ],
        body: [
          {
            title: "Coding Assistance 與 Database Authority 分開",
            paragraphs: [
              "Cursor 可以產生並呼叫 SQL tool，但真正決定哪些 operation 能碰到 database 的仍然是 hs-sql-agent。Model context 不會自動變成 database authorization。",
            ],
          },
          {
            title: "開發階段也使用正式的 Production Boundary",
            paragraphs: [
              "Developer client 可以直接沿用 MCP key scope、compiler、query policy、Safe DML 與 audit path，不需要為了方便另外開一條 unrestricted connection。",
            ],
          },
        ],
      },
    },
  },
  {
    section: "integrations",
    slug: "aspnet-core",
    order: 30,
    visual: "integration",
    copy: {
      en: {
        title: "Embed hs-sql-agent in ASP.NET Core",
        headline: "Ship the MCP server with your .NET application.",
        description:
          "Use the HsSqlAgent.Server package to register and host hs-sql-agent inside an ASP.NET Core application, with optional Admin UI serving.",
        eyebrow: "ASP.NET Core · NuGet",
        keywords: ["HsSqlAgent.Server", "ASP.NET Core MCP server", ".NET SQL MCP"],
        highlights: [
          { title: "AddHsSqlAgent", description: "Register hs-sql-agent services in the host application." },
          { title: "UseHsSqlAgent", description: "Attach the server middleware/endpoints to the ASP.NET Core pipeline." },
          { title: "Optional Admin UI", description: "Serve the management interface when the host deployment needs it." },
        ],
        relatedDocs: [{ label: "ASP.NET Core integration", path: "docs/integration/aspnet-core" }],
        body: [
          {
            title: "Use hs-sql-agent as an application capability",
            paragraphs: [
              "The server is available as a NuGet integration surface, so teams that already own an ASP.NET Core host do not need a separate process solely to expose the MCP and governance stack.",
            ],
            code: {
              label: "ASP.NET Core",
              language: "csharp",
              value: "builder.Services.AddHsSqlAgent(builder.Configuration);\n\nvar app = builder.Build();\napp.UseHsSqlAgent();",
            },
          },
          {
            title: "Keep the same compiler and governance model",
            paragraphs: [
              "Embedding changes the hosting topology, not the SQL safety model. Queries, DML approval, keys, policy, provider support, and audit still use the hs-sql-agent runtime boundary.",
            ],
          },
        ],
      },
      "zh-hant": {
        title: "把 hs-sql-agent 嵌入 ASP.NET Core",
        headline: "讓 MCP Server 跟著你的 .NET 應用程式一起部署。",
        description:
          "透過 HsSqlAgent.Server package，在 ASP.NET Core application 裡註冊並 host hs-sql-agent，也可以選擇一起提供 Admin UI。",
        eyebrow: "ASP.NET Core · NuGet",
        keywords: ["HsSqlAgent.Server", "ASP.NET Core MCP server", ".NET SQL MCP"],
        highlights: [
          { title: "AddHsSqlAgent", description: "把 hs-sql-agent services 註冊進 host application。" },
          { title: "UseHsSqlAgent", description: "把 server middleware / endpoints 掛進 ASP.NET Core pipeline。" },
          { title: "Optional Admin UI", description: "部署需要時可以一起提供管理介面。" },
        ],
        relatedDocs: [{ label: "ASP.NET Core integration", path: "docs/integration/aspnet-core" }],
        body: [
          {
            title: "把 hs-sql-agent 當成 Application Capability",
            paragraphs: [
              "Server 提供 NuGet integration surface，所以已經有 ASP.NET Core host 的團隊，不一定要為了 MCP 與 governance stack 再維護一個獨立 process。",
            ],
            code: {
              label: "ASP.NET Core",
              language: "csharp",
              value: "builder.Services.AddHsSqlAgent(builder.Configuration);\n\nvar app = builder.Build();\napp.UseHsSqlAgent();",
            },
          },
          {
            title: "Hosting 改變，Compiler 與 Governance 模型不變",
            paragraphs: [
              "Embedding 只改變 hosting topology，不會改變 SQL safety model。Query、DML approval、keys、policy、provider support 與 audit 仍走 hs-sql-agent runtime boundary。",
            ],
          },
        ],
      },
    },
  },
];

export function normalizeMarketingLocale(locale: string): MarketingLocale {
  return locale === "zh-hant" ? "zh-hant" : "en";
}

export function getMarketingPages(
  locale: string,
  section?: MarketingSection
): MarketingPage[] {
  const normalizedLocale = normalizeMarketingLocale(locale);
  return definitions
    .filter(definition => !section || definition.section === section)
    .map(definition => ({
      locale: normalizedLocale,
      section: definition.section,
      slug: definition.slug,
      order: definition.order,
      visual: definition.visual,
      ...definition.copy[normalizedLocale],
    }))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, normalizedLocale));
}

export function getMarketingPage(
  locale: string,
  section: MarketingSection,
  slug: string
): MarketingPage | undefined {
  return getMarketingPages(locale, section).find(page => page.slug === slug);
}

export function hasMarketingPage(
  locale: string,
  section: string,
  slug: string
): boolean {
  if (!isMarketingSection(section)) return false;
  return Boolean(getMarketingPage(locale, section, slug));
}

export function isMarketingSection(value: string): value is MarketingSection {
  return value === "databases" || value === "features" || value === "integrations";
}

export function getMarketingRoutes(): Array<{
  locale: MarketingLocale;
  section: MarketingSection;
  slug: string;
}> {
  const routes: Array<{ locale: MarketingLocale; section: MarketingSection; slug: string }> = [];
  for (const definition of definitions) {
    routes.push({ locale: "en", section: definition.section, slug: definition.slug });
    routes.push({ locale: "zh-hant", section: definition.section, slug: definition.slug });
  }
  return routes;
}
