import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const CONTENT_PATH = "src/content";

const docs = defineCollection({
  loader: glob({
    pattern: "*/docs/**/[^_]*.{md,mdx}",
    base: `./${CONTENT_PATH}`,
    // Locale, docs/, and source version are part of the content identity:
    // <locale>/docs/<version>/<slug>. Public routing is resolved separately so
    // latest aliases can point at an inherited effective documentation set.
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/i, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      draft: z.boolean().optional().default(false),
      ogImage: image().or(z.string()).optional(),
      canonicalURL: z.string().optional(),
      sidebar: z
        .object({
          label: z.string().optional(),
          group: z.string().optional(),
          order: z.number().optional().default(999),
        })
        .optional(),
    }),
});

// Product/marketing pages are deliberately not content collections. Only
// canonical technical documentation lives under src/content.
export const collections = { docs };
