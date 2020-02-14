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
    const res = await supertest(server).get('/api/technicians/1').set('authorization', token)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.name).toMatch(/herb/i)
  })

  test('get tech jobs', async () => {
    const res = await supertest(server)
      .get('/api/technicians/1/jobs')
      .set('authorization', token)

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.length).toBeGreaterThan(0)
  })

  test('add tech', async () => {
    const tech = { name: 'test' }
    const res = await supertest(server)
      .post('/api/technicians')
      .send(tech)
      .set('authorization', token)

    expect(res.status).toBe(201)
    expect(res.type).toBe('application/json')
    // expect(res.body[0]).toBe(7)
  })
})