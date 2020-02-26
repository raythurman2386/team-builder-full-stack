const { Tech } = require('../../models/Model')

function validateTechId() {
  return async (req, res, next) => {
    try {
      const tech = await Tech.findBy({ id: req.params.id })

      if (!tech) {
        return res
          .status(404)
          .json({ message: 'There is no tech with that id' })
      }
      req.tech = tech
      next()
    } catch (error) {
      next(error)
    }
  }
}

function validateTechName() {
  return async (req, res, next) => {
    try {
      if (!req.body.name) {
        return res.status(400).json({ message: 'Please provide a tech name' })
      }

      await Tech.add(req.body)
      next()
    } catch (error) {
      next(error)
    }
  }
}

function validateTechs() {
  return async (req, res, next) => {
    try {
      const techs = await Tech.find()
      req.techs = techs
      next()
    } catch (error) {
      next(error)
    }
  }
}

function validateTechJobs() {
  return async (req, res, next) => {
    try {
      const jobs = await Tech.findTechJobs(req.tech.id)

      if (jobs.length === 0) {
        return res.status(400).json({ message: 'This tech has no jobs' })
      }

      req.techJobs = jobs
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = {
  validateTechId,
  validateTechName,
  validateTechs,
  validateTechJobs
}
