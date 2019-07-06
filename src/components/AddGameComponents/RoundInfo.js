import React from "react";

export default class RoundInfo extends React.Component {
  constructor(props) {
    super(props);

    this.houses = [
      "lannister",
      "greyjoy",
      ,
      "stark",
      ,
      "arryn",
      ,
      "baratheon",
      ,
      "targaryen",
      ,
      "dorn",
      ,
      "tyrell"
    ];
  }

  setGreenBackground(event) {
    if (event.target.nodeName === "INPUT") {
    } else {
      event.target.setAttribute(
        "style",
        ` background-color: lightgreen; width:4em; float:right; display:inline; margin:0px; padding:0px;border:0px;`
      );
    }
  }

  returnButton() {
    if (this.props.round > 1) {
      return (
        <div style={{ width: "13em", textAlign: "center" }}>
          <button
            onClick={this.props.loadFromPrevious}
            style={{ textAlign: "center", display: "inline" }}
          >
            Load From Previous Round
          </button>
          <br />
          <br />
        </div>
      );
    }
  }

  takeFocus(event) {
    event.target.focus();
  }

  indicatePlayerOrVassal(houseName) {
    if (this.props.houseAssignments[houseName] == -1) {
      return "Vassal";
    } else if (this.props.houseAssignments[houseName] == -2) {
      return "DEAD";
    } else {
      return "Player";
    }
  }

  componentDidMount() {}

  componentWillMount() {}

  render() {
    return (
      <div
        onChange={this.setGreenBackground}
        id={"round" + this.props.round + "_start"}
      >
        {this.returnButton()}
        {this.houses.map(house => (
          <div key={house} id={house} style={{ width: "13em" }}>
            <h4
              style={{
                margin: "0px",
                padding: "0px",
                border: "0px",
                textDecoration: "underline"
              }}
            >
              {house.toUpperCase()} : {this.indicatePlayerOrVassal(house)}
            </h4>

            <br />
            <div style={{ margin: "0px", display: "inline" }}>Iron Throne</div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_throne_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "throne"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(7).keys()].map(number => (
                <option key={number} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>
              Fiefdoms (Sword)
            </div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_sword_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "sword"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(7).keys()].map(number => (
                <option key={number} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>
              King's Court (Raven)
            </div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_raven_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "raven"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(7).keys()].map(number => (
                <option key={number} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>Money</div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_money_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "money"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(21).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>Supply</div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_supply_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "supply"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(7).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <br />
            <div
              style={{
                backgroundColor: "white",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px",
                textAlign: "center",
                textDecoration: "underline",
                fontSize: 12
              }}
            >
              Ending
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px",
                textAlign: "center",
                textDecoration: "underline",
                fontSize: 12
              }}
            >
              Starting
            </div>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>
              &nbsp;&nbsp;&nbsp;Boats
            </div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_boats_end_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "boats_end"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(7).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <div style={{ float: "right", display: "inline" }}>||</div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_boats_start_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "boats_start"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(7).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>
              &nbsp;&nbsp;&nbsp;Footmen
            </div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_footmen_end_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "footmen_end"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(11).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <div style={{ float: "right", display: "inline" }}>||</div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_footmen_start_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + +"_footmen_start"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(11).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>
              &nbsp;&nbsp;&nbsp;Knights
            </div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_knights_end_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "knights_end"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(6).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <div style={{ float: "right", display: "inline" }}>||</div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_knights_start_" + house}
              value={
                this.props.saved[
                  "round" +
                    this.props.round +
                    "_" +
                    house +
                    "_" +
                    "knights_start"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(6).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>
              &nbsp;&nbsp;&nbsp;Siege
            </div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_siege_end_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "siege_end"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(3).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <div style={{ float: "right", display: "inline" }}>||</div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_siege_start_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "siege_start"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(3).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>Strongholds</div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_strongholds_end_" + house}
              value={
                this.props.saved[
                  "round" +
                    this.props.round +
                    "_" +
                    house +
                    "_" +
                    "strongholds_end"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(8).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <div style={{ float: "right", display: "inline" }}>||</div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_strongholds_start_" + house}
              value={
                this.props.saved[
                  "round" +
                    this.props.round +
                    "_" +
                    house +
                    "_" +
                    "strongholds_start"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(8).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>Castles</div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_castles_end_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "castles_end"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(8).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <div style={{ float: "right", display: "inline" }}>||</div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_castles_start_" + house}
              value={
                this.props.saved[
                  "round" +
                    this.props.round +
                    "_" +
                    house +
                    "_" +
                    "castles_start"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(8).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>
              Land Territories
            </div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_landTerritories_" + house}
              value={
                this.props.saved[
                  "round" +
                    this.props.round +
                    "_" +
                    house +
                    "_" +
                    "landTerritories"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(15).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>
              Sea Territories
            </div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_seaTerritories_" + house}
              value={
                this.props.saved[
                  "round" +
                    this.props.round +
                    "_" +
                    house +
                    "_" +
                    "seaTerritories"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(10).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <br />
            <div style={{ margin: "0px", display: "inline" }}>
              Forced Muster (Value)
            </div>
            <select
              className="fieldSelect"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_forcedMuster_" + house}
              value={
                this.props.saved[
                  "round" +
                    this.props.round +
                    "_" +
                    house +
                    "_" +
                    "forcedMuster"
                ]
              }
              style={{
                backgroundColor: "lightlightgray",
                width: "4em",
                float: "right",
                display: "inline",
                margin: "0px",
                padding: "0px",
                border: "0px"
              }}
            >
              {[...Array(3).keys()].map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <input
              type="text"
              onMouseEnter={this.takeFocus}
              id={"round" + this.props.round + "_playerNotes_" + house}
              value={
                this.props.saved[
                  "round" + this.props.round + "_" + house + "_" + "playerNotes"
                ]
              }
              placeholder="Player Notes"
              maxLength="50"
              style={{
                backgroundColor: "lightlightgray",
                width: "100%",
                height: "2em",
                display: "inline",
                margin: "1px",
                padding: "1px",
                border: "1px",
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: "1px"
              }}
            />
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  }
}
