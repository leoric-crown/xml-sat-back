const config = require('../../config/main')
const endpoint = `${config.host}/encounters/`

const unzipFile = async (req, res) => {
    console.log('REACHED UNZIP ENDPOINT')
    console.log(req.files)
    try {
        res.status(200).json({
            message: 'Welcome to unzip endpoint',
            time: Date.now()
        })
    }
    catch (err) {

    }
}

module.exports = {
    unzipFile
}