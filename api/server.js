const cors = require('cors')
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morganBody = require('morgan-body')
const chalk = require('chalk')
const fileRoutes = require('./routes/files')


module.exports = class ServerApp {
    constructor(config) {
        this.config = config
    }
    start() {
        this.app = express()
        const server = http.createServer(this.app)
        const corsOptions = {
            credentials: true,
            origin: (origin, callback) => callback(null, true)
        }
        this.app.use(cors(corsOptions))

        this.app.use(bodyParser.json())
        morganBody(this.app, { logResponseBody: true })

        this.app.use('/files', fileRoutes)

        this.app.use('/hello', (req, res) => {
            res.status(200).json({
                message: 'hello world',
                time: Date.now()
            })
        })

        this.app.use((req, res, next) => {
            const error = new Error('Resource not found')
            error.status = 404
            next(error)
        })

        this.app.use((error, req, res, next) => {
            res.status(error.status || 500)
            res.json({
                error: {
                    message: error.message
                }
            })
        })

        return server.listen(this.config.port, () => {
            console.log(chalk.bold.bgGreen(`Started Express Server listening on port ${this.config.port}`))
        })
    }
}