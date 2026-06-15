import type { MetadataRoute } from "next";

// Generates https://smartagentbd.online/sitemap.xml (referenced by public/robots.txt).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://smartagentbd.online",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
