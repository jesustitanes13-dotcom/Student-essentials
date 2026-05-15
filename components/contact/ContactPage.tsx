"use client";

import { useSuite } from "@/components/providers/SuiteProviders";
import { CONTACT_EMAIL } from "@/lib/site-config";

export function ContactPage() {
  const { t } = useSuite();

  return (
    <main className="flex-1 bg-[var(--page)]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-normal tracking-tight text-[var(--text-primary)]">
          {t("contactTitle")}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
          {t("contactIntro")}
        </p>
        <p className="mt-6">
          <span className="block text-sm font-medium text-[var(--text-secondary)]">
            {t("contactEmailLabel")}
          </span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-1 inline-block text-lg text-[var(--accent)] underline-offset-2 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </main>
  );
}
