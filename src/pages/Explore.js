import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import "./Explore.css";
import Navbar from "../components/Navbar";
import RouteExplorePages from "../components/Route_explore_pages";

function Explore() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/Explore")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("error fatching post: ", error));
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <RouteExplorePages />
        <div className="explore">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
