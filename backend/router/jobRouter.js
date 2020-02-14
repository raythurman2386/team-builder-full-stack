const jobsRouter = require('express').Router()
const { validateJobs, validateJobId, validateDelete } = require('../middleware/jobs/validateJobs')

jobsRouter
  .get('/', validateJobs(), (req, res) => {
    res.json(req.jobs)
  })
  .get('/:id', validateJobId(), (req, res) => {
    res.json(req.job)
  })
  .post('/', async (req, res, next) => {
    try {
      const { tech_name } = req.body;
      const tech = await Tech.findBy({ name: tech_name })
      const job = {
        machine: req.body.machine,
        complaint: req.body.complaint,
        serial_number: req.body.serial_number,
        tech_id: tech.id,
        created_by: req.userId
      }
      const id = await Job.add(job)
      return res.status(201).json(id)
    } catch (error) {
      next(error)
    }
  })
  .put('/:id', validateJobId(), async (req, res, next) => {
    try {
      const { tech_name } = req.body;
      const tech = await Tech.findBy({ name: tech_name })
      const job = {
        machine: req.body.machine,
        complaint: req.body.complaint,
        serial_number: req.body.serial_number,
        tech_id: tech.id,
        created_by: req.userId
      }
      const updated = await Job.update(req.params.id, job)
      return res.status(200).json(req.body)
    } catch (error) {
      next(error)
    }
  })
  .delete('/:id', validateJobId(), validateDelete(), (req, res) => {
    res.json({ message: "Job deleted successfully" })
  })

module.exports = jobsRouter
