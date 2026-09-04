import config from "@/astro-paper.config";

const i18n = config.features?.internationalization;

export const locales = i18n?.enabled ? i18n.locales : ["en"];
export const localeLabels = i18n?.enabled
  ? i18n.localeLabels
  : { en: "English" };
