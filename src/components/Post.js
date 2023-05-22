import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./Post.css";

const Post = ({ imageUrl, text,  }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const hanldeLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="post_content">
        <img src={imageUrl} alt="post img" className="post_image" />
        <p className="post_text">{text}</p>
      </div>
      <div className="post_action">
        <div
          className={`heart_icon ${isLiked ? `liked` : ""}`}
          onClick={hanldeLike}
        >
          <AiIcons.AiOutlineHeart />
        </div>
        <span className="likes_count">{likes}</span>
      </div>
    </div>
  );
};

export default Post;
