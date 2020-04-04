require("dotenv").config();
const db = require("./models");

const sqSync = {
  force: true,
};

console.log(process.env.DB_PASSWORD);
db.sequelize.sync(sqSync).then(function () {
  require("./datafixtures/datafixture")();
});
