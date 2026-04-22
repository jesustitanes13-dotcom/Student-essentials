"use client";

import { useSuite } from "@/components/providers/SuiteProviders";

export function SuiteFooter() {
  const { t } = useSuite();

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <h2 className="text-sm font-medium text-[var(--text-primary)]">
          {t("footerHelpTitle")}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)]">
          {t("footerHelpBody")}
        </p>
        <p className="mt-6 text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Student Productivity Suite
        </p>
      </div>
    </footer>
  );
}
