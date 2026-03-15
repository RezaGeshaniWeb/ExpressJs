// 404
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("index address")
})

app.use((req, res, next) => {
    return res.status(404).json({
        statusCode: res.statusCode,
        error: {
            type: 'NotFound',
            message: `not found ${req.url} route.`
        }
    })
})

res.listen(3000, () => console.log('server run on port 3000'))