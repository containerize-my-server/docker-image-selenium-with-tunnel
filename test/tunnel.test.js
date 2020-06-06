const reverseTunnel = require('./lib/reverse-tunnel')
const webdriver = require('selenium-webdriver')
const fs = require("fs-extra")

describe("the tunnel", () => {

  let tunnel

  beforeAll(async () => {
    tunnel = await reverseTunnel.createTunnel();
  },100000)

  afterAll(async () => {
    await reverseTunnel.closeTunnel(tunnel);
  })

  it("should work", async () => {
    let driver = new webdriver.Builder()
        .forBrowser('firefox')
        .usingServer('http://localhost:4444/wd/hub')
        .build();
    try {
      await driver.get('http://localhost:8000')
      const screenshot = await driver.takeScreenshot();
      await fs.writeFile('out.png', screenshot, 'base64')
    } finally {
      await driver.quit();
    }
  })
})


async function writeBase64File() {
  require("fs-extra").writeFile("out.png", screenshot, 'base64', function (err) {
    console.log(err);
  });

}
