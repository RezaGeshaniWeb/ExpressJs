const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config()

app.get('/', (req, res) => {
    console.log(process.env.API_KEY)
    res.send('environment variable')
})

app.listen(process.env.PORT, () => console.log('server run on port ' + process.env.PORT))