let path = require("path");
// const db = require("../models");
const express = require("express");
const router = express.Router();
// Routes
// =============================================================
router.get("/instructions", function (req, res) {
  res.render(path.join(__dirname, "../views/instructions.handlebars"));
});

router.get("/about", function (req, res) {
  res.render(path.join(__dirname, "../views/about.handlebars"));
});

router.get("/contact", function (req, res) {
  res.render(path.join(__dirname, "../views/contact.handlebars"));
});
module.exports = router;
