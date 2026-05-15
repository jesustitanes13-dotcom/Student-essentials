import type { Metadata } from "next";
import { TermsOfServiceContent } from "@/components/legal/TermsOfServiceContent";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `${SITE_NAME} terms of service for free browser-based MLA and writing tools.`,
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
