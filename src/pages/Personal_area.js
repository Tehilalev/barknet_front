import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Personal_area.css";
import Navbar from "../components/Navbar";

function Personal_area() {
  const visited = localStorage.getItem("visitedUser");
  const current = localStorage.getItem("currentUser");
  let flagSomeoneElse;
  if (current !== visited) {
    flagSomeoneElse = true;
  } else {
    flagSomeoneElse = false;
  }
  const userData = JSON.parse(localStorage.getItem("userData")) || [];
  const user = userData.find((data) => data.username === visited);
  const profilePicture = user.profile;
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="personal-area-page">
        <div className="leftsideDiv">
          <img src={profilePicture} alt="Profile" className="profile" />
          <button type="button" className="editButton"> </button>
          <br />
          <div className="labelsDiv">
            <label htmlFor="userName">User Name:</label>
            <label htmlFor="firstName">User Name:</label>
            <label htmlFor="lastName">User Name:</label>
            <label htmlFor="birth">User Name:</label>
            <label htmlFor="email">User Name:</label>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Personal_area;
