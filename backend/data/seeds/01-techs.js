
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('technicians').insert([
    { name: 'Herb' },
    { name: 'Jason' },
    { name: 'Josh' },
    { name: 'Devon' },
    { name: 'Noah' },
    { name: 'Brady' }
  ])
};
