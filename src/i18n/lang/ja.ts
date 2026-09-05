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
    heroKicker: "MCP 向けに設計 · フェイルクローズ · 6 種類の SQL 方言",
    heroTitle: "AI エージェントから SQL を安全に実行。",
    heroDesc:
      "AI が生成した SQL とデータベースの間に、SQL コンパイラとアクセス制御の境界を設けます。hs-sql-agent は SQL を解析・検証し、接続先で意味を安全に保てることとアクセス権限を確認してから、データベースごとの SQL を実行します。",
    heroDescLinkBefore: "",
    heroDescLinkAfter: "",
    primaryCta: "はじめる",
    secondaryCta: "GitHub で見る",
    copyCommand: "コピー",
    copiedCommand: "コピー済み",
    compilerLive: "アクセスポリシーを適用中",
    compilerResult: "実行可能な SQL の準備完了",
    compilerTitle: "フェイルクローズ SQL コンパイラ",
    compilerDesc:
      "対応していない構文は、意味の異なる SQL に暗黙変換せず、その場で拒否します。",
    dmlTitle: "人の承認を必須にする DML",
    dmlDesc:
      "変更前に影響範囲を確認し、承認内容を検証済み実行計画へ固定したうえで、コミット直前に対象行を再検証します。",
    databaseTitle: "6 種類のデータベース方言",
    databaseDesc:
      "PostgreSQL、MySQL、SQL Server、Oracle、SQLite、Firebird を共通の MCP インターフェースから利用できます。",
    governanceTitle: "アクセス制御をモデルの外側へ",
    governanceDesc:
      "MCP キーごとにデータベース、テーブル、ツール、レート制限、セキュリティポリシー、監査をサーバー側で強制します。",
    capabilityKicker: "SQL 実行境界",
    capabilityTitle: "AI が生成した SQL を、信頼できない入力として扱う。",
    capabilityDesc:
      "重要なのは SQL を生成できることではありません。その文の意味を、許可した SQL 方言・機能・アクセスポリシーの範囲内で安全に実行できると確認できることです。",
    dmlKicker: "安全なデータ更新",
    dmlSectionTitle: "DML の承認は、確認ダイアログではなく実行プロトコルです。",
    dmlSectionDesc:
      "UPDATE と DELETE は変更前に対象行を読み取り、承認を検証済み実行計画と行集合のフィンガープリントへ結び付け、コミット直前にもう一度確認します。",
    dmlPreviewTitle: "事前確認",
    dmlPreviewDesc: "変更を実行せず、影響を受ける行を先に確認します。",
    dmlApproveTitle: "承認",
    dmlApproveDesc:
      "MCP form Elicitation を使い、人の明示的な承認を要求します。",
    dmlRevalidateTitle: "再検証",
    dmlRevalidateDesc:
      "コミット用トランザクションで対象行を再取得し、承認時の状態と一致するか確認します。",
    dmlCommitTitle: "コミット",
    dmlCommitDesc:
      "実行計画、ポリシー、承認チャレンジ、行数、対象行集合がすべて一致する場合にだけ変更を確定します。",
    databaseKicker: "共通の MCP、6 種類の SQL 方言",
    databaseSectionTitle: "既存のデータベースをそのまま使う。",
    databaseSectionDesc:
      "SQL コンパイラがデータベースごとの意味の違いを明示的に扱い、MCP クライアントには共通の統制されたインターフェースを提供します。",
    integrationKicker: "MCP と .NET 連携",
    integrationTitle: "エージェントが使う環境へそのまま接続。",
    integrationDesc:
      "Claude Desktop や Cursor などのリモート MCP クライアントへ接続するか、同じアクセス制御を ASP.NET Core アプリケーションへ組み込めます。",
    docsKicker: "ドキュメント",
    docsTitle: "最初の MCP キーから本番運用まで。",
    docsDesc:
      "セットアップ、MCP、SQL コンパイラ、管理、連携、運用、開発という実際の導入順にドキュメントを整理しています。",
    docsCta: "ドキュメントを見る",
  },
  docs: {
    indexTitle: "ドキュメント",
    indexDescription:
      "hs-sql-agent の利用ガイド、SQL コンパイラの考え方、連携、運用、リファレンス。",
    sidebarLabel: "ドキュメントナビゲーション",
    onThisPage: "このページの内容",
  },
  footer: {
    copyright: "著作権",
    allRightsReserved: "すべての権利を留保します。",
  },
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
    title: "404 ページが見つかりません",
    message: "お探しのページは見つかりませんでした",
    goHome: "ホームへ戻る",
  },
} satisfies UIStrings;
