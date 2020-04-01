const express = require("express");
const router = express.Router();

/* GET home page. SD removed "next" argument */
router.get("/", function (req, res) {
  res.render("index", { title: "Auth0 Webapp sample Nodejs" });
});

module.exports = router;
