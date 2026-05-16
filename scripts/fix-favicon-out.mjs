/**
 * Tras `next build`, Next puede sobrescribir `out/favicon.ico` con un ICO por defecto.
 * Copiamos el ICO generado desde `public/quickmla-favicon.ico` (basado en Logo.png2.png).
 */
import { copyFileSync, existsSync } from "fs";
import { join } from "path";

const root = process.cwd();
const src = join(root, "public", "quickmla-favicon.ico");
const dest = join(root, "out", "favicon.ico");

if (!existsSync(src)) {
  console.warn("[fix-favicon-out] Falta public/quickmla-favicon.ico — no se hizo nada.");
  process.exit(0);
}

if (!existsSync(join(root, "out"))) {
  console.warn("[fix-favicon-out] Carpeta out/ no existe — ejecuta desde la raíz del proyecto tras next build.");
  process.exit(0);
}

copyFileSync(src, dest);
console.log("[fix-favicon-out] Copiado quickmla-favicon.ico → out/favicon.ico");
