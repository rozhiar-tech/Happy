import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

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
      </BrowserRouter>
    </div>
  );
}

export default App;
