import type { Metadata } from "next";
import { ToolsIndex } from "@/components/tools/ToolsIndex";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Student Tools",
  description: `Browse free academic tools from ${SITE_NAME}: word counter, composition analyzer, and MLA formatter.`,
};

export default function ToolsPage() {
  return <ToolsIndex />;
}
