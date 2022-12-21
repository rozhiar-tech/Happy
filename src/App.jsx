import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Insert navbar Component here */}
        <Routes>
          {/* When components are created, insert them in element */}
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element="" />
          <Route path="/about" element="" />
          <Route path="/contact" element="" />
          <Route path="/login" element="" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
