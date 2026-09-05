import type { MarketingSection } from "../marketing";
import { aspNetCoreCode, databaseProviders } from "./common";
import type { MarketingCopy } from "./types";

const pages: Record<string, MarketingCopy> = {
  "features/sql-compiler": {
    title: "페일 클로즈 SQL 컴파일러",
    headline: "AI가 생성한 SQL을 신뢰할 수 없는 입력으로 다룹니다.",
    description:
      "hs-sql-agent는 SQL을 타입이 있는 컴파일러 파이프라인으로 파싱하고, 소스 의미와 정책을 검증하고, 대상 capability를 확인한 뒤에만 데이터베이스별 SQL을 생성합니다.",
    eyebrow: "SQL 컴파일러",
    keywords: ["SQL 컴파일러", "MCP SQL", "AI SQL 보안", "fail closed SQL"],
    highlights: [
      {
        title: "먼저 파싱",
        description:
          "SQL을 데이터베이스 드라이버에 바로 넘기지 않고 구조화된 parser를 거칩니다.",
      },
      {
        title: "Capability 검증",
        description:
          "소스나 대상의 의미를 증명할 수 없으면 조용히 약한 의미로 바꾸지 않고 거부합니다.",
      },
      {
        title: "Provider별 컴파일",
        description:
          "데이터베이스별 동작 차이를 명시적인 실행 경계 안에서 처리합니다.",
      },
    ],
    relatedDocs: [
      { label: "SQL 실행 모델", path: "docs/sql-compiler/execution-model" },
      {
        label: "데이터베이스 방언",
        path: "docs/sql-compiler/database-dialects",
      },
    ],
    body: [
      {
        title: "생성된 SQL은 입력이지 권한이 아닙니다",
        paragraphs: [
          "LLM은 SQL을 제안할 수 있지만 데이터베이스가 그 SQL을 파싱할 수 있다는 이유만으로 실행 권한이 생기지는 않습니다. hs-sql-agent는 모델과 데이터베이스 연결 사이에 컴파일러와 정책 경계를 둡니다.",
          "안전하게 표현하거나 증명할 수 없는 statement는 실행을 위해 다른 의미로 바꾸지 않고 거부합니다.",
        ],
      },
      {
        title: "타입이 있는 실행 경로",
        paragraphs: [
          "Query는 parsing, binding, validation, capability check, provider-specific compilation, immutable command execution을 순서대로 거칩니다. 정책은 raw SQL 문자열만 보는 대신 구조화된 statement를 기준으로 판단할 수 있습니다.",
        ],
        bullets: [
          "단일 statement Query 검증",
          "테이블 권한과 Query 정책 검사",
          "source / target dialect capability 경계",
          "검증 이후에만 provider-specific rendering 수행",
        ],
      },
      {
        title: "페일 클로즈를 유지하면서 SQL 지원 범위 확장",
        paragraphs: [
          "새 문법은 parser, 타입 모델, validation, capability proof, renderer, 테스트가 모두 그 의미를 이해할 때 지원됩니다. SQL 기능을 확장해도 안전 계약을 약화시키지 않습니다.",
        ],
      },
    ],
  },
  "features/safe-dml": {
    title: "사람의 승인을 거치는 Safe DML",
    headline: "미리 보고, 승인하고, 다시 검증한 뒤 커밋합니다.",
    description:
      "UPDATE와 DELETE는 여러 단계의 승인 프로토콜을 거칩니다. 사람의 승인을 검증된 계획에 묶고, 커밋 트랜잭션 안에서 영향받는 행 집합을 다시 확인합니다.",
    eyebrow: "Safe DML",
    keywords: ["Safe DML", "MCP 승인", "SQL 사람 승인", "AI 데이터베이스 변경"],
    highlights: [
      {
        title: "미리 보기",
        description: "실제 변경을 실행하기 전에 영향을 받는 행을 확인합니다.",
      },
      {
        title: "승인",
        description: "일회성 승인용 챌린지를 검증된 작업에 묶습니다.",
      },
      {
        title: "재검증",
        description: "커밋 전에 트랜잭션 안에서 행 집합을 다시 확인합니다.",
      },
    ],
    relatedDocs: [
      { label: "Safe DML 프로토콜", path: "docs/sql-compiler/safe-dml" },
    ],
    body: [
      {
        title: "승인은 확인 창이 아니라 프로토콜입니다",
        paragraphs: [
          "AI가 생성한 mutation이 운영 데이터를 바꿀 수 있다면 확인 버튼 하나로는 충분하지 않습니다. hs-sql-agent는 영향 미리 보기, 명시적 승인, 트랜잭션 시점 재검증, 커밋을 서로 다른 단계로 분리합니다.",
        ],
      },
      {
        title: "실제로 검토한 내용에 승인을 묶습니다",
        paragraphs: [
          "승인 흐름은 검증된 작업과 당시 관측된 영향을 기준으로 만들어집니다. 커밋 전에는 plan, policy, challenge, row count, row set이 승인된 context와 여전히 일치하는지 서버가 확인합니다.",
        ],
        bullets: [
          "읽기 전용 영향 미리 보기",
          "일회성 승인용 챌린지",
          "사람의 결정을 받는 MCP form Elicitation",
          "트랜잭션 내 row-set 재검증",
        ],
      },
      {
        title: "Custom DML Tool도 같은 경계를 통과합니다",
        paragraphs: [
          "게시된 Custom Tool이 DML을 수행해도 같은 타입 기반 승인 흐름을 거칩니다. Tool로 노출하는 방식이 달라질 뿐 mutation 안전 계약은 달라지지 않습니다.",
        ],
      },
    ],
  },
  "features/access-control": {
    title: "AI 에이전트용 데이터베이스 접근 제어",
    headline: "권한 부여를 모델 바깥에 둡니다.",
    description:
      "각 MCP key를 공개할 데이터베이스, Tool, 테이블, Rate Limit, Runtime Policy에만 연결합니다. LLM이 prompt로 이 경계를 다시 정의할 수 없습니다.",
    eyebrow: "거버넌스",
    keywords: [
      "MCP 접근 제어",
      "AI 데이터베이스 거버넌스",
      "SQL table allowlist",
      "MCP key 보안",
    ],
    highlights: [
      {
        title: "Key별 Scope",
        description:
          "Credential을 구체적인 데이터베이스와 허용할 MCP Tool에 연결합니다.",
      },
      {
        title: "테이블 경계",
        description:
          "모델 지시와 별개로 table allowlist와 Query Policy를 적용합니다.",
      },
      {
        title: "운영 제한",
        description:
          "Rate Limit, 동시성, 폐기, Audit을 prompt 바깥에서 적용합니다.",
      },
    ],
    relatedDocs: [
      { label: "보안 개요", path: "docs/security/overview" },
      { label: "MCP Tools Reference", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "정책은 서버에 있어야 합니다",
        paragraphs: [
          "Prompt는 권한 부여 시스템이 아닙니다. hs-sql-agent는 SQL이 실행 단계에 도달하기 전에 인증된 key, 데이터베이스 binding, 허용 Tool, 테이블 경계, Runtime Security Policy를 평가합니다.",
        ],
      },
      {
        title: "Key에는 필요한 최소 기능만 노출합니다",
        paragraphs: [
          "MCP key는 Client가 실제로 필요한 데이터베이스와 Tool로 제한할 수 있습니다. 내장 Tool과 게시된 Custom Tool은 호출 전에 key configuration과 대조됩니다.",
        ],
        bullets: [
          "database binding",
          "허용 MCP Tool",
          "table whitelist",
          "실효 Rate Limit",
          "폐기 및 만료 상태",
        ],
      },
      {
        title: "실행 경계를 감사할 수 있게 유지합니다",
        paragraphs: [
          "Query와 DML 실행은 Tool, operation, timing, 반환 또는 영향 행 수, 승인 상태, compiler-derived facts 등의 Audit context를 남길 수 있습니다. 모델 대화가 끝난 뒤에도 거버넌스를 확인할 수 있습니다.",
        ],
      },
    ],
  },
  "integrations/claude-desktop": {
    title: "Claude Desktop + hs-sql-agent",
    headline: "Claude에 통제된 SQL MCP 엔드포인트를 제공합니다.",
    description:
      "Claude Desktop을 MCP로 hs-sql-agent에 연결해 데이터베이스 탐색, Query, Custom Tool, 승인 DML을 모두 서버 측 정책 뒤에 둡니다.",
    eyebrow: "Claude Desktop · MCP",
    keywords: [
      "Claude Desktop MCP SQL",
      "Claude database MCP",
      "Claude PostgreSQL MCP",
    ],
    highlights: [
      {
        title: "MCP 방식 그대로",
        description: "다른 호환 Client와 같은 MCP Server surface를 사용합니다.",
      },
      {
        title: "범위가 제한된 Credential",
        description:
          "Claude가 사용할 수 있는 데이터베이스와 Tool에만 묶인 MCP key를 발급합니다.",
      },
      {
        title: "DML은 사람 승인",
        description:
          "Mutation은 커밋 전에 MCP form Elicitation을 요구할 수 있습니다.",
      },
    ],
    relatedDocs: [
      { label: "MCP Client 연결", path: "docs/mcp/client-onboarding" },
      { label: "MCP Tools Reference", path: "docs/mcp/tools-reference" },
    ],
    body: [
      {
        title: "Client를 연결하고 데이터베이스 비밀번호는 넘기지 않습니다",
        paragraphs: [
          "Claude Desktop은 MCP를 통해 hs-sql-agent와 통신합니다. 실제 데이터베이스 연결, 권한 부여, 정책, 컴파일러, Audit 책임은 서버에 남습니다.",
        ],
      },
      {
        title: "Client가 필요한 Tool만 노출합니다",
        paragraphs: [
          "Claude 전용 MCP key를 metadata discovery, SELECT 실행, 선택한 Custom Tool 또는 워크플로에 필요한 DML만 허용하도록 제한할 수 있습니다.",
        ],
      },
    ],
  },
  "integrations/cursor": {
    title: "Cursor + hs-sql-agent",
    headline: "Cursor에서 통제된 SQL Tool을 사용합니다.",
    description:
      "Cursor를 MCP로 hs-sql-agent에 연결하고 생성 SQL을 운영 환경과 같은 컴파일러, 데이터베이스 Scope, Tool Policy, Audit 경계 안에서 처리합니다.",
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
          "인증된 metadata Tool로 schema, table, column을 확인합니다.",
      },
      {
        title: "컴파일된 Query",
        description:
          "생성된 SELECT는 실행 전에 타입 기반 Query Runtime을 거칩니다.",
      },
      {
        title: "통제된 Mutation",
        description: "DML은 Safe DML 승인 프로토콜로 계속 제한할 수 있습니다.",
      },
    ],
    relatedDocs: [
      { label: "MCP Client 연결", path: "docs/mcp/client-onboarding" },
      { label: "SQL 실행 모델", path: "docs/sql-compiler/execution-model" },
    ],
    body: [
      {
        title: "코딩 지원과 데이터베이스 권한을 분리합니다",
        paragraphs: [
          "Cursor는 SQL Tool을 생성하고 호출할 수 있지만 실제로 어떤 작업이 데이터베이스에 도달할 수 있는지는 hs-sql-agent가 결정합니다. 모델 context가 데이터베이스 권한으로 바뀌지 않습니다.",
        ],
      },
      {
        title: "개발 중에도 운영 환경과 같은 경계를 사용합니다",
        paragraphs: [
          "개발자 Client에서도 같은 MCP key scope, compiler, Query Policy, Safe DML, Audit path를 사용할 수 있습니다. 편의를 위해 별도의 unrestricted connection을 만들 필요가 없습니다.",
        ],
      },
    ],
  },
  "integrations/aspnet-core": {
    title: "hs-sql-agent를 ASP.NET Core에 임베드",
    headline: ".NET 호스트에 필요한 hs-sql-agent capability만 조합합니다.",
    description:
      "HsSqlAgent.Server 2.0.2를 임베드 가능한 ASP.NET Core 클래스 라이브러리로 사용합니다. 기존 호스트의 인증과 controller mapping을 유지하고 Admin API, MCP, 내장 Identity, Admin UI는 필요한 것만 선택합니다.",
    eyebrow: "ASP.NET Core · NuGet",
    keywords: ["HsSqlAgent.Server", "ASP.NET Core MCP server", ".NET SQL MCP"],
    highlights: [
      {
        title: "AddHsSqlAgentCore",
        description:
          "기존 all-in-one registration 대신 options 없는 core에서 시작합니다.",
      },
      {
        title: "Capability 조합",
        description:
          "Runtime, Admin Store/API, MCP, Telemetry, 내장 Identity를 각각 추가할 수 있습니다.",
      },
      {
        title: "Pipeline은 Host가 소유",
        description:
          "기존 앱이 authentication, authorization middleware, MapControllers()를 계속 관리합니다.",
      },
    ],
    relatedDocs: [
      { label: "ASP.NET Core 통합", path: "docs/integration/aspnet-core" },
    ],
    body: [
      {
        title: "기존 ASP.NET Core Host에 임베드",
        paragraphs: [
          "HsSqlAgent.Server는 class-library integration surface이며 애플리케이션 안에 두 번째 Web Host를 몰래 띄우는 방식이 아닙니다. 2.0.2 신규 통합은 AddHsSqlAgentCore()에서 시작하고 필요한 capability를 명시적으로 선택합니다.",
          "애플리케이션이 이미 login과 permission을 관리한다면 hs-sql-agent의 내장 member/role identity stack을 설치하지 않고 Admin authorization을 Host Policy에 위임할 수 있습니다.",
        ],
        code: {
          label: "ASP.NET Core 2.0.2",
          language: "csharp",
          value: aspNetCoreCode,
        },
      },
      {
        title: "내장 Identity와 Admin UI는 선택 사항",
        paragraphs: [
          "Host가 hs-sql-agent 자체 JWT/member/role 모델을 원할 때만 Host Authorization 대신 AddHsSqlAgentBuiltInAuth()를 선택합니다. 두 authorization mode는 서로 배타적입니다.",
          "번들 Admin UI도 필수가 아닙니다. 기존 애플리케이션은 Admin API만 노출하고 자체 Frontend를 사용할 수도 있고, 필요할 때 패키지 UI를 추가할 수도 있습니다.",
        ],
      },
      {
        title: "임베드해도 SQL 안전 경계는 약해지지 않습니다",
        paragraphs: [
          "Hosting topology가 바뀌어도 Query compilation, Safe DML, MCP-key scope, Policy, Provider capability check, Audit은 같은 hs-sql-agent Runtime 경계를 통과합니다.",
        ],
      },
    ],
  },
};

function databaseCopy(provider: string): MarketingCopy {
  return {
    title: `${provider} MCP Server`,
    headline: `${provider}에 대한 AI 접근을 통제합니다.`,
    description: `hs-sql-agent의 MCP surface, 타입 기반 SQL 컴파일러, 접근 정책, Safe DML, Audit 경계를 통해 AI Client를 ${provider}에 안전하게 연결합니다.`,
    eyebrow: `${provider} · MCP`,
    keywords: [
      `${provider} MCP server`,
      `${provider} AI agent`,
      `안전한 ${provider} MCP`,
      `${provider} SQL 컴파일러`,
    ],
    highlights: [
      {
        title: "하나의 통제된 MCP surface",
        description: `모델에 unrestricted database connection을 넘기지 않고 ${provider}를 노출합니다.`,
      },
      {
        title: "Dialect-aware compiler",
        description: `${provider} 고유 SQL 의미를 명시적인 source / target capability 경계 안에서 처리합니다.`,
      },
      {
        title: "실행 전에 Policy 적용",
        description:
          "Database scope, table policy, Tool 제한, Rate Limit, Safe DML, Audit을 커밋보다 먼저 적용합니다.",
      },
    ],
    relatedDocs: [
      {
        label: "데이터베이스 방언",
        path: "docs/sql-compiler/database-dialects",
      },
      { label: "SQL 실행 모델", path: "docs/sql-compiler/execution-model" },
      { label: "MCP Client 연결", path: "docs/mcp/client-onboarding" },
    ],
    body: [
      {
        title: `${provider}도 컴파일러 경계 뒤에 둡니다`,
        paragraphs: [
          `모델이 생성한 ${provider} SQL을 데이터베이스 자체가 실행할 수 있다는 이유만으로 신뢰하지 않습니다. SQL은 먼저 타입 기반 validation과 capability pipeline에 들어갑니다.`,
          "Provider support는 연결, metadata discovery, 지원 statement 컴파일, Policy 아래 실행이 가능하다는 뜻입니다. 모든 벤더 전용 문법을 자동 허용한다는 뜻은 아닙니다.",
        ],
      },
      {
        title: "Schema를 추측하기 전에 Metadata를 사용합니다",
        paragraphs: [
          `MCP Client는 ${provider} SQL을 만들기 전에 내장 metadata Tool로 schema, table, column을 확인할 수 있습니다. 무작정 schema를 추측하는 일을 줄이고 discovery를 같은 인증된 database scope 안에 유지합니다.`,
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
        title: "의미를 증명할 수 없으면 거부합니다",
        paragraphs: [
          `${provider}도 다른 Provider와 같은 규칙을 따릅니다. 지원하지 않는 문법이나 증명되지 않은 cross-provider semantics는 올바른 validation / capability 경계에서 거부하며, 동작이 다른 SQL로 조용히 바꾸지 않습니다.`,
        ],
      },
    ],
  };
}

export function getKoMarketingCopy(
  section: MarketingSection,
  slug: string
): MarketingCopy | undefined {
  if (section === "databases") {
    const provider = databaseProviders[slug];
    return provider ? databaseCopy(provider) : undefined;
  }
  return pages[`${section}/${slug}`];
}
