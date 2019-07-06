import React from "react";

export default class Nav extends React.Component {
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
