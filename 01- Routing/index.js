const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // res.send('Hello ExpressJs')
    // res.send('<h1>Hello ExpressJs</h1>')
    res.status(200).send({ message: 'Hello ExpressJs' })
})

app.get('/users', (req, res) => {
    res.statusCode = 200
    res.json({
        users: [
            { id: 1, name: 'user1' },
            { id: 2, name: 'user2' },
            { id: 3, name: 'user3' }
        ]
    })
})

res.listen(3000, () => console.log('server run on port 3000'))