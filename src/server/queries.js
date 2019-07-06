const { Pool } = require("pg");

const pool = new Pool({
  user: "hidden",
  host: "localhost",
  database: "hidden",
  password: "hidden",
  port: 5432
});

const gotPool = new Pool({
  user: "hidden",
  host: "localhost",
  database: "hidden",
  password: "hidden",
  port: 5432
});

module.exports = { pool, gotPool };
