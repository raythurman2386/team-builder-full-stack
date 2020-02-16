const supertest = require('supertest')
const server = require('../api/server')
const db = require('../data/db')

beforeEach(async done => {
  await db.seed.run()
  done()
})

let token = ''

beforeAll(done => {
  supertest(server)
    .post('/api/auth/login')
    .send({ username: 'test1', password: 'test' })
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        token = res.body.token
        done()
      }
    })
})

describe('job routes', () => {
  test('get jobs route', async () => {
    const res = await supertest(server)
      .get('/api/jobs')
      .set('authorization', token)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.length).toBeGreaterThan(0)
  })

  test('get job by id', async () => {
    const res = await supertest(server)
      .get('/api/jobs/1')
      .set('authorization', token)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.machine).toMatch(/259d/i)
  })

  test('get job by id fail', async () => {
    const res = await supertest(server)
      .get('/api/jobs/100')
      .set('authorization', token)

    expect(res.status).toBe(404)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('Job not found')
  })

  test('add job', async () => {
    const job = {
      machine: 'test',
      complaint: 'test',
      tech_name: 'Herb',
      serial_number: 'ababababab',
      created_by: 1
    }

    const res = await supertest(server)
      .post('/api/jobs')
      .send(job)
      .set('authorization', token)

    expect(res.status).toBe(201)
    expect(res.type).toBe('application/json')
    expect(res.body[0].id).toBe(12)
  })

  test('add job fail', async () => {
    const job = {
      complaint: 'test',
      tech_name: 'Herb',
      serial_number: 'ababababab',
      created_by: 1
    }

    const res = await supertest(server)
      .post('/api/jobs')
      .send(job)
      .set('authorization', token)

    expect(res.status).toBe(400)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('Please provide')
  })

  test('add job fail by tech name', async () => {
    const job = {
      machine: 'testing',
      complaint: 'test',
      tech_name: 'bob',
      serial_number: 'ababababab',
      created_by: 1
    }

    const res = await supertest(server)
      .post('/api/jobs')
      .send(job)
      .set('authorization', token)

    expect(res.status).toBe(404)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('no tech')
  })

  test('update job', async () => {
    const job = {
      machine: 'testing',
      complaint: 'test',
      tech_name: 'Herb',
      created_by: 1
    }

    const res = await supertest(server)
      .put('/api/jobs/1')
      .send(job)
      .set('authorization', token)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('updated')
  })

  test('update job fail', async () => {
    const job = {
      machine: 'testing',
      complaint: 'test',
      tech_name: 'bob',
      created_by: 1
    }

    const res = await supertest(server)
      .put('/api/jobs/1')
      .send(job)
      .set('authorization', token)

    expect(res.status).toBe(404)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('no tech')
  })

  test('delete job', async () => {
    const res = await supertest(server)
      .delete('/api/jobs/1')
      .set('authorization', token)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toMatch(/deleted/i)
  })

  test('delete job fail', async () => {
    const res = await supertest(server)
      .delete('/api/jobs/100')
      .set('authorization', token)

    expect(res.status).toBe(404)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('Job not found')
  })
})


