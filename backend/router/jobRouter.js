const jobsRouter = require('express').Router()
const db = require('../models/Model')

jobsRouter
  .get('/', async (req, res, next) => {
    try {
      const jobs = await db.find()
      return res.status(200).json(jobs)
    } catch (error) {
      next(error)
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const job = await db.findBy({ id: req.params.id })
      return res.status(200).json(job)
    } catch (error) {
      next(error)
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const id = await db.add(req.body)
      return res.status(201).json(id)
    } catch (error) {
      next(error)
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updated = await db.update(req.params.id, req.body)
      return res.status(200).json(req.body)
    } catch (error) {
      next(error)
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deleted = await db.remove(req.params.id)
      return res.status(200).json({ message: 'Deleted' })
    } catch (error) {
      next(error)
    }
  })

module.exports = jobsRouter
