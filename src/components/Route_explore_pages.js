import React from "react";
import ExploreNavbar from "./Explore_navbar";
import "./Route_explore_pages.css";

function Route_explore_pages() {
  return (
    <div>
      <ExploreNavbar />
      <h1 className="title1">
        Click on All post to see posts of various interests
      </h1>
      <div className="dog_gif" />
    </div>
  );
}
export default Route_explore_pages;
