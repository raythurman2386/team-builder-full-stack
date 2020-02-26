require('dotenv').config()
const sgMail = require('@sendgrid/mail')

function sendgrid() {
  return (req, res, next) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    if (!req.body.email) {
      return res.status(400).json({ message: 'Please supply your email' })
    }

    const msg = {
      to: req.body.email,
      from: 'jeffshop@helpdesk.com',
      subject: 'Reset Password',
      text: 'Click below to reset your password',
      html:
        '<a href="https://team-builder-pg.herokuapp.com/api/auth/reset-password">Reset Password</a>'
    }
    sgMail.send(msg)

    next()
  }
}

module.exports = sendgrid
