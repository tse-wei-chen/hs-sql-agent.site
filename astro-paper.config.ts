import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://sql-agent.net/",
    title: "hs-sql-agent",
    description: "Secure SQL access for AI agents through MCP, fail-closed SQL compilation, access policies, and safe DML workflows.",
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
      locales: ["en", "zh-hant"],
      localeLabels: {
        en: "English",
        "zh-hant": "繁體中文",
      },
    },
  },
  socials: [
    { name: "github", url: "https://github.com/tse-wei-chen/hs-sql-agent" },
  ],
  shareLinks: [],
});
