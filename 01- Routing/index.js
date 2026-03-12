const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // res.send('Hello ExpressJs')
    // res.send('<h1>Hello ExpressJs</h1>')
    res.send({ message: 'Hello ExpressJs' })
})

res.listen(3000, () => console.log('server run on port 3000'))