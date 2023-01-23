import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './logo.svg';

// function responsivePage() {
//   const x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
function Navbar() {
  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-vodka dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <button type="button" href="#" className="flex items-center">
          <img src={logo} className="h-11 mr-3 sm:h-10" alt=" Logo" />
        </button>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
        </button>
        <section className="MOBILE-MENU flex lg:hidden">
          <div className="HAMBURGER-ICON space-y-2">
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
          </div>
          <div className="absolute top-0 right-0 px-8 py-8">
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/about">About</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </section>

        <div className="topnav">
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
              <li>
                <button
                  type="button"
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  <Link to="/" acriveStyle>
                    Home
                  </Link>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <Link to="/team" acriveStyle>
                    Team
                  </Link>
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
                <Link to="/contact" acriveStyle>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="bg-lavender-indigo hover:bg-wild-strawberry/70 hover:scale-95 focus:bg-wild-strawberry/70 focus:scale-95 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 w-fit max-w-full "
                >
                  Log in
                </Link>
              </li>
              {/* <a href="javascript:void(0);" className="icon" onClick="responsivePage()" onChange={}/> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
