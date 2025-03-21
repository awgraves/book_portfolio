import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    books: defineCollection({
      source: "*.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        bgColor: z.string(),
        previewBlurb: z.string(),
        previewImg: z.string(),
        fullBookUrl: z.string(),
        totalPages: z.number(),
      }),
    }),
  },
});
