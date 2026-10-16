export const WATCH_FAMILIES = [
  {
    id: 'CHRONOS',
    name: 'CHRONOS',
    tagline: 'Architectural Presence & High-Precision Chronographs',
    description: 'Sculpted in high-grade stainless steel and matte finishes with multi-scale dials.'
  },
  {
    id: 'ATELIER',
    name: 'ATELIER',
    tagline: 'Minimalist Restraint & Modern Dress Silhouette',
    description: 'Slender proportions, ivory and dark galvanic dials, and tailored leather straps.'
  },
  {
    id: 'APEX',
    name: 'APEX',
    tagline: 'Technical Ergonomics & High-Performance Materials',
    description: 'Constructed from lightweight titanium and forged composite for daily resilience.'
  }
];

export const WATCH_PRODUCTS = [
  {
    id: 'chronos-steel',
    name: 'Chronos Steel',
    family: 'CHRONOS',
    subtitle: 'Silver Case / Black Dial / Steel Bracelet',
    description: 'Engineered with a high-polish 316L stainless steel case, deep sunburst black dial, and integrated sculpted steel bracelet.',
    image: '/assets/watches/chronos-steel.png',
    highlight: 'Signature Chronograph',
    specs: {
      case: '42mm Stainless Steel 316L',
      dial: 'Deep Sunburst Black with Rhodium Indices',
      movement: 'Calibre 8200 Automatic Mechanical',
      strap: 'Integrated Multi-Link Steel Bracelet',
      glass: 'Anti-Reflective Domed Sapphire',
      waterResistance: '100 Meters / 10 ATM'
    }
  },
  {
    id: 'chronos-noir',
    name: 'Chronos Noir',
    family: 'CHRONOS',
    subtitle: 'Dark Case / Black Dial / Performance Strap',
    description: 'A monochrome study in matte DLC dark coating, matching charcoal sub-dials, and a grooved high-durability performance strap.',
    image: '/assets/watches/chronos-noir.png',
    highlight: 'Matte Stealth Finish',
    specs: {
      case: '42mm Matte Diamond-Like Carbon (DLC)',
      dial: 'Monochrome Pitch Black with Luminous Pointers',
      movement: 'Calibre 8200 Automatic Chronometer',
      strap: 'Textured Fluoroelastomer Tactical Strap',
      glass: 'Double-Coated Sapphire Crystal',
      waterResistance: '100 Meters / 10 ATM'
    }
  },
  {
    id: 'atelier-silver',
    name: 'Atelier Silver',
    family: 'ATELIER',
    subtitle: 'Minimalist Silver Case / Ivory Dial',
    description: 'Pure aesthetic balance featuring an ultra-slender polished silver case, warm ivory galvanic dial, and clean stick indices.',
    image: '/assets/watches/atelier-silver.png',
    highlight: 'Contemporary Dress Classic',
    specs: {
      case: '39mm Mirror-Polished Steel',
      dial: 'Warm Ivory Champagne with Polished Baton Markers',
      movement: 'Calibre 4100 Ultra-Slim Manual Winding',
      strap: 'Hand-Tailored Black Leather Strap',
      glass: 'Box-Domed Sapphire Crystal',
      waterResistance: '50 Meters / 5 ATM'
    }
  },
  {
    id: 'atelier-classic',
    name: 'Atelier Classic',
    family: 'ATELIER',
    subtitle: 'Silver Case / Dark Dial / Brown Leather',
    description: 'A warm, understated palette combining a refined silver case with an anthracite dial and hand-stitched rich brown leather.',
    image: '/assets/watches/atelier-classic.png',
    highlight: 'Timeless Warmth',
    specs: {
      case: '40mm Brushed & Polished Steel',
      dial: 'Anthracite Sunray with Amber Accents',
      movement: 'Calibre 4100 Automatic Mechanical',
      strap: 'Hand-Stitched Saddle Brown Calfskin',
      glass: 'Scratch-Proof Sapphire with AR Coating',
      waterResistance: '50 Meters / 5 ATM'
    }
  },
  {
    id: 'apex-titanium',
    name: 'Apex Titanium',
    family: 'APEX',
    subtitle: 'Brushed Gray Sports-Watch Styling',
    description: 'Formed from aerospace Grade 5 titanium, featuring lightweight structural geometry, contrasting indicators, and high shock resistance.',
    image: '/assets/watches/apex-titanium.png',
    highlight: 'Grade 5 Titanium',
    specs: {
      case: '43mm Satin Brushed Grade 5 Titanium',
      dial: 'Deep Blue-Slate with High-Contrast Hands',
      movement: 'Calibre 9000 Robust Shock-Resistant Calibre',
      strap: 'Integrated Slate Performance Polymer',
      glass: 'Flat Chamfered Sapphire Crystal',
      waterResistance: '150 Meters / 15 ATM'
    }
  },
  {
    id: 'apex-carbon',
    name: 'Apex Carbon',
    family: 'APEX',
    subtitle: 'Matte-Black Technical Watch Styling',
    description: 'High-tech forged composite casing with stealth monochrome accents, designed for unyielding performance and contemporary character.',
    image: '/assets/watches/apex-carbon.png',
    highlight: 'Forged Composite',
    specs: {
      case: '43mm Forged Carbon & Ceramic Composite',
      dial: 'Textured Technical Carbon Pattern',
      movement: 'Calibre 9000 High-Beat Architecture',
      strap: 'Matte Black High-Density Rubber',
      glass: 'Military-Grade Anti-Reflective Sapphire',
      waterResistance: '150 Meters / 15 ATM'
    }
  }
];
