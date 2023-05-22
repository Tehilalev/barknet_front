import React, { useState } from "react";
import "./Search.css";
import Navbar from "../components/Navbar";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    // Perform search based on the searchQuery value
    console.log("Performing search for:", searchQuery);
    // You can write your search logic here, such as making an API request or filtering data.
    setSearchQuery(event.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="search">
        <h2 className="label_search"> Who we are looking for?</h2>
        <input className="search_box" type="text" />
        <button type="button" className="search_button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
export default Search;
