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
server.get("/api/users", (req, res) => {
  db.find().then(data => {
    if (!data) {
      res.status(500).json({
        errorMessage: "There was an error while saving the user to the database"
      });
    } else {
      res.status(200).json(data);
    }
  });
});

// GET request to /api/users/:id
server.get("/api/users/:id", (req, res) => {
  db.findById(req.params.id).then(user => {
    if (!user) {
      res
        .status(404)
        .json({ message: "The user with the specified ID does not exist." });
    } else {
      res.status(200).json(user);
    }
  });
});

// POST request to /api/users
server.post("/api/users", (req, res) => {
  if (!req.body.name || !req.body.bio) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }

  const newUser = {
    name: req.body.name,
    bio: req.body.bio,
    created_at: Date.now(),
    updated_at: Date.now()
  };

  db.insert(newUser).then(user => {
    res
      .status(200)
      .json({ user, addedUser: newUser, message: "You added a user!" });
  });
});

// DELETE request to /api/users/:id
server.delete("/api/users/:id", (req, res) => {
  db.findById(req.params.id).then(user => {
    if (!user) {
      res
        .status(404)
        .json({ message: "The user with the specified ID does not exist." });
    } else {
      db.remove(req.params.id).then(i => res.status(200).json(user));
    }
  });
});

// PUT request to /api/users/:id
// server.put("/api/users:id", (req, res) => {
//   if (!req.body.name || !req.body.bio) {
//     return res
//       .status(400)
//       .json({ message: "Please provide a name and a bio for the user" });
//   }

//   db.update(req.params.id, req.body)
//     .then(user => {
//       return user !== 0
//         ? res.status(200).json({ ...req.body })
//         : res.status(404).json({ message: "That user does not exist!" });
//     })
//     .catch(() => {
//       return res
//         .status(500)
//         .json({ error: "The user information could not be modified." });
//     });
// });

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
