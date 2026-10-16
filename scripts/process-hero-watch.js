import sharp from 'sharp';
import fs from 'fs';

async function removeBlackBackground() {
  const { data, info } = await sharp('public/assets/watches/lumi-hero-original.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const numPixels = width * height;
  
  // Output RGBA buffer
  const rgba = Buffer.alloc(numPixels * 4);

  // Initialize with RGB and alpha=255
  for (let i = 0; i < numPixels; i++) {
    const srcIdx = i * 3;
    const destIdx = i * 4;
    rgba[destIdx] = data[srcIdx];
    rgba[destIdx + 1] = data[srcIdx + 1];
    rgba[destIdx + 2] = data[srcIdx + 2];
    rgba[destIdx + 3] = 255;
  }

  // BFS / Flood fill from outer perimeter
  // A pixel is background if it's connected to border and very dark (R,G,B < threshold)
  const isDark = (x, y) => {
    const idx = (y * width + x) * 3;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Watch steel lugs and bracelet have reflections > 35, whereas black backdrop is 0-10
    const maxVal = Math.max(r, g, b);
    return maxVal < 22;
  };

  const visited = new Uint8Array(numPixels);
  const queue = new Int32Array(numPixels * 2);
  let head = 0;
  let tail = 0;

  // Add perimeter pixels
  for (let x = 0; x < width; x++) {
    if (isDark(x, 0)) {
      queue[tail++] = x;
      queue[tail++] = 0;
      visited[0 * width + x] = 1;
    }
    if (isDark(x, height - 1)) {
      queue[tail++] = x;
      queue[tail++] = height - 1;
      visited[(height - 1) * width + x] = 1;
    }
  }

  for (let y = 0; y < height; y++) {
    if (!visited[y * width + 0] && isDark(0, y)) {
      queue[tail++] = 0;
      queue[tail++] = y;
      visited[y * width + 0] = 1;
    }
    if (!visited[y * width + (width - 1)] && isDark(width - 1, y)) {
      queue[tail++] = width - 1;
      queue[tail++] = y;
      visited[y * width + (width - 1)] = 1;
    }
  }

  // BFS
  while (head < tail) {
    const cx = queue[head++];
    const cy = queue[head++];
    const currIdx = cy * width + cx;

    // Mark as transparent
    rgba[currIdx * 4 + 3] = 0;

    // 4 neighbors
    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = neighbors[i];
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!visited[nIdx] && isDark(nx, ny)) {
          visited[nIdx] = 1;
          queue[tail++] = nx;
          queue[tail++] = ny;
        }
      }
    }
  }

  // Edge smoothing: Soften transition for semi-dark edge pixels right next to background
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      if (visited[idx]) continue; // already transparent

      // Check if it's adjacent to a transparent pixel
      const hasTransparentNeighbor =
        visited[(y - 1) * width + x] ||
        visited[(y + 1) * width + x] ||
        visited[y * width + (x - 1)] ||
        visited[y * width + (x + 1)];

      if (hasTransparentNeighbor) {
        const srcIdx = idx * 3;
        const maxVal = Math.max(data[srcIdx], data[srcIdx + 1], data[srcIdx + 2]);
        if (maxVal < 45) {
          // Soft ramp alpha between 22 and 45
          const alpha = Math.min(255, Math.max(0, Math.round(((maxVal - 18) / (45 - 18)) * 255)));
          rgba[idx * 4 + 3] = alpha;
        }
      }
    }
  }

  // Save as high-res PNG and WebP
  await sharp(rgba, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .png({ quality: 100, compressionLevel: 8 })
  .toFile('public/assets/watches/lumi-hero-watch.png');

  console.log('✓ Successfully created public/assets/watches/lumi-hero-watch.png');
}

removeBlackBackground();
