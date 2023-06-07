import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Personal_area.css";
import Navbar from "../components/Navbar";

function Personal_area() {
  const userData = JSON.parse(localStorage.getItem("userData")) || [];

  const profilePicture = userData[0]?.profile;
  const [user, setUser] = useState(null);
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
        <img src={profilePicture} alt="Profile" className="profile" />
        <button type="button" className="editButton"> </button>
        <div className="labelsDiv">
          <label htmlFor="userName">User Name:</label>
          <label htmlFor="firstName">User Name:</label>
          <label htmlFor="lastName">User Name:</label>
          <label htmlFor="birth">User Name:</label>
          <label htmlFor="email">User Name:</label>
        </div>
      </div>
    </div>

  );
}

export default Personal_area;
