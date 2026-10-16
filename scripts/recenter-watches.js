import sharp from 'sharp';

async function recenterWatch(filename) {
  const filePath = `public/assets/watches/${filename}`;
  const backupPath = `public/assets/watches/${filename.replace('.png', '-uncentered.png')}`;
  
  // Backup original
  await sharp(filePath).toFile(backupPath);

  // Trim transparent borders
  const trimmed = await sharp(filePath).trim().toBuffer({ resolveWithObject: true });
  const trimW = trimmed.info.width;
  const trimH = trimmed.info.height;

  // Use a clean 724x724 square canvas (matching original)
  const canvasSize = 724;
  const left = Math.round((canvasSize - trimW) / 2);
  const top = Math.round((canvasSize - trimH) / 2);

  // Composite the trimmed watch in the exact center of a transparent 724x724 canvas
  const centeredBuffer = await sharp({
    create: {
      width: canvasSize,
      height: canvasSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    {
      input: trimmed.data,
      left: left,
      top: top
    }
  ])
  .png()
  .toBuffer();

  await sharp(centeredBuffer).toFile(filePath);

  // Check new bounds
  const { info } = await sharp(filePath).trim().toBuffer({ resolveWithObject: true });
  const leftPad = -info.trimOffsetLeft;
  const rightPad = canvasSize - (leftPad + info.width);
  console.log(`Re-centered ${filename}: canvas=${canvasSize}x${canvasSize}, trim=${info.width}x${info.height}, LeftPad=${leftPad}, RightPad=${rightPad}`);
}

async function run() {
  await recenterWatch('atelier-classic.png');
  await recenterWatch('apex-carbon.png');
}

run();
