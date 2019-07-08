// CRITICAL IMPORTS
import React from "react"; // Import React
import ReactDOM from "react-dom"; // Import ReactDOM (document object model)

// REACT COMPONENTS
import Home from "./components/Home";
import Players from "./components/Players";
import Games from "./components/Games";
import AddGame from "./components/AddGame";
import Nav from "./components/Nav";
import ViewGame from "./components/ViewGame";

// The BrowserRouter is required to allow URL routing with the Route Object (imported next)
import { BrowserRouter } from "react-router-dom";

// The Route object allows us to load the appropriate React-Object based on the supplied URL.
import { Link, Router, Route, Switch } from "react-router-dom";

// Unsure why I imported this
import { request } from "http";

// The hydrate function populates the container element rendered by ReactDomServer (in server.js).
// All of the pages render the <Nav /> element, and the BrowserRouter/Route objects emplace
// the remainder of the specific page being visited.
ReactDOM.hydrate(
  <div>
    <Nav />
    <BrowserRouter>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/players" component={Players} />
      <Route exact={true} path="/games" component={Games} />
      <Route exact={true} path="/addGame" component={AddGame} />
      <Route exact={true} path="/viewGame/:id" component={ViewGame} />
    </BrowserRouter>
  </div>,
  document.getElementById("mountNode")
);
