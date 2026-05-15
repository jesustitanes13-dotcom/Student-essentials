"use client";

import Link from "next/link";
import { useSuite } from "@/components/providers/SuiteProviders";
import { LEGAL_ROUTES, NAV_ROUTES, SITE_NAME } from "@/lib/site-config";

const MAIN_FOOTER_ROUTES = NAV_ROUTES.filter(
  (route) => !LEGAL_ROUTES.some((legal) => legal.path === route.path),
);

export function SiteFooter() {
  const { t } = useSuite();

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">
              {SITE_NAME}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
              {t("footerTagline")}
            </p>
          </div>

          <nav aria-label={t("footerNavAria")} className="flex flex-col gap-4">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {MAIN_FOOTER_ROUTES.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                  >
                    {t(route.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--border)] pt-4">
              {LEGAL_ROUTES.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                  >
                    {t(route.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-muted)]">
          © 2026 QuickMLA
        </p>
      </div>
    </footer>
  );
}
