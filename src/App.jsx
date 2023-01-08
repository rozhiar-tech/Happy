import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* When components are created, insert them in element */}
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element="" />
          <Route path="/about" element="" />
          <Route path="/contact" element=""/>
          <Route path="/login" element=<Login/>  />
          <Route path="/signup" element=<Signup/> />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
