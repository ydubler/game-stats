import React from "react";

export default class Nav extends React.Component {
  componentDidMount() {
    console.log("navbar mounted.");
  }

  componentWillUnmount() {
    console.log("navbar about to unmount.");
  }

  render() {
    return (
      <div>
        <a href="/">
          <button>HOME</button>
        </a>
        <a href="/players">
          <button>PLAYERS</button>
        </a>
        <a href="/games">
          <button>GAMES</button>
        </a>
      </div>
    );
  }
}
