const techRouter = require('express').Router()
const Techs = require('../models/Model')

techRouter
  .get('/', async (req, res, next) => {
    try {
      const techs = await Techs.find()
      return res.status(200).json(techs)
    } catch (error) {
      console.log(error)
      next(error)
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const tech = await Techs.findBy({ id: req.params.id })
      return res.status(200).json(tech)
    } catch (error) {
      console.log(error)
      next(error)
    }
  })
  // .get('/:id/jobs', async (req, res, next) => {
  //   try {
  //     const jobs = await Techs.getTechnicianJobs(req.params.id)
  //     return res.status(200).json(jobs);
  //   } catch (error) {
  //     next(error)
  //   }
  // })
  .post('/', async (req, res, next) => {
    try {
      const newTech = await Techs.add(req.body)
      return res.status(200).json(newTech)
    } catch (error) {
      next(error)
    }
  })

module.exports = techRouter
