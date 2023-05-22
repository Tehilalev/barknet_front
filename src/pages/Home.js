import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
function Home() {
  return (

    <div className="home">
      <Navbar />
      <div className="right_side">
        <h1>Home</h1>
      </div>
    </div>
  );
}
export default Home;
