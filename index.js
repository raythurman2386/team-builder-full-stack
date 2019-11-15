// implement your API here
const express = require("express");
const cors = require("cors");
const database = require("./data/db");
const server = express();
const port = 5000;

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("Hello from Express");
});

// POST request to /api/users
// Creates a user using the info sent inside the request body
server.post("/api/users", (req, res) => {});

// GET request to /api/users
// Returns array of all user objects contained
server.get("/api/users", (req, res) => {});

// GET request to /api/users/:id
// returns the user with specified id
server.get("/api/users/:id", (req, res) => {});

// DELETE request to /api/users/:id
// Deletes specified user
server.delete("/api/users/:id", (req, res) => {});

// PUT request to /api/users/:id
// updates the specified user with info from request body
server.put("/api/users:id", (req, res) => {});

server.listen(port, () => {
  console.log(`Server running on http://locahost:${port}`);
});
