import React from "react";
import SinglePlayerDisplay from "./SinglePlayerDisplay";

export default class PlayersDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingId: -1,
      cellsLocked: false
    };

    this.setEditingId = this.setEditingId.bind(this);
    this.getEditingId = this.getEditingId.bind(this);
    this.lockCells = this.lockCells.bind(this);
    this.unlockCells = this.unlockCells.bind(this);
    this.areCellsLocked = this.areCellsLocked.bind(this);
    this.onMouseLeave_playerDisplay = this.onMouseLeave_playerDisplay.bind(
      this
    );
  }

  setEditingId(idIn) {
    this.setState({ editingId: idIn });
  }

  getEditingId() {
    return this.state.editingId;
  }

  areCellsLocked() {
    if (this.state.cellsLocked === false) {
      return false;
    } else {
      return true;
    }
  }

  lockCells() {
    this.setState({ cellsLocked: true });
    console.log("cells locked");
  }

  unlockCells() {
    this.setState({ cellsLocked: false });
    console.log("cells unlocked");
  }

  onMouseLeave_playerDisplay() {
    this.setState({ editingId: -1, cellsLocked: false });
    console.log("mouseLeave, state is: " + JSON.stringify(this.state));
  }

  render() {
    return (
      <div
        onMouseLeave={this.onMouseLeave_playerDisplay}
        onKeyDown={this.onKeyDown_playerDisplay}
      >
        {this.props.players.map(data => (
          <SinglePlayerDisplay
            key={data.id}
            setEditingId={this.setEditingId}
            getEditingId={this.getEditingId}
            lockCells={this.lockCells}
            unlockCells={this.unlockCells}
            areCellsLocked={this.areCellsLocked}
            id={data.id}
            name={data.name}
            displayName={data.displayname}
          />
        ))}
      </div>
    );
  }
}
