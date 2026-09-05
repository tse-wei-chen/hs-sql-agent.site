import {
  getLocalizedMarketingPage,
  type LocalizedMarketingPage,
  type MarketingSection,
} from "./marketingCatalog";

export function resolveMarketingPage(
  locale: string,
  section: MarketingSection,
  slug: string
): LocalizedMarketingPage | undefined {
  return getLocalizedMarketingPage(locale, section, slug);
}
