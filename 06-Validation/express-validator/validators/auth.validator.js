const { body } = require('express-validator')

const loginValidator = () => [
    body('email').isEmail().withMessage('email is invalid'),
    body('password').isLength({ min: 6, max: 20 }).withMessage('password is invalid')
]

const registerValidator = () => [
    body('fullName').isLength({ min: 5, max: 35 }).withMessage('fullname is required, please enter your fullname'),
    body('age').isNumeric().withMessage('age must to be number'),
    body('mobile').isMobileumber(['fa-IR', 'en-US']).withMessage('mobile format is invalid'),
    body('email').isEmail().withMessage('email is invalid'),
    body('password').isLength({ min: 6, max: 20 }).withMessage('password is invalid'),
]

module.exports = { loginValidator, registerValidator }