import { useState, React } from 'react'
import {  Link } from "react-router-dom";
import Hamburger from './hamburgericon.png';
import './navbar.css';



const Navbar =  () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-vodka dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        
        <div className="menu-icon" onClick={handleShowNavbar} role="button" tabIndex={0} onKeyDown={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
            <li>
                <Link to='/' acriveStyle>
                Home
                </Link>
            </li>
            <li>
              <button
                type="button"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <Link to='/team' acriveStyle>
                Team
                </Link>
              </button>
            </li>
            <div className="dropdown">
             <button type="button" className="dropbtn">About
              </button>
              <div className="dropdown-content">
              <Link to="about">Who are we</Link>
              <Link to="career">Join our team</Link>
              <Link to="requirements">Why to join our team</Link>
              <Link to="payment">Payment Page</Link>
              </div>
            </div> 
          
            <li>
                <Link to='/contact' acriveStyle>
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
            
  
          </ul>

        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
