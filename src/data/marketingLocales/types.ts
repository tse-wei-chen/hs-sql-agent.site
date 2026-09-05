import type { MarketingPage, MarketingSection } from "../marketing";

export type MarketingCopy = Omit<
  MarketingPage,
  "locale" | "section" | "slug" | "order" | "visual"
>;

export type ExtraMarketingLocale = "ja" | "zh-hans" | "ko" | "fr" | "de";

export type MarketingCopyResolver = (
  section: MarketingSection,
  slug: string
) => MarketingCopy | undefined;
