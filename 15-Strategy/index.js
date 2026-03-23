// basic
const usernamePassword = "rezageshani/12345678"
const base64Data = Buffer.from(usernamePassword).toString("base64")
console.log(base64Data)

const decodedData = Buffer.from(base64Data, "base64").toString("ascii")
const [username, password] = decodedData.split("/")
console.log(username, password)


// bearer
// req(login) => (verify) res => token jwt(xxx.yyy.zzz) => client
// => headers: {authorization: Bearer Token}


// API-KEY
// queryString => https:domain.com?api-key=token
// headers: {X-APY-KEY:token}

// Digest

// OAuth