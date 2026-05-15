type LegalSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-medium tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      <div className="text-sm leading-7 text-[var(--text-secondary)]">
        {children}
      </div>
    </section>
  );
}
