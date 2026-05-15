"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSuite } from "@/components/providers/SuiteProviders";
import { SITE_NAME } from "@/lib/site-config";

type LegalPageLayoutProps = {
  title: string;
  updatedLabel: string;
  children: React.ReactNode;
  relatedLink?: { href: string; label: string };
};

export function LegalPageLayout({
  title,
  updatedLabel,
  children,
  relatedLink,
}: LegalPageLayoutProps) {
  const { t } = useSuite();

  return (
    <main className="flex-1 bg-[var(--page)]">
      <article className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          {t("legalBackHome")}
        </Link>

        <header className="mt-8 border-b border-[var(--border)] pb-6">
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            {SITE_NAME}
          </p>
          <h1 className="mt-2 text-2xl font-normal tracking-tight text-[var(--text-primary)] sm:text-3xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-[var(--text-muted)]">{updatedLabel}</p>
        </header>

        <div className="mt-8 space-y-8">{children}</div>

        {relatedLink ? (
          <p className="mt-12 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-secondary)]">
            <Link
              href={relatedLink.href}
              className="font-medium text-[var(--accent)] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              {relatedLink.label}
            </Link>
          </p>
        ) : null}
      </article>
    </main>
  );
}
