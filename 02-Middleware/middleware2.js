const express = require('express')
const app = express()

function getTime(req, res, next) {
    req.time = Date.now()
    next()
}

function checkAuth(req, res, next) {
    const { username, password } = req.query
    if (username == 'erfan' && password == '1234') {
        return next()
    }
    res.send('Authentication is failed')
}

// app.use((req, res, next) => {
//     getTime(req, res, next)
// })
app.use(getTime)

app.get('/users', checkAuth, getTime, (req, res) => {
    res.send('users')
})

res.listen(3000, () => console.log('server run on port 3000'))