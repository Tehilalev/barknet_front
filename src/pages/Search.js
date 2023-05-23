import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Navbar from "../components/Navbar";

function Search() {
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
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
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
