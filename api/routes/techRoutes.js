const techRouter = require('express').Router();
const Techs = require('../../data/helpers/techs.model');

techRouter
  .get('/', async (req, res) => {
    try {
      const techs = await Techs.getTechs();
      return res.status(200).json(techs)
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const tech = await Techs.getTechById(req.params.id);
      return res.status(200).json(tech)
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  })
  .get('/:id/jobs', async (req, res) => {
    try {
      const jobs = await Techs.getTechnicianJobs(req.params.id)
      return res.status(200).json(jobs);
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  })
  .post('/', async (req, res) => {
    try {
      const newTech = await Techs.insert(req.body)
      return res.status(200).json(newTech)
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  })

module.exports = techRouter;