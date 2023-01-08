import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Home/navbar"
import './App.css';
import About from './pages/about'
import Team from './pages/Team/team';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        {/* Insert navbar Component here */}
        <Routes>
          {/* When components are created, insert them in element */}
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element="" />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element="" />
          <Route path="/login" element="" />
          <Route path="/team" element={<Team />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
