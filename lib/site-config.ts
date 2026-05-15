export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://student-essentials.com";

export const SITE_NAME = "Student Essentials";

export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-XXXXXXXXXXXXXXXX";

export const CONTACT_EMAIL = "hello@student-essentials.com";

export type ToolDefinition = {
  slug: string;
  path: string;
  nameKey: "toolCompositionName" | "toolMlaName";
  descKey: "toolCompositionDesc" | "toolMlaDesc";
  keywords: string[];
};

export const TOOLS: ToolDefinition[] = [
  {
    slug: "composition-analyzer",
    path: "/tools/composition-analyzer",
    nameKey: "toolCompositionName",
    descKey: "toolCompositionDesc",
    keywords: ["word counter", "composition analyzer", "keyword density"],
  },
  {
    slug: "mla-formatter",
    path: "/tools/mla-formatter",
    nameKey: "toolMlaName",
    descKey: "toolMlaDesc",
    keywords: ["MLA formatter", "academic PDF", "essay format"],
  },
];

export const LEGAL_ROUTES = [
  { path: "/privacy-policy", labelKey: "footerPrivacy" as const },
  { path: "/terms-of-service", labelKey: "footerTerms" as const },
  { path: "/contact", labelKey: "footerContact" as const },
];

export const NAV_ROUTES = [
  { path: "/", labelKey: "footerHome" as const },
  { path: "/tools", labelKey: "footerTools" as const },
  ...LEGAL_ROUTES,
];
