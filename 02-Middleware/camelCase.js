const express = require('express')
const camelCaseKey = (...args) => import("camelcase-keys").then(({ default: camelCaseKeys }) => camelCaseKeys(...args))

const app = express()

async function camelCase(req, res, next) {
    req.body = await camelCaseKey(req.body, { deep: true });
    req.query = await camelCaseKey(req.query);
    req.params = await camelCaseKey(req.params);
    next()
}

app.use(camelCase)

app.get('/blogs', async (req, res) => {
    console.log(await camelCaseKey({ 'first-name': 'erfan' }))

    res.send({
        body: req.body,
        query: req.query,
        params: req.params
    })
})

res.listen(3000, () => console.log('server run on port 3000'))