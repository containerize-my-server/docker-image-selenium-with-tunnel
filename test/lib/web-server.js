const express = require('express')
const debug = require('debug')('tunnel-test:server')
const http = require('http')

const app = express();
app.use(express.static('test/public'));

module.exports = {
  async start() {
    debug("Starting server")
    this.server = http.createServer(app).listen(8000)
    await new Promise(((resolve, reject) => {
      this.server.on('listening', () => resolve())
      this.server.on('error', err => reject(err))
    }))
    debug("Server started")
  },
  async stop() {
    debug("Stopping server")
    if (this.server == null) {
      return
    }
    await new Promise((resolve, reject) => {
      this.server.close(err => {
        if (err != null) {
          return reject(err)
        }
        return resolve()
      })
    })
    debug("Server stopped")
  }
}
