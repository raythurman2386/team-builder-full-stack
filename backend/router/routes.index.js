const authRouter = require('../auth/auth-router')
const testRoutes = require('./testRoutes')
const techRouter = require('./techRoutes')
const jobsRouter = require('./jobRouter')
const restricted = require('../middleware/restricted')

module.exports = server => {
  server.use('/api/auth', authRouter)
  server.use('/api/technicians', restricted(), techRouter)
  server.use('/api/jobs', restricted(), jobsRouter)
  server.use('/', testRoutes)
}
