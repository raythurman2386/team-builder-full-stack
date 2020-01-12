const db = require('../db');

function getTechs() {
  return db('technicians');
}

function getTechById(tech_id) {
  return db('technicians').where({ id: tech_id }).first()
}

function getTechnicianJobs(tech) {
  return db('jobs')
    .join('technicians as T', 'jobs.tech_id', 'T.id')
    .where({ tech_id: tech })
    .select('T.name', 'jobs.machine', 'jobs.complaint')
}


module.exports = {
  getTechs,
  getTechById,
  getTechnicianJobs
}