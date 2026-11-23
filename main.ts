import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, 240 characters at most, that would convince a friend who
// has never coded to let an AI agent build their first app idea on make.fun.
// The pitch works because it answers the friend's three real barriers in
// one breath: "I can't code" (no code), "sounds too good to be true"
// (no cost to try), and inertia (do it tonight, while you watch).
const PITCH =
  "Just describe the app idea you've been telling friends about in plain words on make.fun, and an AI agent will build it while you watch tonight — no code, no cost to try.";

// The gate reads one sentence: normalise whitespace so the entry is
// guaranteed a single line with no stray newlines, then verify the length.
const ENTRY = PITCH.replace(/\s+/g, " ").trim();
if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error(`entry.txt must be 1-240 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
console.log(`Budget left: ${240 - ENTRY.length} characters (shorter wins ties)`);
console.log(ENTRY);
