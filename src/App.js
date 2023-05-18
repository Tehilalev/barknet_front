import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"; // Import your Login component
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>

  );
}
export default App;
