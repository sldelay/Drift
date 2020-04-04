const questControl = require("../controller/questioncontroller.js");

let questArr = [
  { category: "asdfasdgasgd", question: "sdagasdgsad" },
  { category: "asdgfasdg", question: "asfasdgasdg" },
];

let seedQuestions = function () {
  for (const ele of questArr) {
    questControl.createQuestion(ele);
  }
};

module.exports = function () {
  seedQuestions();
};
