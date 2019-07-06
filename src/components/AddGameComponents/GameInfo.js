import React from "react";

export default class GameInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  render() {
    return (
      <div width="11em">
        <div style={{ display: "inline", textAlign: "center" }}>
          <h5 style={{ display: "inline" }}>Game : </h5>
          <input
            value={this.props.gameId}
            style={{
              width: "2em",
              backgroundColor: "#d1d1d1",
              textAlign: "center",
              display: "inline"
            }}
            readOnly
          />
        </div>
        <br />
        <div>
          <h5 style={{ display: "inline" }}>Date : </h5>
          <select
            id="gameInfo_month"
            defaultValue={this.props.saved.month}
            style={{ display: "inline" }}
          >
            <option value="-1" disabled>
              Month
            </option>
            {[...Array(12).keys()].map(number => (
              <option key={number} value={number + 1}>
                {number + 1}
              </option>
            ))}
          </select>
          <select
            id="gameInfo_day"
            defaultValue={this.props.saved.day}
            style={{ display: "inline" }}
          >
            <option value="-1" disabled>
              Day
            </option>
            {[...Array(32).keys()].map(number => (
              <option key={number} value={number + 1}>
                {number + 1}
              </option>
            ))}
          </select>
          <select
            id="gameInfo_year"
            defaultValue={this.props.saved.year}
            style={{ display: "inline" }}
          >
            <option value="-1" disabled>
              Year
            </option>
            {[...Array(5).keys()].map(number => (
              <option key={number} value={number + 2019}>
                {number + 2019}
              </option>
            ))}
          </select>
        </div>
        <h5 style={{ display: "inline" }}>Name : </h5>
        <input
          id="gameInfo_name"
          type="text"
          maxLength="30"
          placeholder="Best Game Ever!"
          onChange={() => {
            console.log("changed game name");
          }}
          value={this.props.saved.name}
          style={{
            textAlign: "center",
            display: "inline"
          }}
          required
        />
        <br />
        <br />
        <input
          id="gameInfo_gameNotes"
          type="text"
          maxLength="100"
          placeholder="Game Notes"
          onChange={() => {
            console.log("changed game notes");
          }}
          value={this.props.saved.gameNotes}
          style={{
            textAlign: "center",
            display: "inline",
            width: "20em",
            height: "3em"
          }}
          required
        />
      </div>
    );
  }
}
