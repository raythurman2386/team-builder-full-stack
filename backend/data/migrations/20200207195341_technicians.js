exports.up = async function(knex) {
  await knex.schema.createTable('technicians', tbl => {
    tbl.increments('id')
    tbl.string('name').notNullable()
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('technicians')
}
