const bcrypt = require('bcryptjs')
const { User } = require("../models/Model")
const generateToken = require("../token/generateToken")

function validateRegister() {
  return async (req, res, next) => {
    try {
      const name = await User.findBy({ name: req.body.name })
      const user = await User.findBy({ username: req.body.username })
      const email = await User.findBy({ email: req.body.email })

      if (!req.body.name) {
        return res.status(400).json({ message: "Please provide a name" })
      }

      if (!req.body.username) {
        return res.status(400).json({ message: "Please provide a username" })
      }

      if (!req.body.email) {
        return res.status(400).json({ message: "Please provide a email" })
      }

      if (!req.body.password) {
        return res.status(400).json({ message: "Please provide a password" })
      }

      if (name || user || email) {
        return res.status(400).json({ message: "That user already exists" })
      }

      // Final option
      next()
    } catch (error) {
      next(error)
    }
  }
}

function hashPassword() {
  return async (req, res, next) => {
    let user = req.body
    let hashPw = await bcrypt.hash(user.password, 12)
    user.password = hashPw

    await User.add(user)
    next()
  }
}

function validateLogin() {
  return async (req, res, next) => {
    try {
      const user = await User.findBy({ username: req.body.username })

      if (!req.body.username) {
        return res.status(400).json({ message: "Please provide a username" })
      }

      if (!req.body.password) {
        return res.status(400).json({ message: "Please provide a password" })
      }

      if (!user) {
        return res.status(400).json({ message: "That username does not exist" })
      }

      next()

    } catch (error) {
      next(error)
    }
  }
}

function verifyPassword() {
  return async (req, res, next) => {
    try {
      const { username, password } = req.body
      const user = await User.findBy({ username })
      const verify = await bcrypt.compare(password, user.password)

      if (user && verify) {
        let token = generateToken(user)
        req.name = user.name
        req.token = token
        next()
      } else {
        return res.status(401).json({ message: 'Invalid Credentials' })
      }

    } catch (error) {
      next(error)
    }
  }
}

module.exports = {
  validateRegister,
  hashPassword,
  validateLogin,
  verifyPassword
}