const express = require('express')
const { NotFoundError, ErrorHandler } = require('./util/errorHandler')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/login", (req, res) => {
    res.send(req.body)
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, console.log('server run on port 3000'))