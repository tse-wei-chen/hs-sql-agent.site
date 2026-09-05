import type { UIStrings } from "../types";

export default {
  nav: {
    home: "홈",
    features: "기능",
    databases: "데이터베이스",
    integrations: "통합",
    docs: "문서",
    github: "GitHub",
    posts: "게시물",
    tags: "태그",
    about: "소개",
    archives: "아카이브",
    search: "검색",
  },
  post: {
    publishedAt: "게시일",
    updatedAt: "업데이트",
    sharePostIntro: "이 글 공유:",
    sharePostOn: "{{platform}}에 이 글 공유",
    sharePostViaEmail: "이메일로 이 글 공유",
    tagLabel: "태그",
    backToTop: "맨 위로",
    goBack: "뒤로",
    editPage: "페이지 편집",
    previousPost: "이전 글",
    nextPost: "다음 글",
  },
  pagination: { prev: "이전", next: "다음", page: "페이지" },
  home: {
    socialLinks: "소셜 링크",
    featured: "추천",
    recentPosts: "최근 게시물",
    allPosts: "모든 게시물",
    heroKicker: "MCP에 맞게 설계 · 페일 클로즈 · 6개 SQL 방언",
    heroTitle: "AI 에이전트의 SQL 실행을 안전하게.",
    heroDesc:
      "AI가 생성한 SQL과 데이터베이스 사이에 SQL 컴파일러와 접근 제어 경계를 둡니다. hs-sql-agent는 SQL을 파싱하고 검증한 뒤 대상 데이터베이스에서 의미를 안전하게 보존할 수 있는지와 접근 권한을 확인하고, 그다음에 데이터베이스별 SQL을 실행합니다.",
    heroDescLinkBefore: "",
    heroDescLinkAfter: "",
    primaryCta: "시작하기",
    secondaryCta: "GitHub에서 보기",
    copyCommand: "복사",
    copiedCommand: "복사됨",
    compilerLive: "정책 경계 적용 중",
    compilerResult: "실행 가능한 SQL 생성 완료",
    compilerTitle: "페일 클로즈 SQL 컴파일러",
    compilerDesc:
      "지원하지 않는 구문은 의미가 다른 SQL로 조용히 바꾸지 않고 즉시 거부합니다.",
    dmlTitle: "사람의 승인을 거치는 DML",
    dmlDesc:
      "변경 전에 영향 범위를 확인하고 승인 내용을 검증된 실행 계획에 고정한 뒤, 커밋 직전에 대상 행을 다시 검증합니다.",
    databaseTitle: "6개 데이터베이스 방언",
    databaseDesc:
      "PostgreSQL, MySQL, SQL Server, Oracle, SQLite, Firebird를 공통 MCP 인터페이스에서 사용할 수 있습니다.",
    governanceTitle: "접근 제어를 모델 밖에서 강제",
    governanceDesc:
      "MCP 키별 데이터베이스, 테이블, 도구, 요청 속도 제한, 보안 정책, 감사를 서버에서 강제합니다.",
    capabilityKicker: "SQL 실행 경계",
    capabilityTitle: "AI가 생성한 SQL을 신뢰할 수 없는 입력으로 취급합니다.",
    capabilityDesc:
      "중요한 것은 SQL을 생성할 수 있는지가 아닙니다. 해당 문장의 의미를 허용된 SQL 방언, 지원 기능, 접근 정책 안에서 안전하게 실행할 수 있는지 확인하는 것이 중요합니다.",
    dmlKicker: "안전한 데이터 변경",
    dmlSectionTitle: "DML 승인은 확인 대화상자가 아니라 실행 프로토콜입니다.",
    dmlSectionDesc:
      "UPDATE와 DELETE는 변경 전에 대상 행을 읽고, 승인 내용을 검증된 실행 계획과 행 집합 핑거프린트에 연결한 뒤 커밋 직전에 다시 확인합니다.",
    dmlPreviewTitle: "미리보기",
    dmlPreviewDesc: "변경을 실행하지 않고 영향을 받을 행을 먼저 확인합니다.",
    dmlApproveTitle: "승인",
    dmlApproveDesc:
      "MCP form Elicitation을 사용해 사람의 명시적인 승인을 요구합니다.",
    dmlRevalidateTitle: "재검증",
    dmlRevalidateDesc:
      "커밋 트랜잭션에서 대상 행을 다시 조회하고 승인 당시 상태와 같은지 확인합니다.",
    dmlCommitTitle: "커밋",
    dmlCommitDesc:
      "실행 계획, 정책, 승인 챌린지, 행 수, 대상 행 집합이 모두 같을 때만 변경을 확정합니다.",
    databaseKicker: "공통 MCP, 6개 SQL 방언",
    databaseSectionTitle: "이미 운영 중인 데이터베이스를 그대로 사용하세요.",
    databaseSectionDesc:
      "SQL 컴파일러가 데이터베이스별 의미 차이를 명확하게 처리하고 MCP 클라이언트에는 공통으로 통제된 인터페이스를 제공합니다.",
    integrationKicker: "MCP 및 .NET 통합",
    integrationTitle: "에이전트가 사용하는 환경에 바로 연결합니다.",
    integrationDesc:
      "Claude Desktop, Cursor 같은 원격 MCP 클라이언트에 연결하거나 동일한 접근 제어를 ASP.NET Core 애플리케이션에 내장할 수 있습니다.",
    docsKicker: "문서",
    docsTitle: "첫 MCP 키부터 운영 환경까지.",
    docsDesc:
      "설치, MCP, SQL 컴파일러, 관리, 통합, 운영, 개발이라는 실제 도입 순서에 맞춰 문서를 구성했습니다.",
    docsCta: "문서 둘러보기",
  },
  docs: {
    indexTitle: "문서",
    indexDescription:
      "hs-sql-agent 사용 가이드, SQL 컴파일러의 핵심 개념, 통합, 운영 및 참조 문서.",
    sidebarLabel: "문서 탐색",
    onThisPage: "이 페이지의 내용",
  },
  footer: { copyright: "저작권", allRightsReserved: "모든 권리를 보유합니다." },
  pages: {
    tagTitle: "태그",
    tagDesc: "이 태그가 포함된 모든 글",
    tagsTitle: "태그",
    tagsDesc: "게시물에서 사용된 모든 태그.",
    postsTitle: "게시물",
    postsDesc: "모든 게시물.",
    archivesTitle: "아카이브",
    archivesDesc: "보관된 게시물.",
    searchTitle: "문서 검색",
    searchDesc: "hs-sql-agent 문서를 검색합니다.",
  },
  a11y: {
    skipToContent: "본문으로 건너뛰기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    toggleTheme: "테마 전환",
    searchPlaceholder: "문서 검색...",
    noResults: "검색 결과가 없습니다",
    rssFeed: "RSS 피드",
    goToPreviousPage: "이전 페이지로 이동",
    goToNextPage: "다음 페이지로 이동",
  },
  notFound: {
    title: "404 페이지를 찾을 수 없음",
    message: "요청한 페이지를 찾을 수 없습니다",
    goHome: "홈으로 돌아가기",
  },
} satisfies UIStrings;
