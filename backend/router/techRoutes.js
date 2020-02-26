const techRouter = require('express').Router()
const {
  validateTechId,
  validateTechName,
  validateTechs,
  validateTechJobs
} = require('../middleware/tech/validateTech')

techRouter
  .get('/', validateTechs(), (req, res) => {
    res.json(req.techs)
  })
  .get('/:id', validateTechId(), (req, res) => {
    res.json(req.tech)
  })
  .get('/:id/jobs', validateTechId(), validateTechJobs(), (req, res) => {
    res.json(req.techJobs)
  })
  .post('/', validateTechName(), (req, res) => {
    res.status(201).json({ message: 'Technician added' })
  })

module.exports = techRouter
