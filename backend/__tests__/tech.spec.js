const supertest = require('supertest')
const server = require('../api/server')
const db = require('../data/db')

beforeEach(async () => {
  await db.seed.run()
})

describe('tech routes', () => {
  test('get techs route', async () => {
    const res = await supertest(server).get('/api/technicians')

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.length).toBeGreaterThan(0)
  })

  test('get tech by id', async () => {
    const res = await supertest(server).get('/api/technicians/1')

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.name).toMatch(/herb/i)
  })

  test('get tech jobs', async () => {
    const res = await supertest(server).get('/api/technicians/1/jobs')

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.length).toBeGreaterThan(0)
  })

  test('add tech', async () => {
    const tech = { name: 'test' }
    const res = await supertest(server)
      .post('/api/technicians')
      .send(tech)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    // expect(res.body[0]).toBe(7)
  })
})