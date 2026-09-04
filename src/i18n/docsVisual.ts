export type DocsVisualUiStrings = {
  overview: {
    gettingStarted: string;
    quickStart: string;
    sqlCompiler: string;
    executionModel: string;
    operations: string;
    deployment: string;
  };
  compiler: {
    pipeline: string;
    parse: string;
    bind: string;
    validate: string;
    prove: string;
    compile: string;
    providerSql: string;
  };
  safeDml: {
    protocol: string;
    preview: string;
    approve: string;
    revalidate: string;
    commit: string;
    humanApproval: string;
  };
  mcp: {
    protocol: string;
    aiClient: string;
    policy: string;
    database: string;
    footer: string;
  };
  databases: {
    compiler: string;
  };
  security: {
    policyBoundary: string;
    databaseScope: string;
    tables: string;
    key: string;
    policy: string;
    footer: string;
  };
  distributed: {
    runtime: string;
    node: string;
    controlPlane: string;
    sharedState: string;
  };
  observability: {
    title: string;
    request: string;
    auth: string;
    compiler: string;
    database: string;
    footer: string;
  };
};

const docsVisualUi: Record<string, DocsVisualUiStrings> = {
  en: {
    overview: {
      gettingStarted: "GETTING STARTED",
      quickStart: "Quick Start",
      sqlCompiler: "SQL COMPILER",
      executionModel: "Execution Model",
      operations: "OPERATIONS",
      deployment: "Deployment",
    },
    compiler: {
      pipeline: "TYPED SQL PIPELINE",
      parse: "Parse",
      bind: "Bind",
      validate: "Validate",
      prove: "Prove",
      compile: "Compile",
      providerSql: "provider SQL",
    },
    safeDml: {
      protocol: "SAFE DML PROTOCOL",
      preview: "Preview",
      approve: "Approve",
      revalidate: "Revalidate",
      commit: "Commit",
      humanApproval: "HUMAN APPROVAL",
    },
    mcp: {
      protocol: "MODEL CONTEXT PROTOCOL",
      aiClient: "AI Client",
      policy: "Policy",
      database: "Database",
      footer: "TOOLS · KEYS · ELICITATION · AUDIT",
    },
    databases: { compiler: "COMPILER" },
    security: {
      policyBoundary: "SERVER POLICY BOUNDARY",
      databaseScope: "DATABASE SCOPE",
      tables: "Tables",
      key: "Key",
      policy: "POLICY",
      footer: "AUTH · TOOL SCOPE · TABLE POLICY · RATE LIMIT · AUDIT",
    },
    distributed: {
      runtime: "DISTRIBUTED RUNTIME",
      node: "Node",
      controlPlane: "control plane",
      sharedState: "shared runtime state",
    },
    observability: {
      title: "OBSERVABILITY",
      request: "request",
      auth: "auth",
      compiler: "compiler",
      database: "database",
      footer: "OTEL · METRICS · AUDIT",
    },
  },
  "zh-hant": {
    overview: {
      gettingStarted: "開始使用",
      quickStart: "快速開始",
      sqlCompiler: "SQL 編譯器",
      executionModel: "執行模型",
      operations: "維運",
      deployment: "部署",
    },
    compiler: {
      pipeline: "型別化 SQL 流程",
      parse: "解析",
      bind: "綁定",
      validate: "驗證",
      prove: "證明",
      compile: "編譯",
      providerSql: "資料庫 SQL",
    },
    safeDml: {
      protocol: "SAFE DML 協定",
      preview: "預覽",
      approve: "核准",
      revalidate: "重驗",
      commit: "認可",
      humanApproval: "人工核准",
    },
    mcp: {
      protocol: "MCP",
      aiClient: "AI 用戶端",
      policy: "政策",
      database: "資料庫",
      footer: "工具 · 金鑰 · ELICITATION · 稽核",
    },
    databases: { compiler: "編譯器" },
    security: {
      policyBoundary: "伺服器政策邊界",
      databaseScope: "資料庫範圍",
      tables: "資料表",
      key: "金鑰",
      policy: "政策",
      footer: "驗證 · 工具範圍 · 資料表政策 · 速率限制 · 稽核",
    },
    distributed: {
      runtime: "分散式執行階段",
      node: "節點",
      controlPlane: "控制平面",
      sharedState: "共用執行狀態",
    },
    observability: {
      title: "可觀測性",
      request: "要求",
      auth: "驗證",
      compiler: "編譯器",
      database: "資料庫",
      footer: "OTEL · 指標 · 稽核",
    },
  },
  "zh-hans": {
    overview: {
      gettingStarted: "开始使用",
      quickStart: "快速开始",
      sqlCompiler: "SQL 编译器",
      executionModel: "执行模型",
      operations: "运维",
      deployment: "部署",
    },
    compiler: {
      pipeline: "类型化 SQL 流程",
      parse: "解析",
      bind: "绑定",
      validate: "验证",
      prove: "证明",
      compile: "编译",
      providerSql: "数据库 SQL",
    },
    safeDml: {
      protocol: "SAFE DML 协议",
      preview: "预览",
      approve: "批准",
      revalidate: "重验",
      commit: "提交",
      humanApproval: "人工批准",
    },
    mcp: {
      protocol: "MCP",
      aiClient: "AI 客户端",
      policy: "策略",
      database: "数据库",
      footer: "工具 · 密钥 · ELICITATION · 审计",
    },
    databases: { compiler: "编译器" },
    security: {
      policyBoundary: "服务器策略边界",
      databaseScope: "数据库范围",
      tables: "数据表",
      key: "密钥",
      policy: "策略",
      footer: "验证 · 工具范围 · 表策略 · 速率限制 · 审计",
    },
    distributed: {
      runtime: "分布式运行时",
      node: "节点",
      controlPlane: "控制平面",
      sharedState: "共享运行状态",
    },
    observability: {
      title: "可观测性",
      request: "请求",
      auth: "验证",
      compiler: "编译器",
      database: "数据库",
      footer: "OTEL · 指标 · 审计",
    },
  },
  ja: {
    overview: {
      gettingStarted: "はじめに",
      quickStart: "クイックスタート",
      sqlCompiler: "SQL コンパイラ",
      executionModel: "実行モデル",
      operations: "運用",
      deployment: "デプロイ",
    },
    compiler: {
      pipeline: "型付き SQL パイプライン",
      parse: "解析",
      bind: "バインド",
      validate: "検証",
      prove: "証明",
      compile: "コンパイル",
      providerSql: "DB 向け SQL",
    },
    safeDml: {
      protocol: "SAFE DML",
      preview: "確認",
      approve: "承認",
      revalidate: "再検証",
      commit: "コミット",
      humanApproval: "人による承認",
    },
    mcp: {
      protocol: "MCP",
      aiClient: "AI クライアント",
      policy: "ポリシー",
      database: "データベース",
      footer: "ツール · キー · ELICITATION · 監査",
    },
    databases: { compiler: "コンパイラ" },
    security: {
      policyBoundary: "サーバーポリシー境界",
      databaseScope: "DB の範囲",
      tables: "テーブル",
      key: "キー",
      policy: "ポリシー",
      footer: "認証 · ツール範囲 · テーブルポリシー · 制限 · 監査",
    },
    distributed: {
      runtime: "分散ランタイム",
      node: "ノード",
      controlPlane: "制御プレーン",
      sharedState: "共有ランタイム状態",
    },
    observability: {
      title: "オブザーバビリティ",
      request: "リクエスト",
      auth: "認証",
      compiler: "コンパイラ",
      database: "データベース",
      footer: "OTEL · メトリクス · 監査",
    },
  },
  ko: {
    overview: {
      gettingStarted: "시작하기",
      quickStart: "빠른 시작",
      sqlCompiler: "SQL 컴파일러",
      executionModel: "실행 모델",
      operations: "운영",
      deployment: "배포",
    },
    compiler: {
      pipeline: "타입 기반 SQL 파이프라인",
      parse: "파싱",
      bind: "바인딩",
      validate: "검증",
      prove: "증명",
      compile: "컴파일",
      providerSql: "DB용 SQL",
    },
    safeDml: {
      protocol: "SAFE DML",
      preview: "미리보기",
      approve: "승인",
      revalidate: "재검증",
      commit: "커밋",
      humanApproval: "사용자 승인",
    },
    mcp: {
      protocol: "MCP",
      aiClient: "AI 클라이언트",
      policy: "정책",
      database: "데이터베이스",
      footer: "도구 · 키 · ELICITATION · 감사",
    },
    databases: { compiler: "컴파일러" },
    security: {
      policyBoundary: "서버 정책 경계",
      databaseScope: "DB 범위",
      tables: "테이블",
      key: "키",
      policy: "정책",
      footer: "인증 · 도구 범위 · 테이블 정책 · 속도 제한 · 감사",
    },
    distributed: {
      runtime: "분산 런타임",
      node: "노드",
      controlPlane: "제어 영역",
      sharedState: "공유 런타임 상태",
    },
    observability: {
      title: "관측 가능성",
      request: "요청",
      auth: "인증",
      compiler: "컴파일러",
      database: "데이터베이스",
      footer: "OTEL · 메트릭 · 감사",
    },
  },
  fr: {
    overview: {
      gettingStarted: "PRISE EN MAIN",
      quickStart: "Démarrage rapide",
      sqlCompiler: "COMPILATEUR SQL",
      executionModel: "Modèle d’exécution",
      operations: "EXPLOITATION",
      deployment: "Déploiement",
    },
    compiler: {
      pipeline: "CHAÎNE SQL TYPÉE",
      parse: "Analyser",
      bind: "Lier",
      validate: "Valider",
      prove: "Vérifier",
      compile: "Compiler",
      providerSql: "SQL cible",
    },
    safeDml: {
      protocol: "PROTOCOLE SAFE DML",
      preview: "Prévisualiser",
      approve: "Approuver",
      revalidate: "Revérifier",
      commit: "Valider",
      humanApproval: "APPROBATION HUMAINE",
    },
    mcp: {
      protocol: "MCP",
      aiClient: "Client IA",
      policy: "Politique",
      database: "Base de données",
      footer: "OUTILS · CLÉS · ELICITATION · AUDIT",
    },
    databases: { compiler: "COMPILATEUR" },
    security: {
      policyBoundary: "FRONTIÈRE DES POLITIQUES SERVEUR",
      databaseScope: "PÉRIMÈTRE DE BASE",
      tables: "Tables",
      key: "Clé",
      policy: "POLITIQUE",
      footer: "AUTH · OUTILS · POLITIQUE TABLES · DÉBIT · AUDIT",
    },
    distributed: {
      runtime: "EXÉCUTION DISTRIBUÉE",
      node: "Nœud",
      controlPlane: "plan de contrôle",
      sharedState: "état d’exécution partagé",
    },
    observability: {
      title: "OBSERVABILITÉ",
      request: "requête",
      auth: "auth",
      compiler: "compilateur",
      database: "base de données",
      footer: "OTEL · MÉTRIQUES · AUDIT",
    },
  },
  de: {
    overview: {
      gettingStarted: "ERSTE SCHRITTE",
      quickStart: "Schnellstart",
      sqlCompiler: "SQL-COMPILER",
      executionModel: "Ausführungsmodell",
      operations: "BETRIEB",
      deployment: "Bereitstellung",
    },
    compiler: {
      pipeline: "TYPISIERTE SQL-PIPELINE",
      parse: "Parsen",
      bind: "Binden",
      validate: "Validieren",
      prove: "Nachweisen",
      compile: "Kompilieren",
      providerSql: "Datenbank-SQL",
    },
    safeDml: {
      protocol: "SAFE-DML-PROTOKOLL",
      preview: "Vorschau",
      approve: "Freigeben",
      revalidate: "Erneut prüfen",
      commit: "Commit",
      humanApproval: "MENSCHLICHE FREIGABE",
    },
    mcp: {
      protocol: "MCP",
      aiClient: "KI-Client",
      policy: "Richtlinie",
      database: "Datenbank",
      footer: "WERKZEUGE · SCHLÜSSEL · ELICITATION · AUDIT",
    },
    databases: { compiler: "COMPILER" },
    security: {
      policyBoundary: "SERVER-RICHTLINIENGRENZE",
      databaseScope: "DATENBANKUMFANG",
      tables: "Tabellen",
      key: "Schlüssel",
      policy: "RICHTLINIE",
      footer: "AUTH · WERKZEUGUMFANG · TABELLENRICHTLINIE · RATENLIMIT · AUDIT",
    },
    distributed: {
      runtime: "VERTEILTE LAUFZEIT",
      node: "Knoten",
      controlPlane: "Steuerungsebene",
      sharedState: "gemeinsamer Laufzeitstatus",
    },
    observability: {
      title: "BEOBACHTBARKEIT",
      request: "Anfrage",
      auth: "Auth",
      compiler: "Compiler",
      database: "Datenbank",
      footer: "OTEL · METRIKEN · AUDIT",
    },
  },
};

export function useDocsVisualUi(locale: string = "en"): DocsVisualUiStrings {
  return docsVisualUi[locale] ?? docsVisualUi.en;
}
