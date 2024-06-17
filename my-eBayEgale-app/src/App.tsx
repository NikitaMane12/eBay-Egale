// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Service from "./pages/Service";
import WhyChooseUs from "./pages/WhyChooseUs";


import { Login } from "./componets/login/Login";
import { SignUp } from "./componets/login/SignUp";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
      <Footer/>
     
    </>
  );
};

export default App;
