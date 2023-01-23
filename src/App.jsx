import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from './firebase/firebaseinit';
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
import Requirements from './pages/Requirements/requirement';
import Career from './pages/Career';
import TherapistAccount from './pages/TherpistAccountCreate/TherapistAccount';
import ThankYou from './pages/TherpistAccountCreate/ThankYou';
import Resources from './pages/Resources/Resources';
import Card from './pages/new-card/card';
import TherapistProfile from './pages/editProfile/TherapistProfile';
import Booking from './pages/Booking/Booking';
import Chat from './components/Chat/Chat';

function App() {
  // The below variable will hold the user id if they are logged in
  const [userID, setuserID] = useState(false);
  // The below variable will hold the user info if they are logged in and will change if they update their profile
  const [userInfo, setUserInfo] = useState(null);
  // The below variable will be true if the user is logged in and their role is 'user'
  const [isUser, setIsUser] = useState(false);
  // The below variable will be true if the user is logged in and their role is 'therapist'
  const [isTherapist, setIsTherapist] = useState(false);
  console.log(userInfo);
  console.log('IsUser: ', isUser);
  console.log('IsTherapist', isTherapist);

  useEffect(() => {
    if (userID) {
      // Watch user database for changes if they are logged in
      onSnapshot(doc(db, 'Users', userID), (user) => {
        setUserInfo(() => user.data());
        if (user.data().role === 'user') {
          setIsUser(() => true);
        } else {
          setIsTherapist(() => true);
        }
      });
    }
  }, [userID]);

  useEffect(() => {
    // Watch if user is logged in or signed out
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuserID(() => user.uid.toString());
      } else {
        setuserID(() => false);
        setIsUser(() => false);
        setIsTherapist(() => false);
      }
    });
  }, []);

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
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/career" element={<Career />} />
          <Route path="/TherapistAccount" element={<TherapistAccount />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/card" element={<Card />} />
          <Route
            path="/therapistProfile"
            element={<TherapistProfile data={userInfo} />}
          />
          <Route path="/booking" element={<Booking />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
