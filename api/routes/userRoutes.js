// @ts-nocheck
const express = require("express");
let db = require("../../data/db");
const {
  validateUser,
  validateUserId
} = require("../middleware/validateUserId");

const router = express.Router();
// GET request to /api/users
router.get("/", (req, res) => {
  db.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
});

// GET request to /api/users/:id
router.get("/:id", validateUserId(), (req, res) => {
  res.status(200).json(req.user);
});

// POST request to /api/users
router.post("/", validateUser(), (req, res, next) => {
  db.insert(req.user)
    .then(user => {
      res
        .status(200)
        .json({ addedUser: req.user, message: "You added a user!" });
    })
    .catch(err => next(err));
});

// DELETE request to /api/users/:id
router.delete("/:id", validateUserId(), (req, res) => {
  db.remove(req.params.id).then(i => res.status(200).json(req.user));
});

// PUT request to /api/users/:id
router.put("/:id", validateUserId(), validateUser(), (req, res) => {
  db.update(req.params.id, req.user)
    .then(user => {
      res.json(req.user);
    })
    .catch(err => next(err));
});

module.exports = router;
