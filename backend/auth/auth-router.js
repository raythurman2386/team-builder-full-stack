const authRouter = require('express').Router()
const { validateRegister, hashPassword } = require("../middleware/validateRegister")
const { validateLogin, verifyPassword } = require("../middleware/validateLogin")
const sendgrid = require("../utils/sendgrid")

authRouter
  .post('/register', validateRegister(), hashPassword(), (req, res, next) => {
    return res
      .status(201)
      .json({ message: 'You have been successfully registered' })
  })
  .post('/login', validateLogin(), verifyPassword(), (req, res, next) => {
    return res.status(200).json({
      message: `Welcome ${req.name}`,
      token: req.token
    })
  })
  .post('/initial-reset', sendgrid, (req, res, next) => {
    return res.status(200).json({ message: 'Check your email' })
  })
  .post('/reset-password', (req, res, next) => {
    return res.status(200).json({ message: 'Password successfully updated' })
  })

module.exports = authRouter
