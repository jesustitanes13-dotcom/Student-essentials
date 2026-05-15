"use client";

import { useSuite } from "@/components/providers/SuiteProviders";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site-config";
import { LegalPageLayout } from "./LegalPageLayout";

export function TermsOfServiceContent() {
  const { locale, t } = useSuite();
  const isEs = locale === "es";

  return (
    <LegalPageLayout title={t("termsTitle")}>
      {isEs ? (
        <>
          <p>
            <strong>Última actualización:</strong> mayo de 2026
          </p>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              1. Aceptación
            </h2>
            <p>
              Al usar {SITE_NAME} ({SITE_URL}), aceptas estos términos. Si no
              estás de acuerdo, no utilices el sitio.
            </p>
          </section>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              2. Uso del servicio
            </h2>
            <p>
              Las herramientas se ofrecen &quot;tal cual&quot; con fines
              educativos. Eres responsable de revisar que el formato MLA generado
              cumpla los requisitos de tu institución o profesor.
            </p>
          </section>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              3. Sin garantías
            </h2>
            <p>
              No garantizamos resultados académicos específicos ni disponibilidad
              ininterrumpida. El software se proporciona sin garantías expresas o
              implícitas en la medida permitida por la ley.
            </p>
          </section>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              4. Contacto
            </h2>
            <p>
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
              1. Acceptance
            </h2>
            <p>
              By using {SITE_NAME} ({SITE_URL}), you agree to these terms. If you
              do not agree, do not use the site.
            </p>
          </section>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              2. Use of the service
            </h2>
            <p>
              Tools are provided &quot;as is&quot; for educational purposes. You
              are responsible for verifying that MLA output meets your school or
              instructor requirements.
            </p>
          </section>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              3. Disclaimer
            </h2>
            <p>
              We do not guarantee specific academic outcomes or uninterrupted
              availability. The software is provided without express or implied
              warranties to the extent permitted by law.
            </p>
          </section>
          <section>
            <h2 className="text-base font-medium text-[var(--text-primary)]">
              4. Contact
            </h2>
            <p>
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
