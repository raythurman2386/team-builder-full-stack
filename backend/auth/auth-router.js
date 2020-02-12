const authRouter = require('express').Router()
const bcrypt = require('bcryptjs')
const generateToken = require('../token/generateToken')
const { User } = require('../models/Model')
const { validateRegister, validateLogin } = require("../middleware/validateAuth")

authRouter
  .post('/register', validateRegister(), async (req, res, next) => {
    try {
      let user = req.body
      let hashPw = await bcrypt.hash(user.password, 12)
      user.password = hashPw

      await User.add(user)
      return res
        .status(201)
        .json({ message: 'You have been successfully registered' })
    } catch (error) {
      next(error)
    }
  })
  .post('/login', validateLogin(), async (req, res, next) => {
    try {
      const { username, password } = req.body
      const user = await User.findBy({ username })
      const verify = await bcrypt.compare(password, user.password)

      if (user && verify) {
        const token = generateToken(user)
        return res.status(200).json({
          message: `Welcome ${user.username}`,
          token
        })
      } else {
        return res.status(401).json({ message: 'Invalid Credentials' })
      }
    } catch (error) {
      next(error)
    }
  })
  .post('/initial-reset', async (req, res, next) => {
    try {
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
