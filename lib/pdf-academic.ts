import type { BodyTextAlign, LineSpacing } from "@/lib/body-format";

type AcademicPdfInput = {
  student: string;
  professor: string;
  subject: string;
  date: string;
  title: string;
  body: string;
  fontFamily: "arial" | "times";
  textAlign: BodyTextAlign;
  lineSpacing: LineSpacing;
};

function extractMlaLastName(fullName: string): string {
  const parts = fullName
    .trim()
    .split(/\s+/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (parts.length === 0) return "Student";
  if (parts.length === 1) return parts[0];

  const connectors = new Set([
    "de",
    "del",
    "de la",
    "de las",
    "de los",
    "la",
    "las",
    "los",
    "y",
    "da",
    "das",
    "do",
    "dos",
    "van",
    "von",
    "der",
    "den",
    "di",
    "du",
    "le",
  ]);

  const tail: string[] = [];
  let i = parts.length - 1;
  tail.unshift(parts[i]);
  i -= 1;

  while (i >= 0) {
    const token = parts[i].toLowerCase();
    if (!connectors.has(token)) break;
    tail.unshift(parts[i]);
    i -= 1;
  }

  return tail.join(" ");
}

function toMlaNameCase(lastName: string): string {
  const lowerKeep = new Set([
    "de",
    "del",
    "la",
    "las",
    "los",
    "y",
    "da",
    "das",
    "do",
    "dos",
    "van",
    "von",
    "der",
    "den",
    "di",
    "du",
    "le",
  ]);

  return lastName
    .split(/\s+/)
    .filter(Boolean)
    .map((token, idx) => {
      const raw = token.toLowerCase();
      if (idx > 0 && lowerKeep.has(raw)) return raw;
      return raw.charAt(0).toUpperCase() + raw.slice(1);
    })
    .join(" ");
}

export async function buildAcademicPdf(input: AcademicPdfInput): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });

  const marginX = 25.4;
  const topY = 25.4;
  const bottomMargin = 25.4;
  const firstLineIndent = 12.7;
  const fontSizePt = 12;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const rightX = pageWidth - marginX;
  const maxWidth = rightX - marginX;

  doc.setFont(input.fontFamily === "times" ? "times" : "helvetica", "normal");
  doc.setFontSize(fontSizePt);
  doc.setLineHeightFactor(input.lineSpacing);

  let y = topY;
  const lineHeightMm = doc.getLineHeight() / doc.internal.scaleFactor;
  const studentLastName = toMlaNameCase(extractMlaLastName(input.student));

  const ensureSpace = (requiredLines = 1) => {
    if (y + lineHeightMm * requiredLines > pageHeight - bottomMargin) {
      doc.addPage();
      y = topY;
    }
  };

  const drawHeaderLine = (text: string) => {
    ensureSpace(1);
    doc.text(text, marginX, y, { align: "left" });
    y += lineHeightMm;
  };

  const drawBodyLine = (
    text: string,
    options?: { firstLineOfParagraph?: boolean },
  ) => {
    ensureSpace(1);
    const align = input.textAlign;
    const isFirstLeft =
      align === "left" && (options?.firstLineOfParagraph ?? false);

    if (align === "center") {
      doc.text(text, pageWidth / 2, y, { align: "center" });
    } else if (align === "right") {
      doc.text(text, rightX, y, { align: "right" });
    } else if (align === "justify") {
      doc.text(text, marginX, y, { align: "justify", maxWidth });
    } else {
      const x = isFirstLeft ? marginX + firstLineIndent : marginX;
      doc.text(text, x, y, { align: "left" });
    }

    y += lineHeightMm;
  };

  drawHeaderLine(input.student.trim());
  drawHeaderLine(input.professor.trim());
  drawHeaderLine(input.subject.trim());
  drawHeaderLine(input.date.trim());
  y += lineHeightMm;

  const trimmedTitle = input.title.trim();
  if (trimmedTitle) {
    ensureSpace(1);
    doc.text(trimmedTitle, pageWidth / 2, y, { align: "center" });
    y += lineHeightMm;
    y += lineHeightMm * 0.3;
  }

  const paragraphs = input.body
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\n+/g, " ").trim())
    .filter(Boolean);

  for (const paragraph of paragraphs) {
    if (input.textAlign === "left") {
      const firstLineWidth = maxWidth - firstLineIndent;
      const firstLines = doc.splitTextToSize(paragraph, firstLineWidth);
      if (firstLines.length === 0) continue;

      drawBodyLine(firstLines[0], { firstLineOfParagraph: true });

      if (firstLines.length > 1) {
        const remainingText = firstLines.slice(1).join(" ");
        const remainingLines = doc.splitTextToSize(remainingText, maxWidth);
        for (const line of remainingLines) {
          drawBodyLine(line);
        }
      }
      continue;
    }

    const lines = doc.splitTextToSize(paragraph, maxWidth);
    for (const line of lines) {
      drawBodyLine(line);
    }
  }

  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.text(`${studentLastName} ${i}`, rightX, 12.7, { align: "right" });
  }

  doc.save("academic-assignment.pdf");
}
