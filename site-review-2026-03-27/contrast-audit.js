const { chromium } = require('playwright');

// Calculate relative luminance
function luminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hex1, hex2) {
  const parse = hex => {
    const h = hex.replace('#', '');
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    return { r, g, b };
  };
  const c1 = parse(hex1), c2 = parse(hex2);
  const l1 = luminance(c1.r, c1.g, c1.b);
  const l2 = luminance(c2.r, c2.g, c2.b);
  const lighter = Math.max(l1, l2), darker = Math.min(l1, l2);
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
}

// Key colour pairs to audit
const pairs = [
  // Light mode
  { label: 'Light: Hero title (white on teal)', text: '#ffffff', bg: '#0F7E80' },
  { label: 'Light: Body text on white', text: '#1e293b', bg: '#ffffff' },
  { label: 'Light: Body text on cream/light-teal', text: '#1e293b', bg: '#f0fafa' },
  { label: 'Light: Orange CTA text (white on orange)', text: '#ffffff', bg: '#F87A1F' },
  { label: 'Light: Orange CTA text (dark on orange)', text: '#1e293b', bg: '#F87A1F' },
  { label: 'Light: Teal link on white', text: '#0F7E80', bg: '#ffffff' },
  { label: 'Light: Section heading on white', text: '#0f172a', bg: '#ffffff' },
  { label: 'Light: Muted text on white', text: '#64748b', bg: '#ffffff' },
  { label: 'Light: Muted text on cream', text: '#64748b', bg: '#f8fafc' },
  // Dark mode
  { label: 'Dark: Body text on dark bg', text: '#e2e8f0', bg: '#0f172a' },
  { label: 'Dark: Hero title on dark teal', text: '#ffffff', bg: '#0d2d2d' },
  { label: 'Dark: Card bg vs page bg', text: '#94a3b8', bg: '#1e293b' }, // slate-800 vs slate-900
  { label: 'Dark: Card text on card bg', text: '#e2e8f0', bg: '#1e293b' },
  { label: 'Dark: Orange CTA on dark', text: '#ffffff', bg: '#F87A1F' },
  { label: 'Dark: Teal link on dark bg', text: '#0F7E80', bg: '#0f172a' },
  { label: 'Dark: Muted text on dark bg', text: '#94a3b8', bg: '#0f172a' },
  { label: 'Dark: Muted text on card', text: '#94a3b8', bg: '#1e293b' },
];

console.log('\n=== CONTRAST RATIO AUDIT ===\n');
pairs.forEach(pair => {
  const ratio = contrastRatio(pair.text, pair.bg);
  const normalPass = ratio >= 4.5;
  const largePass = ratio >= 3.0;
  const status = normalPass ? 'PASS' : largePass ? 'LARGE-ONLY' : 'FAIL';
  console.log(`${status} ${ratio}:1  ${pair.label}`);
});

// Also run axe-core on the live site
(async () => {
  console.log('\n=== AXE-CORE ACCESSIBILITY AUDIT (Homepage, light) ===\n');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto('https://smallgiantsstudio.co.uk/', { waitUntil: 'networkidle', timeout: 30000 });

  // Wait for animations
  await page.waitForTimeout(2000);

  const axeResults = await page.evaluate(async () => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.9.1/axe.min.js';
    document.head.appendChild(script);
    await new Promise(r => script.onload = r);
    const results = await window.axe.run();
    return {
      violations: results.violations.map(v => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        nodes: v.nodes.length,
        help: v.help,
      })),
      passes: results.passes.length,
    };
  });

  console.log(`Passes: ${axeResults.passes}`);
  console.log(`Violations: ${axeResults.violations.length}`);
  axeResults.violations.forEach(v => {
    console.log(`  [${v.impact.toUpperCase()}] ${v.id}: ${v.help} (${v.nodes} nodes)`);
  });

  // Also check the privacy URL
  console.log('\n=== URL CHECK ===');
  const urlsToCheck = [
    'https://smallgiantsstudio.co.uk/privacy',
    'https://smallgiantsstudio.co.uk/privacy-policy',
    'https://smallgiantsstudio.co.uk/terms',
    'https://smallgiantsstudio.co.uk/terms-of-service',
  ];
  for (const url of urlsToCheck) {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });
    const status = response ? response.status() : 'ERROR';
    const title = await page.title();
    console.log(`  ${status} — ${url} — "${title}"`);
  }

  await browser.close();
})();
