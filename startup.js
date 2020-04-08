const db = require("./models");

module.exports = function () {
  db.User.findOrCreate({
    where: {
      name: "Tania",
      email: "samuel.delay@gmail.com",
      admin: true,
      owner: true,
    },
  });
};
