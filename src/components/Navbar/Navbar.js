import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseinit';
import './navbar.css';
import happy from './happy.png';

const Navbar = ({ userID }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-vodka p-4 sm:px-16 break-words w-screen">
      <div
        className="flex justify-between align-center w-full"
        id="navbar-dropdown"
      >
        <Link className="flex text-3xl text-white font-bold" to="/">
          <img src={happy} alt="Happy logo" className="w-12" />
          Happy
        </Link>
        <ul className="flex items-center gap-1 sm:gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <div className="dropdown">
            <button type="button" className="dropbtn">
              About
            </button>
            <div className="dropdown-content">
              <Link to="about">Who are we</Link>
              <Link to="career">Join our team</Link>
              <Link to="requirements">Why to join our team</Link>
              <Link to="purchase">Payment Page</Link>
            </div>
          </div>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {userID && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          <li>
            <button
              type="button"
              onClick={() => (userID ? signOut(auth) : navigate('/login'))}
              className="bg-lavender-indigo hover:bg-wild-strawberry/70 hover:scale-95 focus:bg-wild-strawberry/70 focus:scale-95 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 w-fit max-w-full outline-none"
            >
              {userID ? 'Sign Out' : 'Log In'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
