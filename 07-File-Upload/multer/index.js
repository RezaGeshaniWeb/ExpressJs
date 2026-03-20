const express = require('express')
const { uploadFile } = require('./middleware/multer')
const { NotFoundError, ErrorHandler } = require('./util/errorHandler')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/upload', uploadFile.single('image'), (req, res) => {
    res.send(req.file)
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, console.log('server run on port 3000'))