var { Sequelize } = require("sequelize");

const database = new Sequelize("db_kerissumenep", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = database;
