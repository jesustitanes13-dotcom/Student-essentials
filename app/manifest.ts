import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

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
        src: "/globe.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    id: SITE_URL,
  };
}
