const jobsRouter = require('express').Router()
const {
  validateJobs,
  validateJobId,
  validateDelete
} = require('../middleware/jobs/validateJobs')
const {
  validateJobInputs,
  validateUpdate
} = require('../middleware/jobs/jobForms')

jobsRouter
  .get('/', validateJobs(), (req, res) => {
    res.json(req.jobs)
  })
  .get('/:id', validateJobId(), (req, res) => {
    res.json(req.job)
  })
  .post('/', validateJobInputs(), (req, res) => {
    res.status(201).json(req.newJob)
  })
  .put('/:id', validateJobId(), validateUpdate(), (req, res) => {
    res.json({ message: 'Job updated successfully' })
  })
  .delete('/:id', validateJobId(), validateDelete(), (req, res) => {
    res.json({ message: 'Job deleted successfully' })
  })

module.exports = jobsRouter
