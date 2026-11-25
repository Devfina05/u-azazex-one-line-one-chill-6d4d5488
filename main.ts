// One Line, One Chill entry (Node 22, standard library only):
// writes one sentence of horror, 100 characters, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The scare: a baby monitor whispers the parent's name in the parent's own
// voice, then asks why they stopped rocking an empty crib. The horror lands
// in two moves — the voice is stolen, and the crib is empty, so whatever
// the monitor is rocking, or watching, is not the baby. One sentence, one
// breath, no setup beyond the object every nursery already has.
// Verified by running the program: the output is exactly 100 characters,
// one sentence, one line.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'The baby monitor whispered my name in my own voice, then asked why I stopped rocking the empty crib.',
);
