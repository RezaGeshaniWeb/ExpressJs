const express = require('express')
const { NotFoundError, ErrorHandler } = require('./util/errorHandler')
const { loginValidator, registerValidator } = require('./validators/auth.validator')
const { checkValidation } = require('./middlewares/validator')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/login", loginValidator(), checkValidation, (req, res) => {
    res.send(req.body)
})

app.post("/register", registerValidator(), checkValidation, (req, res) => {
    res.send(req.body)
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, console.log('server run on port 3000'))