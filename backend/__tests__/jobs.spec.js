const supertest = require('supertest')
const server = require('../api/server')
const db = require('../data/db')

beforeEach(async () => {
  await db.seed.run()
})

describe('job routes', () => {
  test('get jobs route', async () => {
    const res = await supertest(server).get('/api/jobs')

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.length).toBeGreaterThan(0)
  })

  test('get job by id', async () => {
    const res = await supertest(server).get('/api/jobs/1')

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

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.machine).toBe('testing')
  })

  test('delete job', async () => {
    const res = await supertest(server).delete('/api/jobs/1')

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toMatch(/deleted/i)
  })
})


