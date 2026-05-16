import { unlinkSync } from "fs";
import { join } from "path";

const path = join(process.cwd(), "out", "favicon.ico");
try {
  unlinkSync(path);
} catch {
  /* ya no existe */
}
