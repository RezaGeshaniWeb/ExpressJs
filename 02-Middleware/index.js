const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('log 1');
    next()
})

app.use((req, res, next) => {
    console.log('log 2');
    next()
}, (req, res, next) => {
    console.log('log 3');
    next()
})

app.get('/', (req, res) => {
    res.send('main route')
})

app.listen(3000, () => console.log('server run on port 3000'))