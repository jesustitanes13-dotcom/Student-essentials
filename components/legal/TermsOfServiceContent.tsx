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
          ? `Al acceder a ${SITE_URL}, aceptas estos términos y condiciones de uso. Si no estás de acuerdo con alguna disposición, debes abstenerte de utilizar el sitio y sus herramientas.`
          : `By accessing ${SITE_URL}, you agree to these terms and conditions. If you do not agree with any provision, you must discontinue use of the site and tools.`}
      </p>

      <LegalSection title={isEs ? "1. Uso del servicio" : "1. Use of the service"}>
        <p>
          {isEs
            ? "Las herramientas se proporcionan con fines educativos y de apoyo a estudiantes. Eres responsable de revisar el resultado final antes de entregar cualquier trabajo académico. QuickMLA no sustituye lineamientos institucionales, rúbricas de evaluación ni criterios de integridad académica exigidos por docentes."
            : 'Tools are provided for educational support purposes. You are responsible for reviewing final output before submitting any academic work. QuickMLA does not replace institutional guidelines, grading rubrics, or instructor-level academic integrity requirements.'}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "2. Contenido del usuario" : "2. Your content"}>
        <p>
          {isEs
            ? "Conservas la titularidad de tu contenido textual. No reclamamos derechos de autor sobre tus ensayos o borradores. Por diseño, el procesamiento principal es local y no requiere crear cuentas de contenido persistente."
            : "You retain ownership of your text content. We do not claim copyright over your essays or drafts. By design, primary processing is local and does not require persistent user-content accounts."}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "3. Publicidad, cookies y terceros" : "3. Advertising, cookies, and third parties"}>
        <p>
          {isEs
            ? "El sitio puede incluir publicidad de terceros, incluyendo Google AdSense. El uso de anuncios puede implicar cookies o identificadores similares para medición y personalización, sujeto al marco de consentimiento aplicable (CMP). No controlamos de forma directa las políticas de terceros; te recomendamos revisar sus términos y avisos de privacidad."
            : "The site may include third-party advertising, including Google AdSense. Ad delivery may involve cookies or similar identifiers for measurement and personalization, subject to the applicable consent framework (CMP). We do not directly control third-party policies; review their terms and privacy notices."}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "4. Disponibilidad y modificaciones" : "4. Availability and modifications"}>
        <p>
          {isEs
            ? "Podemos actualizar, pausar o retirar funcionalidades en cualquier momento para mantenimiento, cumplimiento legal o mejora del servicio. También podemos modificar estos términos; cualquier cambio material se publicará en esta página con fecha de actualización."
            : "We may update, pause, or discontinue features at any time for maintenance, legal compliance, or service improvements. We may also modify these terms; material changes will be posted on this page with an updated effective date."}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "5. Limitación de responsabilidad" : "5. Limitation of liability"}>
        <p>
          {isEs
            ? "No garantizamos resultados académicos específicos, disponibilidad ininterrumpida ni ausencia total de errores. En la máxima medida permitida por la ley, el servicio se ofrece «tal cual» y «según disponibilidad», sin garantías implícitas adicionales."
            : 'We do not guarantee specific academic outcomes, uninterrupted availability, or complete error-free operation. To the maximum extent permitted by law, the service is provided "as is" and "as available," without additional implied warranties.'}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "6. Contacto" : "6. Contact"}>
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
