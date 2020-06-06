var tunnel = require('reverse-tunnel-ssh');

module.exports = {
  async createTunnel() {
    return new Promise((resolve,reject) => {
      const connection = tunnel({
        host: 'localhost',
        username: 'seluser',
        port: 2222,
        privateKey: require('fs').readFileSync(require.resolve('../ssh/id_rsa')),
        dstHost: '0.0.0.0',
        dstPort: 8000,
        // srcHost: '127.0.0.1',
        // srcPort: 8000,
        debug: msg => {
          console.log(msg)
        }
      }, function(error, clientConnection) {
        if (error != null) {
          return reject(error)
        }
      })
      connection.on('forward-in', function (port) {
        return resolve(connection)
      });
    })
  },
  async closeTunnel(connection) {
    console.log(connection)
    await connection.end()
  }
}

;
