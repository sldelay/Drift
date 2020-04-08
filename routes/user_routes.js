const express = require("express");
const router = express.Router();
const secured = require('../lib/middleware/secured');

let db = require("../models");

// Route for getting all personal posts

router.get("/api/myposts/:id", function (req, res) {
  console.log(req.params.id);
  db.Post.findOne({
    where: {
      UserId: req.params.id,
    },
    raw: true,
  }).then(function (post) {
    console.log(post)
    res.render("postviewEmp", {
      post,
    });
  });
});

router.post("/api/newMessage", function (req, res) {
  db.Post.create({
    where: {
      subject: req.body.subject,
      category: req.body.category,
      content: req.body.content,
      private: false,
    },
  }).then(function (data) {
    res.json(data);
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
  db.Question.findAll({
    raw: true,
  }).then(function (question) {
    res.render("question", {
      question,
    });
  });
});

router.get('/findUserPost', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  console.log(req.user._json.email);
  db.User.findOne({
    where: {
      email: req.user._json.email,
    },
    raw: true,
  }).then(function (profile) {
    let id = profile.id
    db.Post.findAll({
      where: {
        UserId: id
      },
      include: {
        model: db.User,
      },
      raw: true,
    }).then(function (post) {
      console.log(post)
      res.render("postviewEmp", { post })
    });
  });
});

module.exports = router;
