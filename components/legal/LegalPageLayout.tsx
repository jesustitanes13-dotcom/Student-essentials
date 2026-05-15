"use client";

type LegalPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <main className="flex-1 bg-[var(--page)]">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-normal tracking-tight text-[var(--text-primary)]">
          {title}
        </h1>
        <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-[var(--text-secondary)]">
          {children}
        </div>
      </article>
    </main>
  );
}
