import React from "react";

export default class HouseAssignments extends React.Component {
  constructor(props) {
    super(props);

    this.houses = [
      "Lannister",
      "Greyjoy",
      ,
      "Stark",
      ,
      "Arryn",
      ,
      "Baratheon",
      ,
      "Targaryen",
      ,
      "Dorn",
      ,
      "Tyrell"
    ];
  }

  getDisplayNameFromID(idIn, playersArray) {
    for (let i = 0; i < playersArray.length; i++) {
      if (playersArray.id === idIn) {
        return playersArray.displayname;
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
      <div style={{ width: "13em" }}>
        <h5 style={{ display: "inline" }}>HOUSE ASSIGNMENTS</h5>
        <br />
        <br />
        {this.houses.map(house => (
          <div key={house} id={house} style={{ width: "13em" }}>
            {house}
            {/* <button
              id={"houseAssignment_" + house.toLowerCase() + "_updateButton"}
              style={{ float: "right", display: "inline" }}
              onClick={this.props.updateRound1Data}
            >
              ∆
            </button> */}
            <select
              value={this.props.saved[house.toLowerCase()]}
              id={"houseAssignment_" + house.toLowerCase() + "Player"}
              style={{ float: "right", display: "inline" }}
              onChange={this.props.updateRound1Data}
            >
              {this.props.players.map(player => (
                <option key={player.id} value={player.id}>
                  {player.displayname}
                </option>
              ))}
              <option key="-1" value="-1">
                -Vassal-
              </option>
              <option key="-2" value="-2">
                -Not Playing-
              </option>
            </select>

            <br />
          </div>
        ))}
        ---------------------------------------
        <br />
        <div style={{ textAlign: "center" }}>
          <h5 style={{ margin: "0px", display: "inline" }}>FINAL ROUND</h5>
          <br />
          <select
            id="gameInfo_finalRound"
            style={{ textAlign: "center", display: "inline" }}
            value={this.props.finalRound}
          >
            {[...Array(10).keys()].map(number => (
              <option key={number + 1} value={number + 1}>
                {number + 1}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <h5 style={{ margin: "0px", display: "inline" }}>WINNER</h5>
          <br />
          <select
            id="gameInfo_winner"
            style={{ textAlign: "center", display: "inline" }}
            value={this.props.saved.winner}
          >
            {this.props.players.map(player => (
              <option key={player.id} value={player.id}>
                {player.displayname}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
