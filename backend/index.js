require('dotenv').config()
const server = require('./api/server')

const port = process.env.PORT || 4000

server.use((req, res, next) => {
  return res.status(404).json({ message: 'That route does not exist' })
})

server.use((err, req, res, next) => {
  console.log(err)
  return res.status(500).json(err)
})

server.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
