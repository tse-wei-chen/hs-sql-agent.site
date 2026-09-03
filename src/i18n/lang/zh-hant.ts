import type { UIStrings } from "../types";

export default {
  nav: {
    home: "主頁",
    posts: "文章",
    tags: "標籤",
    about: "關於",
    archives: "歸檔",
    search: "搜尋",
  },
  post: {
    publishedAt: "發布於",
    updatedAt: "更新於",
    sharePostIntro: "分享此文章：",
    sharePostOn: "分享文章至 {{platform}}",
    sharePostViaEmail: "透過電子郵件分享此文章",
    tagLabel: "標籤",
    backToTop: "回頂部",
    goBack: "回上一頁",
    editPage: "編輯頁面",
    previousPost: "上一篇文章",
    nextPost: "下一篇文章",
  },
  pagination: {
    prev: "上一頁",
    next: "下一頁",
    page: "頁碼",
  },
  home: {
    socialLinks: "社群連結",
    featured: "精選文章",
    recentPosts: "最新文章",
    allPosts: "所有文章",
    heroTitle: "你好",
    heroDesc: "我的個性沉默寡言，想開始嘗試寫blog，也許會很少更新。預計會主要分享一些心得、還有我得本職(軟體工程師)的一些文章，感謝觀看",
    heroDescLinkBefore: "",
    heroDescLinkAfter: ""
  },
  footer: {
    copyright: "版權所有",
    allRightsReserved: "保留所有權利。",
  },
  pages: {
    tagTitle: "標籤",
    tagDesc: "所有帶有此標籤的文章",

    tagsTitle: "標籤",
    tagsDesc: "文章中使用的所有標籤。",

    postsTitle: "文章",
    postsDesc: "我發布的所有文章。",

    archivesTitle: "歸檔",
    archivesDesc: "我歸檔的所有文章。",

    searchTitle: "搜尋",
    searchDesc: "搜尋任何文章...",
  },
  a11y: {
    skipToContent: "跳至主要內容",
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
    toggleTheme: "切換主題",
    searchPlaceholder: "搜尋文章...",
    noResults: "找不到相關結果",
    goToPreviousPage: "前往上一頁",
    goToNextPage: "前往下一頁",
    rssFeed: "簡易資訊聚合"
  },
  notFound: {
    title: "404 找不到網頁",
    message: "頁面不存在",
    goHome: "返回首頁",
  },
} satisfies UIStrings;