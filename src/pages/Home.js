import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

function Home() {
  const username = localStorage.getItem("currentUser");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/postsByUsername",
          {
            username,
          }
        );
        setPosts(response.data);
        console.log(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        // Handle the error
      }
    };

    fetchPosts();
  }, [username]);
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="scrollable_content">
          <h1>
            Welcome,
            {username}
          </h1>
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

export default Home;
