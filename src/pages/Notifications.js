import React, { useEffect, useState } from "react";
import "./Notifications.css";
import Navbar from "../components/Navbar";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const username = localStorage.getItem("currentUser");
  const [hasFetchedData, setHasFetchedData] = useState(false);

  useEffect(() => {
    if (!hasFetchedData) {
      fetch("http://localhost:8000/notification", {
        method: "POST",
        body: JSON.stringify({ username }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setNotifications(data);
          // Process the returned values
          data.forEach((likedBy) => {
            console.log(`${likedBy} Liked Your Post`);
          });
          console.log(data);
          setHasFetchedData(true);
        })
        .catch((error) => {
          console.error(error);
          // Handle any errors that occurred during the process
        });
    }
  }, [hasFetchedData, username]);

  return (
    <div>
      <Navbar />
      <div className="notifications">
        <div className="notfications">
          {notifications.map((notification) => (
            <h1>
              {notification}
              {" "}
              liked your post
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Notifications;
