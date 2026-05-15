"use client";

import Link from "next/link";
import { useSuite } from "@/components/providers/SuiteProviders";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site-config";
import { LegalPageLayout } from "./LegalPageLayout";
import { LegalSection } from "./LegalSection";

export function TermsOfServiceContent() {
  const { locale, t } = useSuite();
  const isEs = locale === "es";

  return (
    <LegalPageLayout
      title={t("termsTitle")}
      updatedLabel={isEs ? "Última actualización: mayo de 2026" : "Last updated: May 2026"}
      relatedLink={{
        href: "/privacy-policy",
        label: t("legalViewPrivacy"),
      }}
    >
      <p className="text-sm leading-7 text-[var(--text-secondary)]">
        {isEs
          ? `Al acceder a ${SITE_URL}, aceptas estos términos. Si no estás de acuerdo, no uses el sitio.`
          : `By accessing ${SITE_URL}, you agree to these terms. If you do not agree, do not use the site.`}
      </p>

      <LegalSection title={isEs ? "1. Uso del servicio" : "1. Use of the service"}>
        <p>
          {isEs
            ? "Las herramientas se ofrecen «tal cual» con fines educativos. Debes verificar que el formato MLA cumpla los requisitos de tu institución o profesor."
            : 'Tools are provided "as is" for educational purposes. You must verify that MLA output meets your school or instructor requirements.'}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "2. Contenido del usuario" : "2. Your content"}>
        <p>
          {isEs
            ? "Conservas todos los derechos sobre tu texto. No reclamamos propiedad sobre lo que escribes ni lo almacenamos en nuestros servidores."
            : "You retain all rights to your text. We do not claim ownership of what you write and we do not store it on our servers."}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "3. Limitación de responsabilidad" : "3. Limitation of liability"}>
        <p>
          {isEs
            ? "No garantizamos resultados académicos ni disponibilidad ininterrumpida. El software se ofrece sin garantías en la medida permitida por la ley aplicable."
            : "We do not guarantee academic outcomes or uninterrupted availability. The software is provided without warranties to the extent permitted by applicable law."}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "4. Contacto" : "4. Contact"}>
        <p>
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
