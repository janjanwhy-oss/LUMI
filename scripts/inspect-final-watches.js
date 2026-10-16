import sharp from 'sharp';
import fs from 'fs';

const files = [
  'apex-carbon.png',
  'apex-titanium.png',
  'atelier-classic.png',
  'atelier-silver.png',
  'chronos-noir.png'
];

async function inspect() {
  for (const f of files) {
    const meta = await sharp(`LUMI-Final-Watches/${f}`).metadata();
    const { data } = await sharp(`LUMI-Final-Watches/${f}`).raw().toBuffer({ resolveWithObject: true });
    // Sample corner pixel (0,0)
    console.log(`${f}: ${meta.width}x${meta.height}, channels=${meta.channels}, hasAlpha=${meta.hasAlpha}, format=${meta.format}`);
    console.log(`  Corner (0,0): R=${data[0]}, G=${data[1]}, B=${data[2]}, A=${data[3] !== undefined ? data[3] : 'no alpha'}`);
  }
}

inspect();
