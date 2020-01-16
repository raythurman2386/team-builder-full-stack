
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('jobs').del();
  await knex('technicians').del();
};
