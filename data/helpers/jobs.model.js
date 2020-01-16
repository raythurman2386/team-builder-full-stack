const db = require('../db');

function getJobs() {
  return db('jobs');
}

function getJobById(job_id) {
  return db('jobs')
    .where({ id: job_id })
    .first();
}

async function addJob(newJob) {
  const [id] = await db('jobs').insert(newJob).returning('*');
  return getJobById(id);
}

function updateJob(job_id, changes) {
  return db('jobs').where({ id: job_id }).update(changes)
}

async function deleteJob(job_id) {
  const deletedJob = await getJobById(job_id);

  await db('jobs').where({ id: job_id }).del();

  return deletedJob;
}

module.exports = {
  getJobs,
  getJobById,
  addJob,
  updateJob,
  deleteJob
}