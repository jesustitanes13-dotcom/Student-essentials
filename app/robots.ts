import type { MetadataRoute } from "next";
import { CANONICAL_ORIGIN, canonicalUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: canonicalUrl("/sitemap.xml"),
    host: new URL(CANONICAL_ORIGIN).host,
  };
}
