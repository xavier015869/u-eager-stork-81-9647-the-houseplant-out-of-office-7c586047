// The Houseplant Out-of-Office — u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt. The gate requires 1-120 UTF-8 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office: I'm the fern. Ignored since March, thriving on spite. I'll reply when the sun moves. It won't.";

if ([...ENTRY].length > 120 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${[...ENTRY].length} characters, over the 120 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
