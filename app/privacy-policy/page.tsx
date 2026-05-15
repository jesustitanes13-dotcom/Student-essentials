import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${SITE_NAME} privacy policy: browser-local text tools with no user data storage.`,
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
