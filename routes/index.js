const express = require("express");
const router = express.Router();
const db = require("../models");

db.User.findOne({}).then(function (user) {
  console.log(user);
});
console.log("ran");

/* GET home page. SD removed "next" argument */
router.get("/", function (req, res) {
  res.render("index", {});
});

module.exports = router;
