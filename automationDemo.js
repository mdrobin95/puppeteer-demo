const puppeteer = require('puppeteer');

//it should display a form when clicking create button
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://streaks.arnelle.me/');

  const createButton = await page.$('button.BaseButton_button_1yvW-');
  createButton.click();

  await page.waitForSelector('form').then(() =>
    page.screenshot({path: 'assets/automationDemo.png'})
  );
  await browser.close();
})();
