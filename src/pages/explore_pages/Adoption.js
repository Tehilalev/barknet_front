import React, { useEffect, useState } from "react";
import ExploreNavbar from "../../components/Explore_navbar";
import Navbar from "../../components/Navbar";
import Post from "../../components/Post";
import "./Adoption.css";

function Adoption() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/Adoption")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("error fatching post: ", error));
  }, []);

  return (
    <div>
      <Navbar />
      <ExploreNavbar />
      <div className="adoption">
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
  );
}

export default Adoption;
