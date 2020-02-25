require('dotenv').config()
const config = require('./config/main')
const Server = require('./api/server')

new Server(config).start()