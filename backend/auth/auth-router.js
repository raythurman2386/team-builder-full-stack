const authRouter = require('express').Router()
const { validateRegister, hashPassword } = require("../middleware/auth/validateRegister")
const { validateLogin, verifyPassword } = require("../middleware/auth/validateLogin")
const { handleReset } = require("../middleware/auth/validateReset")
const sendgrid = require("../utils/sendgrid")

authRouter
  .post('/register', validateRegister(), hashPassword(), (req, res, next) => {
    res
      .status(201)
      .json({ message: 'You have been successfully registered' })
  })
  .post('/login', validateLogin(), verifyPassword(), (req, res, next) => {
    res.json({
      message: `Welcome ${req.name}`,
      token: req.token
    })
  })
  .post('/initial-reset', sendgrid, (req, res, next) => {
    res.json({ message: 'Check your email' })
  })
  .post('/reset-password', handleReset(), (req, res, next) => {
    res.json({ message: 'Password successfully updated' })
  })

module.exports = authRouter
