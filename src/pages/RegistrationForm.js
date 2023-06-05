import React, { useState } from "react";
import "./RegistrationForm.css"; // Import the CSS file for styling
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const arrPic = ["https://publicdomainvectors.org/tn_img/robot-dog.webp", "https://publicdomainvectors.org/tn_img/doberman-pinscher-dog.webp", "https://publicdomainvectors.org/tn_img/dog-head-logo-symbol-publicdomainvectors.org.webp", "https://publicdomainvectors.org/tn_img/dog-pet-clipart-2-publicdom.webp", "https://publicdomainvectors.org/tn_img/dog.webp", "https://publicdomainvectors.org/tn_img/poodle-dog-pdv.webp", "https://publicdomainvectors.org/tn_img/strong-dog.webp", "https://publicdomainvectors.org/tn_img/brown-dog-publicdomain.webp"];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [showMessageFirst, setShowMessageFirst] = useState(false);
  const [showMessageLast, setShowMessageLast] = useState(false);
  const [showMessageuser, setShowMessageuser] = useState(false);
  const [showMessagepass, setShowMessagepass] = useState(false);

  const history = useNavigate();
  const handleRegistration = async (e) => {
    let isValid = true;
    const randomIndex = Math.floor(Math.random() * arrPic.length);
    const selectedProfileImage = arrPic[randomIndex];
    localStorage.setItem("Profile", selectedProfileImage);
    // Validation checks
    if (
      firstName.length === 0 || firstName.length > 15 || !(firstName.match(/^[A-Za-z\s]+$/))) {
      setFirstName("");
      isValid = false;
      document
        .getElementById("firstName")
        .classList.add("input-invalid");
    } else {
      document
        .getElementById("firstName")
        .classList.remove("input-invalid");
    }

    if (
      lastName.length === 0 || lastName.length > 15 || !(lastName.match(/^[A-Za-z\s]+$/))
    ) {
      setLastName("");
      isValid = false;
      document.getElementById("lastName").classList.add("input-invalid");
    } else {
      document
        .getElementById("lastName")
        .classList.remove("input-invalid");
    }

    if (password.length !== 8 || !/[A-Z]/.test(password)) {
      setPassword("");
      isValid = false;
      document.getElementById("password").classList.add("input-invalid");
    } else {
      document.getElementById("password").classList.remove("input-invalid");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setEmail("");
      isValid = false;
      document.getElementById("email").classList.add("input-invalid");
    } else {
      document.getElementById("email").classList.remove("input-invalid");
    }

    // Perform registration logic if all fields are valid
    if (isValid) {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8000/", {
          firstName,
          lastName,
          username,
          email,
          password,
          birthdate,
        });
        console.log(response.data);
        if (response.data.status === "OK") {
          history("/login");
        } else if (response.data.error === "User Exsits") {
          setUsername("");
          // eslint-disable-next-line no-alert
          alert("Username already exists. Please choose a different username.");
        } else {
          console.log("Registration error");
        }
      } catch (error) {
        console.log(error);
        // Handle request error
      }
    }
  };

  return (
    <div className="registration-form">
      <h1>Welcome to BarkNet Web</h1>
      <div className="div-icons">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onClick={() => setShowMessageFirst(true)}
          onBlur={() => setShowMessageFirst(false)}
        />
        {showMessageFirst && (
          <p className="input-message">
            First name includes up to 15 letters only
          </p>
        )}
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onClick={() => setShowMessageLast(true)}
          onBlur={() => setShowMessageLast(false)}
        />
        {showMessageLast && (
          <p className="input-message">
            Last name includes up to 15 letters only
          </p>
        )}
        <br />
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onClick={() => setShowMessageuser(true)}
          onBlur={() => setShowMessageuser(false)}
        />
        {showMessageuser && (
          <p className="input-message">
            User name contains up to 20 characters only and must be unique
          </p>
        )}
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onClick={() => setShowMessagepass(true)}
          onBlur={() => setShowMessagepass(false)}
        />
        {showMessagepass && (
          <p className="input-message">
            Password contains only 8 characters and at least one uppercase
            letter
          </p>
        )}
        <br />
        <label htmlFor="b-day">Birthdate:</label>
        <input
          type="date"
          id="b-day"
          name="birthdate"
          value={birthdate}
          min="1966-01-01"
          max="2020-12-31"
          onChange={(e) => setBirthdate(e.target.value)}
        />

        <button type="button" onClick={handleRegistration}>
          Sign Up
        </button>
        <p>
          Already have an account?
          <a href="./Login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
