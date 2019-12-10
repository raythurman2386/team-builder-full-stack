const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

module.exports = server => {
  server.use(helmet());
  server.use(morgan("short"));
  server.use(cors());
};
