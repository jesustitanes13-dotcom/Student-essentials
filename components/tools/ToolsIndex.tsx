"use client";

import Link from "next/link";
import { useSuite } from "@/components/providers/SuiteProviders";
import { TOOLS } from "@/lib/site-config";

export function ToolsIndex() {
  const { t } = useSuite();

  return (
    <main className="flex-1 bg-[var(--page)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-normal tracking-tight text-[var(--text-primary)]">
          {t("toolsIndexTitle")}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">
          {t("toolsIndexSubtitle")}
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {TOOLS.map((tool) => (
            <li key={tool.slug}>
              <Link
                href={tool.path}
                className="block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition-colors hover:border-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <h2 className="text-lg font-medium text-[var(--text-primary)]">
                  {t(tool.nameKey)}
                </h2>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {t(tool.descKey)}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-[var(--accent)]">
                  {t("toolCta")} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
