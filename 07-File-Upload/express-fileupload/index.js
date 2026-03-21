const express = require('express')
const { NotFoundError, ErrorHandler } = require('./util/errorHandler')
const fileUpload = require('express-fileupload')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))
app.use(fileUpload({ abortOnLimit: true, limit: { fileSize: 150000 } }))

app.post('/upload-buffer', (req, res) => {
    if (!req.files || Object.keys(req.files).length == 0) {
        throw { status: 400, message: 'no file were uploaded' }
    }
    const image = req.files.image
    const ext = path.extname(image.name)
    const destPath = path.join(__dirname, 'public', 'upload', Date.now() + ext)
    const buffer = Buffer.from(image.data)
    fs.writeFileSync(destPath, buffer)
    res.send(req.files)
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, console.log('server run on port 3000'))