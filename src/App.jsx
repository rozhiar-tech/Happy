import React, { useState, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';
import { Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from './firebase/firebaseinit';
import PrivateRoutesSignedIn from './utils/PrivateRoutesSignedIn';
import PrivateRoutesSignedInRestrict from './utils/PrivateRoutesSignedInRestrict';
import PrivateRoutesUser from './utils/PrivateRoutesUser';
import PrivateRoutesTherapist from './utils/PrivateRoutesTherapist';
import Gratitude from './components/Gratitude';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About/About';
import Resources from './pages/Resources/Resources';
import Team from './pages/Team/team';
import Career from './pages/Career';
import Requirements from './pages/Requirements/requirement';
import Contact from './pages/Contact/Contact';

import Chat from './components/Chat/Chat';
import UserProfile from './pages/editProfile/UserProfile';
import TherapistProfile from './pages/editProfile/TherapistProfile';

import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import TherapistAccount from './pages/TherpistAccountCreate/TherapistAccount';

import Payment from './pages/Payment/Payment';
import Card from './pages/new-card/card';
import Booking from './pages/Booking/Booking';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // The below variable will be true if therapistAccount was successfully created
  const [isTherapistAccountCreated, setIsTherapistAccountCreated] =
    useState(false);

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
        setIsLoading(() => false);
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
        setIsLoading(() => false);
      }
      // signOut(auth);
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
          {/* _These routes are available for everyone to visit_ */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/contact" element={<Contact />} />
          {/* ___________________________________________________________ */}

          <Route element={<PrivateRoutesSignedIn isAuth={userID} />}>
            {/* _These routes are available for logged in individuals_ */}
            <Route path="/chat" element={<Chat />} />
            {isUser ? (
              <Route path="/profile" element={<UserProfile />} />
            ) : (
              <Route
                path="/profile"
                element={<TherapistProfile data={userInfo} />}
              />
            )}
            {/* ___________________________________________________________ */}
          </Route>
          <Route element={<PrivateRoutesSignedInRestrict isAuth={userID} />}>
            {/* _These routes are NOT available for logged in individuals_ */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/createAccount"
              element={
                <TherapistAccount
                  isCreated={(e) => {
                    setIsTherapistAccountCreated(() => e);
                  }}
                />
              }
            />
            {/* ___________________________________________________________ */}
          </Route>
          <Route element={<PrivateRoutesUser isUser={isUser} />}>
            {/* _These routes are only available for logged in USERS_ */}
            <Route path="/payment" element={<Payment />} />
            <Route path="/card" element={<Card />} />
            <Route path="/booking" element={<Booking />} />
            {/* ___________________________________________________________ */}
          </Route>

          <Route element={<PrivateRoutesTherapist isTherapist={isTherapist} />}>
            {/* These routes are available for only logged in THERAPISTS */}
            {/* ___________________________________________________________ */}
          </Route>

          {isTherapistAccountCreated && (
            <Route
              path="/accountCreated"
              element={
                <Gratitude
                  title="Thank You for Signing Up!"
                  message="We Have Registered Your Interest in Working With Happy. Our Recruitment Team Will Review Your Application. You Will Hear Form Soon."
                />
              }
            />
          )}
        </Routes>
      )}

      <Footer />
    </div>
  );
}

export default App;
