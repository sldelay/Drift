const db = require("../models");

const express = require("express");
const router = express.Router();

router.get("/api/companies", function (req, res) {
  db.Post.findAll({}).then(function (post) {
    res.json("company", {
      post,
    });
  });
});

router.post("/api/newCompany", function (req, res) {
  db.Company.findOrCreate({
    where: {
      name: req.body.name,
    },
  }).then(function () {
    db.User.findOrCreate({
      where: {
        name: req.body.ownerName,
        email: req.body.email,
        admin: true,
        owner: true,
      },
    }).then(function (data) {
      res.json(data);
    });
  });
});

module.exports = router;
