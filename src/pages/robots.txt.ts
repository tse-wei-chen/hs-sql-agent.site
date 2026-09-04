import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.href}\n`;

export const GET: APIRoute = ({ site, request }) => {
  const base = site ?? new URL(request.url);
  const sitemapURL = new URL("sitemap-index.xml", base);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
