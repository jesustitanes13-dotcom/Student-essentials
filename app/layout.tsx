import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

const siteName = "Student Productivity Suite";
const descriptionEn =
  "Fast SPA for students: bilingual text toolkit (word count, keyword density, formatting) and academic PDF formatter with double-spaced layout. Runs entirely in your browser.";
const descriptionEs =
  "SPA ligera para estudiantes: kit de texto bilingüe (conteo, densidad de palabras clave, formato) y generador de PDF académico a doble espacio. Todo en el navegador.";
const keywordsEn =
  "student productivity, word counter, keyword density, academic PDF, jspdf, essay formatter, bilingual";
const keywordsEs =
  "productividad estudiantil, contador de palabras, densidad de palabras clave, PDF académico, jspdf, formato de ensayo, bilingüe";

const base =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: `${siteName} — Text toolkit & academic PDF`,
    template: `%s | ${siteName}`,
  },
  description: `${descriptionEn} ${descriptionEs}`,
  applicationName: siteName,
  keywords: [...keywordsEn.split(", "), ...keywordsEs.split(", ")],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    siteName,
    title: siteName,
    description: descriptionEn,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: descriptionEn,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/",
    },
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
