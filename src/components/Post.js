import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./Post.css";
import axios from "axios";
// import { FaPhotoVideo } from "react-icons/fa";

function Post({
 postID, username, picture, caption, hashtag, likesCount
}) {
  console.log("likesCount1 ", likesCount);
  const useRname = localStorage.getItem("username");

  const [imageDataURL, setImageDataURL] = useState("");
  useEffect(() => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const imageDataURL = event.target.result;
      setImageDataURL(imageDataURL);
    };

    // Convert the binary data to a data URL
    reader.readAsDataURL(new Blob([picture]));
  }, [picture]);

  // console.log(picture);
  const [likes, setLikes] = useState(() => {
    const initialLikes = Number.isNaN(Number(likesCount))
      ? 0
      : Number(likesCount);
    return initialLikes;
  });
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setLikes(likesCount);
  }, [likesCount]);

  const hanldeLike = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/updateLikeCount",
        {
          postID, // Pass the post ID to identify the post to update
          likesCount: likes,
          useRname,
        }
      );
      console.log("f", response.data);
      setLikes(response.data.data);
      // likesCount = response.data.data;
      console.log("likesCount2 ", likesCount);

    } catch (error) {
      console.error("Error updating like count:", error);
      // Handle the error
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="post_content">
        <p className="username">{username}</p>
        {imageDataURL && <img src={imageDataURL} alt="Image_" />}
        <p className="post_text">{caption}</p>
        <p className="hashtag">
          #
          {hashtag}
        </p>
      </div>
      <div className="post_action">
        <div
          className={`heart_icon ${isLiked ? "liked" : ""}`}
          onClick={hanldeLike}
          /* */
          onKeyDown={hanldeLike}
          tabIndex={0}
          role="button"
        >
          <AiIcons.AiOutlineHeart />
        </div>
        <span className="likes_count">{likes}</span>
      </div>
    </div>
  );
}

export default Post;
