// implement your API here
const express = require("express");
const cors = require("cors");
let db = require("./data/db");
const server = express();
const host = "127.0.0.1";
const port = 5000;

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("Hello from Express");
});

// GET request to /api/users
// Returns array of all user objects contained
server.get("/api/users", (req, res) => {
  db.find().then(data => {
    res.status(200).json(data);
  });
});

// GET request to /api/users/:id
// returns the user with specified id
server.get("/api/users/:id", (req, res) => {
  db.findById(req.params.id).then(user => {
    if (!user) {
      res.status(404).json({ error: "User not found..." });
    } else {
      res.status(200).json(user);
    }
  });
});

// POST request to /api/users
// Creates a user using the info sent inside the request body
server.post("/api/users", (req, res) => {});

// DELETE request to /api/users/:id
// Deletes specified user
server.delete("/api/users/:id", (req, res) => {
  db.findById(req.params.id).then(user => {
    if (!user) {
      res.status(404).json({ error: "User not found..." });
    } else {
      db.remove(req.params.id).then(i => res.status(200).json(user));
    }
  });
});

// PUT request to /api/users/:id
// updates the specified user with info from request body
server.put("/api/users:id", (req, res) => {});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
