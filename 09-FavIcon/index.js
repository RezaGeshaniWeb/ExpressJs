const express = require('express')
const path = require('path')
const serveFavIcon = require('serve-favicon')

const app = express()

app.use(serveFavIcon(path.join(__dirname, 'doc.png')))

app.get('/', (req, res, next) => {
    res.send('set favicon')
})

app.listen(3000, () => console.log('server run on port 3000'))