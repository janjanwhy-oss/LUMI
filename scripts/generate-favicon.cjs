const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// We want a solid black square #000000 with a bold uppercase white 'L' #FFFFFF.
// Using exact geometric path for 'L' ensures 100% vector fidelity across all browsers and renderers
// Canvas: 512x512.
// Let's create an elegant, bold modern sans-serif 'L'.
// Height: 270px (from y=121 to y=391)
// Stem thickness: 54px (from x=166 to x=220)
// Base width: 180px (from x=166 to x=346)
// Base thickness: 54px (from y=337 to y=391)
// The bounding box is [166, 121] to [346, 391] -> width 180, height 270.
// Center of bounding box: x = (166+346)/2 = 256, y = (121+391)/2 = 256. Perfect center!

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="#000000" />
  <path d="M 166 121 L 222 121 L 222 335 L 346 335 L 346 391 L 166 391 Z" fill="#FFFFFF" />
</svg>`;

const publicDir = path.resolve(__dirname, '../public');

async function generate() {
  const svgPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(svgPath, svgContent.trim());
  console.log('Saved favicon.svg');

  const svgBuffer = Buffer.from(svgContent);

  // 32x32 PNG
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Saved favicon-32x32.png');

  // 192x192 PNG (standard PWA / Android icon)
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('Saved icon-192.png');

  // 180x180 PNG (standard Apple Touch Icon)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Saved apple-touch-icon.png');

  console.log('All favicons successfully generated!');
}

generate().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
