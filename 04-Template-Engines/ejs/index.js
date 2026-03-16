const express = require('express')
const { NotFoundError, ErrorHandler } = require('./util/errorHandler')
const path = require('path')

const app = express()

const links = [
    { id: 1, text: 'About us' },
    { id: 2, text: 'F.A.Q' },
    { id: 3, text: 'Our team' }
]

app.use("/static", express.static("public"))

app.set("view engine", "ejs")

app.get('/', (req, res, next) => {
    res.render('index', {
        links,
        title: "We strive for excellence in everything we do."
    })
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, () => console.log('server run on port 3000'))