
exports.up = async function (knex) {
  await knex.schema.createTable('technicians', tbl => {
    tbl.increments('id');
    tbl.string('name').notNullable();
  });

  await knex.schema.createTable('jobs', tbl => {
    tbl.increments('id')
    tbl.string('machine').notNullable;
    tbl.string('complaint')
    tbl
      .integer('tech_id')
      .references('id')
      .inTable('technicians')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('jobs');
  await knex.schema.dropTableIfExists('technicians');
};
