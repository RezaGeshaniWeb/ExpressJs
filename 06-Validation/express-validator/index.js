const express = require('express')
const { NotFoundError, ErrorHandler } = require('./util/errorHandler')
const { loginValidator } = require('./validators/auth.validator')
const { validationResult } = require('express-validator')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/login", loginValidator(), (req, res) => {
    const error = validationResult(req)
    let obj = {}
    error?.errors?.forEach(err => obj[err.param] = err.msg)
    res.send(obj)
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, console.log('server run on port 3000'))