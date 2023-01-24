import React, { useState, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import Gratitude from './components/Gratitude';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  // The below variable will hold the user id if they are logged in
  const [userID, setuserID] = useState(false);
  // The below variable will hold the user info if they are logged in and will change if they update their profile
  const [userInfo, setUserInfo] = useState(null);
  // The below variable will be true if the user is logged in and their role is 'user'
  const [isUser, setIsUser] = useState(false);
  // The below variable will be true if the user is logged in and their role is 'therapist'
  const [isTherapist, setIsTherapist] = useState(false);

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
      setIsLoading(() => false);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Navbar />
      {isLoading ? (
        <RingLoader
          color="#8A4FFF"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="m-auto"
        />
      ) : (
        <Routes>
          {/* These routes are available for everyone to visit */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/contact" element={<Contact />} />
          {/* ------------------------------------------------- */}

          {/* These routes are available for NOT logged in individuals */}
          {!userID ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/TherapistAccount" element={<TherapistAccount />} />
            </>
          ) : (
            <Route
              path={location.pathname}
              element={
                <Gratitude
                  title="You Are Already Logged In!"
                  message="Please sign out first."
                />
              }
            />
          )}
          {/* ---------------------------------------------------- */}

          {/* These routes are available for logged in individuals */}
          {userID && <Route path="/chat" element={<Chat />} />}
          {/* ---------------------------------------------------- */}

          {/* These routes are only available for logged in USERS */}
          {isUser && (
            <>
              <Route path="/payment" element={<Payment />} />
              <Route path="/card" element={<Card />} />
              <Route path="/booking" element={<Booking />} />
            </>
          )}
          {/* ---------------------------------------------------- */}
          {/* These routes are available for only logged in THERAPISTS */}
          {isTherapist && (
            <Route
              path="/profile"
              element={<TherapistProfile data={userInfo} />}
            />
          )}
          {/* ---------------------------------------------------- */}

          {/* To be removed. Use Gratitude component in the related pages instead */}
          <Route path="/afterpayment" element={<AfterPayment />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          {/* ---------------------------------------------------- */}

          {/* Missing component?? */}
          <Route path="/blogs" element="" />
          {/*---------------------------------------------------*/}
        </Routes>
      )}

      <Footer />
    </div>
  );
}

export default App;
