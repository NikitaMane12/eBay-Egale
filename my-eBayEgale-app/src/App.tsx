// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Service from "./pages/Service";
import WhyChooseUs from "./pages/WhyChooseUs";
import { Contact } from "./pages/Contact";
import { SapSolution } from "./componets/SapSolution";
import { Login } from "./componets/login/Login";
import { SignUp } from "./componets/login/SignUp";
import Admin from "./componets/admin/admin";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
        <Route path="/sapsolution" element={<SapSolution />}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Admin" element={<Admin />} />
        {/* Other routes go here */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;
