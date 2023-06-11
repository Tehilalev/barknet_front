import React, { useContext, useState } from "react";
import "./Create_post.css";
import axios from "axios";

function CreatePost() {
  const username = localStorage.getItem("currentUser");
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [selectedHashtag, setSelectedHashtag] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(""); // State to store the success message

  const hashtags = [
    "Adoption",
    "Fashion",
    "Food",
    "Funny",
    "Grooming",
    "Health",
    "Traveling",
    "Others",
  ];
  const toBase64 = (image) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
    const prevBlob = URL.createObjectURL(event.target.files[0]);
    setPreviewImage(prevBlob);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleHashtagChange = (event) => {
    setSelectedHashtag(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const b64file = await toBase64(image);
    try {
      const response = await axios.post("http://localhost:8000/New_Post", {
        username,
        picture: b64file,
        caption,
        hashtag: selectedHashtag,
        likesCount: 0
      });
      console.log(b64file);
      if (response.data.status === "OK") {
        setImage(null);
        setCaption("");
        setSelectedHashtag("");
        setPreviewImage(null);
        setSuccessMessage("Post uploaded successfully!");
        setUploadedPost(response.data.data);
      }
    } catch (error) {
      console.log("Error creating post:", error);
    }
  };

  return (
    <div className="creatPost">
      <form onSubmit={handleSubmit}>
        <h1 className="newPostLabel">
          NEW POST
        </h1>
        <div className="hashtagDiv">
          <label htmlFor="hashtag" className="chooseHashtag">
            Choose Hashtag
          </label>
          <select
            className="selected_hashtag"
            id="hashtag"
            value={selectedHashtag}
            onChange={handleHashtagChange}
          >
            <option value="">Select</option>
            {hashtags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div className="imageDiv">
          <label htmlFor="image" className="UplodeImageLabel">
            Upload Image
          </label>
          <input
            type="file"
            name="picture"
            className="fileUploadButton"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        {previewImage && (
          <div>
            <img
              src={previewImage}
              alt="Preview"
              width={95}
              height={95}
            />
          </div>
        )}

        <label htmlFor="caption" className="caption">
          Caption
        </label>
        <input
          type="text"
          id="caption"
          className="captionTextBox"
          value={caption}
          onChange={handleCaptionChange}
        />
        <div className="buttonDiv">
          <button type="submit" className="createPostButton">
            Create Post
          </button>

        </div>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default CreatePost;
