const techRouter = require('express').Router()
const { Tech } = require('../models/Model')

techRouter
  .get('/', async (req, res, next) => {
    try {
      const techs = await Tech.find()
      return res.status(200).json(techs)
    } catch (error) {
      console.log(error)
      next(error)
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const tech = await Tech.findBy({ id: req.params.id })
      return res.status(200).json(tech)
    } catch (error) {
      console.log(error)
      next(error)
    }
  })
  .get('/:id/jobs', async (req, res, next) => {
    try {
      const jobs = await Tech.findTechJobs(req.params.id)
      return res.status(200).json(jobs)
    } catch (error) {
      next(error)
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const newTech = await Tech.add(req.body)
      return res.status(200).json(newTech)
    } catch (error) {
      next(error)
    }
  })

module.exports = techRouter
