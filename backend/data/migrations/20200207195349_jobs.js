exports.up = async function(knex) {
  await knex.schema.createTable('jobs', tbl => {
    tbl.increments('id')
    tbl.string('machine').notNullable()
    tbl.string('complaint').notNullable()
    tbl.string('serial_number')
    tbl.timestamps(true, true)
    tbl
      .integer('tech_id')
      .references('id')
      .inTable('technicians')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .unsigned()
    tbl
      .integer('created_by')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable()
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('jobs')
}
