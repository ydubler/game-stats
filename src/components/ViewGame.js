import React from "react";
import {
  rounds,
  gameFields,
  houses,
  houseColors,
  gameObject,
  TEMPORARY_roundData
} from "./dataObjects/GameProperties";

export default class ViewGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameID: this.props.match.params.id,
      players: [],
      game: [],

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

    // let initGameState = {};
    // rounds.forEach(round => {
    //   houses.forEach(house => {
    //     gameFields.forEach(field => {
    //       this.state.game.gamedata[
    //         "round" + round + "_" + house + "_" + field
    //       ] = 0;
    //     });
    //   });
    // });

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
  }

  fetchGameByID() {
    fetch("/getGames/" + this.state.gameID)
      .then(response => {
        console.log("/viewGame/" + this.state.gameID + " FETCHING game by ID.");
        return response.json();
      })
      .then(data => {
        this.setState(prevState => {
          let newState = {
            ...data[0]
          };

          newState.gamedata = data[0].gamedata;
          return { game: newState };
        });
      });
  }

  fetchPlayers() {
    fetch("/getPlayers")
      .then(response => {
        console.log(
          "/viewGame/" + this.state.gameID + " FETCHING player data."
        );
        return response.json();
      })
      .then(data => this.setState({ players: data }));
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
        this.state.game.gamedata[
          "round" + this.state.game.finalround + "_" + a + "_strongholds_end"
        ]
      ) +
      Number.parseInt(
        this.state.game.gamedata[
          "round" + this.state.game.finalround + "_" + a + "_castles_end"
        ]
      );

    let totalVictoryPoints_B =
      Number.parseInt(
        this.state.game.gamedata[
          "round" + this.state.game.finalround + "_" + b + "_strongholds_end"
        ]
      ) +
      Number.parseInt(
        this.state.game.gamedata[
          "round" + this.state.game.finalround + "_" + b + "_castles_end"
        ]
      );

    //console.log("tvpA = " + totalVictoryPoints_A);
    //console.log("tvpB = " + totalVictoryPoints_B);

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
        this.state.game.gamedata[
          "round" + this.state.game.finalround + "_" + a + "_boats_end"
        ]
      ) +
      Number.parseInt(
        this.state.game.gamedata[
          "round" + this.state.game.finalround + "_" + a + "_footmen_end"
        ]
      ) +
      Number.parseInt(
        this.state.game.gamedata[
          "round" + this.state.game.finalround + "_" + a + "_knights_end"
        ]
      ) +
      Number.parseInt(
        this.state.game.gamedata[
          "round" + this.state.game.finalround + "_" + a + "_siege_end"
        ]
      );

    let totalVictoryPoints_B =
      Number.parseInt(
        this.state.game.gamedata[
          "round" + this.state.game.finalround + "_" + b + "_boats_end"
        ]
      ) +
      Number.parseInt(
        this.state.game.gamedata[
          "round" + this.state.game.finalround + "_" + b + "_footmen_end"
        ]
      ) +
      Number.parseInt(
        this.state.game.gamedata[
          "round" + this.state.game.finalround + "_" + b + "_knights_end"
        ]
      ) +
      Number.parseInt(
        this.state.game.gamedata[
          "round" + this.state.game.finalround + "_" + b + "_siege_end"
        ]
      );

    // console.log("tvpA = " + totalVictoryPoints_A);
    // console.log("tvpB = " + totalVictoryPoints_B);

    if (totalVictoryPoints_A >= totalVictoryPoints_B) {
      return 1;
    } else if (totalVictoryPoints_A < totalVictoryPoints_B) {
      return -1;
    } else {
      return 0;
    }
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
        Game {this.state.gameID} :{" "}
        <div style={{ display: "inline", fontFamily: "fantasy" }}>
          "{this.state.game.name}"
        </div>
        <br />
        Winner: {this.getDisplayNameFromID(this.state.game.winner)} of House{" "}
        {this.getHouseFromId(this.state.game.winner)} , Round{" "}
        {this.state.game.finalround}
        <br />
        <br />
        <div id="strongholdsAndCastlesTest">
          <div
            style={{ width: 360, textAlign: "center", fontFamily: "fantasy" }}
          >
            STRONGHOLDS AND CASTLES
            <svg width="360" height="200">
              {this.state.houseDisplayOrder
                .filter(houseName => this.state.game[houseName] >= 0)
                //.sort(this.comparisonFunction_VictoryPoints)
                .map(houseName => (
                  <>
                    <path
                      key={houseName + "_strongholds_start"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_strongholds_start"
                            ]
                          ) *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_strongholds_start"
                                ]
                              ) *
                                18) +
                            " L " +
                            ((curRound + 1) * 30 + 35) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_strongholds_end"
                                ]
                              ) *
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
                      key={houseName + "_castles_start"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_castles_start"
                            ]
                          ) *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_castles_start"
                                ]
                              ) *
                                18) +
                            " L " +
                            ((curRound + 1) * 30 + 35) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_castles_end"
                                ]
                              ) *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeOpacity={this.state[houseName + "Opacity"]}
                      strokeDasharray="5,5"
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
                  key={"yAxis_strongholdsCastles" + number}
                  x="10"
                  y={185 - 18 * number}
                  fontFamily="cursive"
                >
                  {number}
                </text>
              ))}

              {/* { Put in round numbers} */}
              {[...Array(11).keys()].map(curRound => (
                <text
                  key={"xAxis_strongholdsCastles" + curRound}
                  x={15 + curRound * 30}
                  y="195"
                  fontFamily="cursive"
                >
                  {curRound}
                </text>
              ))}
            </svg>
          </div>
        </div>
        <div id="SiegeKnightsFootmenBoats">
          <div
            style={{ width: 360, textAlign: "center", fontFamily: "fantasy" }}
          >
            SIEGE, KNIGHTS, FOOTMEN, BOATS
            <svg width="360" height="200">
              {this.state.houseDisplayOrder
                .filter(houseName => this.state.game[houseName] >= 0)
                // .sort(this.comparisonFunction_KnightsFootmen)
                .map(houseName => (
                  <>
                    <path
                      key={houseName + "_siege_start"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_siege_start"
                            ]
                          ) *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_siege_start"
                                ]
                              ) *
                                18) +
                            " L " +
                            ((curRound + 1) * 30 + 35) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_siege_end"
                                ]
                              ) *
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
                      key={houseName + "_knights_start"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_knights_start"
                            ]
                          ) *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_knights_start"
                                ]
                              ) *
                                18) +
                            " L " +
                            ((curRound + 1) * 30 + 35) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_knights_end"
                                ]
                              ) *
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
                      key={houseName + "_footmen_start"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_footmen_start"
                            ]
                          ) *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_footmen_start"
                                ]
                              ) *
                                18) +
                            " L " +
                            ((curRound + 1) * 30 + 35) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_footmen_end"
                                ]
                              ) *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeOpacity={this.state[houseName + "Opacity"]}
                      strokeDasharray="3,3"
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
                      key={houseName + "_boats_start"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_boats_start"
                            ]
                          ) *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_boats_start"
                                ]
                              ) *
                                18) +
                            " L " +
                            ((curRound + 1) * 30 + 35) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_boats_end"
                                ]
                              ) *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeOpacity={this.state[houseName + "Opacity"]}
                      strokeDasharray="1,1"
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
                  key={"yAxis_boatsFootmenKnightsSiege_" + number}
                  x="10"
                  y={185 - 18 * number}
                  fontFamily="cursive"
                >
                  {number}
                </text>
              ))}

              {/* { Put in round numbers} */}
              {[...Array(11).keys()].map(curRound => (
                <text
                  key={"xAxis_boatsFootmenKnightsSiege_" + curRound}
                  x={15 + curRound * 30}
                  y="195"
                  fontFamily="cursive"
                >
                  {curRound}
                </text>
              ))}
            </svg>
          </div>
        </div>
        <div id="casualties">
          <div
            style={{ width: 360, textAlign: "center", fontFamily: "fantasy" }}
          >
            COMBAT CASUALTIES
            <svg width="360" height="200">
              {this.state.houseDisplayOrder
                .filter(houseName => this.state.game[houseName] >= 0)
                // .sort(this.comparisonFunction_KnightsFootmen)
                .map(houseName => (
                  <>
                    <path
                      key={houseName + "_siege_start"}
                      d={
                        "M 20 180" +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              `${
                                Number.parseInt(
                                  this.state.game.gamedata[
                                    "round" +
                                      (curRound + 1) +
                                      "_" +
                                      houseName +
                                      "_siege_end"
                                  ]
                                ) <
                                Number.parseInt(
                                  this.state.game.gamedata[
                                    "round" +
                                      (curRound + 1) +
                                      "_" +
                                      houseName +
                                      "_siege_start"
                                  ]
                                )
                                  ? Number.parseInt(
                                      this.state.game.gamedata[
                                        "round" +
                                          (curRound + 1) +
                                          "_" +
                                          houseName +
                                          "_siege_start"
                                      ]
                                    ) -
                                    Number.parseInt(
                                      this.state.game.gamedata[
                                        "round" +
                                          (curRound + 1) +
                                          "_" +
                                          houseName +
                                          "_siege_end"
                                      ]
                                    )
                                  : 0
                              }` *
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
                      key={houseName + "_knights_start"}
                      d={
                        "M 20 180" +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              `${
                                Number.parseInt(
                                  this.state.game.gamedata[
                                    "round" +
                                      (curRound + 1) +
                                      "_" +
                                      houseName +
                                      "_knights_end"
                                  ]
                                ) <
                                Number.parseInt(
                                  this.state.game.gamedata[
                                    "round" +
                                      (curRound + 1) +
                                      "_" +
                                      houseName +
                                      "_knights_start"
                                  ]
                                )
                                  ? Number.parseInt(
                                      this.state.game.gamedata[
                                        "round" +
                                          (curRound + 1) +
                                          "_" +
                                          houseName +
                                          "_knights_start"
                                      ]
                                    ) -
                                    Number.parseInt(
                                      this.state.game.gamedata[
                                        "round" +
                                          (curRound + 1) +
                                          "_" +
                                          houseName +
                                          "_knights_end"
                                      ]
                                    )
                                  : 0
                              }` *
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
                      key={houseName + "_footmen_start"}
                      d={
                        "M 20 180" +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              `${
                                Number.parseInt(
                                  this.state.game.gamedata[
                                    "round" +
                                      (curRound + 1) +
                                      "_" +
                                      houseName +
                                      "_footmen_end"
                                  ]
                                ) <
                                Number.parseInt(
                                  this.state.game.gamedata[
                                    "round" +
                                      (curRound + 1) +
                                      "_" +
                                      houseName +
                                      "_footmen_start"
                                  ]
                                )
                                  ? Number.parseInt(
                                      this.state.game.gamedata[
                                        "round" +
                                          (curRound + 1) +
                                          "_" +
                                          houseName +
                                          "_footmen_start"
                                      ]
                                    ) -
                                    Number.parseInt(
                                      this.state.game.gamedata[
                                        "round" +
                                          (curRound + 1) +
                                          "_" +
                                          houseName +
                                          "_footmen_end"
                                      ]
                                    )
                                  : 0
                              }` *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeOpacity={this.state[houseName + "Opacity"]}
                      strokeDasharray="3,3"
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
                      key={houseName + "_boats_start"}
                      d={
                        "M 20 180" +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              `${
                                Number.parseInt(
                                  this.state.game.gamedata[
                                    "round" +
                                      (curRound + 1) +
                                      "_" +
                                      houseName +
                                      "_boats_end"
                                  ]
                                ) <
                                Number.parseInt(
                                  this.state.game.gamedata[
                                    "round" +
                                      (curRound + 1) +
                                      "_" +
                                      houseName +
                                      "_boats_start"
                                  ]
                                )
                                  ? Number.parseInt(
                                      this.state.game.gamedata[
                                        "round" +
                                          (curRound + 1) +
                                          "_" +
                                          houseName +
                                          "_boats_start"
                                      ]
                                    ) -
                                    Number.parseInt(
                                      this.state.game.gamedata[
                                        "round" +
                                          (curRound + 1) +
                                          "_" +
                                          houseName +
                                          "_boats_end"
                                      ]
                                    )
                                  : 0
                              }` *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeOpacity={this.state[houseName + "Opacity"]}
                      strokeDasharray="1,1"
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
                  key={"yAxis_boatsFootmenKnightsSiege_" + number}
                  x="10"
                  y={185 - 18 * number}
                  fontFamily="cursive"
                >
                  {number}
                </text>
              ))}

              {/* { Put in round numbers} */}
              {[...Array(11).keys()].map(curRound => (
                <text
                  key={"xAxis_boatsFootmenKnightsSiege_" + curRound}
                  x={15 + curRound * 30}
                  y="195"
                  fontFamily="cursive"
                >
                  {curRound}
                </text>
              ))}
            </svg>
          </div>
        </div>
        <div id="citiesLost">
          <div
            style={{ width: 360, textAlign: "center", fontFamily: "fantasy" }}
          >
            STRONGHOLDS AND CASTLES LOST
            <svg width="360" height="200">
              {this.state.houseDisplayOrder
                .filter(houseName => this.state.game[houseName] >= 0)
                // .sort(this.comparisonFunction_KnightsFootmen)
                .map(houseName => (
                  <>
                    <path
                      key={houseName + "_strongholds_start"}
                      d={
                        "M 20 180" +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              `${
                                Number.parseInt(
                                  this.state.game.gamedata[
                                    "round" +
                                      (curRound + 1) +
                                      "_" +
                                      houseName +
                                      "_strongholds_end"
                                  ]
                                ) <
                                Number.parseInt(
                                  this.state.game.gamedata[
                                    "round" +
                                      (curRound + 1) +
                                      "_" +
                                      houseName +
                                      "_strongholds_start"
                                  ]
                                )
                                  ? Number.parseInt(
                                      this.state.game.gamedata[
                                        "round" +
                                          (curRound + 1) +
                                          "_" +
                                          houseName +
                                          "_strongholds_start"
                                      ]
                                    ) -
                                    Number.parseInt(
                                      this.state.game.gamedata[
                                        "round" +
                                          (curRound + 1) +
                                          "_" +
                                          houseName +
                                          "_strongholds_end"
                                      ]
                                    )
                                  : 0
                              }` *
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
                      key={houseName + "_castles_start"}
                      d={
                        "M 20 180" +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              `${
                                Number.parseInt(
                                  this.state.game.gamedata[
                                    "round" +
                                      (curRound + 1) +
                                      "_" +
                                      houseName +
                                      "_castles_end"
                                  ]
                                ) <
                                Number.parseInt(
                                  this.state.game.gamedata[
                                    "round" +
                                      (curRound + 1) +
                                      "_" +
                                      houseName +
                                      "_castles_start"
                                  ]
                                )
                                  ? Number.parseInt(
                                      this.state.game.gamedata[
                                        "round" +
                                          (curRound + 1) +
                                          "_" +
                                          houseName +
                                          "_castles_start"
                                      ]
                                    ) -
                                    Number.parseInt(
                                      this.state.game.gamedata[
                                        "round" +
                                          (curRound + 1) +
                                          "_" +
                                          houseName +
                                          "_castles_end"
                                      ]
                                    )
                                  : 0
                              }` *
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
                  </>
                ))}

              {/* {Put in axes} */}
              <path d={"M20 182, L 340 182"} stroke="black" />
              <path d={"M20 182, L 20 10"} stroke="black" />

              {/* {Put in Y-Axis numbers} */}
              {[...Array(10).keys()].map(number => (
                <text
                  key={"yAxis_boatsFootmenKnightsSiege_" + number}
                  x="10"
                  y={185 - 18 * number}
                  fontFamily="cursive"
                >
                  {number}
                </text>
              ))}

              {/* { Put in round numbers} */}
              {[...Array(11).keys()].map(curRound => (
                <text
                  key={"xAxis_boatsFootmenKnightsSiege_" + curRound}
                  x={15 + curRound * 30}
                  y="195"
                  fontFamily="cursive"
                >
                  {curRound}
                </text>
              ))}
            </svg>
          </div>
        </div>
        <div id="Supply">
          <div
            style={{ width: 360, textAlign: "center", fontFamily: "fantasy" }}
          >
            SUPPLY
            <svg width="360" height="200">
              {this.state.houseDisplayOrder
                .filter(houseName => this.state.game[houseName] >= 0)
                // .sort(this.comparisonFunction_KnightsFootmen)
                .map(houseName => (
                  <>
                    <path
                      key={houseName + "_supply"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_supply"
                            ]
                          ) *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_supply"
                                ]
                              ) *
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
                  key={"yAxis_supply_" + number}
                  x="10"
                  y={185 - 18 * number}
                  fontFamily="cursive"
                >
                  {number}
                </text>
              ))}

              {/* { Put in round numbers} */}
              {[...Array(11).keys()].map(curRound => (
                <text
                  key={"xAxis_supply_" + curRound}
                  x={15 + curRound * 30}
                  y="195"
                  fontFamily="cursive"
                >
                  {curRound}
                </text>
              ))}
            </svg>
          </div>
        </div>
        <div id="Money">
          <div
            style={{ width: 360, textAlign: "center", fontFamily: "fantasy" }}
          >
            MONEY
            <svg width="360" height="200">
              {this.state.houseDisplayOrder
                .filter(houseName => this.state.game[houseName] >= 0)
                // .sort(this.comparisonFunction_KnightsFootmen)
                .map(houseName => (
                  <>
                    <path
                      key={houseName + "_money"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_money"
                            ]
                          ) *
                            9) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_money"
                                ]
                              ) *
                                9)
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
                  </>
                ))}

              {/* {Put in axes} */}
              <path d={"M20 182, L 340 182"} stroke="black" />
              <path d={"M20 182, L 20 10"} stroke="black" />

              {/* {Put in Y-Axis numbers} */}
              {[...Array(21).keys()].map(number => (
                <text
                  key={"yAxis_supply_" + number}
                  x="10"
                  y={181 - 9 * number}
                  fontFamily="cursive"
                  fontSize="7px"
                >
                  {number}
                </text>
              ))}

              {/* { Put in round numbers} */}
              {[...Array(11).keys()].map(curRound => (
                <text
                  key={"xAxis_supply_" + curRound}
                  x={15 + curRound * 30}
                  y="195"
                  fontFamily="cursive"
                >
                  {curRound}
                </text>
              ))}
            </svg>
          </div>
        </div>
        <div id="forcedMuster">
          <div
            style={{
              width: 360,
              textAlign: "center",
              fontFamily: "fantasy"
            }}
          >
            FORCED MUSTER
            <svg width="360" height="200">
              {this.state.houseDisplayOrder
                .filter(houseName => this.state.game[houseName] >= 0)
                // .sort(this.comparisonFunction_KnightsFootmen)
                .map(houseName => (
                  <>
                    <path
                      key={houseName + "_supply"}
                      d={
                        "M 20 180" +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_forcedMuster"
                                ]
                              ) *
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
                  key={"yAxis_supply_" + number}
                  x="10"
                  y={185 - 18 * number}
                  fontFamily="cursive"
                >
                  {number}
                </text>
              ))}

              {/* { Put in round numbers} */}
              {[...Array(11).keys()].map(curRound => (
                <text
                  key={"xAxis_forcedMuster_" + curRound}
                  x={15 + curRound * 30}
                  y="195"
                  fontFamily="cursive"
                >
                  {curRound}
                </text>
              ))}
            </svg>
          </div>
          <br />
        </div>
        <div id="throneSwordRaven">
          <div
            style={{ width: 360, textAlign: "center", fontFamily: "fantasy" }}
          >
            THRONE, SWORD, RAVEN
            <svg width="360" height="200">
              {this.state.houseDisplayOrder
                .filter(houseName => this.state.game[houseName] >= 0)
                //.sort(this.comparisonFunction_VictoryPoints)
                .map(houseName => (
                  <>
                    <path
                      key={houseName + "_throne"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_throne"
                            ]
                          ) *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_throne"
                                ]
                              ) *
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
                      key={houseName + "_sword"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_sword"
                            ]
                          ) *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_sword"
                                ]
                              ) *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeOpacity={this.state[houseName + "Opacity"]}
                      strokeDasharray="5,5"
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
                      key={houseName + "_raven"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_raven"
                            ]
                          ) *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_raven"
                                ]
                              ) *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeOpacity={this.state[houseName + "Opacity"]}
                      strokeDasharray="1,1"
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
                  key={"yAxis_strongholdsCastles" + number}
                  x="10"
                  y={185 - 18 * number}
                  fontFamily="cursive"
                >
                  {number}
                </text>
              ))}

              {/* { Put in round numbers} */}
              {[...Array(11).keys()].map(curRound => (
                <text
                  key={"xAxis_strongholdsCastles" + curRound}
                  x={15 + curRound * 30}
                  y="195"
                  fontFamily="cursive"
                >
                  {curRound}
                </text>
              ))}
            </svg>
          </div>
        </div>
        <div id="throneSwordRaven">
          <div
            style={{ width: 360, textAlign: "center", fontFamily: "fantasy" }}
          >
            LANDS AND SEAS
            <svg width="360" height="200">
              {this.state.houseDisplayOrder
                .filter(houseName => this.state.game[houseName] >= 0)
                //.sort(this.comparisonFunction_VictoryPoints)
                .map(houseName => (
                  <>
                    <path
                      key={houseName + "_landTerritories"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_landTerritories"
                            ]
                          ) *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_landTerritories"
                                ]
                              ) *
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
                      key={houseName + "_seaTerritories"}
                      d={
                        "M 20 " +
                        (180 -
                          Number.parseInt(
                            this.state.game.gamedata[
                              "round1_" + houseName + "_seaTerritories"
                            ]
                          ) *
                            18) +
                        [...Array(this.state.game.finalround).keys()].map(
                          curRound =>
                            " L " +
                            ((curRound + 1) * 30 + 20) +
                            " " +
                            (180 -
                              Number.parseInt(
                                this.state.game.gamedata[
                                  "round" +
                                    (curRound + 1) +
                                    "_" +
                                    houseName +
                                    "_seaTerritories"
                                ]
                              ) *
                                18)
                        )
                      }
                      stroke={houseColors[houseName]}
                      fill="transparent"
                      strokeOpacity={this.state[houseName + "Opacity"]}
                      strokeDasharray="5,5"
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
                  key={"yAxis_strongholdsCastles" + number}
                  x="10"
                  y={185 - 18 * number}
                  fontFamily="cursive"
                >
                  {number}
                </text>
              ))}

              {/* { Put in round numbers} */}
              {[...Array(11).keys()].map(curRound => (
                <text
                  key={"xAxis_strongholdsCastles" + curRound}
                  x={15 + curRound * 30}
                  y="195"
                  fontFamily="cursive"
                >
                  {curRound}
                </text>
              ))}
            </svg>
          </div>
        </div>
        <div style={{ width: 100, display: "inline" }}>
          <div style={{ fontSize: 12, fontWeight: "bold", color: "gray" }}>
            HOVER OVER A HOUSE TO DRAW IT FORTH
          </div>
          {this.state.houseDisplayOrder
            .filter(name => this.state.game[name] >= 0)
            .map(houseName => (
              <div
                key={houseName + "_display_" + Math.random().toFixed(4)}
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
    );
  }
}
