"use client";

import { useSuite } from "@/components/providers/SuiteProviders";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site-config";
import { LegalPageLayout } from "./LegalPageLayout";

export function PrivacyPolicyContent() {
  const { locale, t } = useSuite();
  const isEs = locale === "es";

  return (
    <LegalPageLayout title={t("privacyTitle")}>
      {isEs ? (
        <>
          <p>
            <strong>Última actualización:</strong> mayo de 2026
          </p>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              1. Resumen
            </h2>
            <p>
              {SITE_NAME} ({SITE_URL}) ofrece herramientas de procesamiento de
              texto que se ejecutan íntegramente en tu navegador. No recopilamos,
              almacenamos ni vendemos el contenido que escribes o subes a las
              herramientas.
            </p>
          </section>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              2. Datos que no recopilamos
            </h2>
            <p>
              No creamos cuentas de usuario ni utilizamos bases de datos para
              guardar ensayos, borradores ni archivos. La generación de PDF y el
              análisis de texto ocurren de forma local en tu dispositivo.
            </p>
          </section>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              3. Datos técnicos y cookies
            </h2>
            <p>
              Podemos usar almacenamiento local del navegador (por ejemplo,
              preferencia de idioma y tema) y cookies de terceros relacionadas
              con publicidad (Google AdSense) cuando estén activas. Consulta la
              política de privacidad de Google para más información sobre anuncios.
            </p>
          </section>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              4. Contacto
            </h2>
            <p>
              Para consultas sobre privacidad:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[var(--accent)] underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </>
      ) : (
        <>
          <p>
            <strong>Last updated:</strong> May 2026
          </p>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              1. Overview
            </h2>
            <p>
              {SITE_NAME} ({SITE_URL}) provides text-processing tools that run
              entirely in your browser. We do not collect, store, or sell the
              content you type or upload into our tools.
            </p>
          </section>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              2. Data we do not collect
            </h2>
            <p>
              We do not offer user accounts or use databases to store essays,
              drafts, or files. PDF generation and text analysis happen locally on
              your device.
            </p>
          </section>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              3. Technical data and cookies
            </h2>
            <p>
              We may use browser local storage (e.g., language and theme
              preferences) and third-party advertising cookies (Google AdSense)
              when enabled. See Google&apos;s privacy policy for details on ad
              personalization.
            </p>
          </section>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              4. Contact
            </h2>
            <p>
              Privacy inquiries:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[var(--accent)] underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </>
      )}
    </LegalPageLayout>
  );
}
