"use client";

import { Gift, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { useSuite } from "@/components/providers/SuiteProviders";
import { TOOLS } from "@/lib/site-config";

const BENEFIT_KEYS = [
  {
    titleKey: "benefitSpeedTitle" as const,
    descKey: "benefitSpeedDesc" as const,
    Icon: Zap,
  },
  {
    titleKey: "benefitPrivacyTitle" as const,
    descKey: "benefitPrivacyDesc" as const,
    Icon: Shield,
  },
  {
    titleKey: "benefitFreeTitle" as const,
    descKey: "benefitFreeDesc" as const,
    Icon: Gift,
  },
] as const;

export function LandingPage() {
  const { t } = useSuite();

  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:py-20">
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <p className="inline-flex rounded-full border border-[var(--border)] bg-[var(--page)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
              {t("heroBadge")}
            </p>
            <h1 className="mt-4 text-3xl font-normal tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {t("heroTitle")}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text-secondary)]">
              {t("heroSubtitle")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/tools"
                className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {t("heroCta")}
              </Link>
              <Link
                href="/tools/mla-formatter"
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] shadow-sm transition-colors hover:bg-[var(--hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {t("heroCtaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-normal tracking-tight text-[var(--text-primary)]">
          {t("benefitsTitle")}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {BENEFIT_KEYS.map(({ titleKey, descKey, Icon }) => (
            <article
              key={titleKey}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm"
            >
              <Icon
                className="h-10 w-10 text-[var(--text-secondary)]"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 text-base font-medium text-[var(--text-primary)]">
                {t(titleKey)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {t(descKey)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="tools"
        className="border-t border-[var(--border)] bg-[var(--surface)]"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-normal tracking-tight text-[var(--text-primary)]">
            {t("toolsSectionTitle")}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">
            {t("toolsSectionSubtitle")}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {TOOLS.map((tool) => (
              <article
                key={tool.slug}
                className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--page)] p-6 shadow-sm"
              >
                <h3 className="text-lg font-medium text-[var(--text-primary)]">
                  {t(tool.nameKey)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {t(tool.descKey)}
                </p>
                <Link
                  href={tool.path}
                  className="mt-6 inline-flex w-fit rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  {t("toolCta")}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
