const db = require('../db');

function getJobs() {
  return db('jobs').select();
}

function getJobById(job_id) {
  return db('jobs')
    .where({ id: job_id })
    .first();
}

function getTechnicianJobs(tech) {
  return db('jobs')
    .join('technicians as T', 'jobs.tech_id', 'T.id')
    .where({ tech_id: tech })
    .select('T.name', 'jobs.machine', 'jobs.complaint')
}

async function addJob(newJob) {
  const [id] = await db('jobs').insert(newJob);
  return getJobById(id);
}

async function updateJob(changes, job_id) {
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
  getTechnicianJobs,
  addJob,
  updateJob,
  deleteJob
}