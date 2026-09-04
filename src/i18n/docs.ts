export type DocsUiStrings = {
  kicker: string;
  centerLabel: string;
  navigation: string;
  closeNavigation: string;
  copy: string;
  copied: string;
  code: string;
  paginationLabel: string;
  previous: string;
  next: string;
  versionLabel: string;
  latest: string;
  supported: string;
  archived: string;
  humanApproval: string;
  sections: Record<string, string>;
};

const docsUi: Record<string, DocsUiStrings> = {
  en: {
    kicker: "Docs",
    centerLabel: "Documentation",
    navigation: "Documentation",
    closeNavigation: "Close documentation navigation",
    copy: "Copy",
    copied: "Copied",
    code: "Code",
    paginationLabel: "Documentation pagination",
    previous: "Previous",
    next: "Next",
    versionLabel: "Documentation version",
    latest: "Latest",
    supported: "Supported",
    archived: "Archived",
    humanApproval: "HUMAN APPROVAL",
    sections: {
      administration: "Administration",
      development: "Development",
      "getting-started": "Getting Started",
      integration: "Integration",
      mcp: "MCP",
      operations: "Operations",
      reference: "Reference",
      security: "Security",
      "sql-compiler": "SQL Compiler",
    },
  },
  "zh-hant": {
    kicker: "文件",
    centerLabel: "文件中心",
    navigation: "文件導覽",
    closeNavigation: "關閉文件導覽",
    copy: "複製",
    copied: "已複製",
    code: "程式碼",
    paginationLabel: "文件分頁",
    previous: "上一篇",
    next: "下一篇",
    versionLabel: "文件版本",
    latest: "最新",
    supported: "支援中",
    archived: "封存",
    humanApproval: "真人核准",
    sections: {
      administration: "管理",
      development: "開發",
      "getting-started": "開始使用",
      integration: "整合",
      mcp: "MCP",
      operations: "維運",
      reference: "參考",
      security: "安全",
      "sql-compiler": "SQL Compiler",
    },
  },
  "zh-hans": {
    kicker: "文档",
    centerLabel: "文档中心",
    navigation: "文档导航",
    closeNavigation: "关闭文档导航",
    copy: "复制",
    copied: "已复制",
    code: "代码",
    paginationLabel: "文档分页",
    previous: "上一篇",
    next: "下一篇",
    versionLabel: "文档版本",
    latest: "最新",
    supported: "支持中",
    archived: "已归档",
    humanApproval: "人工批准",
    sections: {
      administration: "管理",
      development: "开发",
      "getting-started": "开始使用",
      integration: "集成",
      mcp: "MCP",
      operations: "运维",
      reference: "参考",
      security: "安全",
      "sql-compiler": "SQL Compiler",
    },
  },
  ja: {
    kicker: "ドキュメント",
    centerLabel: "ドキュメントセンター",
    navigation: "ドキュメント",
    closeNavigation: "ドキュメントナビゲーションを閉じる",
    copy: "コピー",
    copied: "コピー済み",
    code: "コード",
    paginationLabel: "ドキュメントページ送り",
    previous: "前へ",
    next: "次へ",
    versionLabel: "ドキュメントバージョン",
    latest: "最新",
    supported: "サポート中",
    archived: "アーカイブ",
    humanApproval: "人による承認",
    sections: {
      administration: "管理",
      development: "開発",
      "getting-started": "はじめに",
      integration: "連携",
      mcp: "MCP",
      operations: "運用",
      reference: "リファレンス",
      security: "セキュリティ",
      "sql-compiler": "SQL Compiler",
    },
  },
  ko: {
    kicker: "문서",
    centerLabel: "문서 센터",
    navigation: "문서",
    closeNavigation: "문서 탐색 닫기",
    copy: "복사",
    copied: "복사됨",
    code: "코드",
    paginationLabel: "문서 페이지 이동",
    previous: "이전",
    next: "다음",
    versionLabel: "문서 버전",
    latest: "최신",
    supported: "지원 중",
    archived: "보관됨",
    humanApproval: "사용자 승인",
    sections: {
      administration: "관리",
      development: "개발",
      "getting-started": "시작하기",
      integration: "통합",
      mcp: "MCP",
      operations: "운영",
      reference: "참조",
      security: "보안",
      "sql-compiler": "SQL Compiler",
    },
  },
};

export function useDocsUi(locale: string = "en"): DocsUiStrings {
  return docsUi[locale] ?? docsUi.en;
}
