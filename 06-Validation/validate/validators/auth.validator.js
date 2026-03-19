const Schema = require("validate")

const loginSchema = new Schema({
    username: {
        type: String,
        required: true,
        length: { min: 4, max: 20 },
        message: {
            type: 'username must to be string',
            required: 'msg...',
            length: 'msg...',
        }
    },
    email: {
        type: String,
        required: true,
        match: /[a-zA-Z0-9\_\.]{5,50}@[a-z]{2,10}.[a-z]{2,10}/gi,
        message: {
            type: 'email must to be string',
            match: 'email data is invalid email',
        }
    },
})

const registerSchema = new Schema({
    username: {
        type: String,
        required: true,
        length: { min: 4, max: 20 },
        message: {
            type: 'username must to be string',
            required: 'msg...',
            length: 'msg...',
        }
    },
    email: {
        type: String,
        required: true,
        match: /[a-zA-Z0-9\_\.]{5,50}@[a-z]{2,10}.[a-z]{2,10}/gi,
        message: {
            type: 'email must to be string',
            required: 'email required is customize',
            match: 'email data is invalid email',
        }
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'teacher'],
    }
})

module.exports = { loginSchema, registerSchema }