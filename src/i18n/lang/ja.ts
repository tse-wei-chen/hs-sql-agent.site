import type { UIStrings } from "../types";

export default {
  nav: {
    home: "ホーム",
    features: "機能",
    databases: "データベース",
    integrations: "連携",
    docs: "ドキュメント",
    github: "GitHub",
    posts: "記事",
    tags: "タグ",
    about: "概要",
    archives: "アーカイブ",
    search: "検索",
  },
  post: {
    publishedAt: "公開日",
    updatedAt: "更新日",
    sharePostIntro: "この記事を共有:",
    sharePostOn: "{{platform}} でこの記事を共有",
    sharePostViaEmail: "メールでこの記事を共有",
    tagLabel: "タグ",
    backToTop: "ページ上部へ",
    goBack: "戻る",
    editPage: "ページを編集",
    previousPost: "前の記事",
    nextPost: "次の記事",
  },
  pagination: { prev: "前へ", next: "次へ", page: "ページ" },
  home: {
    socialLinks: "ソーシャルリンク",
    featured: "注目",
    recentPosts: "最新記事",
    allPosts: "すべての記事",
    heroKicker: "MCP ネイティブ · fail-closed · 6つの SQL 方言",
    heroTitle: "AI エージェントのための安全な SQL 実行。",
    heroDesc:
      "生成された SQL とデータベースの間にコンパイラとガバナンス境界を設けます。hs-sql-agent は SQL を解析・検証し、capability を証明してアクセス方針を適用した後にのみ、プロバイダー固有の SQL を実行します。",
    heroDescLinkBefore: "",
    heroDescLinkAfter: "",
    primaryCta: "はじめる",
    secondaryCta: "GitHub で見る",
    copyCommand: "コピー",
    copiedCommand: "コピー済み",
    compilerLive: "Policy boundary 稼働中",
    compilerResult: "Provider-safe SQL 準備完了",
    compilerTitle: "Fail-closed SQL compiler",
    compilerDesc:
      "未対応の構文は、意味の異なる SQL に暗黙変換せず、その場で拒否します。",
    dmlTitle: "人による承認付き DML",
    dmlDesc:
      "影響範囲をプレビューし、承認を検証済みプランに結び付け、commit transaction 内で対象 row set を再検証します。",
    databaseTitle: "6つのデータベース方言",
    databaseDesc:
      "PostgreSQL、MySQL、SQL Server、Oracle、SQLite、Firebird を単一の MCP surface から利用できます。",
    governanceTitle: "ガバナンスを標準装備",
    governanceDesc:
      "キー単位の database scope、table allowlist、tool 制限、rate limit、security policy、audit を LLM の外側で強制します。",
    capabilityKicker: "Compiler boundary",
    capabilityTitle: "生成 SQL を信頼できない入力として扱う。",
    capabilityDesc:
      "重要なのは SQL を生成できることではありません。その文が公開を意図した dialect、capability、policy の境界内にあると証明できることです。",
    dmlKicker: "Safe mutation path",
    dmlSectionTitle: "DML approval は確認ダイアログではなく、プロトコルです。",
    dmlSectionDesc:
      "UPDATE と DELETE は変更前に影響行を読み取り、承認を validated compiled plan と row-set fingerprint に結び付け、commit 前に対象行をもう一度確認します。",
    dmlPreviewTitle: "Preview",
    dmlPreviewDesc: "変更を実行せず、影響を受ける行を読み取ります。",
    dmlApproveTitle: "Approve",
    dmlApproveDesc:
      "MCP form Elicitation により、人間のオペレーターへ明示的な承認を要求します。",
    dmlRevalidateTitle: "Revalidate",
    dmlRevalidateDesc:
      "commit transaction 内で再問い合わせし、結び付けた row set と一致するか確認します。",
    dmlCommitTitle: "Commit",
    dmlCommitDesc:
      "plan、policy、challenge、row count、row set がすべて一致している場合にのみ実行します。",
    databaseKicker: "1つの surface、6つの dialect",
    databaseSectionTitle: "今使っているデータベースをそのまま使う。",
    databaseSectionDesc:
      "Compiler がプロバイダー固有の SQL semantics を明示的に扱い、MCP client には単一の governed interface を提供します。",
    integrationKicker: "MCP と .NET integration",
    integrationTitle: "エージェントが働く場所へそのまま接続。",
    integrationDesc:
      "Claude Desktop や Cursor などの remote MCP client に接続するか、同じ governed server boundary を ASP.NET Core アプリケーションへ組み込めます。",
    docsKicker: "Documentation",
    docsTitle: "最初の MCP key から production governance まで。",
    docsDesc:
      "セットアップ、MCP、compiler guarantees、管理、連携、運用、開発という実際の導入フローに沿ってドキュメントを構成しています。",
    docsCta: "ドキュメントを見る",
  },
  docs: {
    indexTitle: "ドキュメント",
    indexDescription:
      "hs-sql-agent のガイド、SQL compiler の概念、連携、運用、リファレンス。",
    sidebarLabel: "ドキュメントナビゲーション",
    onThisPage: "このページの内容",
  },
  footer: { copyright: "Copyright", allRightsReserved: "All rights reserved." },
  pages: {
    tagTitle: "タグ",
    tagDesc: "このタグが付いたすべての記事",
    tagsTitle: "タグ",
    tagsDesc: "記事で使用されているすべてのタグ。",
    postsTitle: "記事",
    postsDesc: "すべての記事。",
    archivesTitle: "アーカイブ",
    archivesDesc: "アーカイブされた記事。",
    searchTitle: "ドキュメント検索",
    searchDesc: "hs-sql-agent のドキュメントを検索します。",
  },
  a11y: {
    skipToContent: "本文へ移動",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    toggleTheme: "テーマを切り替える",
    searchPlaceholder: "ドキュメントを検索...",
    noResults: "結果が見つかりません",
    rssFeed: "RSS フィード",
    goToPreviousPage: "前のページへ",
    goToNextPage: "次のページへ",
  },
  notFound: {
    title: "404 Not Found",
    message: "ページが見つかりません",
    goHome: "ホームへ戻る",
  },
} satisfies UIStrings;
