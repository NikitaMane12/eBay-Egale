// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* Other routes go here */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
