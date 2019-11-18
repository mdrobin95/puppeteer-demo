const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.emulate(puppeteer.devices['iPhone 8']);
  await page.goto('https://getbootstrap.com/');

  await page.waitForFunction(
    'document.querySelector("body").innerText.includes("Bootstrap")'
  );
  await page.screenshot({
    path: 'assets/bootstrapMobile.png',
    fullPage: true
  });

  browser.close();
})();
