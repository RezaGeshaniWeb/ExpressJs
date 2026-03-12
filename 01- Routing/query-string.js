const express = require('express')
const app = express()
const queryString = require('querystring')

app.get('/posts', (req, res) => {
    // res.send(req.query)

    console.log(queryString.parse("key1=value1&key2=value2&key3=value3"))
    console.log(queryString.stringify({
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
    }))

    const { key1, key2, key3 } = req.query;

    res.send({ key1, key2, key3, url: req.originalUrl })
})

res.listen(3000, () => console.log('server run on port 3000'))