const express = require("express");
const router = express.Router();
const path = require("path");

// Endpoint to return the notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Endpoint to return the index.html file for all other routes
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;

