"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSuite } from "@/components/providers/SuiteProviders";
import { TOOLS } from "@/lib/site-config";

const STATIC_LINKS = [
  { href: "/", labelKey: "navHome" as const },
  { href: "/tools", labelKey: "navTools" as const },
] as const;

function linkClass(active: boolean): string {
  return `rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
    active
      ? "bg-[var(--accent)] text-white"
      : "text-[var(--text-secondary)] hover:bg-[var(--hover)] hover:text-[var(--text-primary)]"
  }`;
}

export function QuickNav() {
  const pathname = usePathname();
  const { t } = useSuite();

  return (
    <nav
      aria-label={t("quickNavAria")}
      className="flex flex-wrap items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-sm"
    >
      {STATIC_LINKS.map(({ href, labelKey }) => (
        <Link
          key={href}
          href={href}
          className={linkClass(
            href === "/" ? pathname === "/" : pathname === href,
          )}
        >
          {t(labelKey)}
        </Link>
      ))}
      {TOOLS.map((tool) => (
        <Link
          key={tool.path}
          href={tool.path}
          className={linkClass(pathname === tool.path)}
        >
          {t(tool.nameKey)}
        </Link>
      ))}
    </nav>
  );
}
