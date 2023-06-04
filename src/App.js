import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"; // Import your Login component
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/New_Post" element={<NewPost />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Log_out" element={<LogOut />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Funny" element={<Funny />} />
        <Route path="/Adoption" element={<Adoption />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Grooming" element={<Grooming />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Traveling" element={<Traveling />} />
        <Route path="/Others" element={<Others />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Personal_area" element={<PersonalArea />} />
        <Route exact path="/" element={<RegistrationForm />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Route_explore_pages" element={<RouteExplorePages />} />

      </Routes>
    </Router>

  );
}
export default App;
