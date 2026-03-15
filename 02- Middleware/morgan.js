const express = require('express')
const morgan = require('morgan')

const app = express()

// app.use(morgan('tiny'))
// app.use(morgan('dev'))
// app.use(morgan('combined'))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/', (req, res) => {
    res.send('morgan')
})

res.listen(3000, () => console.log('server run on port 3000'))