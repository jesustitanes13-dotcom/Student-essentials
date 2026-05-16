"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/dictionary";
import { useSuite } from "@/components/providers/SuiteProviders";

export function SiteHeader() {
  const { locale, setLocale, theme, setTheme, t } = useSuite();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <Image
            src="/Logo.png2.png"
            alt=""
            width={240}
            height={40}
            className="h-10 w-auto shrink-0 object-contain"
            priority
          />
          <span className="truncate text-xl font-medium tracking-tight text-[var(--text-primary)]">
            {t("navBrand")}
          </span>
        </Link>

        <nav
          className="order-3 flex w-full flex-wrap items-center gap-1 sm:order-2 sm:w-auto"
          aria-label={t("navMainAria")}
        >
          <Link
            href="/tools"
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-[var(--hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
              pathname.startsWith("/tools")
                ? "text-[var(--accent)]"
                : "text-[var(--text-secondary)]"
            }`}
          >
            {t("navTools")}
          </Link>
        </nav>

        <div className="flex flex-wrap items-center justify-end gap-2 sm:order-3 sm:gap-3">
          <label className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <span className="sr-only sm:not-sr-only sm:inline">
              {t("langLabel")}
            </span>
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="h-9 min-w-[5.5rem] rounded-lg border border-[var(--border)] bg-[var(--input-bg)] px-2 text-sm text-[var(--text-primary)] outline-none ring-[var(--accent)] focus-visible:ring-2"
              aria-label={t("langLabel")}
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </label>

          <button
            type="button"
            role="switch"
            aria-checked={theme === "dark"}
            aria-label={t("themeToggleAria")}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex h-9 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--input-bg)] px-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            <span
              className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]"
              aria-hidden
            />
            {theme === "light" ? t("themeLight") : t("themeDark")}
          </button>
        </div>
      </div>
    </header>
  );
}
