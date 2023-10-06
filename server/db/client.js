const pg = require("pg");
require("dotenv").config();
console.log(process.env.DATABASE_URL);

const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/my_uni_app_db"
);

module.exports = client;
