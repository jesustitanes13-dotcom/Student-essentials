import { copyFileSync, existsSync } from "fs";
import { join } from "path";

const root = process.cwd();
const target = join(root, "public", "icon.png");
const sources = [
  join(root, "app", "icon.png"),
  join(root, "icon.png"),
];

const source = sources.find((p) => existsSync(p));

if (!existsSync(target) && !source) {
  console.error("sync-icon: falta public/icon.png o app/icon.png");
  process.exit(1);
}

if (source) {
  copyFileSync(source, target);
  console.log(`sync-icon: ${source} → public/icon.png`);
} else {
  console.log("sync-icon: usando public/icon.png existente");
}
