/** Dominio de producción — siempre usado en sitemap, robots, Open Graph y canonical. */
export const CANONICAL_ORIGIN = "https://quickmla.com";

/**
 * Origen público del sitio. En producción y builds estáticos siempre es quickmla.com,
 * sin usar el subdominio de Vercel (VERCEL_URL / preview URLs).
 */
export const SITE_URL = CANONICAL_ORIGIN;

export const SITE_NAME = "QuickMLA";

export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-XXXXXXXXXXXXXXXX";

export const CONTACT_EMAIL = "hello@quickmla.com";

/** Versión del favicon (cambiar al actualizar public/icon.png y volver a hacer build). */
export const FAVICON_VERSION = "8";

const v = `?v=${FAVICON_VERSION}`;

/** Favicon 32px generado desde public/icon.png (fondo blanco, visible en pestaña). */
export const FAVICON_URL = `/favicon-32.png${v}`;

export const FAVICON_ICO_URL = `/favicon.ico${v}`;

export const APPLE_TOUCH_ICON_URL = `/apple-touch-icon.png${v}`;

/** @deprecated Usar FAVICON_URL */
export const FAVICON_PUBLIC_URL = FAVICON_URL;

/** Ruta relativa → URL absoluta en quickmla.com */
export function canonicalUrl(path = "/"): string {
  if (path === "/" || path === "") return CANONICAL_ORIGIN;
  return `${CANONICAL_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

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
