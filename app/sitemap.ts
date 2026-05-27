import type { MetadataRoute } from "next";
import { canonicalUrl, TOOLS } from "@/lib/site-config";

export const dynamic = "force-static";

const SITEMAP_PATHS = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/tools", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly" as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = SITEMAP_PATHS.map((page) => ({
    url: canonicalUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const toolPages: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: canonicalUrl(tool.path),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...toolPages];
}
