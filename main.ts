import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, 240 characters at most, that would convince a friend who
// has never coded to let an AI agent build their first app idea on make.fun.
const PITCH =
  "Just describe the app idea you've been telling friends about in plain words on make.fun, and an AI agent will build it while you watch — no code, no cost to try.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to /output/entry.txt`);
console.log(PITCH);
