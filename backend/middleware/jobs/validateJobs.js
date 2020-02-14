const { Job } = require('../models/Model')

function validateJobs() {
  return async (req, res, next) => {
    try {
      const jobs = await Job.find()
      req.jobs = jobs

      next()
    } catch (error) {
      next(error)
    }
  }
}

function validateJobId() {
  return async (req, res, next) => {
    try {
      const job = await Job.findBy({ id: req.params.id })

      if (!job) {
        return res.status(404).json({ message: "Job not found" })
      }

      req.job = job
      next()
    } catch (error) {
      next(error)
    }
  }
}

function validateDelete() {
  return (req, res, next) => {
    try {
      Job.remove(req.job.id)
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = { validateJobs, validateJobId, validateDelete }