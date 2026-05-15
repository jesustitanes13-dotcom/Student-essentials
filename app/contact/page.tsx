import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE_NAME} for questions about our free MLA and academic writing tools.`,
};

export default function Contact() {
  return <ContactPage />;
}
