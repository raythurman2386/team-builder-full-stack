const { Tech } = require('../models/Model')

function validateTechId() {
  return async (req, res, next) => {
    try {
      const tech = await Tech.findBy({ id: req.params.id })
      req.tech = tech
      next()
    } catch (error) {
      next(error)
    }
  }
}

function validateTechName() {
  return (req, res, next) => {
    try {
      if (!req.body.name) {
        return res.status(400).json({ message: "Please provide a tech name" })
      }

      Tech.add(req.body)
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = { validateTechId, validateTechName }