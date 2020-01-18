const testRoutes = require("./testRoutes");
const techRouter = require('./techRoutes');
const jobsRouter = require('./jobRouter');

module.exports = server => {
  server.use("/", testRoutes);
  server.use("/api/technicians", techRouter);
  server.use('/api/jobs', jobsRouter);
};
