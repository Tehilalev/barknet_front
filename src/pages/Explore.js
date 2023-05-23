import React from "react";
import Post from "../components/Post";
import dog1 from "../stam/dog1.jpg";
import "./Explore.css";
import Navbar from "../components/Navbar";
import Route_explore_pages from "../components/Route_explore_pages";

function Explore() {
  return (
    <div>
      <Navbar />
      <div>
        <Route_explore_pages />
        <div className="explore">
          <Post imageUrl={dog1} text="This is a cute dog" />
          <Post imageUrl={dog1} text="This is a cute dog" />
          <Post imageUrl={dog1} text="This is a cute dog" />
          <Post imageUrl={dog1} text="This is a cute dog" />
          <Post imageUrl={dog1} text="This is a cute dog" />
          <Post imageUrl={dog1} text="This is a cute dog" />
          <Post imageUrl={dog1} text="This is a cute dog" />
          <Post imageUrl={dog1} text="This is a cute dog" />
        </div>
      </div>
    </div>
  );
}

export default Explore;
