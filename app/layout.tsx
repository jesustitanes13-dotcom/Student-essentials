import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AdSenseScript } from "@/components/ads/AdUnit";
import { SiteShell } from "@/components/layout/SiteShell";
import {
  CANONICAL_ORIGIN,
  canonicalUrl,
  FAVICON_PUBLIC_URL,
  SITE_NAME,
} from "@/lib/site-config";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle =
  "QuickMLA | Fast MLA Formatter & Academic Writing Tools";
const description =
  "QuickMLA is the fastest way to format your essays in MLA and analyze your academic text locally and securely.";

const ogImageUrl = canonicalUrl("/logo.png");

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_ORIGIN),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  applicationName: SITE_NAME,
  icons: {
    icon: [
      {
        url: FAVICON_PUBLIC_URL,
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: FAVICON_PUBLIC_URL,
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: FAVICON_PUBLIC_URL,
  },
  keywords: [
    "QuickMLA",
    "MLA formatter",
    "word counter",
    "composition analyzer",
    "keyword density",
    "academic writing tools",
    "essay formatter",
    "local MLA PDF",
  ],
  authors: [{ name: SITE_NAME, url: CANONICAL_ORIGIN }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    siteName: SITE_NAME,
    title: defaultTitle,
    description,
    url: CANONICAL_ORIGIN,
    images: [
      {
        url: ogImageUrl,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
    images: [ogImageUrl],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL_ORIGIN,
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link
          rel="icon"
          href={FAVICON_PUBLIC_URL}
          type="image/png"
          sizes="32x32"
        />
        <link rel="shortcut icon" href={FAVICON_PUBLIC_URL} type="image/png" />
        <link rel="apple-touch-icon" href={FAVICON_PUBLIC_URL} />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <AdSenseScript />
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
