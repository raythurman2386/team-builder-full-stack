
exports.up = async function (knex) {
  return await knex.schema.createTable('technicians', tbl => {
    tbl.increments();
    tbl.text('name', 128).notNullable();
  })
};

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists('technicians')
};
