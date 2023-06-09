import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import the Link component
import "./Search.css";
import axios from "axios";
import Navbar from "../components/Navbar";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const history = useNavigate();
  async function handleSearch(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/search", { query: searchQuery });
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  }
  const changesome = (user) => {
    localStorage.setItem("visitedUser", user.username);
    history("/personal_area");
  };

  const renderUsers = () => {
    if (users.length === 0) {
      return <p>No users found.</p>;
    }
    return (
      <div>
        <br />
        {users.map((user) => (
          <div className="user">
            <div className="profileDiv"> </div>
            <button type="button" className="userlink" onClick={() => changesome(user)}>
              {user.username}
            </button>
          </div>
        ))}
      </div>
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
        <br />
        <br />
        {renderUsers()}
      </div>
    </div>
  );
}

export default Search;
