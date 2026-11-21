// Exporta cada post a PNG 1080×1080.
// Uso: python3 -m http.server 8765 (en la raíz) y luego: node posts/render.js
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });
  const p = await b.newPage({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 2 });
  await p.goto((process.env.BASE || 'http://localhost:8765') + '/posts/');
  await p.waitForSelector('body[data-ready="1"]');
  await p.waitForTimeout(500);
  const out = path.join(__dirname, 'png');
  require('fs').mkdirSync(out, { recursive: true });
  for (const el of await p.$$('.post')) {
    const f = await el.getAttribute('data-file');
    await el.screenshot({ path: path.join(out, f + '.png') });
    console.log('ok', f);
  }
  await b.close();
})();
