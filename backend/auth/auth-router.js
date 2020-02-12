const authRouter = require('express').Router()
const { validateRegister, hashPassword } = require("../middleware/validateRegister")
const { validateLogin, verifyPassword } = require("../middleware/validateLogin")
const sendgrid = require("../utils/sendgrid")

authRouter
  .post('/register', validateRegister(), hashPassword(), (req, res, next) => {
    try {
      return res
        .status(201)
        .json({ message: 'You have been successfully registered' })
    } catch (error) {
      next(error)
    }
  })
  .post('/login', validateLogin(), verifyPassword(), async (req, res, next) => {
    try {
      return res.status(200).json({
        message: `Welcome ${req.name}`,
        token: req.token
      })
    } catch (error) {
      next(error)
    }
  })
  .post('/initial-reset', sendgrid, (req, res, next) => {
    try {
      return res.status(200).json({ message: 'Check your email' })
    } catch (error) {
      next(error)
    }
  })
  .post('/reset-password', async (req, res, next) => {
    try {
      return res.status(200).json({ message: 'Password successfully updated' })
    } catch (error) {
      next(error)
    }
  })

module.exports = authRouter
