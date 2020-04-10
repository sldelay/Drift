require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql",
  },
  production: {
    username: process.env.HR_USER,
    password: process.env.HR_PASSWORD,
    database: process.env.HR_NAME,
    host: process.env.HR_HOST,
    port: 3306,
    dialect: "mysql",
  },
};
