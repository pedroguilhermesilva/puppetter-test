// var nodemailer = require("nodemailer");
var puppeteer = require("puppeteer");

// abrir página do instagram
async function bot() {
  const browser = await puppeteer.launch(/* { headless: false } */);
  const page = await browser.newPage();
  await page.goto("https://instagram.com");
  await page.waitForSelector("._2hvTZ.pexuQ.zyHYP");
  await page.focus("._2hvTZ.pexuQ.zyHYP");
  // e-mail to login on instagram
  await page.keyboard.type("");
  await page.focus('input[aria-label="Senha"');
  // password to login on instagram
  await page.keyboard.type("");
  // const values = await page.evaluate(() => {
  //   return {
  //     email: document.querySelector("._2hvTZ.pexuQ.zyHYP").value,
  //     password: document.querySelector('input[aria-label="Senha"').value,
  //   };
  // });
  await page.click(".sqdOP.L3NKy.y3zKF");
  await page.waitForSelector(".s4Iyt");
  await page.click(".s4Iyt");
  // await page.waitForSelector(".piCib");
  await page.click(".aOOlW.HoLwm");
  await page.goto("https://instagram.com/p/B6dRaLonZgh/");
  await page.waitForSelector(".sH9wk._JgwE");
  await page.focus('textarea[aria-label="Adicione um comentário..."');
  await page.keyboard.type("Lindoooooooos");
  await page.click(".sqdOP.yWX7d.y3zKF");

  // await browser.close();
}

bot();
