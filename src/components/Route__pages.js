import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Explore from "../pages/Explore";
import Notifications from "../pages/Notifications";
import Messages from "../pages/Messages";
import New_post from "../pages/New_post";
import Personal_area from "../pages/Personal_area";

function Route__pages() {
  return (
    <Router>
      <Navbar />
      <Route>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/explore" component={Explore} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/messages" component={Messages} />
        <Route path="/new_post" component={New_post} />
        <Route path="/Personal_area" component={Personal_area} />
      </Route>
    </Router>
  );
}
export default Route__pages;
