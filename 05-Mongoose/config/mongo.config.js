const { default: mongoose } = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/mongoose'

mongoose.set("strictQuery", true)
mongoose.connect(DB_URL)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => {
        console.error(err.message);
        process.exit(1);
    });