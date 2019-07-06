import React from "react";

export default class RoundNav extends React.Component {
  render() {
    return (
      <div>
        <div style={{ width: "13em", textAlign: "center" }}>
          <button
            onClick={this.props.decrementRound}
            style={{ float: "left", display: "inline" }}
          >
            {"<<<"}
          </button>
          <div style={{ display: "inline" }}>
            <div
              style={{
                display: "inline",
                textDecoration: "underline overline"
              }}
            >
              &nbsp;&nbsp;&nbsp;ROUND {this.props.roundNumber}
              &nbsp;&nbsp;&nbsp;
            </div>
          </div>
          <button
            onClick={this.props.incrementRound}
            style={{ float: "right", display: "inline" }}
          >
            {">>>"}
          </button>
        </div>
      </div>
    );
  }
}
