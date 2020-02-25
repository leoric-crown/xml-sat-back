const config = require('../../config/main')
const endpoint = `${config.host}/encounters/`
const { IncomingForm } = require('formidable')

const unzipFile = async (req, res) => {
    const form = new IncomingForm()
    form.maxFileSize = 10 * 1024 * 1024 * 1024
    
    form.on('fileBegin', (field, file) => res.status(200).json({
        message: 'File received',
        fileName: file.name,
        time: Date.now()
    }))

    form.on('file', (field, file) => {
    })

    form.parse(req)
}

module.exports = {
    unzipFile
}