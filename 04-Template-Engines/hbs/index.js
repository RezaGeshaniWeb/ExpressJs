const express = require('express')
const { NotFoundError, ErrorHandler } = require('./util/errorHandler')
const path = require('path')
const hbs = require('hbs')

const app = express()

app.use(express.static("public"))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))
hbs.registerPartials(path.join(__dirname, "views/partials"))

app.get('/', (req, res, next) => {
    res.render('index', {})
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, () => console.log('server run on port 3000'))