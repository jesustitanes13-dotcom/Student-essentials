import type { Metadata } from "next";
import { ToolPageLayout } from "@/components/layout/ToolPageLayout";
import { TextToolkitPanel } from "@/components/student-suite/TextToolkitPanel";

export const metadata: Metadata = {
  title: "Composition Analyzer & Word Counter",
  description:
    "Free word counter and composition analyzer: count words, characters, paragraphs, reading time, and top keyword density. Runs locally in your browser.",
  keywords: [
    "word counter",
    "composition analyzer",
    "keyword density",
    "reading time calculator",
    "student writing tools",
  ],
};

export default function CompositionAnalyzerPage() {
  return (
    <ToolPageLayout>
      <TextToolkitPanel />
    </ToolPageLayout>
  );
}
