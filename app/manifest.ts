import type { MetadataRoute } from "next";
import {
  CANONICAL_ORIGIN,
  FAVICON_VERSION,
  SITE_NAME,
} from "@/lib/site-config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      "QuickMLA is the fastest way to format your essays in MLA and analyze your academic text locally and securely.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f8f9fa",
    theme_color: "#1a73e8",
    lang: "en",
    icons: [
      {
        src: `/favicon-192.png?v=${FAVICON_VERSION}`,
        sizes: "192x192",
        type: "image/png",
      },
    ],
    id: CANONICAL_ORIGIN,
  };
}
