const jobsRouter = require('express').Router()
const { Job, Tech } = require('../models/Model')

jobsRouter
  .get('/', async (req, res, next) => {
    try {
      const jobs = await Job.find()
      return res.status(200).json(jobs)
    } catch (error) {
      next(error)
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const job = await Job.findBy({ id: req.params.id })
      return res.status(200).json(job)
    } catch (error) {
      next(error)
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const { tech_name } = req.body;
      const tech = await Tech.findBy({ name: tech_name })
      const job = {
        ...req.body,
        tech_id: tech.id,
        created_by: req.userId
      }
      const id = await Job.add(job)
      return res.status(201).json(id)
    } catch (error) {
      next(error)
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const { tech_name } = req.body;
      const tech = await Tech.findBy({ name: tech_name })
      const job = {
        ...req.body,
        tech_id: tech.id
      }
      const updated = await Job.update(req.params.id, job)
      return res.status(200).json(req.body)
    } catch (error) {
      next(error)
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deleted = await Job.remove(req.params.id)
      return res.status(200).json({ message: 'Deleted' })
    } catch (error) {
      next(error)
    }
  })

module.exports = jobsRouter
