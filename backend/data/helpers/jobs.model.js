const db = require('../db');
const techs = require('./techs.model');

function getJobs() {
  return db('jobs as J')
    .join('technicians as T', 'J.tech_id', '=', 'T.id')
    .select('J.id', 'J.machine', 'J.complaint', 'T.name');
}

function getJobById(job_id) {
  return db('jobs')
    .where({ id: job_id })
    .first();
}

async function addJob({ name, ...newJob }) {
  let tech = await techs.getTechBy({ name })
  newJob.tech_id = tech.id

  const [id] = await db('jobs').insert(newJob).returning('*');
  return getJobById(id);
}

function updateJob(id, changes) {
  return db('jobs').where({ id }).update(changes)
}

async function deleteJob(id) {
  const deletedJob = await getJobById(id);

  await db('jobs').where({ id }).del();

  return deletedJob;
}

module.exports = {
  getJobs,
  getJobById,
  addJob,
  updateJob,
  deleteJob
}