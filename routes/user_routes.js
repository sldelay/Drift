const express = require("express");
const router = express.Router();

let db = require("../models");

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

router.post("/api/newMessage", function (req, res) {
  db.User.create(req.body).then(function (post) {
    res.json(post);
  });
});

router.get("/api/answers/:user", function (req, res) {
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

router.post("/api/answers/:user", function (req, res) {
  db.Answer.create({
    answer: req.body.answer,
  }).then(function (data) {
    res.json(data);
  });
});

router.get("/api/getQuestions", function (req, res) {
  db.Question.findAll({}).then(function (question) {
    res.render("user", {
      question,
    });
  });
});

module.exports = router;
