require('dotenv').config()
const config = require('./config/main')
console.log(config)
const Server = require('./api/server')

new Server(config).start()