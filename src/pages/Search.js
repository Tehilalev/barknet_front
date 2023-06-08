import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component
import "./Search.css";
import axios from "axios";
import Navbar from "../components/Navbar";

function Search() {
  localStorage.setItem("profileU", profilepicture);
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/search", { query: searchQuery });
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  }

  const renderUsers = () => {
    if (users.length === 0) {
      return <p>No users found.</p>;
    }
     function changesome(user) {
      localStorage.setItem("visitedUser", user.username);

    }

    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to="/Personal_area" onClick={changesome(user)}>{user.username}</Link>
            {/* Navigate to the user's personal area */}
            <img src={user.profilePicture} alt="Profile Picture" /> 
            {/* Display the profile picture */}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="search">
        <h2 className="label_search">Who we are looking for?</h2>
        <input
          className="search_box"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" className="search_button" onClick={handleSearch}>
          Search
        </button>
        {renderUsers()}
      </div>
    </div>
  );
}

export default Search;
