// Import the Pool object from the "pg" module
// The Pool object allows us to create appropriate credentials to access a PostggreSQL database
const { Pool } = require("pg");

// Create a new Pool object which contains the access credentials.
// This pool is used to access one specific database named "gotgames".
// The "gotgames" database contains all of the information we want.
const gotPool = new Pool({
  user: "yuridmitridubler",
  host: "localhost",
  database: "gotgames",
  password: "",
  port: 5432
});

module.exports = { gotPool };
