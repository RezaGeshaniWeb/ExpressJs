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

res.listen(3000, () => console.log('server run on port 3000'))