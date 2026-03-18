const express = require('express')
const { NotFoundError, ErrorHandler } = require('./util/errorHandler')
const { body } = require('express-validator')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.post("/body", body('email').isEmail(), body('password').length(6, 16), (req, res) => {
    res.send(req.body)
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, console.log('server run on port 3000'))