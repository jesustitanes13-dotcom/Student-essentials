export type BodyTextAlign = "left" | "center" | "right" | "justify";

export const LINE_SPACING_OPTIONS = [1, 1.15, 1.5, 2] as const;
export type LineSpacing = (typeof LINE_SPACING_OPTIONS)[number];

export const DEFAULT_TEXT_ALIGN: BodyTextAlign = "left";
export const DEFAULT_LINE_SPACING: LineSpacing = 2;
