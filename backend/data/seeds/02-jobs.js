
exports.seed = async function (knex) {
  await knex('jobs').insert([
    {
      machine: '259d',
      complaint: 'PM',
      tech_id: 1
    },
    {
      machine: '308E',
      complaint: 'Leak',
      tech_id: 1
    },
    {
      machine: 'D5K',
      complaint: 'DEF in HYD',
      tech_id: 1
    },
    {
      machine: '259d',
      complaint: 'PM',
      tech_id: 2
    },
    {
      machine: '308E',
      complaint: 'Leak',
      tech_id: 2
    },
    {
      machine: 'D5K',
      complaint: 'DEF in HYD',
      tech_id: 2
    },
    {
      machine: '259d',
      complaint: 'PM',
      tech_id: 3
    },
    {
      machine: '308E',
      complaint: 'Leak',
      tech_id: 3
    },
    {
      machine: 'D5K',
      complaint: 'DEF in HYD',
      tech_id: 3
    },
    {
      machine: '259d',
      complaint: 'PM',
      tech_id: 4
    },
    {
      machine: '308E',
      complaint: 'Leak',
      tech_id: 4
    },
    {
      machine: 'D5K',
      complaint: 'DEF in HYD',
      tech_id: 4
    },
    {
      machine: '259d',
      complaint: 'PM',
      tech_id: 5
    },
    {
      machine: '308E',
      complaint: 'Leak',
      tech_id: 5
    },
    {
      machine: 'D5K',
      complaint: 'DEF in HYD',
      tech_id: 5
    },
    {
      machine: 'D5K',
      complaint: 'DEF in HYD',
      tech_id: null
    },
    {
      machine: 'D5K',
      complaint: 'DEF in HYD',
      tech_id: null
    },
  ])
};
