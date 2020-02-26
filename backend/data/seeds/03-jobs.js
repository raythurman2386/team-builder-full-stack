exports.seed = async function(knex) {
  await knex('jobs').insert([
    {
      machine: '305E',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 1,
      created_by: 1
    },
    {
      machine: 'D5k',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 1,
      created_by: 1
    },
    {
      machine: '259D',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 1,
      created_by: 1
    },
    {
      machine: '312C',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 2,
      created_by: 1
    },
    {
      machine: '289C',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 2,
      created_by: 1
    },
    {
      machine: '259B',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 3,
      created_by: 1
    },
    {
      machine: '299D2',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 3,
      created_by: 1
    },
    {
      machine: 'D3C',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 4,
      created_by: 1
    },
    {
      machine: '930K',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 4,
      created_by: 1
    },
    {
      machine: '988G',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 5,
      created_by: 1
    },
    {
      machine: '777G',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 5,
      created_by: 1
    }
  ])
}
