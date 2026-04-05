const crypto = require('crypto')

function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex')
    console.log(`salt hashPassword: ${salt}`)
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString('hex')
    console.log(`hash hashPassword: ${hash}`)
    const newHash = `$2s.${salt}.${hash}`
    console.log(`newHash hashPassword: ${newHash}`)
    return newHash
}

function verifyHashPassword(password, hashPassword) {
    const salt = hashPassword.split('.')?.[1]
    console.log(`salt verifyHashPassword: ${salt}`)
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString('hex')
    console.log(`hash verifyHashPassword: ${hash}`)
    const newHash = `$2s.${salt}.${hash}`
    console.log(`newHash verifyHashPassword: ${newHash}`)
    return (newHash == hashPassword)
}

const hashed = hashPassword("123456")
const result = verifyHashPassword("123456", hashed)
console.log(result)