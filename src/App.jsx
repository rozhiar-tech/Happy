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
import Career from './pages/Career';
import TherapistAccount from './pages/TherpistAccountCreate/TherapistAccount';
import ThankYou from './pages/TherpistAccountCreate/ThankYou';
import Resources from './pages/Resources/Resources';

function App() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/TherapistAccount" element={<TherapistAccount />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
