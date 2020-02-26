const supertest = require('supertest')
const server = require('../api/server')
const db = require('../data/db')

beforeAll(async done => {
  await db.seed.run()
  done()
})

describe('register routes', () => {
  test('Register new user', async () => {
    const user = {
      name: 'Test',
      username: 'test',
      email: 'test@test.com',
      password: 'test'
    }

    const res = await supertest(server)
      .post('/api/auth/register')
      .send(user)

    expect(res.status).toBe(201)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('success')
  })
  test('Register user fail name', async () => {
    const user = {
      username: 'test',
      email: 'test@test.com',
      password: 'test'
    }

    const res = await supertest(server)
      .post('/api/auth/register')
      .send(user)

    expect(res.status).toBe(400)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('name')
  })
  test('Register user fail username', async () => {
    const user = {
      name: 'Test',
      email: 'test@test.com',
      password: 'test'
    }

    const res = await supertest(server)
      .post('/api/auth/register')
      .send(user)

    expect(res.status).toBe(400)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('username')
  })
  test('Register user fail email', async () => {
    const user = {
      name: 'Test',
      username: 'test',
      password: 'test'
    }

    const res = await supertest(server)
      .post('/api/auth/register')
      .send(user)

    expect(res.status).toBe(400)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('email')
  })
  test('Register user fail password', async () => {
    const user = {
      name: 'Test',
      username: 'test',
      email: 'test@test.com'
    }

    const res = await supertest(server)
      .post('/api/auth/register')
      .send(user)

    expect(res.status).toBe(400)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('password')
  })
})

describe('Login Route Tests', () => {
  test('should test login success', async () => {
    const res = await supertest(server)
      .post('/api/auth/login')
      .send({ username: 'test1', password: 'test' })

    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.token).toBeDefined()
  })
  test('should fail login username', async () => {
    const res = await supertest(server)
      .post('/api/auth/login')
      .send({ password: 'test' })

    expect(res.status).toBe(400)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('username')
  })
  test('should fail login password', async () => {
    const res = await supertest(server)
      .post('/api/auth/login')
      .send({ username: 'test1' })

    expect(res.status).toBe(400)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('password')
  })
  test('should fail login hash password', async () => {
    const res = await supertest(server)
      .post('/api/auth/login')
      .send({ username: 'test1', password: 'testing' })

    expect(res.status).toBe(401)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toContain('Invalid')
  })
})
