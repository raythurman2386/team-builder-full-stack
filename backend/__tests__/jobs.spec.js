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
    expect(res.body.machine).toBe('259d')
  })

  test('add job', async () => {
    const job = {
      machine: 'test',
      complaint: 'test',
      tech_id: 1
    }

    const res = await supertest(server)
      .post('/api/jobs')
      .send(job)
      .set('authorization', token)

    expect(res.status).toBe(201)
    expect(res.type).toBe('application/json')
    expect(res.body.id).toBe(18)
  })

  test('update job', async () => {
    const updated = {
      id: 1,
      machine: 'testing',
      complaint: 'testing',
      tech_id: 1
    }

    const res = await supertest(server)
      .put('/api/jobs/1')
      .send(updated)
      .set('authorization', token)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.machine).toBe('testing')
  })

  test('delete job', async () => {
    const res = await supertest(server)
      .delete('/api/jobs/1')
      .set('authorization', token)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toMatch(/deleted/i)
  })
})


