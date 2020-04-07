const express = require("express");
const router = express.Router();

router.get("/instructions", function (req, res) {
  res.render("instructions", {});
});

router.get("/about", function (req, res) {
  res.render("about", {});
});

router.get("/contact", function (req, res) {
  res.render("contact", {});
});

module.exports = router;
