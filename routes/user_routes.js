const express = require("express");
const router = express.Router();

let db = require("../models");

module.exports = function () {
  // Route for getting all personal posts
  router.get("/api/posts/:user", function (req, res) {
    let query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Post.findAll({
      where: query,
      include: [db.User],
    }).then(function (post) {
      res.render("user", {
        post,
      });
    });
  });

  // Route for employees to send feedback to specified admin
  router.post("/api/newMessage", function (req, res) {
    db.User.create(req.body).then(function (post) {
      res.render("user", {
        post,
      });
    });
  });

  router.post("/api/posts/:user", function (req, res) {
    db.Drift_DB.findAll({
      where: {
        id: req.params.id,
      },
    }).then(function (post) {
      res.render("user", {
        post,
      });
    });
  });
};
