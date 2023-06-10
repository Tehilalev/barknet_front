import React from "react";
import "./Messages.css";
import Navbar from "../components/Navbar";

function Messages() {
  const redirectToWhatsAppWeb = () => {
    window.open("https://web.whatsapp.com/", "_blank");
  };
  return (
    <div>
      <Navbar />
      <div className="messages">
        <h1>Messages</h1>
        <button type="button" className="whatsapp-button" onClick={redirectToWhatsAppWeb}>Go to WhatsApp Web</button>
      </div>
    </div>
  );
}
export default Messages;
