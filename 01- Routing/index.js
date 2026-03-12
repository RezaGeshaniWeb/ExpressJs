const express = require('express')
const app = express()

const users = [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' }
]

app.get('/', (req, res) => {
    // res.send('Hello ExpressJs')
    // res.send('<h1>Hello ExpressJs</h1>')
    res.status(200).send({ message: 'Hello ExpressJs' })
})

app.get('/users', (req, res) => {
    res.statusCode = 200
    res.json({ users })
})

app.get('/users/:id', (req, res) => {
    // const id = req.params.id
    const { id } = req.params
    const user = users.find(user => user.id == id)
    if (!user) {
        res.status(404).json({
            statusCode: res.statusCode,
            error: {
                message: 'user not found'
            }
        })
    } else {
        res.status(200).json({
            statusCode: res.statusCode,
            data: {
                user
            }
        })
    }
})

res.listen(3000, () => console.log('server run on port 3000'))