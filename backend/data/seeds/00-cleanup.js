
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('jobs').del();
  await knex.raw('TRUNCATE TABLE jobs RESTART IDENTITY CASCADE')
  await knex('technicians').del();
  await knex.raw('TRUNCATE TABLE technicians RESTART IDENTITY CASCADE')
};

