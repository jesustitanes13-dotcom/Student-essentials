type AcademicPdfInput = {
  student: string;
  professor: string;
  subject: string;
  date: string;
  title: string;
  body: string;
  fontFamily: "arial" | "times";
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

  const marginX = 25.4; // 1 inch MLA margin
  const topY = 25.4;
  const bottomMargin = 25.4;
  const firstLineIndent = 12.7; // 0.5 inches
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const rightX = pageWidth - marginX;
  const maxWidth = rightX - marginX;

  doc.setFont(input.fontFamily === "times" ? "times" : "helvetica", "normal");
  doc.setFontSize(12);
  doc.setLineHeightFactor(2);

  let y = topY;
  const lineHeightMm = doc.getLineHeight() / doc.internal.scaleFactor;
  const studentLastName = toMlaNameCase(extractMlaLastName(input.student));

  const ensureSpace = (requiredLines = 1) => {
    if (y + lineHeightMm * requiredLines > pageHeight - bottomMargin) {
      doc.addPage();
      y = topY;
    }
  };

  const drawLeftLine = (text: string, x = marginX) => {
    ensureSpace(1);
    doc.text(text, x, y);
    y += lineHeightMm;
  };

  drawLeftLine(input.student.trim());
  drawLeftLine(input.professor.trim());
  drawLeftLine(input.subject.trim());
  drawLeftLine(input.date.trim());
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
    const firstLineWidth = maxWidth - firstLineIndent;
    const firstLines = doc.splitTextToSize(paragraph, firstLineWidth);
    if (firstLines.length === 0) continue;

    drawLeftLine(firstLines[0], marginX + firstLineIndent);

    if (firstLines.length > 1) {
      const remainingText = firstLines.slice(1).join(" ");
      const remainingLines = doc.splitTextToSize(remainingText, maxWidth);
      for (const line of remainingLines) {
        drawLeftLine(line, marginX);
      }
    }
  }

  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.text(`${studentLastName} ${i}`, rightX, 12.7, { align: "right" });
  }

  doc.save("academic-assignment.pdf");
}
