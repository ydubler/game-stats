const { Pool } = require("pg");

const pool = new Pool({
  user: "yuridmitridubler",
  host: "localhost",
  database: "postgres",
  password: "",
  port: 5432
});

const gotPool = new Pool({
  user: "yuridmitridubler",
  host: "localhost",
  database: "gotgames",
  password: "",
  port: 5432
});

module.exports = { pool, gotPool };
