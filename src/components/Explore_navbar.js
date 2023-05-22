import React from "react";
import { Link } from "react-router-dom";
import "./Explore_navbar.css";

function Explore_navbar() {
  return (
    <div className="ex_page">
      <ul className="ex_nav">
        <li>
          <Link to="/Explore">All Posts</Link>
        </li>
        <li>
          <Link to="/adoption">Adoption</Link>
        </li>
        <li>
          <Link to="/fashion">Fashion</Link>
        </li>
        <li>
          <Link to="/food">Food</Link>
        </li>
        <li>
          <Link to="/funny">Funny</Link>
        </li>
        <li>
          <Link to="/grooming">Grooming</Link>
        </li>
        <li>
          <Link to="/health">Health</Link>
        </li>
        <li>
          <Link to="/traveling">Traveling</Link>
        </li>
        <li>
          <Link to="/others">Others</Link>
        </li>
      </ul>
    </div>
  );
}
export default Explore_navbar;
