import sharp from 'sharp';
import { unlink } from 'node:fs/promises';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const dir = resolve(here, '..', 'public', 'integrations');

// [original filename, output filename]
const map = [
  ['gmail logo.png', 'gmail.webp'],
  ['google meet logo.png', 'google-meet.webp'],
  ['microsoft teams logo.png', 'teams.webp'],
  ['salesforce logo.png', 'salesforce.webp'],
  ['slack logo.png', 'slack.webp'],
  ['zoom logo.svg', 'zoom.webp'],
];

for (const [from, to] of map) {
  const inputPath = join(dir, from);
  const outputPath = join(dir, to);
  const isSvg = from.toLowerCase().endsWith('.svg');

  let pipeline = sharp(inputPath, isSvg ? { density: 300 } : {});
  pipeline = pipeline.resize(512, 512, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  });
  await pipeline.webp({ quality: 90 }).toFile(outputPath);
  await unlink(inputPath);
  console.log(`✓ ${from} → ${to}`);
}
