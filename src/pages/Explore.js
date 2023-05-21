import React from "react";
import Post from "../components/Post";
import dog1 from "../stam/dog1.jpg";
import "./Explore.css";

function Explore() {
  return (
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
  );
}

export default Explore;
