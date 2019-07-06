import React from "react";
import Game from "./dataObjects/Game";
import Player from "./dataObjects/Player";
import AddPlayerBox from "./PlayersComponents/AddPlayerBox";
import PlayersDisplay from "./PlayersComponents/PlayersDisplay";
import SinglePlayerDisplay from "./PlayersComponents/SinglePlayerDisplay";

export default class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = { players: [], numberOfPlayers: 0 };

    this.fetchPlayers = this.fetchPlayers.bind(this);
    this.getNumberOfPlayers = this.getNumberOfPlayers.bind(this);
  }

  fetchPlayers() {
    fetch("/getPlayers")
      .then(response => {
        console.log("App fetching: " + JSON.stringify(response));
        return response.json();
      })
      .then(data => {
        this.setState({ players: data, numberOfPlayers: data.length });
        console.log(JSON.stringify(data));
      });
  }

  getNumberOfPlayers() {
    return this.state.numberOfPlayers;
  }

  componentDidMount() {
    this.fetchPlayers();
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h2 style={{ textDecoration: "underline overline" }}>PLAYERS</h2>
        <AddPlayerBox numberOfPlayers={this.state.numberOfPlayers} />
        <br />
        There are {this.state.numberOfPlayers} players in the database:
        <br />
        <br />
        <PlayersDisplay players={this.state.players} />
      </div>
    );
  }
}
