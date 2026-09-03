import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://astro-paper.pages.dev/",
    title: "Gary's blog",
    description: "Gary 的技術筆記與生活隨筆。",
    author: "Tse-Wei Chen",
    profile: "https://media.licdn.com/dms/image/v2/D4E03AQFMWO8HHEvR7w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666318355758?e=1783555200&v=beta&t=KrSRGFWVgxLnVhE9369GGqRq3Fy0sX33UnuBhtgGY6I",
    ogImage: "",
    lang: "zh-hant",
    timezone: "Asia/Taipei",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
    internationalization: {
      enabled: true,
      locales: ["en", "zh-hant"],
      localeLabels: {
        "en": "English",
        "zh-hant": "繁體中文",
      }
    }
  },
  socials: [
    { name: "github",   url: "https://github.com/tse-wei-chen" },
    // { name: "x",        url: "https://x.com/username" },
    { name: "linkedin", url: "https://www.linkedin.com/in/tsewei-chen-001477254/" },
    { name: "mail",     url: "mailto:gary20020322@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});