const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("index address")
})

// 404
app.use((req, res, next) => {
    return res.status(404).json({
        statusCode: res.statusCode,
        error: {
            type: 'NotFound',
            message: `not found ${req.url} route.`
        }
    })
})

// another error
app.use((err, req, res, next) => {
    return res.json({
        statusCode: err.status || 500,
        error: {
            message: err.message || 'internalServerError'
        }
    })
})

app.listen(3000, () => console.log('server run on port 3000'))