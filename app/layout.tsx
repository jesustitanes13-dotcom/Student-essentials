import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AdSenseScript } from "@/components/ads/AdUnit";
import { SiteShell } from "@/components/layout/SiteShell";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";
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

const defaultTitle = "Student Essentials | Free Academic Toolkit";
const description =
  "Free student tools: MLA formatter, word counter, composition analyzer, and keyword density. 100% browser-based—no sign-up, no data stored. Fast, private academic toolkit.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  applicationName: SITE_NAME,
  keywords: [
    "student tools",
    "MLA formatter",
    "word counter",
    "composition analyzer",
    "keyword density",
    "academic PDF",
    "essay formatter",
    "free student productivity",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    siteName: SITE_NAME,
    title: defaultTitle,
    description,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
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
      <body className="flex min-h-full flex-col antialiased">
        <AdSenseScript />
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
