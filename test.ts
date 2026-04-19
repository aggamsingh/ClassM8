import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
  
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(1000);
  
  // Click the first suggestion
  await page.click('button:has-text("What is a redox reaction?")');
  await page.waitForTimeout(2000);
  
  const html = await page.content();
  // check if fallback text is there
  console.log("Has fallback?", html.includes("I couldn't find information"));
  
  await browser.close();
})();
