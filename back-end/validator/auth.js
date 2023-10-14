const { body } = require("express-validator")

let valSignIn = [
    body('email').isEmail().notEmpty().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 8 characters')
]

let valSignUp = [
    body('email').isEmail().notEmpty().withMessage('Invalid email format'),
    body('full_name').trim().notEmpty().withMessage('Full name is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 8 characters')
]


module.exports = {
    valSignIn, valSignUp
}