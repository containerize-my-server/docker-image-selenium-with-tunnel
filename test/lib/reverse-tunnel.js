const chisel = require.resolve('./chisel_1.5.2_linux_amd64')
const ChildService = require('child-service')
const debug = require('debug')('tunnel-test:tunnel')

const chiselService = new ChildService({
  command: chisel,
  args: ['client', 'localhost:2222', 'R:8000:localhost:8000'],
  readyRegex: / Connected /,
})

module.exports = {
  async createTunnel() {
    debug("Creating tunnel")
    await chiselService.start()
    debug("Tunnel created")
  },
  async closeTunnel() {
    debug("Closing tunnel")
    await chiselService.stop()
    debug("Tunnel closed")
  }
}
