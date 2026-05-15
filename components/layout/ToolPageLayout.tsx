"use client";

import { AdPlaceholder } from "@/components/ads/AdPlaceholder";

type ToolPageLayoutProps = {
  children: React.ReactNode;
};

export function ToolPageLayout({ children }: ToolPageLayoutProps) {
  return (
    <main className="flex-1 bg-[var(--page)]">
      <div className="mx-auto flex max-w-6xl gap-6 px-4 py-6 sm:px-6">
        <div className="min-w-0 flex-1 space-y-6">
          {children}
          <AdPlaceholder variant="banner" />
        </div>
        <aside className="hidden w-[160px] shrink-0 lg:block">
          <div className="sticky top-24">
            <AdPlaceholder variant="sidebar" />
          </div>
        </aside>
      </div>
    </main>
  );
}
