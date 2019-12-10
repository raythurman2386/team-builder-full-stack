const express = require("express");
let db = require("../../data/db");

const router = express.Router();
// GET request to /api/users
router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Team Builder!" });
});

module.exports = router;
