const express = require("express");
const router = express.Router();
const secured = require('../lib/middleware/secured');

let db = require("../models");

// creates a new employee post
router.post("/api/newMessage", function (req, res) {
  db.Post.create({
    subject: req.body.subject,
    category: req.body.category,
    content: req.body.content,
    UserId: req.body.userId,
    private: false,
  }).then(function (data) {
    res.json(data);
  });
});

///// >>>> FUTURE DEV
// router.get("/api/answers/:user", function (req, res) {
//   db.Drift_DB.findAll({
//     where: {
//       id: req.params.id,
//     },
//   }).then(function (post) {
//     res.render("user", {
//       post,
//     });
//   });
// });

// logs all employee answers in the answer model
router.post("/api/answers", secured(), function (req, res) {
  const { _raw, _json, ...userProfile } = req.user;
  console.log(req.user._json.email);
  db.User.findOne({
    where: {
      email: req.user._json.email,
    },
    raw: true,
  }).then(function (user) {
    let answerArr = req.body.data;
    let id = user.id;
    const seedAnswers = function (data) {
      return db.Answer.create({
        value: data.value,
        QuestionId: data.name,
        UserId: id,
      });
    }
    const insertAnswers = function () {
      return new Promise((res, rej) => {
        let promArr = [];
        for (const ele of answerArr) {
          promArr.push(seedAnswers(ele));
        }
        Promise.all(promArr).then(res).catch(rej);
      });
    };
    insertAnswers().then( function (data) {
      res.json(data);
    })
  });
});


// renders all questions to the employee page
router.get("/api/getQuestions", function (req, res) {
  db.Question.findAll({
    where: {
      isActive: true,
    },
    raw: true,
    order: [["updatedAt", "DESC"]],
  }).then(function (question) {
    res.render("question", {
      question,
      user
    });
  });
});

// renders all of the employees past post to their page
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
        UserId: id,
        archived: false,
      },
      include: {
        model: db.User,
      },
      raw: true,
      order: [["updatedAt", "DESC"]],
    }).then(function (post) {
      console.log(post)
      res.render("postviewEmp", { post })
    });
  });
});

module.exports = router;
