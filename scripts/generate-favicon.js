const sharp = require('sharp');
const fs = require('fs');

// Solid black square (#000000), uppercase bold modern sans-serif white 'L' (#FFFFFF)
// Optical centering: letter 'L' has a vertical stem on the left and horizontal arm on the right,
// so x is offset slightly rightward (265) to be optically dead-centered in the black square.
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="#000000"/>
  <text x="264" y="270" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', 'Segoe UI', Roboto, sans-serif" font-size="330" font-weight="800" text-anchor="middle" dominant-baseline="central">L</text>
</svg>`;

fs.writeFileSync('public/favicon.svg', svgContent);
console.log('favicon.svg written.');

async function generatePngs() {
  await sharp(Buffer.from(svgContent))
    .resize(32, 32)
    .png()
    .toFile('public/favicon-32x32.png');
  console.log('favicon-32x32.png generated.');

  await sharp(Buffer.from(svgContent))
    .resize(192, 192)
    .png()
    .toFile('public/icon-192.png');
  console.log('icon-192.png generated.');

  await sharp(Buffer.from(svgContent))
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');
  console.log('apple-touch-icon.png generated.');
}

generatePngs();
