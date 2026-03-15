const express = require('express')
const omitEmpty = require('omit-empty')

const app = express()

function removeEmptyFields(options = {}) {
    return function (req, res, next) {
        req.body = omitEmpty(req.body, { options })
        next()
    }
}

app.post('/create', removeEmptyFields(), (req, res, next) => {
    res.send(req.body)
})

res.listen(3000, () => console.log('server run on port 3000'))