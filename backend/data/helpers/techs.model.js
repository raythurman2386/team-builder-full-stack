const db = require('../db');

function getTechs() {
  return db('technicians');
}

function getTechById(tech_id) {
  return db('technicians').where({ id: tech_id }).first()
}

function getTechBy(filter) {
  return db('technicians').where(filter).first()
}

function getTechnicianJobs(tech) {
  return db('jobs')
    .join('technicians as T', 'jobs.tech_id', 'T.id')
    .where({ tech_id: tech })
    .select('T.name', 'jobs.machine', 'jobs.complaint')
}

function insert(tech) {
  return db('technicians').insert(tech).returning('*')
}


module.exports = {
  getTechs,
  getTechById,
  getTechBy,
  getTechnicianJobs,
  insert
}