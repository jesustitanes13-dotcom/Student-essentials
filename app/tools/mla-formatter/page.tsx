import type { Metadata } from "next";
import { ToolPageLayout } from "@/components/layout/ToolPageLayout";
import { AcademicFormatterPanel } from "@/components/student-suite/AcademicFormatterPanel";

export const metadata: Metadata = {
  title: "MLA Formatter — Academic PDF Generator",
  description:
    "Free MLA formatter for students: double-spaced PDF, 12pt font, first-line indent, MLA header, and page numbers. Generate essays locally—no upload required.",
  keywords: [
    "MLA formatter",
    "MLA PDF generator",
    "academic essay format",
    "double spaced PDF",
    "student MLA tool",
  ],
};

export default function MlaFormatterPage() {
  return (
    <ToolPageLayout>
      <AcademicFormatterPanel />
    </ToolPageLayout>
  );
}
