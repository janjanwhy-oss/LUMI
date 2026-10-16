import fs from 'fs';
import path from 'path';

// Helper to create directory if not exists
const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

ensureDir('public/assets/watches');
ensureDir('public/assets/mockups');

// 1. HERO WATCH SVG (Dynamic angled luxury chronograph with steel bracelet and sapphire depth)
const heroWatchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 800" width="100%" height="100%">
  <defs>
    <!-- Metallic Gradients -->
    <linearGradient id="caseSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="25%" stop-color="#D8DBE0"/>
      <stop offset="50%" stop-color="#8F94A0"/>
      <stop offset="75%" stop-color="#D8DBE0"/>
      <stop offset="100%" stop-color="#555A64"/>
    </linearGradient>

    <linearGradient id="bezelCeramic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2D3035"/>
      <stop offset="45%" stop-color="#141517"/>
      <stop offset="70%" stop-color="#1F2124"/>
      <stop offset="100%" stop-color="#0B0C0D"/>
    </linearGradient>

    <radialGradient id="dialSunburst" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1A1C20"/>
      <stop offset="60%" stop-color="#0E0F12"/>
      <stop offset="100%" stop-color="#050506"/>
    </radialGradient>

    <linearGradient id="sapphireGlare" x1="0%" y1="0%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.35"/>
      <stop offset="35%" stop-color="#3B82F6" stop-opacity="0.12"/>
      <stop offset="70%" stop-color="#FFFFFF" stop-opacity="0.0"/>
      <stop offset="100%" stop-color="#60A5FA" stop-opacity="0.08"/>
    </linearGradient>

    <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF0D4"/>
      <stop offset="50%" stop-color="#E2B880"/>
      <stop offset="100%" stop-color="#B3854E"/>
    </linearGradient>

    <linearGradient id="strapSteel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E5E7EB"/>
      <stop offset="30%" stop-color="#9CA3AF"/>
      <stop offset="50%" stop-color="#D1D5DB"/>
      <stop offset="70%" stop-color="#6B7280"/>
      <stop offset="100%" stop-color="#374151"/>
    </linearGradient>

    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <filter id="dropDepth" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000000" flood-opacity="0.32"/>
    </filter>
  </defs>

  <g transform="translate(50, 20) rotate(-6, 500, 400)" filter="url(#dropDepth)">
    <!-- Top Bracelet Links -->
    <g id="braceletTop">
      <!-- Outer Links -->
      <path d="M 390 120 L 610 120 L 600 240 L 400 240 Z" fill="url(#strapSteel)"/>
      <path d="M 405 130 L 595 130 L 585 190 L 415 190 Z" fill="#9CA3AF" opacity="0.6"/>
      <line x1="460" y1="120" x2="455" y2="240" stroke="#4B5563" stroke-width="2.5"/>
      <line x1="540" y1="120" x2="545" y2="240" stroke="#4B5563" stroke-width="2.5"/>
      <!-- Highlights on links -->
      <line x1="463" y1="120" x2="458" y2="240" stroke="#FFFFFF" stroke-width="1.5" opacity="0.7"/>
      <line x1="537" y1="120" x2="542" y2="240" stroke="#FFFFFF" stroke-width="1.5" opacity="0.7"/>
    </g>

    <!-- Bottom Bracelet Links -->
    <g id="braceletBottom">
      <path d="M 400 560 L 600 560 L 610 680 L 390 680 Z" fill="url(#strapSteel)"/>
      <line x1="455" y1="560" x2="460" y2="680" stroke="#4B5563" stroke-width="2.5"/>
      <line x1="545" y1="560" x2="540" y2="680" stroke="#4B5563" stroke-width="2.5"/>
      <line x1="458" y1="560" x2="463" y2="680" stroke="#FFFFFF" stroke-width="1.5" opacity="0.7"/>
      <line x1="542" y1="560" x2="537" y2="680" stroke="#FFFFFF" stroke-width="1.5" opacity="0.7"/>
    </g>

    <!-- Watch Lugs (Faceted Steel Corners) -->
    <path d="M 380 230 L 410 200 L 440 260 L 380 320 Z" fill="url(#caseSteel)"/>
    <path d="M 620 230 L 590 200 L 560 260 L 620 320 Z" fill="url(#caseSteel)"/>
    <path d="M 380 570 L 410 600 L 440 540 L 380 480 Z" fill="url(#caseSteel)"/>
    <path d="M 620 570 L 590 600 L 560 540 L 620 480 Z" fill="url(#caseSteel)"/>

    <!-- Pushers and Crown at Right -->
    <!-- Top Chrono Pusher (2 o'clock) -->
    <rect x="715" y="300" width="28" height="36" rx="4" transform="rotate(30, 725, 318)" fill="url(#caseSteel)"/>
    <rect x="735" y="305" width="8" height="26" rx="2" transform="rotate(30, 735, 318)" fill="#2D3035"/>
    
    <!-- Crown (3 o'clock) -->
    <path d="M 725 375 L 755 375 C 760 375, 762 385, 762 400 C 762 415, 760 425, 755 425 L 725 425 Z" fill="url(#caseSteel)"/>
    <line x1="740" y1="376" x2="740" y2="424" stroke="#374151" stroke-width="2"/>
    <line x1="746" y1="376" x2="746" y2="424" stroke="#374151" stroke-width="2"/>
    <line x1="752" y1="378" x2="752" y2="422" stroke="#374151" stroke-width="2"/>

    <!-- Bottom Chrono Pusher (4 o'clock) -->
    <rect x="715" y="465" width="28" height="36" rx="4" transform="rotate(-30, 725, 483)" fill="url(#caseSteel)"/>
    <rect x="735" y="470" width="8" height="26" rx="2" transform="rotate(-30, 735, 483)" fill="#2D3035"/>

    <!-- Main Outer Case -->
    <circle cx="500" cy="400" r="235" fill="url(#caseSteel)"/>
    <circle cx="500" cy="400" r="226" fill="#1C1E22"/>

    <!-- Ceramic Tachymeter Bezel -->
    <circle cx="500" cy="400" r="218" fill="url(#bezelCeramic)"/>
    <circle cx="500" cy="400" r="217" fill="none" stroke="#FFFFFF" stroke-width="0.8" opacity="0.3"/>
    
    <!-- Bezel Numerals / Markers (Tachymeter) -->
    <g fill="#A1A1AA" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" text-anchor="middle" letter-spacing="1">
      <text x="500" y="196">60</text>
      <text x="575" y="210">65</text>
      <text x="640" y="248">75</text>
      <text x="686" y="315">90</text>
      <text x="702" y="403">120</text>
      <text x="686" y="490">160</text>
      <text x="635" y="560">200</text>
      <text x="500" y="612">300</text>
      <text x="365" y="560">400</text>
      <text x="300" y="403">UNITS</text>
      <text x="365" y="248">TACHYMETRE</text>
    </g>

    <!-- Inner Dial Ring (Rehaut / Chapter Ring) -->
    <circle cx="500" cy="400" r="185" fill="#16181B" stroke="#2D3036" stroke-width="2"/>
    
    <!-- Dial Face (Deep Sunburst) -->
    <circle cx="500" cy="400" r="180" fill="url(#dialSunburst)"/>

    <!-- Dial Minute Track Marks (60 ticks) -->
    <g stroke="#E4E4E7" stroke-width="1" opacity="0.75">
      ${Array.from({ length: 60 }).map((_, i) => {
        const angle = i * 6;
        const isHour = i % 5 === 0;
        const r1 = 178;
        const r2 = isHour ? 166 : 172;
        const rad = (angle * Math.PI) / 180;
        const x1 = 500 + r1 * Math.sin(rad);
        const y1 = 400 - r1 * Math.cos(rad);
        const x2 = 500 + r2 * Math.sin(rad);
        const y2 = 400 - r2 * Math.cos(rad);
        return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="${isHour ? 2.5 : 1}" stroke="${isHour ? '#FFFFFF' : '#71717A'}"/>`;
      }).join('\n      ')}
    </g>

    <!-- Applied Hour Markers (Faceted Rhodium with Lume Center) -->
    <g>
      ${[1, 2, 4, 5, 7, 8, 10, 11].map(h => {
        const angle = h * 30;
        const rad = (angle * Math.PI) / 180;
        const x = 500 + 152 * Math.sin(rad);
        const y = 400 - 152 * Math.cos(rad);
        return `<g transform="translate(${x.toFixed(1)}, ${y.toFixed(1)}) rotate(${angle})">
          <rect x="-4" y="-14" width="8" height="28" rx="2" fill="url(#caseSteel)" stroke="#09090B" stroke-width="1"/>
          <rect x="-2" y="-11" width="4" height="22" rx="1" fill="#E4E4E7"/>
        </g>`;
      }).join('\n      ')}
      <!-- Double Marker at 12 o'clock -->
      <g transform="translate(500, 248)">
        <rect x="-7" y="-14" width="6" height="28" rx="2" fill="url(#caseSteel)"/>
        <rect x="1" y="-14" width="6" height="28" rx="2" fill="url(#caseSteel)"/>
      </g>
    </g>

    <!-- Sub-dial 1 (9 o'clock - Chrono Minutes) -->
    <g transform="translate(420, 400)">
      <circle cx="0" cy="0" r="44" fill="#111214" stroke="#2D3035" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="40" fill="none" stroke="#27272A" stroke-width="0.8" stroke-dasharray="2,3"/>
      <circle cx="0" cy="0" r="32" fill="none" stroke="#3F3F46" stroke-width="0.5"/>
      <text x="0" y="-22" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#A1A1AA" text-anchor="middle">30</text>
      <text x="24" y="2" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#A1A1AA" text-anchor="middle">10</text>
      <text x="0" y="27" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#A1A1AA" text-anchor="middle">20</text>
      <!-- Sub-dial Hand -->
      <line x1="0" y1="6" x2="-18" y2="-18" stroke="#E4E4E7" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="0" cy="0" r="3" fill="#FFFFFF"/>
    </g>

    <!-- Sub-dial 2 (3 o'clock - Running Seconds) -->
    <g transform="translate(580, 400)">
      <circle cx="0" cy="0" r="44" fill="#111214" stroke="#2D3035" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="40" fill="none" stroke="#27272A" stroke-width="0.8" stroke-dasharray="2,3"/>
      <text x="0" y="-22" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#A1A1AA" text-anchor="middle">60</text>
      <text x="24" y="2" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#A1A1AA" text-anchor="middle">20</text>
      <text x="0" y="27" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#A1A1AA" text-anchor="middle">40</text>
      <line x1="0" y1="5" x2="20" y2="-12" stroke="#E4E4E7" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="0" cy="0" r="3" fill="#FFFFFF"/>
    </g>

    <!-- Sub-dial 3 (6 o'clock - Chrono Hours) -->
    <g transform="translate(500, 465)">
      <circle cx="0" cy="0" r="42" fill="#111214" stroke="#2D3035" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="38" fill="none" stroke="#27272A" stroke-width="0.8" stroke-dasharray="2,3"/>
      <text x="0" y="-22" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#A1A1AA" text-anchor="middle">12</text>
      <text x="22" y="2" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#A1A1AA" text-anchor="middle">3</text>
      <text x="0" y="25" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#A1A1AA" text-anchor="middle">6</text>
      <text x="-22" y="2" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#A1A1AA" text-anchor="middle">9</text>
      <line x1="0" y1="4" x2="0" y2="-22" stroke="#E4E4E7" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="0" cy="0" r="3" fill="#FFFFFF"/>
    </g>

    <!-- Dial Branding (LUMI) -->
    <g transform="translate(500, 325)" text-anchor="middle">
      <text y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="800" fill="#FFFFFF" letter-spacing="4">LUMI</text>
      <text y="12" font-family="'Plus Jakarta Sans', sans-serif" font-size="5.5" font-weight="600" fill="#9CA3AF" letter-spacing="2.5">CHRONOMETER</text>
      <text y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="4.5" font-weight="500" fill="#71717A" letter-spacing="1.5">SWISS MOVEMENT</text>
    </g>

    <!-- Main Hands (Hour & Minute) -->
    <!-- Hour Hand pointing to ~10:10 -->
    <g transform="translate(500, 400) rotate(-62)">
      <!-- Counterweight -->
      <path d="M -4 14 L 4 14 L 2 0 L -2 0 Z" fill="url(#caseSteel)"/>
      <!-- Main Blade -->
      <path d="M -5 0 L -3.5 -85 L 0 -105 L 3.5 -85 L 5 0 Z" fill="url(#caseSteel)" stroke="#27272A" stroke-width="0.8"/>
      <rect x="-2" y="-80" width="4" height="60" rx="1.5" fill="#FFFFFF"/>
    </g>

    <!-- Minute Hand pointing to ~10:10 (approx +52deg) -->
    <g transform="translate(500, 400) rotate(54)">
      <path d="M -3.5 18 L 3.5 18 L 2 0 L -2 0 Z" fill="url(#caseSteel)"/>
      <path d="M -4.5 0 L -3 -125 L 0 -148 L 3 -125 L 4.5 0 Z" fill="url(#caseSteel)" stroke="#27272A" stroke-width="0.8"/>
      <rect x="-1.8" y="-120" width="3.6" height="95" rx="1.5" fill="#FFFFFF"/>
    </g>

    <!-- Center Pinion -->
    <circle cx="500" cy="400" r="9" fill="url(#caseSteel)" stroke="#111215" stroke-width="1.5"/>
    <circle cx="500" cy="400" r="4.5" fill="#18181B"/>

    <!-- Chronograph Seconds Hand (Vibrant Red Needle) -->
    <g transform="translate(500, 400) rotate(-14)">
      <!-- Counterweight Ring -->
      <circle cx="0" cy="35" r="7" fill="none" stroke="#EF4444" stroke-width="2"/>
      <line x1="0" y1="42" x2="0" y2="28" stroke="#EF4444" stroke-width="2"/>
      <!-- Needle -->
      <line x1="0" y1="28" x2="0" y2="-165" stroke="#EF4444" stroke-width="1.8"/>
      <polygon points="-2,-165 2,-165 0,-175" fill="#EF4444"/>
      <circle cx="0" cy="0" r="3.2" fill="#EF4444"/>
    </g>

    <!-- Sapphire Crystal Beveled Reflection / Glare -->
    <ellipse cx="440" cy="340" rx="145" ry="110" fill="url(#sapphireGlare)" transform="rotate(-30, 440, 340)"/>
  </g>
</svg>`;

fs.writeFileSync('public/assets/watches/hero-watch.svg', heroWatchSvg);
console.log('✓ Created hero-watch.svg');

// 2. HERO BACKGROUND VECTOR PATTERN (Subtle luxury dial geometry & coordinate grid)
const heroBgPattern = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 800" width="100%" height="100%">
  <defs>
    <radialGradient id="gridFade" cx="60%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.08"/>
      <stop offset="60%" stop-color="#000000" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <g stroke="#000000" stroke-width="0.8" fill="none" opacity="0.12">
    <!-- Concentric Technical Arcs -->
    <circle cx="650" cy="380" r="340" stroke-dasharray="4,6"/>
    <circle cx="650" cy="380" r="260"/>
    <circle cx="650" cy="380" r="180" stroke-dasharray="2,4"/>
    <circle cx="650" cy="380" r="100"/>
    <circle cx="650" cy="380" r="30"/>

    <!-- Subtle Crosshairs -->
    <line x1="310" y1="380" x2="990" y2="380" stroke-dasharray="6,8"/>
    <line x1="650" y1="40" x2="650" y2="720" stroke-dasharray="6,8"/>

    <!-- Diagonal Axes -->
    <line x1="410" y1="140" x2="890" y2="620" stroke-dasharray="2,6"/>
    <line x1="410" y1="620" x2="890" y2="140" stroke-dasharray="2,6"/>

    <!-- Dial Degree Nodes -->
    <circle cx="650" cy="40" r="3" fill="#000000"/>
    <circle cx="990" cy="380" r="3" fill="#000000"/>
    <circle cx="650" cy="720" r="3" fill="#000000"/>
    <circle cx="310" cy="380" r="3" fill="#000000"/>
    
    <circle cx="890" cy="140" r="2.5" fill="#000000"/>
    <circle cx="890" cy="620" r="2.5" fill="#000000"/>
    <circle cx="410" cy="620" r="2.5" fill="#000000"/>
    <circle cx="410" cy="140" r="2.5" fill="#000000"/>
  </g>

  <!-- Technical Coordinates Text -->
  <g fill="#000000" opacity="0.18" font-family="'Plus Jakarta Sans', monospace" font-size="8" letter-spacing="1.5">
    <text x="660" y="55">CAL. 8200 // 28,800 VPH</text>
    <text x="940" y="370">42MM TITANIUM</text>
    <text x="660" y="710">LAT 47.13° N / LON 6.82° E</text>
    <text x="325" y="370">REF. 001-CH</text>
  </g>
</svg>`;

fs.writeFileSync('public/assets/hero-bg-pattern.svg', heroBgPattern);
console.log('✓ Created hero-bg-pattern.svg');

// 3. GENERATE 6 COLLECTION WATCHES
const generateWatch = (options) => {
  const {
    caseGradStart = "#FFFFFF",
    caseGradMid = "#C5CAD2",
    caseGradEnd = "#686E7B",
    dialColor = "#0D0E11",
    strapColor = "#9CA3AF",
    strapType = "steel", // steel, leather, rubber
    accentColor = "#E4E4E7",
    handsColor = "#FFFFFF",
    bezelStyle = "ceramic",
    name = "LUMI",
    family = "CHRONOS"
  } = options;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <linearGradient id="caseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${caseGradStart}"/>
      <stop offset="50%" stop-color="${caseGradMid}"/>
      <stop offset="100%" stop-color="${caseGradEnd}"/>
    </linearGradient>

    <radialGradient id="dialGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${dialColor}"/>
      <stop offset="85%" stop-color="#050506"/>
    </radialGradient>

    <filter id="shadowDepth" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#000000" flood-opacity="0.22"/>
    </filter>
  </defs>

  <g filter="url(#shadowDepth)">
    <!-- Strap / Bracelet -->
    ${strapType === 'steel' ? `
      <!-- Multi-link Steel Bracelet -->
      <path d="M 230 40 L 370 40 L 360 180 L 240 180 Z" fill="${strapColor}"/>
      <path d="M 240 420 L 360 420 L 370 560 L 230 560 Z" fill="${strapColor}"/>
      <!-- Links Lines -->
      <line x1="280" y1="40" x2="275" y2="180" stroke="#4B5563" stroke-width="2"/>
      <line x1="320" y1="40" x2="325" y2="180" stroke="#4B5563" stroke-width="2"/>
      <line x1="275" y1="420" x2="280" y2="560" stroke="#4B5563" stroke-width="2"/>
      <line x1="325" y1="420" x2="320" y2="560" stroke="#4B5563" stroke-width="2"/>
    ` : strapType === 'leather' ? `
      <!-- Stitched Leather Strap -->
      <path d="M 235 40 L 365 40 L 358 185 L 242 185 Z" fill="${strapColor}" rx="4"/>
      <path d="M 242 415 L 358 415 L 365 560 L 235 560 Z" fill="${strapColor}" rx="4"/>
      <!-- Contrast Stitching -->
      <line x1="248" y1="50" x2="252" y2="175" stroke="#FDE68A" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.8"/>
      <line x1="352" y1="50" x2="348" y2="175" stroke="#FDE68A" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.8"/>
      <line x1="252" y1="425" x2="248" y2="550" stroke="#FDE68A" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.8"/>
      <line x1="348" y1="425" x2="352" y2="550" stroke="#FDE68A" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.8"/>
    ` : `
      <!-- Textured Rubber Sports Strap -->
      <path d="M 235 40 L 365 40 L 355 185 L 245 185 Z" fill="${strapColor}"/>
      <path d="M 245 415 L 355 415 L 365 560 L 235 560 Z" fill="${strapColor}"/>
      <!-- Horizontal Grooves -->
      ${Array.from({ length: 5 }).map((_, i) => `
        <line x1="250" y1="${70 + i * 22}" x2="350" y2="${70 + i * 22}" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
        <line x1="250" y1="${440 + i * 22}" x2="350" y2="${440 + i * 22}" stroke="#18181B" stroke-width="3" stroke-linecap="round"/>
      `).join('')}
    `}

    <!-- Lugs -->
    <path d="M 220 160 L 245 140 L 265 190 L 220 230 Z" fill="url(#caseGrad)"/>
    <path d="M 380 160 L 355 140 L 335 190 L 380 230 Z" fill="url(#caseGrad)"/>
    <path d="M 220 440 L 245 460 L 265 410 L 220 370 Z" fill="url(#caseGrad)"/>
    <path d="M 380 440 L 355 460 L 335 410 L 380 370 Z" fill="url(#caseGrad)"/>

    <!-- Crown -->
    <rect x="468" y="285" width="20" height="30" rx="3" fill="url(#caseGrad)"/>
    <line x1="474" y1="287" x2="474" y2="313" stroke="#27272A" stroke-width="1.5"/>
    <line x1="480" y1="287" x2="480" y2="313" stroke="#27272A" stroke-width="1.5"/>

    <!-- Case Body -->
    <circle cx="300" cy="300" r="172" fill="url(#caseGrad)"/>
    
    <!-- Bezel -->
    <circle cx="300" cy="300" r="158" fill="${bezelStyle === 'ceramic' ? '#181A1E' : '#D1D5DB'}" stroke="#374151" stroke-width="1.5"/>
    <circle cx="300" cy="300" r="145" fill="#090A0C"/>

    <!-- Dial Face -->
    <circle cx="300" cy="300" r="140" fill="url(#dialGrad)"/>

    <!-- Markers -->
    ${Array.from({ length: 12 }).map((_, i) => {
      const angle = i * 30;
      const rad = (angle * Math.PI) / 180;
      const x = 300 + 120 * Math.sin(rad);
      const y = 300 - 120 * Math.cos(rad);
      const isQuarter = i % 3 === 0;
      return `<rect x="${(x - (isQuarter ? 3 : 2)).toFixed(1)}" y="${(y - 8).toFixed(1)}" width="${isQuarter ? 6 : 4}" height="16" rx="1.5" transform="rotate(${angle}, ${x.toFixed(1)}, ${y.toFixed(1)})" fill="${accentColor}"/>`;
    }).join('\n    ')}

    <!-- Branding -->
    <text x="300" y="245" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">${name}</text>
    <text x="300" y="258" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="600" fill="#9CA3AF" text-anchor="middle" letter-spacing="2">${family}</text>

    <!-- Hands -->
    <!-- Hour Hand -->
    <g transform="translate(300, 300) rotate(-60)">
      <path d="M -3 0 L -2 -65 L 0 -80 L 2 -65 L 3 0 Z" fill="${handsColor}"/>
      <rect x="-1" y="-60" width="2" height="45" fill="#18181B"/>
    </g>
    <!-- Minute Hand -->
    <g transform="translate(300, 300) rotate(50)">
      <path d="M -2.5 0 L -1.5 -95 L 0 -115 L 1.5 -95 L 2.5 0 Z" fill="${handsColor}"/>
      <rect x="-1" y="-90" width="2" height="70" fill="#18181B"/>
    </g>
    <!-- Center Cap -->
    <circle cx="300" cy="300" r="6" fill="${handsColor}"/>
    <circle cx="300" cy="300" r="2.5" fill="#18181B"/>
    <!-- Seconds Hand -->
    <line x1="300" y1="330" x2="300" y2="180" stroke="#EF4444" stroke-width="1.2"/>
    <circle cx="300" cy="300" r="2" fill="#EF4444"/>
  </g>
</svg>`;
};

// 1. Chronos Steel
fs.writeFileSync('public/assets/watches/chronos-steel.svg', generateWatch({
  caseGradStart: '#FFFFFF', caseGradMid: '#D1D5DB', caseGradEnd: '#6B7280',
  dialColor: '#111317', strapColor: '#9CA3AF', strapType: 'steel',
  accentColor: '#FFFFFF', handsColor: '#FFFFFF', bezelStyle: 'ceramic',
  name: 'LUMI', family: 'CHRONOS'
}));

// 2. Chronos Noir
fs.writeFileSync('public/assets/watches/chronos-noir.svg', generateWatch({
  caseGradStart: '#374151', caseGradMid: '#1F2937', caseGradEnd: '#111827',
  dialColor: '#09090B', strapColor: '#18181B', strapType: 'rubber',
  accentColor: '#71717A', handsColor: '#E4E4E7', bezelStyle: 'ceramic',
  name: 'LUMI', family: 'CHRONOS'
}));

// 3. Atelier Silver
fs.writeFileSync('public/assets/watches/atelier-silver.svg', generateWatch({
  caseGradStart: '#FFFFFF', caseGradMid: '#E5E7EB', caseGradEnd: '#9CA3AF',
  dialColor: '#FAFAF9', strapColor: '#1C1917', strapType: 'leather',
  accentColor: '#44403C', handsColor: '#1C1917', bezelStyle: 'steel',
  name: 'LUMI', family: 'ATELIER'
}));

// 4. Atelier Classic
fs.writeFileSync('public/assets/watches/atelier-classic.svg', generateWatch({
  caseGradStart: '#FFFFFF', caseGradMid: '#D6D3D1', caseGradEnd: '#78716C',
  dialColor: '#1C1917', strapColor: '#78350F', strapType: 'leather',
  accentColor: '#D97706', handsColor: '#F59E0B', bezelStyle: 'steel',
  name: 'LUMI', family: 'ATELIER'
}));

// 5. Apex Titanium
fs.writeFileSync('public/assets/watches/apex-titanium.svg', generateWatch({
  caseGradStart: '#E2E8F0', caseGradMid: '#94A3B8', caseGradEnd: '#475569',
  dialColor: '#0F172A', strapColor: '#64748B', strapType: 'rubber',
  accentColor: '#38BDF8', handsColor: '#F8FAFC', bezelStyle: 'steel',
  name: 'LUMI', family: 'APEX'
}));

// 6. Apex Carbon
fs.writeFileSync('public/assets/watches/apex-carbon.svg', generateWatch({
  caseGradStart: '#27272A', caseGradMid: '#18181B', caseGradEnd: '#09090B',
  dialColor: '#09090B', strapColor: '#18181B', strapType: 'rubber',
  accentColor: '#A1A1AA', handsColor: '#FAFAFA', bezelStyle: 'ceramic',
  name: 'LUMI', family: 'APEX'
}));

console.log('✓ Created 6 collection watch SVGs');

// 4. COMPANION PHONE MOCKUPS (2 Overlapping luxury smartphone UI mockups)
// Phone Rear: Collection catalog and engineering telemetry
const phoneRearSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 760" width="100%" height="100%">
  <defs>
    <filter id="phoneDepth" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="28" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <g filter="url(#phoneDepth)">
    <!-- Smartphone Chassis -->
    <rect x="10" y="10" width="360" height="740" rx="48" fill="#1C1E22" stroke="#3A3F47" stroke-width="4"/>
    
    <!-- Screen Glass -->
    <rect x="18" y="18" width="344" height="724" rx="42" fill="#0B0C0E"/>

    <!-- Dynamic Island / Speaker Notch -->
    <rect x="135" y="28" width="110" height="28" rx="14" fill="#000000"/>
    <circle cx="225" cy="42" r="5" fill="#1E293B"/>

    <!-- Status Bar Icons -->
    <text x="45" y="46" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#FFFFFF">9:41</text>
    <g transform="translate(305, 36)" fill="#FFFFFF">
      <rect x="0" y="2" width="18" height="10" rx="2" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
      <rect x="2" y="4" width="12" height="6" rx="1" fill="#FFFFFF"/>
      <rect x="19" y="5" width="2" height="4" rx="0.5" fill="#FFFFFF"/>
    </g>

    <!-- App Header -->
    <g transform="translate(35, 90)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#71717A" letter-spacing="2">LUMI ARCHIVE</text>
      <text x="0" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="700" fill="#FFFFFF">Collection Hub</text>
    </g>

    <!-- Watch Visual Card in App -->
    <rect x="35" y="140" width="310" height="340" rx="24" fill="#16181C" stroke="#262930" stroke-width="1"/>
    
    <!-- Mini Watch Graphic inside Screen -->
    <circle cx="190" cy="270" r="85" fill="#1F2329" stroke="#374151" stroke-width="2"/>
    <circle cx="190" cy="270" r="75" fill="#0E1013"/>
    <line x1="190" y1="270" x2="160" y2="230" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="190" y1="270" x2="225" y2="245" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
    <circle cx="190" cy="270" r="4" fill="#EF4444"/>

    <text x="55" y="420" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">Chronos Steel</text>
    <text x="55" y="440" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="500" fill="#9CA3AF">Calibre 8200 // Automatic</text>

    <!-- Telemetry Cards -->
    <rect x="35" y="500" width="145" height="100" rx="18" fill="#16181C"/>
    <text x="50" y="530" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="#71717A">ACCURACY</text>
    <text x="50" y="555" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">+0.8 s/d</text>
    <text x="50" y="575" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" fill="#10B981">Within Master Spec</text>

    <rect x="200" y="500" width="145" height="100" rx="18" fill="#16181C"/>
    <text x="215" y="530" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="#71717A">POWER RESERVE</text>
    <text x="215" y="555" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">72 Hours</text>
    <text x="215" y="575" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" fill="#3B82F6">Dual-barrel system</text>

    <!-- Bottom Home Bar -->
    <rect x="125" y="725" width="130" height="4" rx="2" fill="#52525B"/>
  </g>
</svg>`;

// Phone Front: Dial detail & precision interface
const phoneFrontSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 760" width="100%" height="100%">
  <defs>
    <filter id="phoneDepthFront" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="30" stdDeviation="34" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
  </defs>

  <g filter="url(#phoneDepthFront)">
    <!-- Smartphone Chassis -->
    <rect x="10" y="10" width="360" height="740" rx="48" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="4"/>
    
    <!-- Screen Glass -->
    <rect x="18" y="18" width="344" height="724" rx="42" fill="#FFFFFF"/>

    <!-- Dynamic Island / Speaker Notch -->
    <rect x="135" y="28" width="110" height="28" rx="14" fill="#000000"/>
    <circle cx="225" cy="42" r="5" fill="#1E293B"/>

    <!-- Status Bar Icons -->
    <text x="45" y="46" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#000000">9:41</text>
    <g transform="translate(305, 36)" fill="#000000">
      <rect x="0" y="2" width="18" height="10" rx="2" fill="none" stroke="#000000" stroke-width="1.5"/>
      <rect x="2" y="4" width="12" height="6" rx="1" fill="#000000"/>
      <rect x="19" y="5" width="2" height="4" rx="0.5" fill="#000000"/>
    </g>

    <!-- App Top Bar -->
    <g transform="translate(35, 95)">
      <circle cx="15" cy="15" r="15" fill="#F4F5F7"/>
      <path d="M 12 10 L 7 15 L 12 20" stroke="#000000" stroke-width="2" fill="none"/>
      <text x="145" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="#000000" text-anchor="middle">ATELIER STUDIO</text>
    </g>

    <!-- Large Interactive Watch Dial View -->
    <g transform="translate(190, 290)">
      <circle cx="0" cy="0" r="115" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
      <circle cx="0" cy="0" r="105" fill="#FFFFFF" stroke="#000000" stroke-width="1.5"/>
      <!-- Hour Indices -->
      ${Array.from({ length: 12 }).map((_, i) => {
        const angle = i * 30;
        const rad = (angle * Math.PI) / 180;
        const x = 90 * Math.sin(rad);
        const y = -90 * Math.cos(rad);
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.5" fill="#000000"/>`;
      }).join('\n      ')}
      <!-- Hands -->
      <line x1="0" y1="0" x2="-45" y2="-45" stroke="#000000" stroke-width="3" stroke-linecap="round"/>
      <line x1="0" y1="0" x2="60" y2="-30" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
      <circle cx="0" cy="0" r="5" fill="#000000"/>
      <text x="0" y="-35" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#000000" text-anchor="middle" letter-spacing="2">LUMI</text>
    </g>

    <!-- Spec Selector Tabs -->
    <g transform="translate(35, 450)">
      <rect x="0" y="0" width="310" height="48" rx="24" fill="#F4F5F7"/>
      <rect x="4" y="4" width="98" height="40" rx="20" fill="#000000"/>
      <text x="53" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">Steel 316L</text>
      <text x="155" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#71717A" text-anchor="middle">Titanium</text>
      <text x="257" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#71717A" text-anchor="middle">Rose Gold</text>
    </g>

    <!-- Interactive Button -->
    <g transform="translate(35, 520)">
      <rect x="0" y="0" width="310" height="52" rx="26" fill="#000000"/>
      <text x="155" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">Explore Details</text>
    </g>

    <!-- Bottom Indicator Text -->
    <text x="190" y="610" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#9CA3AF" text-anchor="middle">Interactive Digital Interface</text>

    <!-- Bottom Home Bar -->
    <rect x="125" y="725" width="130" height="4" rx="2" fill="#000000"/>
  </g>
</svg>`;

fs.writeFileSync('public/assets/mockups/phone-rear.svg', phoneRearSvg);
fs.writeFileSync('public/assets/mockups/phone-front.svg', phoneFrontSvg);
console.log('✓ Created 2 smartphone mockup SVGs');

// 5. LUMI LOGO SVG
const lumiLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 44" width="100%" height="100%">
  <g fill="#000000">
    <!-- Stylized Geometric Mark: Circular Complication Aperture -->
    <g transform="translate(4, 8)">
      <circle cx="14" cy="14" r="13" fill="none" stroke="#000000" stroke-width="2.5"/>
      <circle cx="14" cy="14" r="6" fill="#000000"/>
      <line x1="14" y1="1" x2="14" y2="7" stroke="#000000" stroke-width="2"/>
      <line x1="27" y1="14" x2="21" y2="14" stroke="#000000" stroke-width="2"/>
    </g>
    <!-- Brand Wordmark -->
    <text x="44" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" letter-spacing="4">LUMI</text>
  </g>
</svg>`;

fs.writeFileSync('public/assets/lumi-logo.svg', lumiLogoSvg);
console.log('✓ Created lumi-logo.svg');

console.log('All local SVG assets generated successfully!');
