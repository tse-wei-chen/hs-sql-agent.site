import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://sql-agent.net/",
    title: "hs-sql-agent",
    description: "Open-source SQL-to-MCP tool factory for AI agents. Publish parameterized SQL as governed MCP tools with fail-closed validation, scoped database access, Safe DML approvals, and support for six SQL dialects.",
    author: "hs-sql-agent",
    profile: "https://github.com/tse-wei-chen/hs-sql-agent",
    ogImage: "",
    lang: "en",
    timezone: "Asia/Taipei",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 8,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
    internationalization: {
      enabled: true,
      locales: ["en", "zh-hant", "ja", "zh-hans", "ko", "fr", "de"],
      localeLabels: {
        en: "English",
        "zh-hant": "繁體中文",
        ja: "日本語",
        "zh-hans": "简体中文",
        ko: "한국어",
        fr: "Français",
        de: "Deutsch",
      },
    },
  },
  socials: [
    { name: "github", url: "https://github.com/tse-wei-chen/hs-sql-agent" },
  ],
  shareLinks: [],
});
