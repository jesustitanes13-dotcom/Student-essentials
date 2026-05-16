import { copyFileSync, existsSync } from "fs";
import { join } from "path";

const root = process.cwd();
const target = join(root, "public", "icon.png");
const sources = [
  join(root, "icon.png"),
  join(root, "public", "icon.png"),
  join(root, "app", "icon.png"),
];

const source = sources.find((p) => existsSync(p));

if (!source) {
  console.error(
    "sync-icon: coloca tu icono en public/icon.png (archivo fuente del favicon)",
  );
  process.exit(1);
}

if (source !== target) {
  copyFileSync(source, target);
  console.log(`sync-icon: ${source} → public/icon.png`);
} else {
  console.log("sync-icon: public/icon.png listo");
}
