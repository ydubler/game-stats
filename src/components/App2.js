import React, { useState, useEffect } from "react";

export default function App2(props) {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    console.log("App2: useEffect() called");

    fetch("/getData")
      .then(response => {
        console.log("App fetching: " + JSON.stringify(response));
        return response.json();
      })
      .then(dataOut => setData(JSON.stringify(dataOut)));
  });

  return <div>Data (JSON.stringify'd): {data}</div>;
}
