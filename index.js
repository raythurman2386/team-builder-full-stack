// implement your API here
// code away!
require("dotenv").config();
const server = require("./api/server");

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`);
});
