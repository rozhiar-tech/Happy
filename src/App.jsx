import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';
import Payment from './pages/Payment/Payment';
import AfterPayment from './pages/AfterPayment/AfterPayment';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import About from './pages/About/About';
import Team from './pages/Team/team';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* When components are created, insert them in element */}
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element="" />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/afterpayment" element={<AfterPayment />} />
          <Route path="/login" element=<Login /> />
          <Route path="/signup" element=<Signup /> />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
