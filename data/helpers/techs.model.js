const db = require('../db');

function getTechs() {
  return db('technicians').select();
}

function getTechById(tech_id) {
  return db('technicians').where({ id: tech_id }).first()
}

module.exports = {
  getTechs,
  getTechById
}