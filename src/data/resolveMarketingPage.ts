import { getMarketingPage, type MarketingPage, type MarketingSection } from "@/data/marketing";
import { getAspNetCoreMarketingPage } from "@/data/marketingAspNetCore";

export function resolveMarketingPage(
  locale: string,
  section: MarketingSection,
  slug: string
): MarketingPage | undefined {
  if (section === "integrations" && slug === "aspnet-core") {
    return getAspNetCoreMarketingPage(locale);
  }

  return getMarketingPage(locale, section, slug);
}
