"use client";

import { useSuite } from "@/components/providers/SuiteProviders";

export type SuiteTab = "text" | "academic";

type TabStripProps = {
  active: SuiteTab;
  onChange: (tab: SuiteTab) => void;
};

export function TabStrip({ active, onChange }: TabStripProps) {
  const { t } = useSuite();

  const tabs: { id: SuiteTab; labelKey: "tabTextToolkit" | "tabAcademicFormatter" }[] =
    [
      { id: "text", labelKey: "tabTextToolkit" },
      { id: "academic", labelKey: "tabAcademicFormatter" },
    ];

  return (
    <nav
      className="mx-auto max-w-5xl px-4 pt-4 sm:px-6"
      aria-label={t("navBrand")}
    >
      <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:px-5 ${
              active === tab.id
                ? "bg-[var(--accent)] text-white shadow-sm"
                : "text-[var(--text-secondary)] hover:bg-[var(--hover)] hover:text-[var(--text-primary)]"
            }`}
            aria-current={active === tab.id ? "page" : undefined}
          >
            {t(tab.labelKey)}
          </button>
        ))}
      </div>
    </nav>
  );
}
