const express = require('express')
const { NotFoundError, ErrorHandler } = require('./util/errorHandler')
const path = require('path')

const app = express()

app.use("/static", express.static("public"))

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

app.get('/', (req, res, next) => {
    res.render('index', {
        link: 'http://localhost:3000',
        section: 'my section of web page'
    })
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, () => console.log('server run on port 3000'))