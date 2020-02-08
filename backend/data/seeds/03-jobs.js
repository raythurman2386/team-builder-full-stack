exports.seed = async function(knex) {
  await knex('jobs').insert([
    {
      machine: '259D',
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
      machine: '259D',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 1,
      created_by: 1
    },
    {
      machine: '259D',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 2,
      created_by: 1
    },
    {
      machine: '259D',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 2,
      created_by: 1
    },
    {
      machine: '259D',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 3,
      created_by: 1
    },
    {
      machine: '259D',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 3,
      created_by: 1
    },
    {
      machine: '259D',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 4,
      created_by: 1
    },
    {
      machine: '259D',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 4,
      created_by: 1
    },
    {
      machine: '259D',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 5,
      created_by: 1
    },
    {
      machine: '259D',
      complaint: 'PM',
      serial_number: 'asdfasdf',
      tech_id: 5,
      created_by: 1
    }
  ])
}
