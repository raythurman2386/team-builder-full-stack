const bcrypt = require('bcryptjs')
const { User } = require("../../models/Model")
const generateToken = require("../../token/generateToken")

function validateLogin() {
  return async (req, res, next) => {
    try {

      if (!req.body.username) {
        return res.status(400).json({ message: "Please provide a username" })
      }

      if (!req.body.password) {
        return res.status(400).json({ message: "Please provide a password" })
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
  validateLogin,
  verifyPassword
}