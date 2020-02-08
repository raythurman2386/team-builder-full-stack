const db = require('../data/db')

class Model {
  constructor(tableName) {
    this.tableName = tableName
  }

  find() {
    return db(this.tableName)
  }

  findBy(filter) {
    return db(this.tableName).where(filter)
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

const User = new Model('users')
const Tech = new Model('technicians')
const Job = new Model('jobs')

module.exports = {
  User,
  Tech,
  Job
}
