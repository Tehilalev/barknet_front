import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Personal_area.css";
import Navbar from "../components/Navbar";

function Personal_area() {
  const visited = localStorage.getItem("visitedUser");
  const current = localStorage.getItem("currentUser");
  const flagSomeoneElse = current !== visited;
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [user, setUser] = useState(null); // Store user data
  const [editMode, setEditMode] = useState(false); // Edit mode flag
  const [editedUser, setEditedUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthdate: ""
  }); // Edited user details

  async function handleLoading() {
    try {
      const response = await axios.post("http://localhost:8000/personal_area", {
        visited
      });
      const {
        username,
        firstName,
        lastName,
        email,
        birthdate
      } = response.data;
      setUser({
        username,
        firstName,
        lastName,
        email,
        birthdate
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleLoading();
  }, []);

  const handleEditClick = () => {
    // Enable edit mode
    setEditMode(true);
    // Set the edited user details
    setEditedUser({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      birthdate: user.birthdate
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the edited user details based on input changes
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSaveClick = async () => {
    try {
      // Perform API call to update user details in the backend
      const response = await axios.post("http://localhost:8000/update_user", {
        visited,
        ...editedUser
      });
      const {
        username,
        firstName,
        lastName,
        email,
        birthdate
      } = response.data;
      // Update the user details in the state
      setUser({
        username,
        firstName,
        lastName,
        email,
        birthdate
      });
      // Disable edit mode
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="personal-area-page">
        <div className="leftsideDiv">
          <div className="profile" />
          {!flagSomeoneElse && (<button type="button" className="editButton" onClick={handleEditClick}> </button>)}
          {user && (
            <div className="labelsDiv">
              <label htmlFor="userName">
                User Name:
                {user.username}
              </label>
              <label htmlFor="firstName">
                First Name:
                {editMode ? (
                  <input
                    type="text"
                    name="firstName"
                    value={editedUser.firstName}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.firstName
                )}
              </label>
              <label htmlFor="lastName">
                Last Name:
                {editMode ? (
                  <input
                    type="text"
                    name="lastName"
                    value={editedUser.lastName}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.lastName
                )}
              </label>
              <label htmlFor="birth">
                Date of birth:
                {editMode ? (
                  <input
                    type="text"
                    name="birthdate"
                    value={editedUser.birthdate}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.birthdate
                )}
              </label>
              <label htmlFor="email">
                Email:
                {editMode ? (
                  <input
                    type="text"
                    name="email"
                    value={editedUser.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.email
                )}
              </label>
            </div>
          )}
          {editMode && (
            <button type="button" className="saveButton" onClick={handleSaveClick}>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Personal_area;
