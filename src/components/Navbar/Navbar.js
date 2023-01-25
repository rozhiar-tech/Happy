import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseinit';
import './navbar.css';

const Navbar = ({ userID }) => {
  const navigate = useNavigate();

  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-vodka dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div
          className="nav-elemnts hidden w-full md:block md:w-auto"
          id="navbar-dropdown"
        >
          <ul className="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <button
                type="button"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <Link to="/team">Team</Link>
              </button>
            </li>
            <div className="dropdown">
              <button type="button" className="dropbtn">
                About
              </button>
              <div className="dropdown-content">
                <Link to="about">Who are we</Link>
                <Link to="career">Join our team</Link>
                <Link to="requirements">Why to join our team</Link>
                <Link to="payment">Payment Page</Link>
              </div>
            </div>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
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
      </div>
    </nav>
  );
};

export default Navbar;
