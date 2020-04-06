const express = require("express");
const router = express.Router();

router.get("/instructions", function (req, res) {
  res.render("instructions", {});
});

router.get("/about", function (req, res) {
  res.render("about", {});
});

module.exports = router;
