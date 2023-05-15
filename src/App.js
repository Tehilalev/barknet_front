import "./App.css";
import React, { useState, useEffect } from "react";
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <div>
          {data.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
        <RegistrationForm />
      </header>
    </div>
  );

}
export default App;
