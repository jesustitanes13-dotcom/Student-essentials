"use client";

import Link from "next/link";
import { useSuite } from "@/components/providers/SuiteProviders";
import { CONTACT_EMAIL } from "@/lib/site-config";

export function AboutPage() {
  const { t } = useSuite();

  return (
    <main className="flex-1 bg-[var(--page)]">
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-3xl font-normal tracking-tight text-[var(--text-primary)]">
          {t("aboutTitle")}
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
          {t("aboutIntro")}
        </p>

        <div className="mt-8 space-y-6">
          <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              {t("aboutMissionTitle")}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              {t("aboutMissionBody")}
            </p>
          </article>

          <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              {t("aboutNonProfitTitle")}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              {t("aboutNonProfitBody")}
            </p>
          </article>

          <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              {t("aboutContactTitle")}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              {t("aboutContactBody")}
            </p>
            <p className="mt-3">
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[var(--accent)] underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
