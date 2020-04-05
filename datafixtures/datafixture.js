const questControl = require("../controller/controller.js");

let questArr = [
  { category: "asdfasdgasgd", question: "sdagasdgsad" },
  { category: "asdgfasdg", question: "asfasdgasdg" },
];

let postArr = [
  {
    subject: "Hey there",
    category: "managment",
    content: "Management sucks",
    userId: 4,
  },
  {
    subject: "Hey there",
    category: "hours",
    content: "Hours sucks",
    userId: 3,
  },
  {
    subject: "Hey there",
    category: "coworker",
    content: "Coworker is great",
    userId: 2,
  },
  {
    subject: "Hey there",
    category: "coworker",
    content: "Coworker sucks",
    userId: 3,
  },
  {
    subject: "Hey there",
    category: "managment",
    content: "Management is great",
    userId: 4,
  },
  {
    subject: "Hey there",
    category: "hours",
    content: "Hours are great",
    userId: 2,
  },
];

let userArr = [
  { name: "Bob Williams", email: "bob@gmail.com", admin: true },
  { name: "Sam Delay", email: "sam@gmail.com", admin: false },
  { name: "Alyssa Williams", email: "alyssa@gmail.com", admin: false },
  { name: "Mike", email: "mike@gmail.com", admin: false },
  { name: "Bobby", email: "bobby@gmail.com", admin: true },
];

const seedQuestions = function () {
  return new Promise((res, rej) => {
    let promArr = [];
    for (const ele of questArr) {
      promArr.push(questControl.createQuestion(ele));
    }
    Promise.all(promArr).then(res).catch(rej);
  });
};

const seedPosts = function () {
  return new Promise((res, rej) => {
    let promArr = [];
    for (const ele of postArr) {
      promArr.push(questControl.createPost(ele));
    }
    Promise.all(promArr).then(res).catch(rej);
  });
};

const seedUser = function () {
  return new Promise((res, rej) => {
    let promArr = [];
    for (const ele of userArr) {
      promArr.push(questControl.createUser(ele));
    }
    Promise.all(promArr).then(res).catch(rej);
  });
};

module.exports = function () {
  seedQuestions()
    .then(() => {
      return seedUser();
    })
    .then(() => {
      return seedPosts();
    });
};
