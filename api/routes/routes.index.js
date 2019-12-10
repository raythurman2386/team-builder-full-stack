const testRoutes = require("./testRoutes");
const userRoutes = require("./userRoutes");

module.exports = server => {
  server.use("/", testRoutes);
  server.use("/api/users", userRoutes);
};
