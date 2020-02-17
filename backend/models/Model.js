const db = require('../data/db')

class Model {
  constructor(tableName) {
    this.tableName = tableName
  }

  find() {
    return db(this.tableName)
  }

  findBy(filter) {
    return db(this.tableName)
      .where(filter)
      .first()
  }

  add(newItem) {
    return db(this.tableName)
      .insert(newItem)
      .returning('*')
  }

  update(id, item) {
    return db(this.tableName)
      .where({ id })
      .update(item)
      .returning('*')
  }

  remove(id) {
    return db(this.tableName)
      .where({ id })
      .del()
  }
}

class Technician extends Model {
  constructor(tableName) {
    super(tableName)
    this.tableName = tableName
  }

  findTechJobs(id) {
    return db(this.tableName)
      .join('jobs', 'jobs.tech_id', '=', 'technicians.id')
      .where({ tech_id: id })
  }
}

class Jobs extends Model {
  constructor(tablename) {
    super(tablename)
    this.tableName = tablename
  }

  find() {
    return db(this.tableName)
      .join('technicians', 'technicians.id', '=', 'jobs.tech_id')
      .select('jobs.id', 'jobs.machine', 'jobs.complaint', 'jobs.serial_number', 'jobs.tech_id', 'technician.name')
  }
}

const User = new Model('users')
const Tech = new Technician('technicians')
const Job = new Jobs('jobs')

module.exports = {
  User,
  Tech,
  Job
}
