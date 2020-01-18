const jobsRouter = require('express').Router();
const db = require('../../data/helpers/jobs.model');

jobsRouter
  .get('/', async (req, res) => {
    try {
      const jobs = await db.getJobs();
      return res.status(200).json(jobs);
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const job = await db.getJobById(req.params.id);
      return res.status(200).json(job);
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  })
  .post('/', async (req, res) => {
    try {
      const id = await db.addJob(req.body);
      return res.status(201).json(id)
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  })
  .put('/:id', async (req, res) => {
    try {
      const updated = await db.updateJob(req.params.id, req.body);
      return res.status(200).json(req.body);
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  })
  .delete('/:id', async (req, res) => {
    try {
      const deleted = await db.deleteJob(req.params.id);
      return res.status(200).json({ message: 'Deleted' })
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  })

module.exports = jobsRouter;