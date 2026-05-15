"use client";

import Link from "next/link";
import { useSuite } from "@/components/providers/SuiteProviders";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site-config";
import { LegalPageLayout } from "./LegalPageLayout";
import { LegalSection } from "./LegalSection";

export function PrivacyPolicyContent() {
  const { locale, t } = useSuite();
  const isEs = locale === "es";

  return (
    <LegalPageLayout
      title={t("privacyTitle")}
      updatedLabel={isEs ? "Última actualización: mayo de 2026" : "Last updated: May 2026"}
      relatedLink={{
        href: "/terms-of-service",
        label: t("legalViewTerms"),
      }}
    >
      <p className="text-sm leading-7 text-[var(--text-secondary)]">
        {isEs
          ? `${SITE_NAME} ofrece herramientas de texto que se ejecutan en tu navegador. Esta política describe qué datos tratamos (y cuáles no) cuando usas quickmla.com.`
          : `${SITE_NAME} provides browser-based writing tools. This policy explains what data we handle (and what we do not) when you use quickmla.com.`}
      </p>

      <LegalSection title={isEs ? "1. Resumen" : "1. Overview"}>
        <p>
          {isEs
            ? `${SITE_NAME} (${SITE_URL}) no recopila, almacena ni vende el contenido que escribes o subes a las herramientas.`
            : `${SITE_NAME} (${SITE_URL}) does not collect, store, or sell the content you type or upload into our tools.`}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "2. Datos que no recopilamos" : "2. Data we do not collect"}>
        <p>
          {isEs
            ? "No hay cuentas de usuario ni bases de datos para ensayos o archivos. La generación de PDF y el análisis de texto ocurren localmente en tu dispositivo."
            : "There are no user accounts or databases for essays or files. PDF generation and text analysis run locally on your device."}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "3. Cookies y almacenamiento local" : "3. Cookies and local storage"}>
        <p>
          {isEs
            ? "Podemos guardar preferencias de idioma y tema en tu navegador. Si activas publicidad (Google AdSense), pueden aplicarse cookies de terceros; consulta la política de privacidad de Google."
            : "We may store language and theme preferences in your browser. If advertising (Google AdSense) is enabled, third-party cookies may apply; see Google's privacy policy."}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "4. Contacto" : "4. Contact"}>
        <p>
          {isEs ? "Consultas de privacidad: " : "Privacy inquiries: "}
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[var(--accent)] underline-offset-2 hover:underline"
          >
            {CONTACT_EMAIL}
          </Link>
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
