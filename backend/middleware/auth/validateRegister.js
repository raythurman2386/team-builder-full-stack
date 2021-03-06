const bcrypt = require('bcryptjs')
const { User } = require('../../models/Model')

function validateRegister() {
  return async (req, res, next) => {
    try {
      if (!req.body.name) {
        return res.status(400).json({ message: 'Please provide a name' })
      }

      if (!req.body.username) {
        return res.status(400).json({ message: 'Please provide a username' })
      }

      if (!req.body.email) {
        return res.status(400).json({ message: 'Please provide a email' })
      }

      if (!req.body.password) {
        return res.status(400).json({ message: 'Please provide a password' })
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
    try {
      let user = req.body
      let hashPw = await bcrypt.hash(user.password, 12)
      user.password = hashPw

      await User.add(user)
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = {
  validateRegister,
  hashPassword
}
