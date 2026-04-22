"use client";

import { useState } from "react";
import { AcademicFormatterPanel } from "./AcademicFormatterPanel";
import { SuiteFooter } from "./SuiteFooter";
import type { SuiteTab } from "./TabStrip";
import { TabStrip } from "./TabStrip";
import { TextToolkitPanel } from "./TextToolkitPanel";
import { TopNav } from "./TopNav";

export function StudentSuiteApp() {
  const [tab, setTab] = useState<SuiteTab>("text");

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <TopNav />
      <TabStrip active={tab} onChange={setTab} />
      <main className="flex-1 bg-[var(--page)]">
        {tab === "text" ? (
          <TextToolkitPanel />
        ) : (
          <AcademicFormatterPanel />
        )}
      </main>
      <SuiteFooter />
    </div>
  );
}
