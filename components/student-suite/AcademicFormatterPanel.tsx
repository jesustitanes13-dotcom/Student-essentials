"use client";

import { useState } from "react";
import { useSuite } from "@/components/providers/SuiteProviders";
import { buildAcademicPdf } from "@/lib/pdf-academic";

export function AcademicFormatterPanel() {
  const { t } = useSuite();
  const [student, setStudent] = useState("");
  const [professor, setProfessor] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [fontFamily, setFontFamily] = useState<"arial" | "times">("times");
  const [body, setBody] = useState("");
  const [liveMsg, setLiveMsg] = useState("");
  const [busy, setBusy] = useState(false);

  async function onGenerate() {
    setBusy(true);
    try {
      await buildAcademicPdf({
        student,
        professor,
        subject,
        date,
        title,
        body,
        fontFamily,
      });
    } finally {
      setBusy(false);
    }
  }

  async function onUploadFile(file: File | null) {
    if (!file) return;
    try {
      const text = await file.text();
      setBody(text);
      setLiveMsg(t("fileLoaded"));
      window.setTimeout(() => setLiveMsg(""), 2500);
    } catch {
      setLiveMsg(t("fileLoadError"));
    }
  }

  const fieldClass =
    "mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--input-bg)] px-3 py-2 text-sm text-[var(--text-primary)] shadow-sm placeholder:text-[var(--text-muted)] focus-visible:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-ring)]";

  return (
    <section
      className="space-y-6"
      aria-labelledby="academic-heading"
    >
      <div>
        <h1
          id="academic-heading"
          className="text-2xl font-normal tracking-tight text-[var(--text-primary)]"
        >
          {t("academicTitle")}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
          {t("pdfHint")}
        </p>
        <p className="mt-1 text-sm text-[var(--text-secondary)]" aria-live="polite">
          {liveMsg}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="student-name"
            className="text-sm font-medium text-[var(--text-secondary)]"
          >
            {t("labelStudent")}
          </label>
          <input
            id="student-name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            className={fieldClass}
            autoComplete="name"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="professor-name"
            className="text-sm font-medium text-[var(--text-secondary)]"
          >
            {t("labelProfessor")}
          </label>
          <input
            id="professor-name"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
            className={fieldClass}
            autoComplete="off"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="subject-name"
            className="text-sm font-medium text-[var(--text-secondary)]"
          >
            {t("labelSubject")}
          </label>
          <input
            id="subject-name"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="due-date"
            className="text-sm font-medium text-[var(--text-secondary)]"
          >
            {t("labelDate")}
          </label>
          <input
            id="due-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="mla-font"
            className="text-sm font-medium text-[var(--text-secondary)]"
          >
            {t("labelFont")}
          </label>
          <select
            id="mla-font"
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value as "arial" | "times")}
            className={fieldClass}
          >
            <option value="arial">{t("fontArial")}</option>
            <option value="times">{t("fontTimes")}</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="paper-title"
            className="text-sm font-medium text-[var(--text-secondary)]"
          >
            {t("labelTitle")}
          </label>
          <input
            id="paper-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={fieldClass}
            autoComplete="off"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="file-upload"
            className="text-sm font-medium text-[var(--text-secondary)]"
          >
            {t("labelUpload")}
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".txt,.md,.rtf,.text,text/plain,text/markdown"
            onChange={(e) => onUploadFile(e.target.files?.[0] ?? null)}
            className={`${fieldClass} file:mr-3 file:rounded-md file:border-0 file:bg-[var(--hover)] file:px-3 file:py-1.5 file:text-sm file:text-[var(--text-primary)]`}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="work-body"
          className="text-sm font-medium text-[var(--text-secondary)]"
        >
          {t("labelBody")}
        </label>
        <textarea
          id="work-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={14}
          className={`${fieldClass} mt-1 resize-y leading-relaxed`}
          spellCheck
        />
      </div>

      <button
        type="button"
        onClick={onGenerate}
        disabled={busy}
        className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      >
        {busy ? t("btnGenerating") : t("btnGeneratePdf")}
      </button>
    </section>
  );
}
