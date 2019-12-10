const express = require("express");
let db = require("../../data/db");

const router = express.Router();

// Test routes
router.get("/", (req, res) => {
  res.status(200).json({ message: "API is properly connected" });
});

router.get("/api", (req, res) => {
  res.status(200).json({ message: "Welcome To the Team Builder API!" });
});

module.exports = router;
