import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";

function Home() {
  const username = localStorage.getItem("username");
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="right_side">
          <h1>
            Welcome,
            {username}
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Home;
