import {
  getMarketingPage as getCoreMarketingPage,
  getMarketingPages as getCoreMarketingPages,
  isMarketingSection,
  type MarketingPage,
  type MarketingSection,
} from "./marketing";
import { getAspNetCoreMarketingPage } from "./marketingAspNetCore";
import {
  getExtraMarketingCopy,
  isExtraMarketingLocale,
} from "./marketingLocales";
import { getSafeDmlMarketingPage } from "./marketingSafeDml";

export const marketingLocales = [
  "en",
  "zh-hant",
  "ja",
  "zh-hans",
  "ko",
  "fr",
  "de",
] as const;

export type LocalizedMarketingLocale = (typeof marketingLocales)[number];
export type LocalizedMarketingPage = Omit<MarketingPage, "locale"> & {
  locale: LocalizedMarketingLocale;
};

const baseDefinitions = getCoreMarketingPages("en");

export { isMarketingSection };
export type { MarketingSection };

export function normalizeLocalizedMarketingLocale(
  locale: string
): LocalizedMarketingLocale {
  return marketingLocales.includes(locale as LocalizedMarketingLocale)
    ? (locale as LocalizedMarketingLocale)
    : "en";
}

function resolvePage(
  locale: LocalizedMarketingLocale,
  section: MarketingSection,
  slug: string
): LocalizedMarketingPage | undefined {
  const definition = baseDefinitions.find(
    page => page.section === section && page.slug === slug
  );
  if (!definition) return undefined;

  // Release-sensitive product positioning stays on one latest-only authority per
  // page so supplemental locale catalogs cannot drift from the current product.
  if (section === "integrations" && slug === "aspnet-core") {
    return getAspNetCoreMarketingPage(locale) as LocalizedMarketingPage;
  }
  if (section === "features" && slug === "safe-dml") {
    return getSafeDmlMarketingPage(locale) as LocalizedMarketingPage;
  }

  if (locale === "en" || locale === "zh-hant") {
    return getCoreMarketingPage(locale, section, slug) as
      | LocalizedMarketingPage
      | undefined;
  }

  if (!isExtraMarketingLocale(locale)) return undefined;
  const copy = getExtraMarketingCopy(locale, section, slug);
  if (!copy) return undefined;

  return {
    locale,
    section: definition.section,
    slug: definition.slug,
    order: definition.order,
    visual: definition.visual,
    ...copy,
  };
}

export function getLocalizedMarketingPages(
  locale: string,
  section?: MarketingSection
): LocalizedMarketingPage[] {
  const normalizedLocale = normalizeLocalizedMarketingLocale(locale);
  return baseDefinitions
    .filter(definition => !section || definition.section === section)
    .map(definition =>
      resolvePage(normalizedLocale, definition.section, definition.slug)
    )
    .filter((page): page is LocalizedMarketingPage => Boolean(page))
    .sort(
      (a, b) =>
        a.order - b.order || a.title.localeCompare(b.title, normalizedLocale)
    );
}

export function getLocalizedMarketingPage(
  locale: string,
  section: MarketingSection,
  slug: string
): LocalizedMarketingPage | undefined {
  return resolvePage(normalizeLocalizedMarketingLocale(locale), section, slug);
}

export function hasLocalizedMarketingPage(
  locale: string,
  section: string,
  slug: string
): boolean {
  if (!isMarketingSection(section)) return false;
  return Boolean(getLocalizedMarketingPage(locale, section, slug));
}

export function getLocalizedMarketingRoutes(): Array<{
  locale: LocalizedMarketingLocale;
  section: MarketingSection;
  slug: string;
}> {
  return marketingLocales.flatMap(locale =>
    baseDefinitions.map(definition => ({
      locale,
      section: definition.section,
      slug: definition.slug,
    }))
  );
}
