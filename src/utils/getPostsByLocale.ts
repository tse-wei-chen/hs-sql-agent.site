import type { CollectionEntry } from "astro:content";
import config from "@/astro-paper.config"
const i18n = config.features?.internationalization;
const locales = i18n?.enabled ? i18n.locales : ['en']
const localeLabels = i18n?.enabled ? i18n.localeLabels : { en: "English" }
export { locales, localeLabels };

export function getPostsByLocale(
  posts: CollectionEntry<"posts">[],
  locale: string
) {
  return posts.filter(post => post.data.locale === locale);
}
