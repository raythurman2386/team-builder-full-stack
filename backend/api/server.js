const express = require('express')
const middleware = require('../middleware')
const routes = require('../router/routes.index')

const server = express()

middleware(server)
routes(server)

module.exports = server
