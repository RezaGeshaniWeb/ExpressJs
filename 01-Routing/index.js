const express = require('express')
const app = express()

const users = [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' }
]

const products = [
    { id: 1, name: 'product1' },
    { id: 2, name: 'product2' },
    { id: 3, name: 'product3' }
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

app.get('/products/:id', (req, res) => {
    const { id } = req.params
    let product = null
    if (id) {
        product = products.find(p => p.id == id)
        return res.status(200).json({
            statusCode: res.statusCode,
            data: {
                product
            }
        })
    }
    res.json({
        products
    })
})

app.get('/cars/:id/:model/:carID', (req, res) => {
    res.send(req.params)
})

app.listen(3000, () => console.log('server run on port 3000'))