const express = require('express')
const allRouters = require('./routers')
const app = express()

app.use(allRouters)

res.listen(3000, () => console.log('server run on port 3000'))