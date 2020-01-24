require('dotenv').config()
if (process.env.NODE_ENV === "test") {
  exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('jobs').truncate();
    await knex('technicians').truncate();
  };
} else {
  exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('jobs').del();
    await knex('technicians').del();
  };
}
