const techRouter = require('express').Router()
const { validateTechId, validateTechName, validateTechs, validateTechJobs } = require('../middleware/tech/validateTech')

techRouter
  .get('/', validateTechs(), (req, res, next) => {
    res.json(req.techs)
  })
  .get('/:id', validateTechId(), (req, res, next) => {
    res.json(req.tech)
  })
  .get('/:id/jobs', validateTechId(), validateTechJobs(), (req, res, next) => {
    res.json(req.jobs)
  })
  .post('/', validateTechName(), async (req, res, next) => {
    res.status(201).json({ message: "Technician added" })
  })

module.exports = techRouter
