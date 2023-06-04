import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"; // Import your Login component
import RegistrationForm from "./pages/RegistrationForm";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import NewPost from "./pages/New_post";
import Notifications from "./pages/Notifications";
import LogOut from "./pages/Log_out";
import Search from "./pages/Search";
import PersonalArea from "./pages/Personal_area";
import RouteExplorePages from "./components/Route_explore_pages";
import Funny from "./pages/explore_pages/Funny";
import Adoption from "./pages/explore_pages/Adoption";
import Fashion from "./pages/explore_pages/Fashion";
import Food from "./pages/explore_pages/Food";
import Grooming from "./pages/explore_pages/Grooming";
import Health from "./pages/explore_pages/Health";
import Others from "./pages/explore_pages/Others";
import Traveling from "./pages/explore_pages/Traveling";

function App() {
  return (

    <Router>

      <Routes>

        <Route path="/home" element={<Home />} />
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
