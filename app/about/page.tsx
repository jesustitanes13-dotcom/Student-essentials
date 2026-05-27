import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME}: educational writing support, MLA guidance, and student-focused contact information.`,
};

export default function AboutRoutePage() {
  return <AboutPage />;
}
