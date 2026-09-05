import type { MarketingSection } from "../marketing";
import { aspNetCoreCode, databaseProviders } from "./common";
import type { MarketingCopy } from "./types";

const pages: Record<string, MarketingCopy> = {
  "features/sql-compiler": {
    title: "失败即拒绝的 SQL 编译器",
    headline: "把 AI 生成的 SQL 视为不可信输入。",
    description:
      "hs-sql-agent 先把 SQL 解析进类型化编译器流水线，验证来源语义与策略、证明目标 capability，最后才生成对应数据库的 SQL。",
    eyebrow: "SQL 编译器",
    keywords: ["SQL 编译器", "MCP SQL", "AI SQL 安全", "fail closed SQL"],
    highlights: [
      {
        title: "先解析",
        description: "SQL 不会直接交给数据库驱动，而是先进入结构化解析器。",
      },
      {
        title: "证明 Capability",
        description: "来源或目标语义无法证明时直接拒绝，不会静默降级。",
      },
      {
        title: "按 Provider 编译",
        description: "数据库特有行为保留在明确的执行边界内处理。",
      },
    ],
    relatedDocs: [
      { label: "SQL 执行模型", path: "docs/sql-compiler/execution-model" },
      { label: "数据库方言", path: "docs/sql-compiler/database-dialects" },
    ],
    body: [
      {
        title: "生成的 SQL 是输入，不是授权",
        paragraphs: [
          "LLM 可以提出 SQL，但数据库本身能够解析，并不代表这段 SQL 就应该执行。hs-sql-agent 在模型和数据库连接之间建立编译器与策略边界。",
          "整条流水线采用失败即拒绝：无法安全表示或证明的 statement 会被拒绝，而不是为了能运行就改写成含义不同的 SQL。",
        ],
      },
      {
        title: "类型化执行路径",
        paragraphs: [
          "Query 依次经过 parsing、binding、validation、capability check、provider-specific compilation 和 immutable command execution，让策略面对结构化 statement，而不只是 raw SQL 文本。",
        ],
        bullets: [
          "单 statement Query 校验",
          "表授权与 Query 策略检查",
          "source / target dialect capability 边界",
          "验证完成后才进行 provider-specific rendering",
        ],
      },
      {
        title: "扩展 SQL 能力，不牺牲失败即拒绝",
        paragraphs: [
          "新语法只有在 parser、类型化模型、validation、capability proof、renderer 和测试都理解其语义后才算真正支持，因此可以持续扩展 SQL 覆盖面而不削弱安全契约。",
        ],
      },
    ],
  },
  "features/safe-dml": {
    title: "人工审批的 Safe DML",
    headline: "先预览、再审批、重新验证，最后提交。",
    description:
      "UPDATE 和 DELETE 采用多阶段审批协议，把人工审批绑定到已经验证的计划，并在提交事务内重新检查受影响的行集合。",
    eyebrow: "Safe DML",
    keywords: ["Safe DML", "MCP 审批", "SQL 人工审批", "AI 数据库修改"],
    highlights: [
      {
        title: "预览",
        description: "真正执行修改之前先查看将受影响的数据行。",
      },
      {
        title: "审批",
        description: "把一次性人工审批挑战绑定到已验证的操作。",
      },
      { title: "重新验证", description: "提交前在事务内部再次核对行集合。" },
    ],
    relatedDocs: [
      { label: "Safe DML 协议", path: "docs/sql-compiler/safe-dml" },
    ],
    body: [
      {
        title: "审批是一套协议，不只是确认框",
        paragraphs: [
          "当 AI 生成的 mutation 可能修改生产数据时，一个确认按钮并不够。hs-sql-agent 把影响预览、明确审批、事务内重新验证和提交拆成独立阶段。",
        ],
      },
      {
        title: "审批必须绑定到实际审核的内容",
        paragraphs: [
          "审批流程围绕已验证的操作及其当时观测到的影响建立。提交之前，服务器会确认 plan、policy、challenge、row count 和 row set 仍与获批上下文一致。",
        ],
        bullets: [
          "只读影响预览",
          "一次性审批挑战",
          "通过 MCP form Elicitation 获取人工决定",
          "事务内 row-set 重新验证",
        ],
      },
      {
        title: "Custom DML Tool 也走同一条安全路径",
        paragraphs: [
          "已发布的 Custom Tool 如果执行 DML，仍会进入同一套类型化审批流程。Tool 只改变操作如何暴露，不改变 mutation 的安全契约。",
        ],
      },
    ],
  },
  "features/access-control": {
    title: "面向 AI Agent 的数据库访问控制",
    headline: "把授权留在模型之外。",
    description:
      "每把 MCP 密钥只暴露指定数据库、工具、表、Rate Limit 和运行时策略；LLM 无法通过 prompt 重新定义这些边界。",
    eyebrow: "治理",
    keywords: ["MCP 访问控制", "AI 数据库治理", "SQL 表白名单", "MCP 密钥安全"],
    highlights: [
      {
        title: "按密钥限定范围",
        description: "凭据绑定到具体数据库和允许使用的 MCP 工具。",
      },
      {
        title: "表访问边界",
        description: "表白名单和 Query 策略独立于模型指令执行。",
      },
      {
        title: "运行限制",
        description: "Rate Limit、并发限制、撤销和审计都在 prompt 之外执行。",
      },
    ],
    relatedDocs: [
      { label: "安全概览", path: "docs/security/overview" },
      { label: "MCP 工具参考", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "策略属于服务器",
        paragraphs: [
          "Prompt 不是授权系统。SQL 进入执行之前，hs-sql-agent 会检查已认证密钥、数据库绑定、允许工具、表边界和运行时安全策略。",
        ],
      },
      {
        title: "每把密钥只开放必要能力",
        paragraphs: [
          "MCP 密钥可以只绑定客户端真正需要的数据库和工具。内置工具和已发布 Custom Tool 在调用前都会与密钥配置核对。",
        ],
        bullets: [
          "数据库绑定",
          "允许的 MCP 工具",
          "表白名单",
          "实际生效的 Rate Limit",
          "撤销与过期状态",
        ],
      },
      {
        title: "让执行边界可审计",
        paragraphs: [
          "Query 和 DML 执行可以记录工具、操作、耗时、返回或影响行数、审批状态以及编译器推导出的事实。模型交互结束后，治理行为仍然可检查。",
        ],
      },
    ],
  },
  "integrations/claude-desktop": {
    title: "Claude Desktop + hs-sql-agent",
    headline: "为 Claude 提供受治理的 SQL MCP 端点。",
    description:
      "让 Claude Desktop 通过 MCP 连接 hs-sql-agent，使数据库发现、Query、Custom Tool 和需要审批的 DML 始终位于服务端策略之后。",
    eyebrow: "Claude Desktop · MCP",
    keywords: [
      "Claude Desktop MCP SQL",
      "Claude database MCP",
      "Claude PostgreSQL MCP",
    ],
    highlights: [
      {
        title: "原生 MCP 接入",
        description: "使用与其他兼容客户端相同的 MCP Server 接口。",
      },
      {
        title: "限定范围的凭据",
        description: "为 Claude 签发只绑定其允许数据库与工具的 MCP 密钥。",
      },
      {
        title: "DML 人工审批",
        description: "Mutation 可以在提交前要求 MCP form Elicitation。",
      },
    ],
    relatedDocs: [
      { label: "MCP 客户端接入", path: "docs/mcp/client-onboarding" },
      { label: "MCP 工具参考", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "连接客户端，而不是把数据库密码交给客户端",
        paragraphs: [
          "Claude Desktop 通过 MCP 与 hs-sql-agent 通信。真正的数据库连接、授权、策略、编译器和审计职责都保留在服务器端。",
        ],
      },
      {
        title: "只暴露客户端真正需要的工具",
        paragraphs: [
          "可以为 Claude 单独签发 MCP 密钥，只允许元数据发现、SELECT 执行、指定 Custom Tool，或根据工作流开放 DML。",
        ],
      },
    ],
  },
  "integrations/cursor": {
    title: "Cursor + hs-sql-agent",
    headline: "在 Cursor 中使用受治理的 SQL 工具。",
    description:
      "通过 MCP 把 Cursor 连接到 hs-sql-agent，让生成的 SQL 继续经过生产环境使用的编译器、数据库范围、工具策略和审计边界。",
    eyebrow: "Cursor · MCP",
    keywords: [
      "Cursor MCP SQL",
      "Cursor database MCP",
      "Cursor PostgreSQL MCP",
    ],
    highlights: [
      {
        title: "Schema 发现",
        description: "通过已认证的元数据工具查看 schema、表和列。",
      },
      {
        title: "编译后查询",
        description: "生成的 SELECT 在执行前先进入类型化 Query Runtime。",
      },
      { title: "受控修改", description: "DML 继续由 Safe DML 审批协议控制。" },
    ],
    relatedDocs: [
      { label: "MCP 客户端接入", path: "docs/mcp/client-onboarding" },
      { label: "SQL 执行模型", path: "docs/sql-compiler/execution-model" },
    ],
    body: [
      {
        title: "把编码辅助与数据库权限分开",
        paragraphs: [
          "Cursor 可以生成并调用 SQL 工具，但真正决定哪些操作能够到达数据库的仍然是 hs-sql-agent。模型上下文不会自动变成数据库授权。",
        ],
      },
      {
        title: "开发阶段也使用生产级边界",
        paragraphs: [
          "开发客户端可以直接沿用同一套 MCP 密钥范围、编译器、Query 策略、Safe DML 和审计路径，无需为了方便另开一条不受限制的数据库连接。",
        ],
      },
    ],
  },
  "integrations/aspnet-core": {
    title: "把 hs-sql-agent 嵌入 ASP.NET Core",
    headline: "只组合 .NET 宿主真正需要的 hs-sql-agent capability。",
    description:
      "将 HsSqlAgent.Server 2.0.2 作为可嵌入的 ASP.NET Core 类库使用。保留宿主自己的认证和 controller mapping，再按需启用 Admin API、MCP、内置身份体系或 Admin UI。",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: ["HsSqlAgent.Server", "ASP.NET Core MCP server", ".NET SQL MCP"],
    highlights: [
      {
        title: "AddHsSqlAgentCore",
        description:
          "从不带 options 的 core 开始，而不是把旧版 all-in-one 注册方式当作新集成入口。",
      },
      {
        title: "按需组合 Capability",
        description:
          "Runtime、Admin Store/API、MCP、Telemetry、内置身份体系都可以独立添加。",
      },
      {
        title: "Pipeline 由宿主掌握",
        description:
          "现有应用继续管理 authentication、authorization middleware 和 MapControllers()。",
      },
    ],
    relatedDocs: [
      { label: "ASP.NET Core 集成", path: "docs/integration/aspnet-core" },
    ],
    body: [
      {
        title: "嵌入现有 ASP.NET Core 宿主",
        paragraphs: [
          "HsSqlAgent.Server 是类库集成接口，不会在应用内部偷偷启动第二个 Web Host。2.0.2 的新集成从 AddHsSqlAgentCore() 开始，再明确选择所需 capability。",
          "如果应用已经有登录和权限体系，就把 Admin 授权委托给宿主策略，不需要安装 hs-sql-agent 内置的 member/role 身份体系。",
        ],
        code: {
          label: "ASP.NET Core 2.0.2",
          language: "csharp",
          value: aspNetCoreCode,
        },
      },
      {
        title: "内置身份体系和 Admin UI 都是可选项",
        paragraphs: [
          "如果宿主需要 hs-sql-agent 自己的 JWT/member/role 模型，应选择 AddHsSqlAgentBuiltInAuth() 而不是 Host Authorization；两种授权模式互斥。",
          "打包提供的 Admin UI 也不是强制项。现有应用可以只暴露 Admin API 并使用自己的前端，也可以在需要完整管理体验时加入内置 UI。",
        ],
      },
      {
        title: "嵌入不会削弱 SQL 安全边界",
        paragraphs: [
          "Hosting topology 可以改变，但 Query compilation、Safe DML、MCP-key scope、策略、Provider capability 检查和审计仍然经过同一条 hs-sql-agent Runtime 边界。",
        ],
      },
    ],
  },
};

function databaseCopy(provider: string): MarketingCopy {
  return {
    title: `${provider} MCP Server`,
    headline: `让 AI 在治理边界内访问 ${provider}。`,
    description: `通过 hs-sql-agent 的 MCP 接口、类型化 SQL 编译器、访问策略、Safe DML 和审计边界，把 AI 客户端安全连接到 ${provider}。`,
    eyebrow: `${provider} · MCP`,
    keywords: [
      `${provider} MCP server`,
      `${provider} AI agent`,
      `安全 ${provider} MCP`,
      `${provider} SQL 编译器`,
    ],
    highlights: [
      {
        title: "统一的受治理 MCP 接口",
        description: `无需把不受限制的数据库连接交给模型，也能开放 ${provider}。`,
      },
      {
        title: "理解方言的编译器",
        description: `把 ${provider} 特有 SQL 语义保留在明确的 source / target capability 边界内。`,
      },
      {
        title: "执行前先过策略",
        description:
          "数据库范围、表策略、工具限制、Rate Limit、Safe DML 和审计都先于提交执行。",
      },
    ],
    relatedDocs: [
      { label: "数据库方言", path: "docs/sql-compiler/database-dialects" },
      { label: "SQL 执行模型", path: "docs/sql-compiler/execution-model" },
      { label: "MCP 客户端接入", path: "docs/mcp/client-onboarding" },
    ],
    body: [
      {
        title: `${provider} 仍位于编译器边界之后`,
        paragraphs: [
          `即使 ${provider} 本身能够执行某段模型生成的 SQL，hs-sql-agent 也不会因此直接信任它。SQL 会先进入类型化 validation 和 capability 流水线。`,
          "Provider support 表示运行时能够连接、读取元数据、编译已支持的 statement 并在策略下执行；并不表示所有厂商特有语法都会自动放行。",
        ],
      },
      {
        title: "先发现元数据，再生成 SQL",
        paragraphs: [
          `MCP 客户端可以在构造 ${provider} SQL 前，通过内置元数据工具读取 schema、表和列，减少盲猜，并让 discovery 始终处在同一个已认证数据库范围内。`,
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
        title: "语义无法证明就拒绝",
        paragraphs: [
          `${provider} 和其他 Provider 遵守同一规则：不支持的语法或无法证明的 cross-provider semantics 会在对应 validation / capability 边界被拒绝，而不是静默改写成行为不同的 SQL。`,
        ],
      },
    ],
  };
}

export function getZhHansMarketingCopy(
  section: MarketingSection,
  slug: string
): MarketingCopy | undefined {
  if (section === "databases") {
    const provider = databaseProviders[slug];
    return provider ? databaseCopy(provider) : undefined;
  }
  return pages[`${section}/${slug}`];
}
