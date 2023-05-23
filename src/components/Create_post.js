import React, { useState } from "react";
import "./Create_post.css";
import axios from "axios";
import { Buffer } from "buffer";

let globalPostID = 0; // Initialize the global postID variable

function Create_post() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [selectedHashtag, setSelectedHashtag] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

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
  const handleImageUpload = async (event) => {
    const uploadedImage = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageData = e.target.result;
      const blob = new Blob([imageData]);
      const arrayBufferReader = new FileReader();
      arrayBufferReader.onloadend = () => {
        // Convert the ArrayBuffer to a Buffer
        const binaryData = Buffer.from(arrayBufferReader.result);

        setImage(binaryData);
      };
      arrayBufferReader.readAsArrayBuffer(blob);
    };
    reader.readAsArrayBuffer(uploadedImage);
    setPreviewImage(URL.createObjectURL(uploadedImage));
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleHashtagChange = (event) => {
    setSelectedHashtag(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("postID", globalPostID);
      formData.append("username", "Tehilalev");
      formData.append("picture", image);
      formData.append("caption", caption);
      formData.append("hashtag", selectedHashtag);
      formData.append("likesCount", 0);
      const response = await axios.post(
        "http://localhost:8000/New_Post",
        formData
      );

      if (response.data.status === "OK") {
        globalPostID += 1;
        setImage(null);
        setCaption("");
        setSelectedHashtag("");
        setPreviewImage(null);
      }
    } catch (error) {
      console.log("Error creating post:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="label" className="user_name">
          userName
        </label>
        <div className="imageDiv">
          <label htmlFor="image" className="UplodeImageLabel">
            Upload Image:
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
            <img src={previewImage} alt="Preview" style={{ width: "200px" }} />
          </div>
        )}

        <div className="captionDiv">
          <label htmlFor="caption" className="caption">
            Caption:
          </label>
          <input
            type="text"
            id="caption"
            className="captionTextBox"
            value={caption}
            onChange={handleCaptionChange}
          />
        </div>

        <div className="hashtagDiv">
          <label htmlFor="hashtag" className="chooseHashtag">
            Choose Hashtag:
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
        <div className="buttonDiv">
          <button type="submit" className="createPostButton">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create_post;
