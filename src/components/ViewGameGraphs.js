<div id="strongholdsAndCastles">
  <div style={{ width: 360, textAlign: "center", fontFamily: "fantasy" }}>
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
</div>;
