const questControl = require("../controller/controller.js");

let questArr = [
  {
    category: "Hours",
    question:
      "Bacon ipsum dolor amet porchetta chicken boudin, brisket tail pig tenderloin rump cupim strip steak t-bone meatball sausage. Turducken leberkas tail pancetta.",
  },
  {
    category: "Worklife",
    question:
      "Capicola ribeye pork loin, pancetta ground round bacon sausage swine pork tail meatloaf.",
  },
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
  { name: "Bob Williams", email: "bob@gmail.com", admin: true, compId: 2 },
  { name: "Sam Delay", email: "sam@gmail.com", admin: false, compId: 1 },
  {
    name: "Alyssa Williams",
    email: "alyssa@gmail.com",
    admin: false,
    compId: 1,
  },
  { name: "Mike", email: "mike@gmail.com", admin: false, compId: 2 },
  { name: "Bobby", email: "bobby@gmail.com", admin: true, compId: 1 },
];

let answerArr = [
  { value: 3, questId: 1, userId: 2 },
  { value: 4, questId: 2, userId: 3 },
  { value: 2, questId: 1, userId: 3 },
  { value: 5, questId: 2, userId: 2 },
  { value: 5, questId: 2, userId: 1 },
  { value: 4, questId: 1, userId: 1 },
  { value: 3, questId: 1, userId: 4 },
];

let companyArr = [{ name: "Union Coffee Co." }, { name: "Flight Coffee Co." }];

const seedAnswers = function () {
  return new Promise((res, rej) => {
    let promArr = [];
    for (const ele of answerArr) {
      promArr.push(questControl.createAnswer(ele));
    }
    Promise.all(promArr).then(res).catch(rej);
  });
};

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

const seedCompanies = function () {
  return new Promise((res, rej) => {
    let promArr = [];
    for (const ele of companyArr) {
      promArr.push(questControl.createCompany(ele));
    }
    Promise.all(promArr).then(res).catch(rej);
  });
};

module.exports = function () {
  seedCompanies()
    .then(() => {
      return seedQuestions();
    })
    .then(() => {
      return seedUser();
    })
    .then(() => {
      return seedPosts();
    })
    .then(() => {
      return seedAnswers();
    });
};
