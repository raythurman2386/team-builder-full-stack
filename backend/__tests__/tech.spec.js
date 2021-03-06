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

describe('tech routes', () => {
  test('get techs route', async () => {
    const res = await supertest(server)
      .get('/api/technicians')
      .set('authorization', token)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.length).toBeGreaterThan(0)
  })

  test('get tech by id', async () => {
    const res = await supertest(server)
      .get('/api/technicians/1')
      .set('authorization', token)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.name).toMatch(/herb/i)
  })

  test('get tech by id fail', async () => {
    const res = await supertest(server)
      .get('/api/technicians/100')
      .set('authorization', token)

    expect(res.status).toBe(404)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('There is no tech')
  })

  test('get tech jobs', async () => {
    const res = await supertest(server)
      .get('/api/technicians/1/jobs')
      .set('authorization', token)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.length).toBeGreaterThan(0)
  })

  test('get no tech jobs', async () => {
    const res = await supertest(server)
      .get('/api/technicians/6/jobs')
      .set('authorization', token)

    expect(res.status).toBe(400)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('no jobs')
  })

  test('add tech', async () => {
    const tech = { name: 'test' }
    const res = await supertest(server)
      .post('/api/technicians')
      .send(tech)
      .set('authorization', token)

    expect(res.status).toBe(201)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toMatch(/technician added/i)
  })

  test('add tech error', async () => {
    const tech = {}
    const res = await supertest(server)
      .post('/api/technicians')
      .send(tech)
      .set('authorization', token)

    expect(res.status).toBe(400)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('tech name')
  })
})
