const authRouter = require('express').Router()
const { validateRegister, hashPassword } = require("../middleware/auth/validateRegister")
const { validateLogin, verifyPassword } = require("../middleware/auth/validateLogin")
const { User } = require("../models/Model")
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
    try {
      const { email, new_password } = req.body
      let user = await User.findBy({ email })
      const hashPw = await bcrypt.hash(new_password, 12)
      let updatedParent = {
        ...user,
        password: hashPw
      }
      await Parents.update(user.id, updatedParent)
      return res.status(200).json({ message: 'Password successfully updated' })
    } catch (error) {
      next(er)
    }
  })

module.exports = authRouter
