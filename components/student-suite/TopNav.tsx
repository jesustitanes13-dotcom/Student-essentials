"use client";

import type { Locale } from "@/lib/i18n/dictionary";
import { useSuite } from "@/components/providers/SuiteProviders";

export function TopNav() {
  const { locale, setLocale, theme, setTheme, t } = useSuite();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span
            className="h-8 w-8 shrink-0 rounded-lg bg-[var(--accent)]"
            aria-hidden
          />
          <span className="truncate text-lg font-medium tracking-tight text-[var(--text-primary)]">
            {t("navBrand")}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
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
