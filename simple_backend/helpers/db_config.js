const pg = require("pg");
require("dotenv").config();

const { Pool } = pg;
const { SB_DB_USER, SB_DB_PASSWORD, SB_DB_HOST, SB_DB_PORT, SB_DB_NAME } =
  process.env;

const pool = new Pool({
  user: SB_DB_USER,
  password: SB_DB_PASSWORD,
  host: SB_DB_HOST,
  port: SB_DB_PORT,
  database: SB_DB_NAME,
});

module.exports = pool;
