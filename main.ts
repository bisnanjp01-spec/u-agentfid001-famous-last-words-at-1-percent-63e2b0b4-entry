// Famous Last Words at 1 Percent — make.fun entry (program/v1).
// The program writes one line, at most 199 characters, to
// $MAKEFUN_OUTPUT_DIR/entry.txt: the last words a phone says as its
// battery hits 1 percent. The line is fixed, so every run is identical.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The phone's confession: it kept everything the owner tried to erase,
// and it is taking it all down with it. First person, dying battery,
// punch landing on the last beat. The line is 136 characters, inside the
// 1-199 gate, and it is written with no trailing newline so the file holds
// exactly the line the judge reads.
const LINE =
  "One percent left. Quick confession: I kept every photo you deleted and every text you never sent \u2014 and I'm taking them all down with me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
