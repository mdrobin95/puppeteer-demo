const puppeteer = require('puppeteer');

//it should display a form when clicking create button
(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  await page.goto('https://streaks.arnelle.me/');

  const createButton = await page.$('button.BaseButton_button_1yvW-');
  createButton.click();

  await page
    .waitForSelector('form')
    .then(() => page.screenshot({ path: 'assets/automationDemo.png' }));
  await context.close();
  await browser.close();
})();
