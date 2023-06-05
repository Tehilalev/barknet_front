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

  const history = useHistory();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user");
        const userData = response.data;
        setUser(userData);
        setFollowers(userData.followers);
        setFollowing(userData.following);
        setPosts(userData.posts);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error, e.g., redirect to login page
        history.push("/Login");
      }
    };

    fetchUserData();
  }, [history]);

  const toggleFollowers = () => {
    setShowFollowers(!showFollowers);
  };

  const toggleFollowing = () => {
    setShowFollowing(!showFollowing);
  };

  const toggleStatistics = () => {
    setShowStatistics(!showStatistics);
  };

  return (
    <div>
      <Navbar />

      <div className="personal-area-page">
        {user && (
          <div className="profile">
            <img src={user.profilePicture} alt="Profile" />
            <h1>{user.username}</h1>
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
        )}

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
              {/* Render your statistical data here */}
              <p>Statistical data goes here...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Personal_area;
