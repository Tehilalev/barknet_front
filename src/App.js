import "./App.css";
import React from "react";

function App() {
  React.useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          here we will put our registering
        </p>
      </header>
    </div>

  );
}

export default App;
