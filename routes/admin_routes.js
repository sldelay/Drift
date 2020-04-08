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
  db.Post.findAll({
    raw: true,
    include: {
      model: db.User,
    },
  }).then(function (post) {
    res.render("postviewAdmin", { post });
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
  db.Answer.findAll({
    include: [
      {
        model: db.Question,
        where: {
          isActive: true,
        },
      },
    ],
    raw: true,
  }).then(function (answer) {
    console.log(answer);
    res.render("answer", {
      answer,
    });
  });
});

router.post("/api/newQuestion", function (req, res) {
  db.Question.create({
    category: req.body.category,
    question: req.body.question,
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

router.get("/api/admin/:id", function (req, res) {
  db.Question.findAll({
    where: {
      id: req.params.id,
    },
  }).then(function (profile) {
    res.render("admin", {
      profile,
    });
  });
});

module.exports = router;
