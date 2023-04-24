// import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  React.useEffect(() => {
    fetch("https://barknet-front.onrender.com")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
          {" "}
          <code>src/App.js</code>
          {" "}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
