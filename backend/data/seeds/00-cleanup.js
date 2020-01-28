
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('jobs').truncate();
  await knex('technicians').truncate();
};

