import React, { useState } from "react";
import "./Login.css"; // Import the CSS file
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/Login", {
        username,
        password,
      });

      const { status, data, error } = response.data;

      if (status === "OK") {
        // Login successful
        localStorage.setItem("token", data); // Store the token in localStorage or any other storage mechanism
        history("/Home"); // Redirect to the home page
      } else {
        // Login failed
        setError(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form>

      {error && <p>{error}</p>}

      <br />
      <p>
        Don't have an account?
        <Link to="/">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
