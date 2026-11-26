// Rejected Olympic Sports — entry program.
// Writes one funny single-line rejected Olympic sport to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a made-up event a broadcaster would have to read with a
// straight face. The twist lands at the very end. Kept on one line and
// inside the 200-character gate by construction.
const entry =
  "100-Metre Staring Contest: nine-day final; both blinked at the medal ceremony.";

if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error("entry violates the 1-200 character single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output directory if needed; never delete it, only write inside.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
