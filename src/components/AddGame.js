import React from "react";
import HouseAssignments from "./AddGameComponents/HouseAssignments";
import RoundNav from "./AddGameComponents/RoundNav";
import GameInfo from "./AddGameComponents/GameInfo";
import RoundInfo from "./AddGameComponents/RoundInfo";
import {
  gameFields,
  houses,
  gameObject,
  rounds,
} from "./dataObjects/GameProperties";

export default class AddGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      // PAGE STATE
      currentRound: 0,
      // SAVED DATA
      gameId: 0,
      gameNotes: "",
      finalRound: 10,
      winner: -1,
      name: "",
      month: -1,
      day: -1,
      year: -1,
      lannisterId: -1,
      greyjoyId: -1,
      starkId: -1,
      arrynId: -1,
      baratheonId: -1,
      targaryenId: -2,
      dornId: -1,
      tyrellId: -1,
      game: {},
    };

    // Create the data
    rounds.forEach((round) => {
      houses.forEach((house) => {
        gameFields.forEach((field) => {
          this.state.game["round" + round + "_" + house + "_" + field] = 0;
        });
        this.state.game["round" + round + "_" + house + "_playerNotes"] = "";
      });
    });

    // DEFAULT STARTING VALUES FOR PLAYERS AND VASSALS
    this.playerStartingValues = {
      lannister: {
        throne: 2,
        sword: 6,
        raven: 1,
        money: 7,
        supply: 2,
        boats_start: 1,
        footmen_start: 2,
        knights_start: 1,
        siege_start: 0,
        boats_end: 1,
        footmen_end: 2,
        knights_end: 1,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 0,
        castles_end: 0,
        landTerritories: 2,
        seaTerritories: 1,
        forcedMuster: 0,
        playerNotes: "",
      },
      greyjoy: {
        throne: 5,
        sword: 1,
        raven: 6,
        money: 7,
        supply: 2,
        boats_start: 2,
        footmen_start: 2,
        knights_start: 1,
        siege_start: 0,
        boats_end: 2,
        footmen_end: 2,
        knights_end: 1,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 0,
        castles_end: 0,
        landTerritories: 2,
        seaTerritories: 1,
        forcedMuster: 0,
        playerNotes: "",
      },
      stark: {
        throne: 3,
        sword: 4,
        raven: 2,
        money: 7,
        supply: 1,
        boats_start: 1,
        footmen_start: 2,
        knights_start: 1,
        siege_start: 0,
        boats_end: 1,
        footmen_end: 2,
        knights_end: 1,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 1,
        castles_end: 1,
        landTerritories: 2,
        seaTerritories: 1,
        forcedMuster: 0,
        playerNotes: "",
      },
      arryn: {
        throne: 7,
        sword: 7,
        raven: 7,
        money: 7,
        supply: 1,
        boats_start: 1,
        footmen_start: 0,
        knights_start: 3,
        siege_start: 0,
        boats_end: 1,
        footmen_end: 0,
        knights_end: 3,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 1,
        castles_end: 1,
        landTerritories: 2,
        seaTerritories: 0,
        forcedMuster: 0,
        playerNotes: "",
      },
      baratheon: {
        throne: 1,
        sword: 5,
        raven: 4,
        money: 7,
        supply: 2,
        boats_start: 2,
        footmen_start: 2,
        knights_start: 1,
        siege_start: 0,
        boats_end: 2,
        footmen_end: 2,
        knights_end: 1,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 0,
        castles_end: 0,
        landTerritories: 2,
        seaTerritories: 1,
        forcedMuster: 0,
        playerNotes: "",
      },
      targaryen: {
        throne: 7,
        sword: 7,
        raven: 7,
        money: 7,
        supply: 4,
        boats_start: 3,
        footmen_start: 1,
        knights_start: 2,
        siege_start: 0,
        boats_end: 3,
        footmen_end: 1,
        knights_end: 2,
        dragons_start: 3,
        dragons_end: 3,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 0,
        castles_end: 0,
        landTerritories: 4,
        seaTerritories: 1,
        forcedMuster: 0,
        playerNotes: "",
      },
      dorn: {
        throne: 4,
        sword: 3,
        raven: 3,
        money: 7,
        supply: 2,
        boats_start: 1,
        footmen_start: 2,
        knights_start: 1,
        siege_start: 0,
        boats_end: 1,
        footmen_end: 2,
        knights_end: 1,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 0,
        castles_end: 0,
        landTerritories: 2,
        seaTerritories: 1,
        forcedMuster: 0,
        playerNotes: "",
      },
      tyrell: {
        throne: 6,
        sword: 2,
        raven: 5,
        money: 7,
        supply: 2,
        boats_start: 1,
        footmen_start: 2,
        knights_start: 1,
        siege_start: 0,
        boats_end: 1,
        footmen_end: 2,
        knights_end: 1,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 0,
        castles_end: 0,
        landTerritories: 2,
        seaTerritories: 1,
        forcedMuster: 0,
        playerNotes: "",
      },
    };
    this.vassalStartingValues = {
      lannister: {
        throne: 7,
        sword: 7,
        raven: 7,
        money: 0,
        supply: 4,
        boats_start: 3,
        footmen_start: 3,
        knights_start: 2,
        siege_start: 0,
        boats_end: 3,
        footmen_end: 3,
        knights_end: 2,
        siege_end: 0,
        strongholds_start: 2,
        strongholds_end: 2,
        castles_start: 0,
        castles_end: 0,
        landTerritories: 3,
        seaTerritories: 1,
        forcedMuster: 0,
        playerNotes: "'Clegane at your back...'",
      },
      greyjoy: {
        throne: 7,
        sword: 7,
        raven: 7,
        money: 0,
        supply: 4,
        boats_start: 4,
        footmen_start: 2,
        knights_start: 1,
        siege_start: 0,
        boats_end: 4,
        footmen_end: 2,
        knights_end: 1,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 0,
        castles_end: 0,
        landTerritories: 2,
        seaTerritories: 2,
        forcedMuster: 0,
        playerNotes: "'My fleet is invincible!'",
      },
      stark: {
        throne: 7,
        sword: 7,
        raven: 7,
        money: 0,
        supply: 4,
        boats_start: 1,
        footmen_start: 4,
        knights_start: 2,
        siege_start: 0,
        boats_end: 1,
        footmen_end: 4,
        knights_end: 2,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 2,
        castles_end: 2,
        landTerritories: 5,
        seaTerritories: 1,
        forcedMuster: 0,
        playerNotes: "'I have been forged by winter.'",
      },
      arryn: {
        throne: 7,
        sword: 7,
        raven: 7,
        money: 0,
        supply: 4,
        boats_start: 3,
        footmen_start: 2,
        knights_start: 2,
        siege_start: 0,
        boats_end: 3,
        footmen_end: 2,
        knights_end: 2,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 1,
        castles_end: 1,
        landTerritories: 3,
        seaTerritories: 2,
        forcedMuster: 0,
        playerNotes: "'My lands are impenetrable.'",
      },
      baratheon: {
        throne: 7,
        sword: 7,
        raven: 7,
        money: 0,
        supply: 4,
        boats_start: 3,
        footmen_start: 2,
        knights_start: 2,
        siege_start: 0,
        boats_end: 3,
        footmen_end: 2,
        knights_end: 2,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 1,
        castles_end: 1,
        landTerritories: 3,
        seaTerritories: 2,
        forcedMuster: 0,
        playerNotes: "'I love whores and boars.'",
      },
      targaryen: {
        throne: 7,
        sword: 7,
        raven: 7,
        money: 0,
        supply: 4,
        boats_start: 3,
        footmen_start: 2,
        knights_start: 2,
        siege_start: 0,
        boats_end: 3,
        footmen_end: 2,
        knights_end: 2,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 1,
        castles_end: 1,
        landTerritories: 3,
        seaTerritories: 2,
        forcedMuster: 0,
        playerNotes: "Targaryen can't be a vassal.",
      },
      dorn: {
        throne: 7,
        sword: 7,
        raven: 7,
        money: 0,
        supply: 4,
        boats_start: 3,
        footmen_start: 4,
        knights_start: 1,
        siege_start: 0,
        boats_end: 3,
        footmen_end: 4,
        knights_end: 1,
        siege_end: 0,
        strongholds_start: 1,
        strongholds_end: 1,
        castles_start: 2,
        castles_end: 2,
        landTerritories: 4,
        seaTerritories: 2,
        forcedMuster: 0,
        playerNotes: "'House Sunspear shall take justice.'",
      },
      tyrell: {
        throne: 7,
        sword: 7,
        raven: 7,
        money: 0,
        supply: 4,
        boats_start: 3,
        footmen_start: 2,
        knights_start: 2,
        siege_start: 0,
        boats_end: 3,
        footmen_end: 2,
        knights_end: 2,
        siege_end: 0,
        strongholds_start: 2,
        strongholds_end: 2,
        castles_start: 0,
        castles_end: 0,
        landTerritories: 4,
        seaTerritories: 1,
        forcedMuster: 0,
        playerNotes: "'Roselove sends his regards.'",
      },
    };

    // FUNCTION BINDINGS
    this.onClick_IncrementRound = this.onClick_IncrementRound.bind(this);
    this.onClick_DecrementRound = this.onClick_DecrementRound.bind(this);
    this.fetchPlayers = this.fetchPlayers.bind(this);
    this.fetchGameCount = this.fetchGameCount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadFromPrevious = this.loadFromPrevious.bind(this);
    this.updateRound1Data = this.updateRound1Data.bind(this);
    this.checkState = this.checkState.bind(this);
    //this.submitGameToDatabase = this.submitGameToDatabase.bind(this);
  }

  fetchPlayers() {
    fetch("/getPlayers")
      .then((response) => {
        console.log("App fetching: " + JSON.stringify(response));
        return response.json();
      })
      .then((data) => this.setState({ players: data }));
  }

  fetchGameCount() {
    fetch("/getGamesCount")
      .then((response) => {
        console.log("App fetching: " + JSON.stringify(response));
        return response.json();
      })
      .then((data) => this.setState({ gameId: data[0].count }));
  }

  onClick_IncrementRound() {
    if (this.state.currentRound < 10) {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return { currentRound: state.currentRound + 1 };
      });
    } else if (this.state.currentRound === 10) {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return { currentRound: 0 };
      });
    }

    let elts = document.getElementsByClassName("fieldSelect");

    for (let i = 0; i < elts.length; i++) {
      elts[i].setAttribute(
        "style",
        "background-color: lightlightgray; width:4em; float:right; display:inline; margin:0px; padding:0px;border:0px;"
      );
    }
  }

  onClick_DecrementRound() {
    if (this.state.currentRound > 0) {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return { currentRound: state.currentRound - 1 };
      });
    } else if (this.state.currentRound === 0) {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return { currentRound: 10 };
      });
    }

    // Get the elements by class name
    let elts = document.getElementsByClassName("fieldSelect");

    for (let i = 0; i < elts.length; i++) {
      elts[i].setAttribute(
        "style",
        "background-color: lightlightgray; width:4em; float:right; display:inline; margin:0px; padding:0px;border:0px;"
      );
    }
  }

  handleChange() {
    console.log("an element was changed! saving data!");
    if (this.state.currentRound === 0) {
      this.setState({
        finalRound: document.getElementById("gameInfo_finalRound").value,
        winner: document.getElementById("gameInfo_winner").value,
        gameNotes: document.getElementById("gameInfo_gameNotes").value,
        name: document.getElementById("gameInfo_name").value,
        month: document.getElementById("gameInfo_month").value,
        day: document.getElementById("gameInfo_day").value,
        year: document.getElementById("gameInfo_year").value,
        lannisterId: document.getElementById("houseAssignment_lannisterPlayer")
          .value,
        greyjoyId: document.getElementById("houseAssignment_greyjoyPlayer")
          .value,
        starkId: document.getElementById("houseAssignment_starkPlayer").value,
        arrynId: document.getElementById("houseAssignment_arrynPlayer").value,
        baratheonId: document.getElementById("houseAssignment_baratheonPlayer")
          .value,
        targaryenId: document.getElementById("houseAssignment_targaryenPlayer")
          .value,
        dornId: document.getElementById("houseAssignment_dornPlayer").value,
        tyrellId: document.getElementById("houseAssignment_tyrellPlayer").value,
      });
    } else {
      this.setState((prevState) => {
        const newState = { ...prevState.game };

        houses.forEach((house) => {
          gameFields.forEach((field) => {
            let roundNum = "round" + this.state.currentRound;
            let elementId = roundNum + "_" + field + "_" + house;
            let stateId =
              "round" + this.state.currentRound + "_" + house + "_" + field;

            //console.log("elementID = " + elementId);

            newState[stateId] = document.getElementById(elementId).value;
          });
        });

        // Important: read `state` instead of `this.state` when updating.
        return {
          game: newState,
        };
      });
    }
  }

  loadFromPrevious() {
    this.setState((prevState) => {
      // newState = { ...prevState };

      let newState = { ...prevState.game };
      console.log("prevstate.game" + JSON.stringify({ ...prevState.game }));

      houses.forEach((houseName) => {
        gameFields.forEach((fieldName) => {
          let prevStateId =
            "round" +
            (this.state.currentRound - 1) +
            "_" +
            houseName +
            "_" +
            fieldName;

          let curStateId =
            "round" +
            this.state.currentRound +
            "_" +
            houseName +
            "_" +
            fieldName;

          newState[curStateId] = prevState.game[prevStateId];
        });

        // Set the starting values of the current round to the ending values of the
        newState[
          "round" + this.state.currentRound + "_" + houseName + "_boats_start"
        ] =
          prevState.game[
            "round" +
              (this.state.currentRound - 1) +
              "_" +
              houseName +
              "_boats_end"
          ];

        newState[
          "round" + this.state.currentRound + "_" + houseName + "_boats_end"
        ] =
          prevState.game[
            "round" +
              (this.state.currentRound - 1) +
              "_" +
              houseName +
              "_boats_end"
          ];

        newState[
          "round" + this.state.currentRound + "_" + houseName + "_footmen_end"
        ] =
          prevState.game[
            "round" +
              (this.state.currentRound - 1) +
              "_" +
              houseName +
              "_footmen_end"
          ];

        newState[
          "round" + this.state.currentRound + "_" + houseName + "_footmen_start"
        ] =
          prevState.game[
            "round" +
              (this.state.currentRound - 1) +
              "_" +
              houseName +
              "_footmen_end"
          ];

        newState[
          "round" + this.state.currentRound + "_" + houseName + "_knights_end"
        ] =
          prevState.game[
            "round" +
              (this.state.currentRound - 1) +
              "_" +
              houseName +
              "_knights_end"
          ];

        newState[
          "round" + this.state.currentRound + "_" + houseName + "_knights_start"
        ] =
          prevState.game[
            "round" +
              (this.state.currentRound - 1) +
              "_" +
              houseName +
              "_knights_end"
          ];

        newState[
          "round" + this.state.currentRound + "_" + houseName + "_siege_end"
        ] =
          prevState.game[
            "round" +
              (this.state.currentRound - 1) +
              "_" +
              houseName +
              "_siege_end"
          ];

        newState[
          "round" + this.state.currentRound + "_" + houseName + "_siege_start"
        ] =
          prevState.game[
            "round" +
              (this.state.currentRound - 1) +
              "_" +
              houseName +
              "_siege_end"
          ];

        newState[
          "round" +
            this.state.currentRound +
            "_" +
            houseName +
            "_strongholds_end"
        ] =
          prevState.game[
            "round" +
              (this.state.currentRound - 1) +
              "_" +
              houseName +
              "_strongholds_end"
          ];

        newState[
          "round" +
            this.state.currentRound +
            "_" +
            houseName +
            "_strongholds_start"
        ] =
          prevState.game[
            "round" +
              (this.state.currentRound - 1) +
              "_" +
              houseName +
              "_strongholds_end"
          ];

        newState[
          "round" + this.state.currentRound + "_" + houseName + "_castles_end"
        ] =
          prevState.game[
            "round" +
              (this.state.currentRound - 1) +
              "_" +
              houseName +
              "_castles_end"
          ];

        newState[
          "round" + this.state.currentRound + "_" + houseName + "_castles_start"
        ] =
          prevState.game[
            "round" +
              (this.state.currentRound - 1) +
              "_" +
              houseName +
              "_castles_end"
          ];
      });

      return { game: newState };
    });
  }

  updateRound1Data(event) {
    console.log("a vassal has been detected");

    houses.forEach((house) => {
      let elId = "houseAssignment_" + house + "Player";

      if (event.target.id === elId) {
        console.log("id matches: " + elId);

        // IF HOUSE IS A VASSAL
        if (event.target.value == -1) {
          console.log("Updating " + house + " units to vassal start");

          this.setState((prevState) => {
            let newState = { ...prevState.game };

            houses.forEach((houseName) => {
              gameFields.forEach((fieldName) => {
                newState[
                  "round1_" + houseName + "_" + fieldName
                ] = this.vassalStartingValues[houseName][fieldName];
              });
            });

            return {
              game: newState,
            };
          });

          // IF HOUSE IS NOT PLAYING
        } else if (event.target.value == -2) {
          // IF HOUSE IS A PLAYER
        } else {
          console.log("Updating " + house + " units to player start");

          this.setState((prevState) => {
            let newState = { ...prevState.game };

            houses.forEach((houseName) => {
              gameFields.forEach((fieldName) => {
                newState[
                  "round1_" + houseName + "_" + fieldName
                ] = this.playerStartingValues[houseName][fieldName];
              });
            });

            return { game: newState };
          });
        }
      }
    });
  }

  // submitGameToDatabase() {
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("POST", "/addGameToDatabase", true);
  //   xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  //   xhr.send(JSON.stringify(this.state));
  // }

  checkState() {
    console.log(JSON.stringify(this.state.game));
  }

  checkGameObjectProperties() {
    console.log(JSON.stringify(gameObject));
  }

  componentDidMount() {
    this.fetchPlayers();
    this.fetchGameCount();
  }

  componentWillUnmount() {}

  returnDisplay() {
    if (this.state.currentRound === 0) {
      return (
        <>
          <GameInfo
            gameId={this.state.gameId}
            saved={{
              name: this.state.name,
              gameNotes: this.state.gameNotes,
              month: this.state.month,
              day: this.state.day,
              year: this.state.year,
            }}
          />
          <br />
          <button onClick={this.checkState}>Check State</button>
          <button onClick={this.checkGameObjectProperties}>
            Check GameObject
          </button>
          <HouseAssignments
            players={this.state.players}
            updateRound1Data={this.updateRound1Data}
            saved={{
              lannister: this.state.lannisterId,
              greyjoy: this.state.greyjoyId,
              stark: this.state.starkId,
              arryn: this.state.arrynId,
              baratheon: this.state.baratheonId,
              targaryen: this.state.targaryenId,
              dorn: this.state.dornId,
              tyrell: this.state.tyrellId,
              winner: this.state.winner,
            }}
            finalRound={this.state.finalRound}
          />
        </>
      );
    } else if (this.state.currentRound > 0 && this.state.currentRound < 10) {
      return (
        <>
          <RoundInfo
            round={this.state.currentRound}
            //saved={this.state["round" + this.state.currentRound]}
            saved={this.state.game}
            loadFromPrevious={this.loadFromPrevious}
            houseAssignments={{
              lannister: this.state.lannisterId,
              greyjoy: this.state.greyjoyId,
              stark: this.state.starkId,
              arryn: this.state.arrynId,
              baratheon: this.state.baratheonId,
              targaryen: this.state.targaryenId,
              dorn: this.state.dornId,
              tyrell: this.state.tyrellId,
            }}
            players={this.state.players}
          />
        </>
      );
    } else if (this.state.currentRound === 10) {
      return (
        <>
          <RoundInfo
            round={this.state.currentRound}
            //saved={this.state["round" + this.state.currentRound]}
            saved={this.state.game}
            loadFromPrevious={this.loadFromPrevious}
            houseAssignments={{
              lannister: this.state.lannisterId,
              greyjoy: this.state.greyjoyId,
              stark: this.state.starkId,
              arryn: this.state.arrynId,
              baratheon: this.state.baratheonId,
              targaryen: this.state.targaryenId,
              dorn: this.state.dornId,
              tyrell: this.state.tyrellId,
            }}
            players={this.state.players}
          />
          ---------------------------------------
          <div style={{ width: "13em" }}>
            <form
              method="POST"
              action="/addGameToDatabase"
              style={{ textAlign: "center" }}
            >
              <input
                type="hidden"
                name="gameInfo"
                value={JSON.stringify({
                  // SAVED DATA
                  gameId: this.state.gameId,
                  gameNotes: this.state.gameNotes,
                  finalRound: this.state.finalRound,
                  winner: this.state.winner,
                  name: this.state.name,
                  month: this.state.month,
                  day: this.state.day,
                  year: this.state.year,
                  lannisterId: this.state.lannisterId,
                  greyjoyId: this.state.greyjoyId,
                  starkId: this.state.starkId,
                  arrynId: this.state.arrynId,
                  baratheonId: this.state.baratheonId,
                  targaryenId: this.state.targaryenId,
                  dornId: this.state.dornId,
                  tyrellId: this.state.tyrellId,
                })}
              />
              <input
                type="hidden"
                name="gameData"
                value={JSON.stringify(this.state.game)}
              />
              <input type="submit" value="Submit Game to Database" />
            </form>
          </div>
        </>
      );
    } else {
      return <div>Invalid Round Number</div>;
    }
  }

  render() {
    return (
      <div>
        <h2>ADD GAME</h2>
        <RoundNav
          roundNumber={this.state.currentRound}
          incrementRound={this.onClick_IncrementRound}
          decrementRound={this.onClick_DecrementRound}
        />
        <br />
        <br />
        <div onChange={this.handleChange}>{this.returnDisplay()}</div>
      </div>
    );
  }
}
