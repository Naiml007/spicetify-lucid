import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDirectory = join(projectRoot, "dist");

await mkdir(outputDirectory, { recursive: true });
await copyFile(join(projectRoot, "color.ini"), join(outputDirectory, "color.ini"));
