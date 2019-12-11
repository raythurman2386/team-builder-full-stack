const express = require("express");
const middleware = require("./middleware");
const routes = require("./routes/routes.index");
const { routeError, serverError } = require("./middleware/errors");

const server = express();

server.use(express.json());
middleware(server);
routes(server);
server.use(routeError());
server.use(serverError());

module.exports = server;
