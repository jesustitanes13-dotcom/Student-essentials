const STOP = new Set(
  [
    "the",
    "and",
    "for",
    "are",
    "but",
    "not",
    "you",
    "all",
    "can",
    "her",
    "was",
    "one",
    "our",
    "out",
    "day",
    "get",
    "has",
    "him",
    "his",
    "how",
    "its",
    "may",
    "new",
    "now",
    "old",
    "see",
    "two",
    "way",
    "who",
    "boy",
    "did",
    "she",
    "use",
    "her",
    "too",
    "any",
    "with",
    "from",
    "that",
    "this",
    "have",
    "been",
    "will",
    "your",
    "what",
    "when",
    "which",
    "their",
    "there",
    "about",
    "after",
    "before",
    "would",
    "could",
    "should",
    "el",
    "la",
    "los",
    "las",
    "un",
    "una",
    "unos",
    "unas",
    "y",
    "o",
    "pero",
    "por",
    "para",
    "con",
    "sin",
    "sobre",
    "entre",
    "como",
    "más",
    "muy",
    "del",
    "al",
    "lo",
    "le",
    "les",
    "se",
    "su",
    "sus",
    "ya",
    "eso",
    "este",
    "esta",
    "estos",
    "estas",
    "que",
    "en",
    "de",
    "a",
    "es",
    "son",
    "fue",
    "han",
    "ser",
    "hay",
    "porque",
    "todo",
    "todos",
    "toda",
    "todas",
  ].map((w) => w.toLowerCase()),
);

export type TextStats = {
  words: number;
  characters: number;
  paragraphs: number;
  readingMinutes: number;
};

const WORD_RE = /[\p{L}\p{N}]+/gu;

export function computeTextStats(text: string): TextStats {
  const trimmed = text.trim();
  const words = trimmed.match(WORD_RE) ?? [];
  const wordCount = words.length;
  const characters = text.length;
  const paragraphs =
    trimmed.length === 0
      ? 0
      : text
          .split(/\n\s*\n/)
          .map((p) => p.trim())
          .filter(Boolean).length || (trimmed.length ? 1 : 0);
  const wpm = 200;
  const readingMinutes =
    wordCount === 0 ? 0 : Math.max(1, Math.round(wordCount / wpm));

  return {
    words: wordCount,
    characters,
    paragraphs,
    readingMinutes,
  };
}

export type KeywordRow = { word: string; count: number; density: number };

export function topKeywords(text: string, limit = 5): KeywordRow[] {
  const words = text.toLowerCase().match(WORD_RE) ?? [];
  const filtered = words.filter((w) => w.length > 2 && !STOP.has(w));
  if (filtered.length === 0) return [];

  const freq = new Map<string, number>();
  for (const w of filtered) {
    freq.set(w, (freq.get(w) ?? 0) + 1);
  }

  const total = filtered.length;
  const rows: KeywordRow[] = [...freq.entries()]
    .map(([word, count]) => ({
      word,
      count,
      density: Math.round((count / total) * 1000) / 10,
    }))
    .sort((a, b) => b.count - a.count || a.word.localeCompare(b.word))
    .slice(0, limit);

  return rows;
}

export function cleanFormat(text: string): string {
  return text
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}
