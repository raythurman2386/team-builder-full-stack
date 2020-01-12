const testRoutes = require("./testRoutes");

module.exports = server => {
  server.use("/", testRoutes);
};
