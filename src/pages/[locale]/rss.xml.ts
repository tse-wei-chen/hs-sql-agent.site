import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { locales, getPostsByLocale } from "@/utils/getPostsByLocale";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import config from "@/config";

export async function getStaticPaths() {
  return locales.map(locale => ({ params: { locale } }));
}

export async function GET({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const posts = await getCollection("posts");
  const localePosts = getPostsByLocale(posts, locale);
  const sortedPosts = getSortedPosts(localePosts);

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: config.site.url,
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: getPostUrl(id, filePath, locale),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
