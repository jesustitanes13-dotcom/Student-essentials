"use client";

import { useSuite } from "@/components/providers/SuiteProviders";

type AdPlaceholderProps = {
  variant: "sidebar" | "banner";
};

export function AdPlaceholder({ variant }: AdPlaceholderProps) {
  const { t } = useSuite();

  if (variant === "sidebar") {
    return (
      <div
        className="flex min-h-[600px] w-full max-w-[160px] flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-2 py-4 text-center"
        role="complementary"
        aria-label={t("adPlaceholderAria")}
      >
        <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
          {t("adLabel")}
        </span>
        <span className="mt-2 text-xs leading-snug text-[var(--text-secondary)]">
          160 × 600
        </span>
      </div>
    );
  }

  return (
    <div
      className="flex min-h-[90px] w-full items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-center"
      role="complementary"
      aria-label={t("adPlaceholderAria")}
    >
      <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
        {t("adLabel")}
      </span>
      <span className="ml-3 text-xs text-[var(--text-secondary)]">
        728 × 90
      </span>
    </div>
  );
}
