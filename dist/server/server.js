"use strict";var _express=_interopRequireDefault(require("express"));var _react=_interopRequireDefault(require("react"));var _server=_interopRequireDefault(require("react-dom/server"));var _Nav=_interopRequireDefault(require("../components/Nav"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}// CRITICAL IMPORTS
// import express (easy server setup module)
// import react
// import react-dom/server
// REACT COMPONENTS
// Import the top navigation object
var _require=require("./queries"),gotPool=_require.gotPool;// Import the connection to the Game of Thrones database
var bodyParser=require("body-parser");// Import the body-parser (helps handle client REQUESTS)
// Create an express server
var server=(0,_express["default"])();// Use the URL Encoded Parser. This lets us access objects in client REQUESTs more easily.
var urlEncodedParser=bodyParser.urlencoded({extended:false});// This tells express which folder main.js is in -- the "dist" folder
server.use(_express["default"]["static"]("dist"));// ---------------------------------
// WEB REQUESTS (GET, POST)
// ---------------------------------
// -- HOME -- /////////////////////////////////////////////////////////////////////
// This GET request renders the "/" page (the homepage)
server.get("/",function(request,response,next){console.log('server.get("/") (INITIAL HTML MARKUP)');var initialMarkup=_server["default"].renderToString(/*#__PURE__*/_react["default"].createElement(_Nav["default"],null));// convert the Nav object to a string
// Inject the initial markup into the template string that represents the initial HTML of this page
response.send("\n      <html>\n        <head>\n        <title>Sample React App</title>\n        </head>\n        <body>\n          <div id=\"mountNode\">".concat(initialMarkup,"</div>\n          <script src=\"/main.js\"></script>\n        </body>\n      </html>\n      "));});// -- PLAYERS -- /////////////////////////////////////////////////////////////////////
// This GET request renders the "/players" page
server.get("/players",function(request,response,next){console.log('server.get("/players") (INITIAL HTML MARKUP)');// log the action to the server console
var initialMarkup=_server["default"].renderToString(/*#__PURE__*/_react["default"].createElement(_Nav["default"],null));// convert the Nav object to a string
// Inject the initial markup into the template string that represents the initial HTML of this page
response.send("\n      <html>\n        <head>\n        <title>Sample React App</title>\n        </head>\n        <body>\n          <div id=\"mountNode\">".concat(initialMarkup,"</div>\n          <script src=\"/main.js\"></script>\n        </body>\n      </html>\n      "));});// This GET request asks the database to return the list of players in the database
server.get("/getPlayers",function(request,response,next){console.log('server.get("/getPlayers") (DATABASE QUERY)');// log the action to the server console
// Query the database, asking for all of the players sorted by id
gotPool.query("SELECT * FROM players ORDER BY players.id",function(err,res){if(err)return console.log(err);// if there is an error, log the error
response.json(res.rows);// if there is no error, put the data in the response object in JSON format
});});// This POST request gets the information required to add a player to the database
// and then adds the player to the database.
server.post("/addPlayer",urlEncodedParser,function(request,response,next){// log the action to the server console
console.log('server.get("/addPlayer") (DATABASE QUERY) with name '+request.body.permanentName+" / "+request.body.displayName+" and id "+request.body.playerId);// Query the database, inserting the player into the database
gotPool.query("INSERT INTO players(id, name, displayName) VALUES($1, $2, $3);",[request.body.playerId,request.body.permanentName,request.body.displayName],function(err,res){if(err)return console.log(err);// if there is an error, log the error
});// Redirect the client browser to "/players"
// This will also likely update the players list
response.redirect("/players");});// This POST request gets the information required to update the displayName of a player
// in the database, and then updates the player's displayName in the database.
server.post("/updatePlayerName",urlEncodedParser,function(request,response,next){console.log('server.get("/updatePlayerName") (DATABASE QUERY) with name '+request.body.playersNewName+" and id "+request.body.playerId);// Query the database, updating the displayName of the player with the supplied id
gotPool.query("UPDATE players SET displayname=$1 WHERE id=$2",[request.body.playersNewName,request.body.playerId],function(err,res){});// Redirect the client browser to "/players"
// This will also likely update the players list
response.redirect("/players");});// -- GAMES -- /////////////////////////////////////////////////////////////////////
// This GET request renders the "/games" page
server.get("/games",function(request,response,next){console.log('server.get("/games") (INITIAL HTML MARKUP)');// log the action to the server console
var initialMarkup=_server["default"].renderToString(/*#__PURE__*/_react["default"].createElement(_Nav["default"],null));// convert the Nav object to a string
// Inject the initial markup into the template string that represents the initial HTML of this page
response.send("\n      <html>\n        <head>\n        <title>Sample React App</title>\n        </head>\n        <body>\n          <div id=\"mountNode\">".concat(initialMarkup,"</div>\n          <script src=\"/main.js\"></script>\n        </body>\n      </html>\n      "));});// This GET request asks the database to return the total number of games in the database
server.get("/getGamesCount",function(request,response,next){console.log('server.get("/getGamesCount")');// log the action to the server console
// Query the database, asking it to return the total number of games in the database
gotPool.query("SELECT COUNT(*) FROM games_v1",function(err,res){if(err)return console.log(err);// if there is an error, log the error
response.json(res.rows);// if there is no error, put the data in the response object in JSON format
});});// This GET request asks the database to return "superficial" information about all of the games
// This information is displayed as a list of games in "/games"
server.get("/getGames",function(request,response,next){console.log('server.get("/getGames") (DATABASE QUERY)');// log the action to the server console
// Query the database, asking it to return superficial information about ALL of the games in the database.
gotPool.query("SELECT id, name, notes,finalround, winner,  year, month, day, lannister, greyjoy, stark, arryn, baratheon, targaryen, dorn, tyrell FROM games_v1 ORDER BY games_v1.id",function(err,res){if(err)return console.log(err);// if there is an error, log it
response.json(res.rows);// if there is no error, put the data in the response object in JSON format
});});// This GET request asks the database to return "deeper" information about a specific game base on it's ID.
// This information is displayed in graphical form in "/viewGame/(gameID)"
server.get("/getGames/:id",function(request,response,next){// log the action to the server console
console.log('server.get("/getGames/'+request.params.id+'") (DATABASE QUERY)');// Query the database, asking it to return all of the deeper information of the game of a certain ID.
gotPool.query("SELECT * FROM games_v1 WHERE games_v1.id=$1 ",[request.params.id],function(err,res){if(err)return console.log(err);// if there is an error, log it
response.json(res.rows);// if there is no error, put the data in the response object in JSON format
});});// -- VIEW GAME -- /////////////////////////////////////////////////////////////////////
// This GET request renders the initial markup of the "/viewGame/(gameID)" page
server.get("/viewGame/:id",function(request,response,next){console.log("server.get/viewGame/"+request.params.id+" (INITIAL HTML MARKUP)");var initialMarkup=_server["default"].renderToString(/*#__PURE__*/_react["default"].createElement(_Nav["default"],null));// convert the Nav object to a string
// Inject the initial markup into the template string that represents the initial HTML of this page
response.send("\n      <html>\n        <head>\n        <title>Sample React App</title>\n        </head>\n        <body>\n          <div id=\"mountNode\">".concat(initialMarkup,"</div>\n          <script src=\"/main.js\"></script>\n        </body>\n      </html>\n      "));});// -- ADD GAME -- /////////////////////////////////////////////////////////////////////
// This GET request renders the "/addGame" page where the user:
// 1) can add all the information about a game to the browser
// 2) can submit that information to the database
server.get("/addGame",function(request,response,next){console.log('server.get("/addGame") (INITIAL HTML MARKUP)');// log the action to the server console
var initialMarkup=_server["default"].renderToString(/*#__PURE__*/_react["default"].createElement(_Nav["default"],null));// convert the Nav object to a string
// Inject the initial markup into the template string that represents the initial HTML of this page
response.send("\n      <html>\n        <head>\n        <title>Sample React App</title>\n        </head>\n        <body>\n          <div id=\"mountNode\">".concat(initialMarkup,"</div>\n          <script src=\"/main.js\"></script>\n        </body>\n      </html>\n      "));});// This POST request gets all of the information about the game being added to the database
// and inserts the game into the database.
server.post("/addGameToDatabase",urlEncodedParser,function(request,response,next){var gameInfo=JSON.parse(request.body.gameInfo);// log the action to the server console
console.log('server.get("/addGameToDatabase") with gameInfo: '+request.body.gameInfo+" and gameData: "+request.body.gameData);// Query the database, inserting all of the information of the game into it
gotPool.query("INSERT INTO games_v1 (id, name, notes, finalround, winner, day, month, year, lannister, greyjoy, stark, arryn, baratheon, targaryen, dorn, tyrell, gamedata) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)",[gameInfo.gameId,gameInfo.name,gameInfo.gameNotes,gameInfo.finalRound,gameInfo.winner,gameInfo.day,gameInfo.month,gameInfo.year,gameInfo.lannisterId,gameInfo.greyjoyId,gameInfo.starkId,gameInfo.arrynId,gameInfo.baratheonId,gameInfo.targaryenId,gameInfo.dornId,gameInfo.tyrellId,request.body.gameData],function(err,res){if(err)console.log(err);});// Redirect the client browser to "/games"
// This will also likely update the games list
response.redirect("/games");});// Cause the server to listen on the supplied port, and tell the console that it is running.
server.listen(4040,function(){return console.log("Server is running...");});