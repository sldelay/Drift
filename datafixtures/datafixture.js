const questControl = require("../controller/questioncontroller.js");

let questArr = [
  { category: "asdfasdgasgd", question: "sdagasdgsad" },
  { category: "asdgfasdg", question: "asfasdgasdg" },
];

let seedQuestions = function () {
  questArr.forEach((ele) => {
    questControl.createQuestion(ele);
  });
};

module.exports = function () {
  seedQuestions();
};
