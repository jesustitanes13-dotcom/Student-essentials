"use client";

import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
} from "lucide-react";
import { useSuite } from "@/components/providers/SuiteProviders";
import type { BodyTextAlign, LineSpacing } from "@/lib/body-format";
import { LINE_SPACING_OPTIONS } from "@/lib/body-format";

type BodyFormatToolbarProps = {
  textAlign: BodyTextAlign;
  lineSpacing: LineSpacing;
  onTextAlignChange: (align: BodyTextAlign) => void;
  onLineSpacingChange: (spacing: LineSpacing) => void;
};

const ALIGN_OPTIONS: {
  value: BodyTextAlign;
  Icon: typeof AlignLeft;
  labelKey:
    | "alignLeftAria"
    | "alignCenterAria"
    | "alignRightAria"
    | "alignJustifyAria";
}[] = [
  { value: "left", Icon: AlignLeft, labelKey: "alignLeftAria" },
  { value: "center", Icon: AlignCenter, labelKey: "alignCenterAria" },
  { value: "right", Icon: AlignRight, labelKey: "alignRightAria" },
  { value: "justify", Icon: AlignJustify, labelKey: "alignJustifyAria" },
];

const SPACING_LABEL_KEYS: Record<
  LineSpacing,
  "lineSpacingSingle" | "lineSpacing115" | "lineSpacing15" | "lineSpacingDouble"
> = {
  1: "lineSpacingSingle",
  1.15: "lineSpacing115",
  1.5: "lineSpacing15",
  2: "lineSpacingDouble",
};

function toolbarBtnClass(active: boolean) {
  return `flex h-8 w-8 items-center justify-center rounded-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--accent)] ${
    active
      ? "bg-[var(--accent)] text-white shadow-sm"
      : "text-[var(--text-secondary)] hover:bg-[var(--hover)] hover:text-[var(--text-primary)]"
  }`;
}

function spacingBtnClass(active: boolean) {
  return `rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--accent)] ${
    active
      ? "bg-[var(--accent)] text-white shadow-sm"
      : "text-[var(--text-secondary)] hover:bg-[var(--hover)] hover:text-[var(--text-primary)]"
  }`;
}

export function BodyFormatToolbar({
  textAlign,
  lineSpacing,
  onTextAlignChange,
  onLineSpacingChange,
}: BodyFormatToolbarProps) {
  const { t } = useSuite();

  return (
    <div
      className="mt-2 flex flex-col gap-2 rounded-t-xl border border-b-0 border-[var(--border)] bg-[var(--surface)] px-2 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-3"
      role="toolbar"
      aria-label={t("formatToolbarAria")}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="px-1 text-xs font-medium text-[var(--text-muted)]">
          {t("formatAlignLabel")}
        </span>
        <div
          className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--page)] p-0.5"
          role="group"
          aria-label={t("formatAlignLabel")}
        >
          {ALIGN_OPTIONS.map(({ value, Icon, labelKey }) => (
            <button
              key={value}
              type="button"
              className={toolbarBtnClass(textAlign === value)}
              aria-label={t(labelKey)}
              aria-pressed={textAlign === value}
              onClick={() => onTextAlignChange(value)}
            >
              <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="px-1 text-xs font-medium text-[var(--text-muted)]">
          {t("formatLineSpacingLabel")}
        </span>
        <div
          className="inline-flex flex-wrap rounded-lg border border-[var(--border)] bg-[var(--page)] p-0.5"
          role="group"
          aria-label={t("formatLineSpacingLabel")}
        >
          {LINE_SPACING_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              className={spacingBtnClass(lineSpacing === option)}
              aria-pressed={lineSpacing === option}
              onClick={() => onLineSpacingChange(option)}
            >
              {t(SPACING_LABEL_KEYS[option])}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
