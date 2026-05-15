"use client";

import { useCallback, useMemo, useState } from "react";
import { useSuite } from "@/components/providers/SuiteProviders";
import {
  cleanFormat,
  computeTextStats,
  topKeywords,
} from "@/lib/text-analysis";

export function TextToolkitPanel() {
  const { t } = useSuite();
  const [text, setText] = useState("");
  const [liveMsg, setLiveMsg] = useState("");

  const stats = useMemo(() => computeTextStats(text), [text]);
  const keywords = useMemo(() => topKeywords(text, 5), [text]);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setLiveMsg(t("copyDone"));
      window.setTimeout(() => setLiveMsg(""), 2500);
    } catch {
      setLiveMsg("");
    }
  }, [text, t]);

  const statCards = [
    { label: t("statWords"), value: stats.words },
    { label: t("statChars"), value: stats.characters },
    { label: t("statParagraphs"), value: stats.paragraphs },
    {
      label: t("statReading"),
      value:
        stats.words === 0
          ? "0"
          : `${stats.readingMinutes} ${t("readingSuffix")}`,
    },
  ];

  return (
    <section
      className="space-y-6"
      aria-labelledby="text-toolkit-heading"
    >
      <div>
        <h1
          id="text-toolkit-heading"
          className="text-2xl font-normal tracking-tight text-[var(--text-primary)]"
        >
          {t("textToolkitTitle")}
        </h1>
        <p
          className="mt-1 max-w-2xl text-sm text-[var(--text-secondary)]"
          aria-live="polite"
        >
          {liveMsg}
        </p>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t("textAreaPlaceholder")}
        rows={12}
        className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--input-bg)] px-4 py-3 text-base leading-relaxed text-[var(--text-primary)] shadow-sm placeholder:text-[var(--text-muted)] focus-visible:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-ring)]"
        spellCheck
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-sm"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
              {card.label}
            </p>
            <p className="mt-1 text-2xl font-normal tabular-nums text-[var(--text-primary)]">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
        <h2 className="text-sm font-medium text-[var(--text-primary)]">
          {t("keywordTitle")}
        </h2>
        {keywords.length === 0 ? (
          <p className="mt-3 text-sm text-[var(--text-secondary)]">
            {t("keywordEmpty")}
          </p>
        ) : (
          <ul className="mt-3 divide-y divide-[var(--border)]">
            {keywords.map((row) => (
              <li
                key={row.word}
                className="flex items-center justify-between gap-4 py-2 text-sm first:pt-0"
              >
                <span className="font-medium text-[var(--text-primary)]">
                  {row.word}
                </span>
                <span className="tabular-nums text-[var(--text-secondary)]">
                  {row.count} · {row.density}%
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setText(cleanFormat(text))}
          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] shadow-sm transition-colors hover:bg-[var(--hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {t("btnClearFormat")}
        </button>
        <button
          type="button"
          onClick={() => setText(text.toUpperCase())}
          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] shadow-sm transition-colors hover:bg-[var(--hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {t("btnUppercase")}
        </button>
        <button
          type="button"
          onClick={() => setText(text.toLowerCase())}
          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] shadow-sm transition-colors hover:bg-[var(--hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {t("btnLowercase")}
        </button>
        <button
          type="button"
          onClick={onCopy}
          className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {t("btnCopy")}
        </button>
      </div>
    </section>
  );
}
