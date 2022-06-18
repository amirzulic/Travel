import './App.css';
import LandingPage from "./components/landing_page/LandingPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Trips from "./components/my_trips/Trips";
import Plans from "./components/plans/Plans";
import Booking from "./components/booking/Booking";
import Settings from "./components/settings/Settings";
import NewTrip from "./components/new_trip/NewTrip";
import React from "react";
import SingleTrip from "./components/single_trip/SingleTrip";
import ForgotPassword from "./components/forgot_password/ForgotPassword";

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/trips" element={<Trips/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/create-trip" element={<NewTrip/>}/>
        <Route path="/single-trip/:id" element={<SingleTrip/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
