import './App.css';
import CardList from './components/Cards';
import { FourCards } from './components/FourCards';
import Profession from './components/Professions';
import { ReviewCards } from './components/ReviewCards';
import { ThirdCol } from './components/ThirdCol';

// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./pages/Service";
import WhyChooseUs from "./pages/WhyChooseUs";
import { Contact } from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Other routes go here */}
      </Routes>
      <Footer />
      
      <CardList />
      <FourCards />
      <ThirdCol />
      <Profession />
      <ReviewCards />
    </Router>
  );
};

export default App;
