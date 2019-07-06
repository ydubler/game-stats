import React from "react";
import { Transition } from "react-transition-group";

export default class SwordTooltip extends React.Component {
  constructor(props) {
    super(props);

    const duration = 300;

    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0
    };

    const transitionStyles = {
      entering: { opacity: 1 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 },
      exited: { opacity: 0 }
    };
  }

  render() {
    if (this.props.active)
      return (
        <>
          <div
            style={{
              position: "absolute",
              background: "transparent",
              padding: "5px",
              left: this.props.xPos,
              top: this.props.yPos,
              pointerEvents: "none",
              fontFamily: "fantasy",
              fontSize: "10px"
            }}
          >
            Winner: {this.props.winnerName} of House {this.props.houseName} on
            Round {this.props.finalRound}
          </div>
        </>
      );
    else {
      return <></>;
    }
  }

  componentDidMount() {}
}
