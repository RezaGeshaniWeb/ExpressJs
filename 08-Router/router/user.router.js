const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
    console.log(req.time)
    res.send('users')
})

router.post('/', (req, res, next) => {
    console.log(req.time)
    res.send('created new users')
})

router.delete('/:id', (req, res, next) => {
    console.log(req.time)
    res.send(`delete users with id # ${req.params.id}`)
})

router.patch('/:id', (req, res, next) => {
    console.log(req.time)
    res.send(`update users with id # ${req.params.id}`)
})

module.exports = router