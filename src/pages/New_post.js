import React from "react";
import "./New_post.css";
import Navbar from "../components/Navbar";
import Create_post from "../components/Create_post";

function New_post() {
  return (
    <div>
      <Navbar />
      <div className="new_post">
        <Create_post />
      </div>
    </div>
  );
}

export default New_post;
