import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Home/navbar"
import './App.css';
import About from './pages/about'
 import Payment from "./pages/Payment/Payment";
 import Afterpayment from './pages/AfterPayment/AfterPayment';

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
          <Route path="/redirect" element={<Navigate to="/payment" />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/redirect" element={<Navigate to="/afterpayment" />} />
          <Route path="/afterpayment" element={<Afterpayment />} />
          <Route path="/login" element="" />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
