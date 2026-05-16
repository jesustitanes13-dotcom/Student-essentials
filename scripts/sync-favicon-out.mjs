/**
 * Next.js static export puede dejar un favicon.ico genérico en out/.
 * Sustituimos por el generado desde public/logo.png.
 */
import { copyFileSync, existsSync } from "fs";
import { join } from "path";

const root = process.cwd();
const src = join(root, "public", "favicon.ico");
const dest = join(root, "out", "favicon.ico");

if (!existsSync(src) || !existsSync(join(root, "out"))) {
  process.exit(0);
}

copyFileSync(src, dest);
