const jobsRouter = require('express').Router()
const { Job } = require('../models/Model')

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
      const id = await Job.add(req.body)
      return res.status(201).json(id)
    } catch (error) {
      next(error)
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updated = await Job.update(req.params.id, req.body)
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
