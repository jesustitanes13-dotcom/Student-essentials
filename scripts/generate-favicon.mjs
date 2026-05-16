import { existsSync } from "fs";
import { join } from "path";
import sharp from "sharp";

const root = process.cwd();
const source = join(root, "public", "icon.png");

if (!existsSync(source)) {
  console.error("generate-favicon: falta public/icon.png");
  process.exit(1);
}

const sizes = [
  { name: "favicon-32.png", size: 32 },
  { name: "favicon-192.png", size: 192 },
  { name: "apple-touch-icon.png", size: 180 },
];

for (const { name, size } of sizes) {
  const out = join(root, "public", name);
  await sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(out);
  console.log(`generate-favicon: ${name} (${size}x${size})`);
}

const ico32 = await sharp(source)
  .resize(32, 32, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toBuffer();

await sharp(ico32).toFile(join(root, "public", "favicon.ico"));
console.log("generate-favicon: favicon.ico");
