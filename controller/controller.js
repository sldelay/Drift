let db = require("../models");

module.exports = {
  createQuestion: (data) => {
    return db.Question.create({
      category: data.category,
      question: data.question,
    });
  },
  createUser: (data) => {
    return db.User.create({
      name: data.name,
      email: data.email,
      admin: data.admin,
      CompanyId: data.compId,
    });
  },
  createCompany: (data) => {
    return db.Company.create({
      name: data.name,
    });
  },
  createPost: (data) => {
    return db.Post.create({
      subject: data.subject,
      category: data.category,
      content: data.content,
      UserId: data.userId,
    });
  },
  createAnswer: (data) => {
    return db.Answer.create({
      value: data.value,
      QuestionId: data.questId,
      UserId: data.userId,
    });
  },
};
