const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = 'C:/Users/Bean/Projects/small-giants-studio/site-review-2026-03-27';

const pages = [
  { name: 'homepage', url: 'https://smallgiantsstudio.co.uk/' },
  { name: 'about', url: 'https://smallgiantsstudio.co.uk/about' },
  { name: 'services', url: 'https://smallgiantsstudio.co.uk/services' },
  { name: 'contact', url: 'https://smallgiantsstudio.co.uk/contact' },
  { name: 'insights', url: 'https://smallgiantsstudio.co.uk/insights' },
  { name: 'sustainability', url: 'https://smallgiantsstudio.co.uk/sustainability' },
  { name: 'privacy', url: 'https://smallgiantsstudio.co.uk/privacy' },
  { name: 'terms', url: 'https://smallgiantsstudio.co.uk/terms' },
];

const mobilePages = ['homepage', 'services', 'contact'];

async function enableDarkMode(page) {
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  });
  await page.waitForTimeout(500);
}

async function enableLightMode(page) {
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  });
  await page.waitForTimeout(500);
}

async function dismissCookieBanner(page) {
  try {
    const acceptBtn = page.locator('button:has-text("Accept"), button:has-text("OK"), button:has-text("Got it"), button:has-text("I understand")');
    if (await acceptBtn.first().isVisible({ timeout: 2000 })) {
      await acceptBtn.first().click();
      await page.waitForTimeout(300);
    }
  } catch (e) {
    // No banner
  }
}

async function waitForAnimations(page) {
  await page.waitForTimeout(1500);
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  // ─── DESKTOP LIGHT MODE ───────────────────────────────────────────
  console.log('=== DESKTOP LIGHT MODE (1440x900) ===');
  for (const pageInfo of pages) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const p = await context.newPage();
    await p.goto(pageInfo.url, { waitUntil: 'networkidle', timeout: 30000 });
    await dismissCookieBanner(p);
    await waitForAnimations(p);
    // Ensure light mode
    await enableLightMode(p);
    const file = path.join(OUTPUT_DIR, `${pageInfo.name}-desktop-light.png`);
    await p.screenshot({ path: file, fullPage: true });
    console.log(`  Saved: ${pageInfo.name}-desktop-light.png`);
    await context.close();
  }

  // ─── DESKTOP DARK MODE ────────────────────────────────────────────
  console.log('=== DESKTOP DARK MODE (1440x900) ===');
  for (const pageInfo of pages) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const p = await context.newPage();
    await p.goto(pageInfo.url, { waitUntil: 'networkidle', timeout: 30000 });
    await dismissCookieBanner(p);
    await waitForAnimations(p);
    await enableDarkMode(p);
    const file = path.join(OUTPUT_DIR, `${pageInfo.name}-desktop-dark.png`);
    await p.screenshot({ path: file, fullPage: true });
    console.log(`  Saved: ${pageInfo.name}-desktop-dark.png`);
    await context.close();
  }

  // ─── MOBILE (375px) LIGHT + DARK ─────────────────────────────────
  console.log('=== MOBILE (375x812) ===');
  for (const pageName of mobilePages) {
    const pageInfo = pages.find(p => p.name === pageName);

    // Light
    const ctxLight = await browser.newContext({ viewport: { width: 375, height: 812 }, isMobile: true });
    const pLight = await ctxLight.newPage();
    await pLight.goto(pageInfo.url, { waitUntil: 'networkidle', timeout: 30000 });
    await dismissCookieBanner(pLight);
    await waitForAnimations(pLight);
    await enableLightMode(pLight);
    const fileLight = path.join(OUTPUT_DIR, `${pageName}-mobile-light.png`);
    await pLight.screenshot({ path: fileLight, fullPage: true });
    console.log(`  Saved: ${pageName}-mobile-light.png`);
    await ctxLight.close();

    // Dark
    const ctxDark = await browser.newContext({ viewport: { width: 375, height: 812 }, isMobile: true });
    const pDark = await ctxDark.newPage();
    await pDark.goto(pageInfo.url, { waitUntil: 'networkidle', timeout: 30000 });
    await dismissCookieBanner(pDark);
    await waitForAnimations(pDark);
    await enableDarkMode(pDark);
    const fileDark = path.join(OUTPUT_DIR, `${pageName}-mobile-dark.png`);
    await pDark.screenshot({ path: fileDark, fullPage: true });
    console.log(`  Saved: ${pageName}-mobile-dark.png`);
    await ctxDark.close();
  }

  await browser.close();
  console.log('\nAll screenshots complete.');
})();
