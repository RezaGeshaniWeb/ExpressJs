const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

const app = express()

dotenv.config()
const NodeEnv = process.env.NODE_ENV
dotenv.config({
    path: path.join(__dirname, `.${NodeEnv}.env`)
})

app.get('/', (req, res) => {
    console.log(process.env.API_KEY)
    res.send('environment variable')
})

app.listen(process.env.PORT, () => console.log('server run on port ' + process.env.PORT))