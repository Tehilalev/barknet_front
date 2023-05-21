import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Explore_navbar from "./Explore_navbar";
import Funny from "../pages/explore_pages/Funny";
import Adoption from "../pages/explore_pages/Adoption";
import Fashion from "../pages/explore_pages/Fashion";
import Food from "../pages/explore_pages/Food";
import Grooming from "../pages/explore_pages/Grooming";
import Health from "../pages/explore_pages/Health";
import Others from "../pages/explore_pages/Others";
import Traveling from "../pages/explore_pages/Traveling";
import Explore from "../pages/Explore";
import "./Route_explore_pages.css";

function Route_explore_pages() {
  return (
    <Router>
      <h1 className="title1">
        Click on All post to see posts of various interests
      </h1>
      <div className="dog_gif"></div>

      <Explore_navbar />
      <Route>
        <Route path="/" exact component={Explore} />
        <Route path="/adoption" component={Adoption} />
        <Route path="/fashion" component={Fashion} />
        <Route path="/food" component={Food} />
        <Route path="/funny" component={Funny} />
        <Route path="/grooming" component={Grooming} />
        <Route path="/health" component={Health} />
        <Route path="/others" component={Others} />
        <Route path="/traveling" component={Traveling} />
      </Route>
    </Router>
  );
}
export default Route_explore_pages;
