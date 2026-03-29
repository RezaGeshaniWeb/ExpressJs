const express = require('express')
const app = express()

app.get('/file.txt', (req, res) => {
    res.status(200).send("Accepted: " + req.url)
})

app.get('/ab?cd', (req, res) => {
    res.status(200).send("Accepted: " + req.url)
})

app.get('/ab+cd', (req, res) => {
    res.status(200).send("Accepted: " + req.url)
})

app.get('/ab*cd', (req, res) => {
    res.status(200).send("Accepted: " + req.url)
})

app.get('/ab(cd)?e', (req, res) => {
    res.status(200).send("Accepted: " + req.url)
})

app.get(/a/, (req, res) => {
    res.status(200).send("Accepted: " + req.url)
})

app.get(/[a-z0-9\.\_]{5,50}@[a-z]{2,6}\.[a-z]{2,10}/, (req, res) => {
    res.status(200).send("Accepted: " + req.url)
})

app.get(/.*nodejs$/, (req, res) => {
    res.status(200).send("Accepted: " + req.url)
})

app.listen(3000, () => console.log('server run on port 3000'))