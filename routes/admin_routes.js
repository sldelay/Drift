const db = require("../models");

const express = require("express");
const router = express.Router();

// Renders all posts to the admin page
router.get("/api/posts", function (req, res) {
  db.Post.findAll({
    raw: true,
    where: {
      archived: false,
    },
    include: {
      model: db.User,
    },
    order: [["updatedAt", "DESC"]],
  }).then(function (post) {
    res.render("postviewAdmin", { post });
  });
});

///// >>>> FUTURE DEV
// router.get("/api/adminPosts/:user", function (req, res) {
//   db.User.findOne({
//     where: {
//       name: req.params.user,
//     },
//     include: {
//       model: db.Post,
//     },
//   }).then(function (post) {
//     res.render("admin", {
//       post,
//     });
//   });
// });

///// >>>> FUTURE DEV
// router.get("/api/posts/:category", function (req, res) {
//   db.Post.findAll({
//     where: {
//       category: req.params.category,
//     },
//   }).then(function (post) {
//     res.render("admin", {
//       post,
//     });
//   });
// });

// Renders all employee answers to the admin page
router.get("/api/getAnswers", function (req, res) {
  db.Question.findAll({
    where: {
      isActive: true,
    },
    include: [
      {
        model: db.Answer,
        include: [db.User],
      },
    ],
    raw: true,
    order: [["updatedAt", "DESC"]],
  }).then(function (question) {
    let currentQuestId = 0;
    let questIndex = -1;
    const questArr = [];
    question.forEach((ele) => {
      let answerObj = {
        value: ele["Answers.value"],
        userName: ele["Answers.User.name"],
      };
      if (ele.id !== currentQuestId) {
        let obj = {
          id: ele.id,
          category: ele.category,
          question: ele.question,
          answers: [answerObj],
        };

        questArr.push(obj);
        currentQuestId = ele.id;
        questIndex++;
      } else {
        questArr[questIndex].answers.push(answerObj);
      }
    });
    console.log(questArr);
    res.render("answer", {
      questArr,
    });
  });
});

// creates a new question
router.post("/api/newQuestion", function (req, res) {
  db.Question.create({
    category: req.body.category,
    question: req.body.question,
  }).then(function (data) {
    res.json(data);
  });
});

// creates a new user
router.post("/api/newUser", function (req, res) {
  db.User.create({
    name: req.body.name,
    email: req.body.email,
    admin: req.body.admin,
  }).then(function (data) {
    res.json(data);
  });
});

// Archive Post
router.put("/api/archivePost/:id", function (req, res) {
  db.Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(function (data) {
    res.json(data);
  });
});

// makes a question inactive
router.put("/api/inactiveQuestion/:id", function (req, res) {
  db.Question.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(function (data) {
    res.json(data);
  });
});

///// >>>> FUTURE DEV
// router.get("/api/admin/:id", function (req, res) {
//   db.Question.findAll({
//     where: {
//       id: req.params.id,
//     },
//   }).then(function (profile) {
//     res.render("admin", {
//       profile,
//     });
//   });
// });

module.exports = router;
