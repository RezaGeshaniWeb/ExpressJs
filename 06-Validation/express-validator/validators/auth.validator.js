const { body } = require('express-validator')

const loginValidator = () => [
    body('email').isEmail().withMessage('email is invalid'),
    body('password').isLength({ min: 6, max: 20 }).withMessage('password is invalid')
]

module.exports = { loginValidator }