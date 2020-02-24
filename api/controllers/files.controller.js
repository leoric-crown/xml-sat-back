const config = require('../../config/main')
const endpoint = `${config.host}/encounters/`
const { IncomingForm } = require('formidable')

const unzipFile = async (req, res) => {
    console.log('REACHED UNZIP ENDPOINT')
    console.log(req)

    const form = new IncomingForm()
    
    form.on('fileBegin', (field, file) => res.status(200).json({
        message: 'File received',
        fileName: file.name,
        time: Date.now()
    }))

    form.on('file', (field, file) => {
        // console.log({ field, file })
    })


    // form.on('end', () => res.status(200).json({
    //     message: 'Form received',
    //     fileName: receivedFile.name,
    //     time: Date.now()
    // }))

    form.parse(req)
}

module.exports = {
    unzipFile
}