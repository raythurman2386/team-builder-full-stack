const authRouter = require('express').Router()
const bcrypt = require('bcryptjs')
const generateToken = require('../token/generateToken')
const { User } = require('../models/Model')

authRouter
  .post('/register', async (req, res, next) => {
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
  .post('/login', async (req, res, next) => {
    try {
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
