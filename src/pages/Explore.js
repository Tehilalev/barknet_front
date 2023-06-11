import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RouteExplorePages from "../components/Route_explore_pages";
import Post from "../components/Post";
import "./Explore.css";

function Explore() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/Explore")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the response data here
        setPosts(data);
      })
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
          <div className="scrollable_content">
            {posts.map((post) => (
              <Post
                key={post.postID}
                postID={post.postID}
                username={post.username}
                picture={post.picture}
                caption={post.caption}
                hashtag={post.hashtag}
                likesCount={post.likesCount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
