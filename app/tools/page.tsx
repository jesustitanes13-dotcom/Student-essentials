import type { Metadata } from "next";
import { ToolsIndex } from "@/components/tools/ToolsIndex";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Academic Writing Tools",
  description: `Browse free tools from ${SITE_NAME}: MLA formatter, word counter, and composition analyzer. Fast, local, and secure.`,
};

export default function ToolsPage() {
  return <ToolsIndex />;
}
