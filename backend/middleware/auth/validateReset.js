const bcrypt = require('bcryptjs')
const { User } = require('../../models/Model')

function handleReset() {
  return async (req, res, next) => {
    try {
      const { email, new_password } = req.body
      let user = await User.findBy({ email })
      const hashPw = await bcrypt.hash(new_password, 12)
      let updatedParent = {
        ...user,
        password: hashPw
      }
      await Parents.update(user.id, updatedParent)

      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = { handleReset }
