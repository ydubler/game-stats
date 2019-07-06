import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import App2 from "./components/App2";
import Home from "./components/Home";
import Players from "./components/Players";
import Games from "./components/Games";
import AddGame from "./components/AddGame";
import Nav from "./components/Nav";
import ViewGame from "./components/ViewGame";

import { BrowserRouter } from "react-router-dom";
import { Link, Router, Route, Switch } from "react-router-dom";
import { request } from "http";

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
