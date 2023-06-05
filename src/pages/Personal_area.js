import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Personal_area.css";
import Navbar from "../components/Navbar";

function Personal_area() {

  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const pic = localStorage.getItem("Profile");
  return (
    <div>
      <Navbar />
      <div className="personal-area-page">
        <div className="profile">
          <img
            src={pic}
            alt=""
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          { /* <h1>{user.username}</h1>
          <h2>
            {user.firstName}
            {user.lastName}
          </h2>
          <button onClick={toggleFollowers}>
            {showFollowers ? "Hide Followers" : "Followers"}
          </button>
          {showFollowers && (
            <ul>
              {followers.map((follower, index) => (
                <li key={index}>{follower}</li>
              ))}
            </ul>
          )}
          <button onClick={toggleFollowing}>
            {showFollowing ? "Hide Following" : "Following"}
          </button>
          {showFollowing && (
            <ul>
              {following.map((followedUser, index) => (
                <li key={index}>{followedUser}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="posts">
          {posts.map((post, index) => (
            <div key={index} className="post">
              <img src={post.image} alt="Post" />
            </div>
          ))}
        </div>

        <div className="statistics">
          <button onClick={toggleStatistics}>Statistics</button>
          {showStatistics && (
            <div className="statistics-popup">
              <p>Statistical data goes here...</p>
            </div>
          )} */ }
        </div>
      </div>
    </div>
  );
}

export default Personal_area;
