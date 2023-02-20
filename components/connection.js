const { createPool } = require("mysql");
require("dotenv").config();

const pool = createPool({
  user: process.env.SERVER_USER,
  password: process.env.SERVER_PASSWORD,
  host: process.env.SERVER,
  database: process.env.SERVER_DB,
  port: 3306,
  connectionLimit: 10,
});

module.exports = pool;
