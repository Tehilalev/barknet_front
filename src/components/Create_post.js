import React, { useState } from "react";
import "./Create_post.css";

const Create_post = () => {
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

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    setImage(uploadedImage);
    setPreviewImage(URL.createObjectURL(uploadedImage));
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleHashtagChange = (event) => {
    setSelectedHashtag(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform post creation logic here, e.g., send data to backend

    // Reset form
    setImage(null);
    setCaption("");
    setSelectedHashtag("");
    setPreviewImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="imageDiv">
        <label htmlFor="image" className="UplodeImageLabel">
          Upload Image:
        </label>
        <input
          type="file"
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
  );
};

export default Create_post;
