"use client";

import { SuiteProviders } from "@/components/providers/SuiteProviders";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SuiteProviders>{children}</SuiteProviders>;
}
