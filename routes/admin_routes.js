// "/api/posts" (gets all posts from db and renders /admin)
// "/api/adminPosts/:user" (gets one employees posts from db and renders /admin)
// "/api/posts/:category" (gets all category post from db and renders /admin)
// "/api/newUser" (creates a new user and renders /admin)
// "/api/newQuestion" (creates a new question and renders /admin)
// "/api/getAnswers" (gets all answers from db and renders /admin)

const db = require("../models");

const express = require("express");
const router = express.Router();

router.get("/api/posts", function (req, res) {
  db.Post.findAll({}).then(function (post) {
    res.render("admin", {
      post,
    });
  });
});

router.get("/api/adminPosts/:user", function (req, res) {
  db.User.findOne({
    where: {
      name: req.params.user,
    },
    include: {
      model: db.Post,
    },
  }).then(function (post) {
    res.render("admin", {
      post,
    });
  });
});

router.get("/api/posts/:category", function (req, res) {
  db.Post.findAll({
    where: {
      category: req.params.category,
    },
  }).then(function (post) {
    res.render("admin", {
      post,
    });
  });
});

router.get("/api/getAnswers", function (req, res) {
  db.Question.findAll({
    where: {
      isActive: true,
    },
    include: {
      model: db.Answer,
    },
  }).then(function (answer) {
    res.render("admin", {
      answer,
    });
  });
});

router.post("/api/newQuestion", function (req, res) {
  db.Question.create({
    category: req.body.category,
    question: req.body.category,
  }).then(function (data) {
    res.json(data);
  });
});

router.post("/api/newUser", function (req, res) {
  db.User.create({
    name: req.body.name,
    email: req.body.email,
    admin: req.body.admin,
  }).then(function (data) {
    res.json(data);
  });
});

module.exports = router;
