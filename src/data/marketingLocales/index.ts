import type { MarketingSection } from "../marketing";
import { getDeMarketingCopy } from "./de";
import { getFrMarketingCopy } from "./fr";
import { getJaMarketingCopy } from "./ja";
import { getKoMarketingCopy } from "./ko";
import type {
  ExtraMarketingLocale,
  MarketingCopy,
  MarketingCopyResolver,
} from "./types";
import { getZhHansMarketingCopy } from "./zh-hans";

const resolvers: Record<ExtraMarketingLocale, MarketingCopyResolver> = {
  ja: getJaMarketingCopy,
  "zh-hans": getZhHansMarketingCopy,
  ko: getKoMarketingCopy,
  fr: getFrMarketingCopy,
  de: getDeMarketingCopy,
};

export function isExtraMarketingLocale(
  locale: string
): locale is ExtraMarketingLocale {
  return locale in resolvers;
}

export function getExtraMarketingCopy(
  locale: ExtraMarketingLocale,
  section: MarketingSection,
  slug: string
): MarketingCopy | undefined {
  return resolvers[locale](section, slug);
}
