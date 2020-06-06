const webdriver = require('selenium-webdriver')
const fs = require("fs-extra")
const express = require('express')
const http = require('http')

const app = express();
app.use(express.static('test/public'));

describe("the tunnel", () => {
  let server;
  beforeAll(async() => {
    server = http.createServer(app).listen(8000)
    return new Promise(((resolve, reject) => {
      server.on('listening', () => resolve())
      server.on('error', err => reject(err))
    }))
  })

  afterAll(async () => {
    return new Promise((resolve, reject) => {
      server.close(err => {
        if (err != null) {
          return reject(err)
        }
        return resolve()
      })
    })
  })

  it("should work", async () => {
    let driver = new webdriver.Builder()
        .forBrowser('firefox')
        .usingServer('http://localhost:4444/wd/hub')
        .build();
    try {
      await driver.get('http://localhost:8000/test.html')
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
