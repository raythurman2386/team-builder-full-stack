const supertest = require('supertest')
const server = require('./server')
const db = require('../data/db')

beforeEach(async () => {
  await db.seed.run();
})

describe("test routes", () => {
  test("Welcome Route", async () => {
    const res = await supertest(server).get('/')

    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toMatch(/API is properly connected/i)
  })

  test("API Route", async () => {
    const res = await supertest(server).get('/api')

    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toContain("Welcome")
  })
})

describe("job routes", () => { })

describe("tech routes", () => { })
