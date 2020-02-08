exports.seed = async function(knex) {
  await knex('technicians').insert([
    { name: 'Herb' },
    { name: 'Josh' },
    { name: 'Jason' },
    { name: 'Devon' },
    { name: 'Noah' },
    { name: 'Brady' },
    { name: 'Eddy' }
  ])
}
