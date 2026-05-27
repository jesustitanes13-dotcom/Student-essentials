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
          ? `${SITE_NAME} ofrece herramientas educativas que se ejecutan principalmente en el navegador del usuario. Esta política detalla de forma transparente qué información puede procesarse, cómo se usa técnicamente y qué medidas aplicamos para reducir la recopilación de datos personales al mínimo necesario.`
          : `${SITE_NAME} provides educational tools that run primarily in the user’s browser. This policy explains what information may be processed, how it is used technically, and which safeguards we apply to keep personal data collection to a strict minimum.`}
      </p>

      <LegalSection title={isEs ? "1. Resumen" : "1. Overview"}>
        <p>
          {isEs
            ? `${SITE_NAME} (${SITE_URL}) no vende datos personales ni utiliza sistemas de perfilado académico del contenido que escribes en las herramientas. Nuestro enfoque técnico está orientado a procesamiento local para análisis de texto y generación de PDF.`
            : `${SITE_NAME} (${SITE_URL}) does not sell personal data and does not run academic profiling of the content you write in our tools. Our technical model prioritizes local processing for text analysis and PDF generation.`}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "2. Alcance y base de tratamiento" : "2. Scope and legal basis"}>
        <p>
          {isEs
            ? "El uso del sitio implica el tratamiento técnico mínimo indispensable para entregar páginas web, mantener seguridad básica y recordar preferencias de experiencia (por ejemplo, idioma o tema). En caso de mostrar anuncios, la base legal aplicable podrá incluir consentimiento cuando sea requerido por la normativa local."
            : "Use of the site involves only the technical processing required to deliver webpages, maintain baseline security, and remember experience preferences (for example language or theme). If ads are displayed, the applicable legal basis may include consent where required by local law."}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "3. Datos mínimos y herramientas locales" : "3. Minimal data and local tools"}>
        <p>
          {isEs
            ? "No se requiere crear cuenta para usar QuickMLA. El texto que introduces para análisis o formato se procesa localmente en tu navegador y, por diseño, no se almacena como base de datos de usuario. Podemos recibir datos técnicos limitados (como tipo de navegador, páginas solicitadas o métricas agregadas) únicamente para operación, seguridad y mejora del servicio."
            : "No account is required to use QuickMLA. Text entered for analysis or formatting is processed locally in your browser and is not designed to be stored as user content in a database. We may receive limited technical data (such as browser type, requested pages, or aggregated metrics) only for operation, security, and service improvement."}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "4. Cookies, almacenamiento local y CMP" : "4. Cookies, local storage, and CMP"}>
        <p>
          {isEs
            ? "QuickMLA puede usar almacenamiento local para guardar preferencias de interfaz. Además, cuando corresponde, mostramos un mecanismo de consentimiento (CMP) para que el usuario pueda aceptar, rechazar o configurar finalidades relacionadas con cookies y tecnologías similares. Tus elecciones de consentimiento pueden almacenarse para cumplir requisitos normativos y evitar solicitudes repetidas innecesarias."
            : "QuickMLA may use local storage to keep interface preferences. Where required, we present a consent mechanism (CMP) so users can accept, reject, or configure purposes related to cookies and similar technologies. Your consent choices may be stored to satisfy compliance requirements and avoid unnecessary repeated prompts."}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "5. Publicidad de terceros (Google AdSense)" : "5. Third-party advertising (Google AdSense)"}>
        <p>
          {isEs
            ? "Este sitio puede mostrar anuncios mediante Google AdSense. Google y sus socios pueden utilizar cookies o identificadores similares para personalizar anuncios, medir rendimiento publicitario y limitar frecuencia. Dependiendo de tu jurisdicción y configuración de consentimiento, los anuncios pueden ser personalizados o no personalizados. Para más información, consulta las políticas de Google sobre publicidad y privacidad."
            : "This site may display ads through Google AdSense. Google and its partners may use cookies or similar identifiers to personalize ads, measure ad performance, and manage frequency capping. Depending on your jurisdiction and consent settings, ads may be personalized or non-personalized. See Google advertising and privacy policies for additional details."}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "6. Conservación, seguridad y derechos" : "6. Retention, security, and rights"}>
        <p>
          {isEs
            ? "Aplicamos medidas razonables para proteger la infraestructura y minimizar riesgos de acceso no autorizado. Como principio general, no conservamos ensayos o textos del usuario como contenido de cuenta. Cuando la ley lo permita, puedes ejercer derechos de acceso, rectificación, supresión u oposición sobre datos personales que eventualmente se hubieran tratado en registros técnicos."
            : "We apply reasonable safeguards to protect infrastructure and reduce unauthorized access risks. As a general principle, we do not retain user essays or text as account content. Where applicable by law, you may exercise access, correction, deletion, or objection rights regarding personal data that may have been processed in technical logs."}
        </p>
      </LegalSection>

      <LegalSection title={isEs ? "7. Contacto" : "7. Contact"}>
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
