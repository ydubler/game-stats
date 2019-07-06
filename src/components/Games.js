import React from "react";
import SwordTooltip from "./GamesComponents/SwordTooltip";

export default class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [
        {
          id: 0,
          name: "Game Name",
          notes: "Game Notes",
          finalround: 10,
          winner: 0,
          year: 2019,
          month: 6,
          day: 11,
          lannister: 1,
          greyjoy: 3,
          stark: -1,
          arryn: -1,
          baratheon: 2,
          targaryen: -2,
          dorn: 0,
          tyrell: 4
        }
      ],
      players: [],
      mouseOver: false,
      mouseOverTarget: 0,
      mouseX: 0,
      mouseY: 0
    };

    this.getDisplayNameFromID = this.getDisplayNameFromID.bind(this);
    this.onMouseOver_Game = this.onMouseOver_Game.bind(this);
    this.onMouseLeave_Game = this.onMouseLeave_Game.bind(this);
    this.onMouseMove_Screen = this.onMouseMove_Screen.bind(this);
  }

  componentDidMount() {
    fetch("/getGames")
      .then(response => {
        console.log("App fetching: " + JSON.stringify(response));
        return response.json();
      })
      .then(data => this.setState({ games: data }));

    fetch("/getPlayers")
      .then(response => {
        console.log("App fetching: " + JSON.stringify(response));
        return response.json();
      })
      .then(data => this.setState({ players: data }));
  }

  componentWillUnmount() {}

  onMouseMove_Screen(event) {
    this.setState({
      mouseX: event.clientX - 115,
      mouseY: event.clientY - 30
    });

    console.log("mouse X,Y = " + this.state.mouseX, this.state.mouseY);
  }

  onMouseOver_Game(event) {
    console.log("mouse over " + event.target.id);
    this.setState({
      mouseOver: true,
      mouseOverTarget: Number.parseInt(event.target.id)
    });
    console.log(
      "state.games = " +
        JSON.stringify(this.state.games[this.state.mouseOverTarget])
    );
  }

  onMouseLeave_Game(event) {
    console.log("mouse leave " + event.target.id);
    this.setState({
      mouseOver: false
    });
  }

  getDisplayNameFromID(idIn) {
    for (let i = 0; i < this.state.players.length; i++) {
      if (this.state.players[i].id === idIn) {
        return this.state.players[i].displayname;
      }
    }
  }

  getHouseFromId(gameID, idIn) {
    for (let i = 0; i < this.state.games.length; i++) {
      if (this.state.games[i].id === gameID) {
        if (this.state.games[i].lannister === idIn) {
          return "Lannister";
        } else if (this.state.games[i].greyjoy === idIn) {
          return "Greyjoy";
        } else if (this.state.games[i].stark === idIn) {
          return "Stark";
        } else if (this.state.games[i].arryn === idIn) {
          return "Arryn";
        } else if (this.state.games[i].baratheon === idIn) {
          return "Baratheon";
        } else if (this.state.games[i].targaryen === idIn) {
          return "Targaryen";
        } else if (this.state.games[i].dorn === idIn) {
          return "Dorne";
        } else if (this.state.games[i].tyrell === idIn) {
          return "Tyrell";
        } else {
          return "No House";
        }
      }
    }
  }

  render() {
    return (
      <div id="games">
        <h2 style={{ textDecoration: "underline overline" }}>GAMES</h2>
        <a href="/addGame">
          <button>Add Game</button>
        </a>
        <br />
        <br />
        There are {this.state.games.length} games saved in the database:
        <br />
        {this.state.games.map(game => (
          <div id={"game_" + game.id} key={game.id} style={{ width: "25em" }}>
            <br />
            <input
              value={game.id}
              style={{
                width: "2em",
                backgroundColor: "#d1d1d1",
                textAlign: "center"
              }}
              readOnly
            />
            &nbsp;
            <input
              value={game.month + "/" + game.day + "/" + game.year}
              style={{
                width: "6em",
                backgroundColor: "#d1d1d1",
                textAlign: "center"
              }}
              readOnly
            />
            &nbsp;
            <div
              style={{
                display: "inline"
              }}
            >
              &nbsp;&nbsp;
              <a href={"/viewGame/" + game.id}>
                <button
                  className="buttonHover"
                  id={game.id}
                  onMouseOver={this.onMouseOver_Game}
                  onMouseLeave={this.onMouseLeave_Game}
                  onMouseMove={this.onMouseMove_Screen}
                >
                  &nbsp;&nbsp;"{game.name}"&nbsp;&nbsp;
                </button>
              </a>
              <br />
            </div>
            {/* Winner: &nbsp;
            <h5
              style={{
                textDecoration: "underline",
                display: "inline"
              }}
            >
              {this.getDisplayNameFromID(game.winner)} of House{" "}
              {this.getHouseFromId(game.id, game.winner)}
            </h5>{" "}
            on round {game.finalround}! */}
            <br />
          </div>
        ))}
        <SwordTooltip
          active={this.state.mouseOver}
          xPos={this.state.mouseX}
          yPos={this.state.mouseY}
          winnerName={this.getDisplayNameFromID(
            this.state.games[this.state.mouseOverTarget].winner
          )}
          houseName={this.getHouseFromId(
            this.state.mouseOverTarget,
            this.state.games[this.state.mouseOverTarget].winner
          )}
          finalRound={this.state.games[this.state.mouseOverTarget].finalround}
        />
      </div>
    );
  }
}
