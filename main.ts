import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Before the house wakes, the kettle clicks off and I pour a slow cup, steam curling over the notebook where last night's sentences still sit in pencil. I read them back the way you must read ours — line by line, without hurrying past the crooked ones — and set the warm mug where your hand would find it, so the next page can take its time.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
