// CRITICAL IMPORTS
import express from "express"; // import express (easy server setup module)
import React from "react"; // import react
import ReactDOMServer from "react-dom/server"; // import react-dom/server
const { Client } = require("pg");

// REACT COMPONENTS
import Nav from "../components/Nav"; // Import the top navigation object

const { gotPool } = require("./queries"); // Import the connection to the Game of Thrones database
const bodyParser = require("body-parser"); // Import the body-parser (helps handle client REQUESTS)

// Create an express server
const server = express();

// Get the port
const PORT = process.env.PORT || 3000;

// Use the URL Encoded Parser. This lets us access objects in client REQUESTs more easily.
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

// This tells express which folder main.js is in -- the "dist" folder
server.use(express.static("dist"));

// ---------------------------------
// WEB REQUESTS (GET, POST)
// ---------------------------------

// -- HOME -- /////////////////////////////////////////////////////////////////////

// This GET request renders the "/" page (the homepage)
server.get("/", (request, response, next) => {
  console.log('server.get("/") (INITIAL HTML MARKUP)');

  const initialMarkup = ReactDOMServer.renderToString(<Nav />); // convert the Nav object to a string

  // Inject the initial markup into the template string that represents the initial HTML of this page
  response.send(`
      <html>
        <head>
        <title>Sample React App</title>
        </head>
        <body>
          <div id="mountNode">${initialMarkup}</div>
          <script src="/main.js"></script>
        </body>
      </html>
      `);
});

// -- PLAYERS -- /////////////////////////////////////////////////////////////////////

// This GET request renders the "/players" page
server.get("/players", (request, response, next) => {
  console.log('server.get("/players") (INITIAL HTML MARKUP)'); // log the action to the server console

  const initialMarkup = ReactDOMServer.renderToString(<Nav />); // convert the Nav object to a string

  // Inject the initial markup into the template string that represents the initial HTML of this page
  response.send(`
      <html>
        <head>
        <title>Sample React App</title>
        </head>
        <body>
          <div id="mountNode">${initialMarkup}</div>
          <script src="/main.js"></script>
        </body>
      </html>
      `);
});

// This GET request asks the database to return the list of players in the database
server.get("/getPlayers", (request, response, next) => {
  console.log('server.get("/getPlayers") (DATABASE QUERY)'); // log the action to the server console

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const query = "SELECT * FROM players ORDER BY players.id";

  client.connect();

  client.query(query, (err, res) => {
    if (err) throw err;
    response.json(res.rows);
    client.end();
  });
});

// This POST request gets the information required to add a player to the database
// and then adds the player to the database.
server.post("/addPlayer", urlEncodedParser, (request, response, next) => {
  // log the action to the server console
  console.log(
    'server.get("/addPlayer") (DATABASE QUERY) with name ' +
      request.body.permanentName +
      " / " +
      request.body.displayName +
      " and id " +
      request.body.playerId
  );

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const query = `INSERT INTO players(id, name, displayName) VALUES(${request.body.playerId}, ${request.body.permanentName}, ${request.body.displayName});`;

  client.connect();

  client.query(query, (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });

  // Redirect the client browser to "/players"
  // This will also likely update the players list
  response.redirect("/players");
});

// This POST request gets the information required to update the displayName of a player
// in the database, and then updates the player's displayName in the database.
server.post(
  "/updatePlayerName",
  urlEncodedParser,
  (request, response, next) => {
    console.log(
      'server.get("/updatePlayerName") (DATABASE QUERY) with name ' +
        request.body.playersNewName +
        " and id " +
        request.body.playerId
    );

    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    const query = `UPDATE players SET displayname=${request.body.playersNewName} WHERE id=${request.body.playerId}`;

    client.connect();

    client.query(query, (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
      client.end();
    });

    // Redirect the client browser to "/players"
    // This will also likely update the players list
    response.redirect("/players");
  }
);

// -- GAMES -- /////////////////////////////////////////////////////////////////////

// This GET request renders the "/games" page
server.get("/games", (request, response, next) => {
  console.log('server.get("/games") (INITIAL HTML MARKUP)'); // log the action to the server console

  const initialMarkup = ReactDOMServer.renderToString(<Nav />); // convert the Nav object to a string

  // Inject the initial markup into the template string that represents the initial HTML of this page
  response.send(`
      <html>
        <head>
        <title>Sample React App</title>
        </head>
        <body>
          <div id="mountNode">${initialMarkup}</div>
          <script src="/main.js"></script>
        </body>
      </html>
      `);
});

// This GET request asks the database to return the total number of games in the database
server.get("/getGamesCount", (request, response, next) => {
  console.log('server.get("/getGamesCount")'); // log the action to the server console

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const query = "SELECT COUNT(*) FROM games_v1";

  client.connect();

  client.query(query, (err, res) => {
    if (err) throw err;
    response.json(res.rows);
    client.end();
  });
});

// This GET request asks the database to return "superficial" information about all of the games
// This information is displayed as a list of games in "/games"
server.get("/getGames", (request, response, next) => {
  console.log('server.get("/getGames") (DATABASE QUERY)'); // log the action to the server console

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const query =
    "SELECT id, name, notes,finalround, winner,  year, month, day, lannister, greyjoy, stark, arryn, baratheon, targaryen, dorn, tyrell FROM games_v1 ORDER BY games_v1.id";

  client.connect();

  client.query(query, (err, res) => {
    if (err) throw err;
    response.json(res.rows);
    client.end();
  });
});

// This GET request asks the database to return "deeper" information about a specific game base on it's ID.
// This information is displayed in graphical form in "/viewGame/(gameID)"
server.get("/getGames/:id", (request, response, next) => {
  // log the action to the server console
  console.log(
    'server.get("/getGames/' + request.params.id + '") (DATABASE QUERY)'
  );

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const query = `SELECT * FROM games_v1 WHERE games_v1.id=${request.params.id}`;

  client.connect();

  client.query(query, (err, res) => {
    if (err) throw err;
    response.json(res.rows);
    client.end();
  });
});

// -- VIEW GAME -- /////////////////////////////////////////////////////////////////////
// This GET request renders the initial markup of the "/viewGame/(gameID)" page
server.get("/viewGame/:id", (request, response, next) => {
  console.log(
    "server.get/viewGame/" + request.params.id + " (INITIAL HTML MARKUP)"
  );

  const initialMarkup = ReactDOMServer.renderToString(<Nav />); // convert the Nav object to a string

  // Inject the initial markup into the template string that represents the initial HTML of this page

  response.send(`
      <html>
        <head>
        <title>Sample React App</title>
        </head>
        <body>
          <div id="mountNode">${initialMarkup}</div>
          <script src="/main.js"></script>
        </body>
      </html>
      `);
});

// -- ADD GAME -- /////////////////////////////////////////////////////////////////////

// This GET request renders the "/addGame" page where the user:
// 1) can add all the information about a game to the browser
// 2) can submit that information to the database
server.get("/addGame", (request, response, next) => {
  console.log('server.get("/addGame") (INITIAL HTML MARKUP)'); // log the action to the server console

  const initialMarkup = ReactDOMServer.renderToString(<Nav />); // convert the Nav object to a string

  // Inject the initial markup into the template string that represents the initial HTML of this page
  response.send(`
      <html>
        <head>
        <title>Sample React App</title>
        </head>
        <body>
          <div id="mountNode">${initialMarkup}</div>
          <script src="/main.js"></script>
        </body>
      </html>
      `);
});

// This POST request gets all of the information about the game being added to the database
// and inserts the game into the database.
server.post(
  "/addGameToDatabase",
  urlEncodedParser,
  (request, response, next) => {
    let gameInfo = JSON.parse(request.body.gameInfo);

    // log the action to the server console
    console.log(
      'server.get("/addGameToDatabase") with gameInfo: ' +
        request.body.gameInfo +
        " and gameData: " +
        request.body.gameData
    );

    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    const query = `INSERT INTO games_v1 (id, name, notes, finalround, winner, day, month, year, lannister, greyjoy, stark, arryn, baratheon, targaryen, dorn, tyrell, gamedata) VALUES(${gameInfo.gameId},${gameInfo.name},${gameInfo.gameNotes},${gameInfo.finalRound},${gameInfo.winner},${gameInfo.day},${gameInfo.month},${gameInfo.year},${gameInfo.lannisterId},${gameInfo.greyjoyId},${gameInfo.starkId},${gameInfo.arrynId},${gameInfo.baratheonId},${gameInfo.targaryenId},${gameInfo.dornId},${gameInfo.tyrellId},${request.body.gameData})`;

    client.connect();

    client.query(query, (err, res) => {
      if (err) throw err;
      client.end();
    });

    // Redirect the client browser to "/games"
    // This will also likely update the games list
    response.redirect("/games");
  }
);

// Cause the server to listen on the supplied port, and tell the console that it is running.
server.listen(PORT, () => console.log("Server is running..."));
