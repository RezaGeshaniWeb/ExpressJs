const crypto = require("crypto")
const fs = require("fs")

const filename = "index.txt"

const md5Sum = crypto.createHash("md5")
const stream = fs.ReadStream(filename)

// md5 package
const md5 = require("md5")
let md5Result = ''

stream.on("data", data => {
    md5Sum.update(data)
    // md5
    md5Result += md5(data)
})

stream.on("end", () => {
    const hash = md5Sum.digest("hex")
    fs.writeFile("hash.txt", hash, err => {
        if (err) {
            console.log(err)
        }
    })
    // md5
    fs.writeFile("hash2.txt", md5Result, err => {
        if (err) {
            console.log(err)
        }
    })
})