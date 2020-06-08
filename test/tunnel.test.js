const webdriver = require('selenium-webdriver')
const fs = require("fs-extra")


const reverseTunnel = require('./lib/reverse-tunnel')
const server = require('./lib/web-server')
const debug = require('debug')('tunnel-test:test')


describe("the tunnel", () => {
  let driver;

  beforeAll(async () => {
    await server.start()
    await reverseTunnel.createTunnel();

    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    debug("starting warmup")
    await driver.get('http://localhost:8000/test.html')
    debug("warmup done")
  }, 10000)

  afterAll(async () => {
    await Promise.all([
      driver.quit(),
      reverseTunnel.closeTunnel(),
      server.stop()
    ])
  })

  for (let i = 0; i < 10; i++) {
    it("should work fast" + i, async () => {
      debug("running test")
      try {
        await driver.get('http://localhost:8000/test.html')
        debug("page loaded")
        const screenshot = await driver.takeScreenshot();
        debug("screenshot taken")
        await fs.writeFile('out.png', screenshot, 'base64')
        debug("screenshot written")
      } finally {

      }
    })

  }
})
