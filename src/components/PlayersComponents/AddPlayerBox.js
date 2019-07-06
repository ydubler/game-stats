import React from "react";

export default class AddPlayerBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addingPlayer: false,
      playerName: "",
      displayName: ""
    };

    this.onClick_addNewPlayer = this.onClick_addNewPlayer.bind(this);
    this.onSubmit_addPlayerToDatabase = this.onSubmit_addPlayerToDatabase.bind(
      this
    );
    this.onMouseLeave_addNewPlayer = this.onMouseLeave_addNewPlayer.bind(this);
    this.onValueChange_permanent = this.onValueChange_permanent.bind(this);
    this.onValueChange_display = this.onValueChange_display.bind(this);
  }

  onClick_addNewPlayer() {
    this.setState({ addingPlayer: true });
  }

  onMouseLeave_addNewPlayer() {
    this.setState({ addingPlayer: false });
  }

  onSubmit_addPlayerToDatabase(event) {
    //event.preventDefault();
    this.setState({ addingPlayer: false });
    console.log("submitted form!!");
  }

  onValueChange_permanent(event) {
    console.log("valued changed: state = " + JSON.stringify(this.state));
    this.setState({ playerName: event.target.value });
  }

  onValueChange_display(event) {
    console.log("valued changed: state = " + JSON.stringify(this.state));
    this.setState({ displayName: event.target.value });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  returnDisplay() {
    if (this.state.addingPlayer === false) {
      return (
        <div style={{ paddingTop: "15px", paddingBottom: "15px" }}>
          <button onClick={this.onClick_addNewPlayer}>Add New Player</button>
        </div>
      );
    } else {
      return (
        <div style={{ paddingTop: "15px", paddingBottom: "15px" }}>
          <form
            method="POST"
            action="/addPlayer"
            d
            style={{ margin: "0px", display: "inline" }}
          >
            <input
              name="playerId"
              id="val1"
              type="number"
              value={this.props.numberOfPlayers}
              style={{
                width: "3em",
                backgroundColor: "#d1d1d1"
              }}
              readOnly
            />
            <input
              name="permanentName"
              id="val2"
              type="text"
              placeholder="Permanent"
              style={{ width: "8em" }}
              value={this.state.playerName}
              onChange={this.onValueChange_permanent}
              autoFocus
              required
              autoComplete="off"
            />
            <input
              name="displayName"
              id="val3"
              type="text"
              placeholder="Display"
              style={{ width: "8em" }}
              value={this.state.displayName}
              onChange={this.onValueChange_display}
              required
              autoComplete="off"
            />

            <input
              type="submit"
              onSubmit={this.onSubmit_addPlayerToDatabase}
              value="Add Player to Database"
            />
          </form>
        </div>
      );
    }
  }

  render() {
    return (
      <div onMouseLeave={this.onMouseLeave_addNewPlayer}>
        {this.returnDisplay()}
      </div>
    );
  }
}
