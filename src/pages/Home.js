import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";

function Home() {

  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="right_side">
          <h1>
            Welcome,
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Home;
