let db = require("../models");

module.exports = {
  createQuestion: (data) => {
    return db.Question.create({
      category: data.category,
      question: data.question,
    });
  },
};
