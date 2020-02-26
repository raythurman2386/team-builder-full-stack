const testRouter = require('express').Router()

// Test routes
testRouter
  .get('/', (req, res) => {
    res.status(200).json({ message: 'API is properly connected' })
  })
  .get('/api', (req, res) => {
    res.status(200).json({ message: 'Welcome To the Team Builder API!' })
  })

module.exports = testRouter
