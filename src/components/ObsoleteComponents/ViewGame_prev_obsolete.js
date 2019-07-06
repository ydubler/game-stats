import React from "react";
import {
  gameFields,
  houses,
  houseColors,
  TEMPORARY_roundData
} from "./dataObjects/GameProperties";

export default class ViewGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameID: this.props.match.params.id,
      players: [],
      game: {
        round1: {
          round1: {
            lannister: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            greyjoy: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            stark: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            arryn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            baratheon: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            targaryen: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            dorn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            tyrell: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            }
          }
        },
        round2: {
          round2: {
            lannister: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            greyjoy: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            stark: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            arryn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            baratheon: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            targaryen: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            dorn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            tyrell: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            }
          }
        },
        round3: {
          round3: {
            lannister: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            greyjoy: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            stark: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            arryn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            baratheon: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            targaryen: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            dorn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            tyrell: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            }
          }
        },
        round4: {
          round4: {
            lannister: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            greyjoy: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            stark: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            arryn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            baratheon: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            targaryen: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            dorn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            tyrell: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            }
          }
        },
        round5: {
          round4: {
            lannister: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            greyjoy: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            stark: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            arryn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            baratheon: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            targaryen: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            dorn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            tyrell: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            }
          }
        },
        round6: {
          round6: {
            lannister: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            greyjoy: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            stark: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            arryn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            baratheon: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            targaryen: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            dorn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            tyrell: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            }
          }
        },
        round7: {
          round7: {
            lannister: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            greyjoy: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            stark: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            arryn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            baratheon: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            targaryen: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            dorn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            tyrell: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            }
          }
        },
        round8: {
          round8: {
            lannister: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            greyjoy: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            stark: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            arryn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            baratheon: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            targaryen: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            dorn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            tyrell: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            }
          }
        },
        round9: {
          round9: {
            lannister: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            greyjoy: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            stark: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            arryn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            baratheon: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            targaryen: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            dorn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            tyrell: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            }
          }
        },
        round10: {
          round10: {
            lannister: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            greyjoy: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            stark: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            arryn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            baratheon: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            targaryen: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            dorn: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            },
            tyrell: {
              strongholds: 1,
              castles: 0,
              knights: 0,
              footmen: 0,
              boats: 0,
              supply: 0
            }
          }
        }
      },
      // DISPLAY ORDER
      houseDisplayOrder: houses,
      // BUTTON OPACITY:
      lannisterOpacity: 0.5,
      greyjoyOpacity: 0.5,
      starkOpacity: 0.5,
      arrynOpacity: 0.5,
      baratheonOpacity: 0.5,
      targaryenOpacity: 0.5,
      dornOpacity: 0.5,
      tyrellOpacity: 0.5,
      // STROKE
      lannisterStroke: 2,
      greyjoyStroke: 2,
      starkStroke: 2,
      arrynStroke: 2,
      baratheonStroke: 2,
      targaryenStroke: 2,
      dornStroke: 2,
      tyrellStroke: 2
    };

    this.fetchGameByID = this.fetchGameByID.bind(this);
    this.fetchPlayers = this.fetchPlayers.bind(this);
    this.comparisonFunction_VictoryPoints = this.comparisonFunction_VictoryPoints.bind(
      this
    );
    this.comparisonFunction_KnightsFootmen = this.comparisonFunction_KnightsFootmen.bind(
      this
    );
    this.onMouseEnter_houseGraph = this.onMouseEnter_houseGraph.bind(this);
    this.onMouseExit_houseGraph = this.onMouseLeave_houseGraph.bind(this);
    console.log("temp data:", TEMPORARY_roundData);
  }

  onMouseEnter_houseGraph(houseName) {
    this.setState(prevState => {
      let newState = { ...prevState };

      newState[houseName + "Stroke"] = 5;
      newState[houseName + "Opacity"] = 1;
      //newState.houseDisplayOrder = [houseName, ...houses];

      return newState;
    });
  }

  onMouseLeave_houseGraph(houseName) {
    this.setState(prevState => {
      let newState = { ...prevState };

      newState[houseName + "Stroke"] = 2;
      newState[houseName + "Opacity"] = 0.5;
      //newState.houseDisplayOrder = [houseName, , ...houses];

      return newState;
    });
  }

  comparisonFunction_VictoryPoints(a, b) {
    let totalVictoryPoints_A =
      Number.parseInt(
        this.state.game["round" + this.state.game.finalround][
          "round" + this.state.game.finalround
        ][a].strongholds
      ) +
      Number.parseInt(
        this.state.game["round" + this.state.game.finalround][
          "round" + this.state.game.finalround
        ][a].castles
      );

    let totalVictoryPoints_B =
      Number.parseInt(
        this.state.game["round" + this.state.game.finalround][
          "round" + this.state.game.finalround
        ][b].strongholds
      ) +
      Number.parseInt(
        this.state.game["round" + this.state.game.finalround][
          "round" + this.state.game.finalround
        ][b].castles
      );

    console.log("tvpA = " + totalVictoryPoints_A);
    console.log("tvpB = " + totalVictoryPoints_B);

    if (totalVictoryPoints_A >= totalVictoryPoints_B) {
      return 1;
    } else if (totalVictoryPoints_A < totalVictoryPoints_B) {
      return -1;
    } else {
      return 0;
    }
  }

  comparisonFunction_KnightsFootmen(a, b) {
    let totalVictoryPoints_A =
      Number.parseInt(
        this.state.game["round" + this.state.game.finalround][
          "round" + this.state.game.finalround
        ][a].knights
      ) +
      Number.parseInt(
        this.state.game["round" + this.state.game.finalround][
          "round" + this.state.game.finalround
        ][a].footmen
      );

    let totalVictoryPoints_B =
      Number.parseInt(
        this.state.game["round" + this.state.game.finalround][
          "round" + this.state.game.finalround
        ][b].knights
      ) +
      Number.parseInt(
        this.state.game["round" + this.state.game.finalround][
          "round" + this.state.game.finalround
        ][b].footmen
      );

    console.log("tvpA = " + totalVictoryPoints_A);
    console.log("tvpB = " + totalVictoryPoints_B);

    if (totalVictoryPoints_A >= totalVictoryPoints_B) {
      return 1;
    } else if (totalVictoryPoints_A < totalVictoryPoints_B) {
      return -1;
    } else {
      return 0;
    }
  }

  fetchGameByID() {
    fetch("/getGames/" + this.state.gameID)
      .then(response => {
        console.log("App fetching: " + JSON.stringify(response));
        return response.json();
      })
      .then(data => {
        this.setState({ game: data });
        console.log(JSON.stringify(data));
      });
  }

  fetchPlayers() {
    fetch("/getPlayers")
      .then(response => {
        console.log("App fetching: " + JSON.stringify(response));
        return response.json();
      })
      .then(data => this.setState({ players: data }));
  }

  componentDidMount() {
    this.fetchGameByID();
    this.fetchPlayers();
  }

  getDisplayNameFromID(idIn) {
    for (let i = 0; i < this.state.players.length; i++) {
      if (this.state.players[i].id === idIn) {
        return this.state.players[i].displayname;
      }
    }
  }

  getHouseFromId(idIn) {
    if (this.state.game.lannister == idIn) {
      return "Lannister";
    } else if (this.state.game.greyjoy == idIn) {
      return "Greyjoy";
    } else if (this.state.game.stark == idIn) {
      return "Stark";
    } else if (this.state.game.arryn == idIn) {
      return "Arryn";
    } else if (this.state.game.baratheon == idIn) {
      return "Baratheon";
    } else if (this.state.game.targaryen == idIn) {
      return "Targaryen";
    } else if (this.state.game.dorn == idIn) {
      return "Dorne";
    } else if (this.state.game.tyrell == idIn) {
      return "Tyrell";
    } else {
      return "No House";
    }
  }

  render() {
    return (
      <div>
        {/* <button
          onClick={() => {
            console.log(this.state.game);
          }}
        >
          report state
        </button> */}
        <br />
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          check state
        </button>
        <br />
        Viewing Statistics for Game {this.state.gameID} <br />
        <br />
        Game Name: "{this.state.game.name}" <br />
        <br />
        Winner: {this.getDisplayNameFromID(this.state.game.winner)} of House{" "}
        {this.getHouseFromId(this.state.game.winner)}
        <br />
        <br />
        Final Round: {this.state.game.finalround}
        <br />
        <br />
        <div id="strongholdsAndCastles">
          <div style={{ width: 360, textAlign: "center" }}>
            STRONGHOLDS AND CASTLES
            <svg width="360" height="200">
              {this.state.houseDisplayOrder
                .filter(houseName => this.state.game[houseName] >= 0)
                // .sort(this.comparisonFunction_VictoryPoints)
                .map(houseName => (
                  <>
                    <path
                      key={houseName + "_strongholds"}
                      d={
                        "M 20 " +
                        (180 -
                          this.state.game.round1.round1[houseName].strongholds *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            "L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              this.state.game["round" + (curRound + 1)][
                                "round" + (curRound + 1)
                              ][houseName].strongholds *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeWidth={this.state[houseName + "Stroke"]}
                      onMouseEnter={() => {
                        this.setState({
                          [houseName + "Stroke"]: 5,
                          [houseName + "Opacity"]: 1,
                          houseDisplayOrder: [...houses, houseName]
                        });
                      }}
                      onMouseLeave={() => {
                        this.setState({
                          [houseName + "Stroke"]: 2,
                          [houseName + "Opacity"]: 0.5,
                          houseDisplayOrder: houses
                        });
                      }}
                    />
                    <path
                      key={houseName + "_castles"}
                      d={
                        "M 20 " +
                        (180 -
                          this.state.game.round1.round1[houseName].castles *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            "L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              this.state.game["round" + (curRound + 1)][
                                "round" + (curRound + 1)
                              ][houseName].castles *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeOpacity={this.state[houseName + "Opacity"]}
                      strokeDasharray="5,5"
                      strokeWidth={this.state[houseName + "Stroke"]}
                      onMouseEnter={() => {
                        this.setState({
                          [houseName + "Stroke"]: 5,
                          [houseName + "Opacity"]: 1,
                          houseDisplayOrder: [...houses, houseName]
                        });
                      }}
                      onMouseLeave={() => {
                        this.setState({
                          [houseName + "Stroke"]: 2,
                          [houseName + "Opacity"]: 0.5,
                          houseDisplayOrder: houses
                        });
                      }}
                    />
                  </>
                ))}

              {/* {Put in axes} */}
              <path d={"M20 182, L 340 182"} stroke="black" />
              <path d={"M20 182, L 20 10"} stroke="black" />

              {/* {Put in Y-Axis numbers} */}
              {[...Array(10).keys()].map(number => (
                <text
                  key={"yAxis_" + number}
                  x="10"
                  y={185 - 18 * number}
                  className="heavy"
                >
                  {number}
                </text>
              ))}

              {/* { Put in round numbers} */}
              {[...Array(11).keys()].map(curRound => (
                <text
                  key={"round" + curRound}
                  x={15 + curRound * 30}
                  y="195"
                  className="heavy"
                >
                  {curRound}
                </text>
              ))}
            </svg>
          </div>
        </div>
        <div id="SiegeKnightsFootmenBoats">
          <div style={{ width: 360, textAlign: "center" }}>
            SIEGE, KNIGHTS, FOOTMEN, BOATS
            <svg width="360" height="200">
              {this.state.houseDisplayOrder
                .filter(houseName => this.state.game[houseName] >= 0)
                // .sort(this.comparisonFunction_KnightsFootmen)
                .map(houseName => (
                  <>
                    <path
                      key={houseName + "_siege"}
                      d={
                        "M 20 " +
                        (180 -
                          this.state.game.round1.round1[houseName].siege * 18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            "L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              this.state.game["round" + (curRound + 1)][
                                "round" + (curRound + 1)
                              ][houseName].siege *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeWidth={this.state[houseName + "Stroke"] + 2}
                      onMouseEnter={() => {
                        this.setState({
                          [houseName + "Stroke"]: 5,
                          [houseName + "Opacity"]: 1,
                          houseDisplayOrder: [...houses, houseName]
                        });
                      }}
                      onMouseLeave={() => {
                        this.setState({
                          [houseName + "Stroke"]: 2,
                          [houseName + "Opacity"]: 0.5,
                          houseDisplayOrder: houses
                        });
                      }}
                    />

                    <path
                      key={houseName + "_knights"}
                      d={
                        "M 20 " +
                        (180 -
                          this.state.game.round1.round1[houseName].knights *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            "L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              this.state.game["round" + (curRound + 1)][
                                "round" + (curRound + 1)
                              ][houseName].knights *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeWidth={this.state[houseName + "Stroke"]}
                      onMouseEnter={() => {
                        this.setState({
                          [houseName + "Stroke"]: 5,
                          [houseName + "Opacity"]: 1,
                          houseDisplayOrder: [...houses, houseName]
                        });
                      }}
                      onMouseLeave={() => {
                        this.setState({
                          [houseName + "Stroke"]: 2,
                          [houseName + "Opacity"]: 0.5,
                          houseDisplayOrder: houses
                        });
                      }}
                    />
                    <path
                      key={houseName + "_footmen"}
                      d={
                        "M 20 " +
                        (180 -
                          this.state.game.round1.round1[houseName].footmen *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            "L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              this.state.game["round" + (curRound + 1)][
                                "round" + (curRound + 1)
                              ][houseName].footmen *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeOpacity={this.state[houseName + "Opacity"]}
                      strokeDasharray="5,5"
                      strokeWidth={this.state[houseName + "Stroke"]}
                      onMouseEnter={() => {
                        this.setState({
                          [houseName + "Stroke"]: 5,
                          [houseName + "Opacity"]: 1,
                          houseDisplayOrder: [...houses, houseName]
                        });
                      }}
                      onMouseLeave={() => {
                        this.setState({
                          [houseName + "Stroke"]: 2,
                          [houseName + "Opacity"]: 0.5,
                          houseDisplayOrder: houses
                        });
                      }}
                    />
                    <path
                      key={houseName + "_boats"}
                      d={
                        "M 20 " +
                        (180 -
                          this.state.game.round1.round1[houseName].boats * 18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            "L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              this.state.game["round" + (curRound + 1)][
                                "round" + (curRound + 1)
                              ][houseName].boats *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeOpacity={this.state[houseName + "Opacity"]}
                      strokeDasharray="1,1"
                      strokeWidth={this.state[houseName + "Stroke"]}
                      onMouseEnter={() => {
                        this.setState({
                          [houseName + "Stroke"]: 5,
                          [houseName + "Opacity"]: 1,
                          houseDisplayOrder: [...houses, houseName]
                        });
                      }}
                      onMouseLeave={() => {
                        this.setState({
                          [houseName + "Stroke"]: 2,
                          [houseName + "Opacity"]: 0.5,
                          houseDisplayOrder: houses
                        });
                      }}
                    />
                  </>
                ))}

              {/* {Put in axes} */}
              <path d={"M20 182, L 340 182"} stroke="black" />
              <path d={"M20 182, L 20 10"} stroke="black" />

              {/* {Put in Y-Axis numbers} */}
              {[...Array(10).keys()].map(number => (
                <text
                  key={"2yAxis_" + number}
                  x="10"
                  y={185 - 18 * number}
                  className="heavy"
                >
                  {number}
                </text>
              ))}

              {/* { Put in round numbers} */}
              {[...Array(11).keys()].map(curRound => (
                <text
                  key={"2round" + curRound}
                  x={15 + curRound * 30}
                  y="195"
                  className="heavy"
                >
                  {curRound}
                </text>
              ))}
            </svg>
          </div>
          <br />
        </div>
        <div id="Supply">
          <div style={{ width: 360, textAlign: "center" }}>
            SUPPLY
            <svg width="360" height="200">
              {this.state.houseDisplayOrder
                .filter(houseName => this.state.game[houseName] >= 0)
                // .sort(this.comparisonFunction_KnightsFootmen)
                .map(houseName => (
                  <>
                    <path
                      key={houseName + "_siege"}
                      d={
                        "M 20 " +
                        (180 -
                          this.state.game.round1.round1[houseName].supply *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            "L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              this.state.game["round" + (curRound + 1)][
                                "round" + (curRound + 1)
                              ][houseName].supply *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeWidth={this.state[houseName + "Stroke"] + 2}
                      onMouseEnter={() => {
                        this.setState({
                          [houseName + "Stroke"]: 5,
                          [houseName + "Opacity"]: 1,
                          houseDisplayOrder: [...houses, houseName]
                        });
                      }}
                      onMouseLeave={() => {
                        this.setState({
                          [houseName + "Stroke"]: 2,
                          [houseName + "Opacity"]: 0.5,
                          houseDisplayOrder: houses
                        });
                      }}
                    />
                  </>
                ))}

              {/* {Put in axes} */}
              <path d={"M20 182, L 340 182"} stroke="black" />
              <path d={"M20 182, L 20 10"} stroke="black" />

              {/* {Put in Y-Axis numbers} */}
              {[...Array(10).keys()].map(number => (
                <text
                  key={"2yAxis_" + number}
                  x="10"
                  y={185 - 18 * number}
                  className="heavy"
                >
                  {number}
                </text>
              ))}

              {/* { Put in round numbers} */}
              {[...Array(11).keys()].map(curRound => (
                <text
                  key={"2round" + curRound}
                  x={15 + curRound * 30}
                  y="195"
                  className="heavy"
                >
                  {curRound}
                </text>
              ))}
            </svg>
          </div>
          <br />
          <div style={{ width: 100, display: "inline" }}>
            <div style={{ fontSize: 12, fontWeight: "bold", color: "gray" }}>
              HOVER OVER A HOUSE TO DRAW IT FORTH
            </div>
            {this.state.houseDisplayOrder
              .filter(name => this.state.game[name] >= 0)
              .map(houseName => (
                <div
                  style={{
                    width: 100,
                    backgroundColor: houseColors[houseName],
                    color: "white",
                    textAlign: "center",
                    display: "inline"
                  }}
                  onMouseEnter={() => {
                    this.setState({
                      [houseName + "Stroke"]: 5,
                      [houseName + "Opacity"]: 1,
                      houseDisplayOrder: [...houses, houseName]
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({
                      [houseName + "Stroke"]: 2,
                      [houseName + "Opacity"]: 0.5,
                      houseDisplayOrder: [...houses, houseName]
                    });
                  }}
                >
                  {houseName.toUpperCase()}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
