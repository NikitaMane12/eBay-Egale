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
        {/* Other routes go here */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;
