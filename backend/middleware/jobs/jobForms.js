const { Job, Tech } = require('../../models/Model')

function validateJobInputs() {
  return async (req, res, next) => {
    try {
      if (
        !req.body.machine ||
        !req.body.complaint ||
        !req.body.serial_number ||
        !req.body.name
      ) {
        return res.status(400).json({ message: 'Please provide all fields' })
      }

      const tech = await Tech.findBy({ name: req.body.name })

      if (!tech) {
        return res
          .status(404)
          .json({ message: 'There is no tech by that name' })
      }

      const job = {
        machine: req.body.machine,
        complaint: req.body.complaint,
        serial_number: req.body.serial_number,
        tech_id: tech.id,
        created_by: req.userId
      }
      const id = await Job.add(job)

      req.newJob = id
      next()
    } catch (error) {
      next(error)
    }
  }
}

function validateUpdate() {
  return async (req, res, next) => {
    try {
      const { name } = req.body
      const tech = await Tech.findBy({ name })

      if (!tech) {
        return res
          .status(404)
          .json({ message: 'There is no tech by that name' })
      }

      const job = {
        machine: req.body.machine,
        complaint: req.body.complaint,
        serial_number: req.body.serial_number,
        tech_id: tech.id,
        created_by: req.userId
      }
      await Job.update(req.params.id, job)
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = { validateJobInputs, validateUpdate }
