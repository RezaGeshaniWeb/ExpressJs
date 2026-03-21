const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

app.get('/set-cookie', (req, res) => {
    res.cookie('cookieName', 'cookieValue')
    res.send('cookie have been saved successfully')
})

app.listen(3000, () => console.log('server run on port 3000'))