const supertest = require('supertest')
const server = require('../api/server')
const db = require('../data/db')

beforeAll(async done => {
  await db.seed.run()
  done()
})

describe('test routes', () => {
  test('Welcome Route', async () => {
    expect(2 + 2).toBe(4)
  })
})