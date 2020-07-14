import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h2 style={{ textDecoration: "underline overline" }}>HOME</h2>

        <div style={{ width: "25em" }}>
          View the <a href="/games">Games section</a> to view game graphs
          (statistics will come later).
          <br />
          <br />
          This website (best viewed with Chrome) is intended to gain experience
          with starting a webserver, connecting it to a database, querying the
          database to gather or insert data, displaying the data in the database
          using SVG, and using React and peripheral libraries to sculpt a
          functional (and pretty if time permits) user interface.
          <br />
          <br />
          <h3 style={{ margin: "0px", padding: "0px" }}>BACK-END</h3>
          <br />
          <div id="webserver_info">
            <div
              style={{
                width: "40%",
                float: "left",
                fontStyle: "italic",
                fontFamily: "Lucida Console",
                color: "#A0A0A0",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;WEBSERVER
            </div>
            <div
              style={{ width: "27%", display: "inline", fontWeight: "bold" }}
            >
              node / Express / HEROKU
            </div>
            <div
              style={{
                width: "33%",
                display: "inline",
                float: "right",
                fontSize: "10px",
                fontWeight: "bold",
                fontFamily: "Courier New",
                color: "#A0A0A0",
                paddingTop: "5px",
              }}
            >
              (OPERATIONAL)
            </div>
            <br />
            <br />
            <div id="databundler_info">
              <div
                style={{
                  width: "50%",
                  float: "left",
                  fontSize: "12px",
                  fontStyle: "italic",
                  fontFamily: "Lucida Console",
                  color: "#A0A0A0",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data
                Bundler
              </div>
              <div
                style={{
                  width: "50%",
                  display: "inline",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Webpack
              </div>
            </div>
            <br />
            <div id="javascriptCompiler_info">
              <div
                style={{
                  width: "50%",
                  float: "left",
                  fontSize: "12px",
                  fontStyle: "italic",
                  fontFamily: "Lucida Console",
                  color: "#A0A0A0",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Javascript
                Compiler
              </div>
              <div
                style={{
                  display: "inline",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Babel
              </div>
            </div>
            <br />
            <div id="databaseQuery_info">
              <div
                style={{
                  width: "50%",
                  float: "left",
                  fontSize: "12px",
                  fontStyle: "italic",
                  fontFamily: "Lucida Console",
                  color: "#A0A0A0",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Database
                Querier
              </div>
              <div
                style={{
                  width: "50%",
                  display: "inline",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                node-pg
              </div>
            </div>
            <br />
            <div id="nodemon_info">
              <div
                style={{
                  width: "50%",
                  float: "left",
                  fontSize: "12px",
                  fontStyle: "italic",
                  fontFamily: "Lucida Console",
                  color: "#A0A0A0",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On
                Save -> Reload
              </div>
              <div
                style={{
                  width: "50%",
                  display: "inline",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                nodemon
              </div>
            </div>
          </div>
          <br />
          <div id="database_info">
            <div
              style={{
                width: "40%",
                float: "left",
                fontFamily: "Lucida Console",
                fontStyle: "italic",
                color: "#A0A0A0",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;DATABASE
            </div>
            <div
              style={{ width: "27%", display: "inline", fontWeight: "bold" }}
            >
              PostgreSQL
            </div>
            <div
              style={{
                width: "33%",
                display: "inline",
                float: "right",
                fontSize: "10px",
                fontWeight: "bold",
                fontFamily: "Courier New",
                color: "#A0A0A0",
                paddingTop: "5px",
              }}
            >
              (OPERATIONAL)
            </div>
          </div>
          <br />
          <h3 style={{ margin: "0px", padding: "0px" }}>FRONT-END</h3>
          <br />
          <div id="uilibrary_info">
            <div
              style={{
                width: "40%",
                float: "left",
                fontStyle: "italic",
                fontFamily: "Lucida Console",
                color: "#A0A0A0",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;UI LIBRARY
            </div>
            <div
              style={{ width: "27%", display: "inline", fontWeight: "bold" }}
            >
              React
            </div>
          </div>
          <br />
          <div id="dataVisualization_info">
            <div
              style={{
                width: "40%",
                float: "left",
                fontStyle: "italic",
                fontFamily: "Lucida Console",
                color: "#A0A0A0",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;DATA VIS
            </div>
            <div
              style={{ width: "27%", display: "inline", fontWeight: "bold" }}
            >
              SVG
            </div>
            <div
              style={{
                width: "33%",
                display: "inline",
                float: "right",
                fontSize: "10px",
                fontWeight: "bold",
                fontFamily: "Courier New",
                paddingTop: "5px",
              }}
            >
              <a href="/viewGame/1">(example)</a>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
