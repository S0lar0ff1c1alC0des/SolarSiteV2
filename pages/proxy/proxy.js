const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://kittycatclub.cloud/learning');
  
  await browser.close();
})();
