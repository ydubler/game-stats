import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //event.preventDefault();

    // const response = await fetch("/getData");
    // const data = await response.json();
    // this.setState({ data: data });

    fetch("/getData")
      .then(response => {
        console.log("App fetching: " + JSON.stringify(response));
        return response.json();
      })
      .then(data => this.setState({ data }));
  }

  componentDidMount() {
    console.log("App: componentDidMount() called");

    // ASYNC/AWAIT (REQUIRES FIDDLING WITH BABEL INSTALLS AND CONFIG)
    // const response = await fetch("/getData");
    // const data2 = await response.json();
    // this.setState({ data: data2 });

    fetch("/getData2")
      .then(response => {
        console.log("App fetching: " + JSON.stringify(response));
        return response.json();
      })
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div>
        <div>DATA: {JSON.stringify(this.state)}</div>
        <div>
          <button onClick={this.handleClick}>Query Data</button>
        </div>
      </div>
    );
  }
}
