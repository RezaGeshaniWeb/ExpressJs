const express = require('express')
const { NotFoundError, ErrorHandler } = require('./util/errorHandler')
const path = require('path')

const app = express()

app.use("/static", express.static("public"))

app.get('/', (req, res, next) => {
    res.render('index')
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, () => console.log('server run on port 3000'))