const authRouter = require('express').Router()
const bcrypt = require('bcryptjs')
const generateToken = require('../token/generateToken')
const { User } = require('../models/Model')
const { validateRegister, hashPassword, validateLogin, verifyPassword } = require("../middleware/validateAuth")
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
      const user = await User.findBy({ username })
      const token = generateToken(user)
      return res.status(200).json({
        message: `Welcome ${user.name}`,
        token
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
    } catch (error) {
      next(error)
    }
  })

module.exports = authRouter
