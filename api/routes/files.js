const express = require('express')
const router = express.Router()
const FilesController = require('../controllers/files.controller')

router.post('/unzip', FilesController.unzipFile)

module.exports = router