const jwt = require("jsonwebtoken")

const secret = "6f9baf3cd6e8b8a73c2cdced37fe9f59226e27d"

const token = jwt.sign({ id: "some_hash_id", email:"me@gmail.com" }, secret, {
    expiresIn: "1w",    // 1s-1d-50d-1y
    algorithm: "HS512",
})

console.log(token)