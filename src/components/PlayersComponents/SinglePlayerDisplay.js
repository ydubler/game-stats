import React from "react";

export default class SinglePlayerDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: this.props.displayName,
      mouseOver: false
    };

    console.log("props is " + JSON.stringify(props));

    this.returnDisplay = this.returnDisplay.bind(this);
    this.onMouseOver_playerName = this.onMouseOver_playerName.bind(this);
    this.onMouseLeave_playerName = this.onMouseLeave_playerName.bind(this);
    this.onMouseClick_playerName = this.onMouseClick_playerName.bind(this);
    this.onChange_playerName = this.onChange_playerName.bind(this);
    this.onKeyDown_playerName = this.onKeyDown_playerName.bind(this);
  }

  onMouseOver_playerName() {
    this.setState({ mouseOver: true });
    console.log("mouseOver, state is: " + JSON.stringify(this.state));
  }

  onMouseLeave_playerName() {
    this.setState({ mouseOver: false });
    console.log("mouseLeave, state is: " + JSON.stringify(this.state));
  }

  onMouseClick_playerName() {
    this.props.lockCells();
    this.props.setEditingId(this.props.id);
    console.log("editing");
    console.log("state is: " + JSON.stringify(this.state));
  }

  onChange_playerName(event) {
    console.log("event.target.value = " + event.target.value);
    this.setState({ newName: event.target.value });
  }

  onKeyDown_playerName(event) {
    console.log("event.key = " + event.key);
    if (event.key === "Enter") {
      console.log("pressed enter! (e.t.v = " + event.target.value + ")");
    }
    if (event.keyCode === 27) {
      this.setState({ name: event.target.value });
      this.props.unlockCells();
      console.log("pressed escape");
    }
  }

  onSubmit_playerName(event) {
    event.preventDefault();
  }

  componentDidMount() {
    console.log("component mounted: " + this.name);
  }

  componentWillUnmount() {
    console.log("component unmounted: " + this.name);
  }

  returnDisplay() {
    if (this.props.areCellsLocked() === true) {
      if (this.props.getEditingId() === this.props.id) {
        return (
          <div key={this.props.id} onMouseLeave={this.onMouseLeave_playerName}>
            <form
              method="POST"
              action="/updatePlayerName"
              style={{
                margin: "0px",
                display: "inline"
              }}
            >
              <input
                name="playerId"
                value={this.props.id}
                style={{
                  width: "2em",
                  backgroundColor: "#d1d1d1",
                  textAlign: "center",
                  display: "inline"
                }}
                readOnly
              />
              <input
                name="playersNewName"
                style={{
                  width: "10em"
                }}
                type="text"
                placeholder={this.props.displayName}
                onChange={this.onChange_playerName}
                onKeyDown={this.onKeyDown_playerName}
                onMouseOver={this.onMouseOver_playerName}
                value={this.state.newName}
                autoFocus
                required
                autoComplete="off"
              />
              <input type="submit" value="Update" />
            </form>
            ({this.props.name})
          </div>
        );
      } else {
        return (
          <div
            key={this.props.id}
            onMouseOver={this.onMouseOver_playerName}
            onMouseLeave={this.onMouseLeave_playerName}
          >
            <input
              value={this.props.id}
              style={{
                width: "2em",
                backgroundColor: "#d1d1d1",
                textAlign: "center",
                display: "inline"
              }}
              readOnly
            />
            &nbsp;{this.props.displayName}
          </div>
        );
      }
    } else {
      if (this.state.mouseOver === true) {
        return (
          <div key={this.props.id} onMouseLeave={this.onMouseLeave_playerName}>
            <input
              value={this.props.id}
              style={{
                width: "2em",
                backgroundColor: "#d1d1d1",
                textAlign: "center",
                display: "inline"
              }}
              readOnly
            />
            &nbsp;
            <button onClick={this.onMouseClick_playerName}>
              {this.props.displayName}
            </button>
            &nbsp;&nbsp;({this.props.name})
          </div>
        );
      } else {
        return (
          <div
            key={this.props.id}
            onMouseOver={this.onMouseOver_playerName}
            onMouseLeave={this.onMouseLeave_playerName}
          >
            <input
              value={this.props.id}
              style={{
                width: "2em",
                backgroundColor: "#d1d1d1",
                textAlign: "center",
                display: "inline"
              }}
              readOnly
            />
            &nbsp;{this.props.displayName}
          </div>
        );
      }
    }
  }

  render() {
    return <div>{this.returnDisplay()}</div>;
  }
}
