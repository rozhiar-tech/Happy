import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Subscribe } from './Subscribe.svg';
import { ReactComponent as Twitter } from './Twitter.svg';
import { ReactComponent as Facebook } from './Facebook.svg';
import { ReactComponent as Google } from './Google.svg';

function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="sm:py-4 px-2 sm:px-16 w-screen h-60 bg-lavender-indigo absolute bottom-0 left-0">
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex flex-col justify-evenly lg:w-6/12 h-full">
          <div>
            <h2 className="text-start font-medium text-4xl sm:mb-4">
              Subscribe
            </h2>
            <p className="text-start text-xl text-black/[0.65]">
              We’ll never spam you or share your email
            </p>
          </div>
          <div className="flex border-2 rounded border-pale-spring-bud w-full md:w-fit">
            <input
              type="text"
              className="text-xl pl-4 focus:outline-lavender-indigo w-[calc(100%-60px)]"
              placeholder="Enter your e-mail"
              value={email}
              onChange={(event) => setEmail(() => event.target.value)}
            />
            <div className="flex justify-center items-center cursor-pointer bg-vodka border-l-2 border-pale-spring-bud w-[60px] h-[60px]">
              <Subscribe />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center w-6/12 md:w-5/12 lg:w-4/12 h-full">
          <div className="flex flex-col md:flex-row justify-between pt-4 text-xl w-full text-black/[0.65]">
            <NavLink to="/home" className="hover:text-black focus:text-black">
              Home
            </NavLink>
            <NavLink to="/blogs" className="hover:text-black focus:text-black">
              Blogs
            </NavLink>
            <NavLink to="/about" className="hover:text-black focus:text-black">
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-black focus:text-black"
            >
              Contact
            </NavLink>
          </div>
          <div className="flex justify-evenly  py-4 w-6/12 w-fit bg-red-500">
            <a
              href="#twitter"
              className="hover:scale-110 focus:scale-110"
              onClick={(e) => e.preventDefault()}
            >
              <Twitter />
            </a>
            <a
              href="#facebook"
              className="hover:scale-110 focus:scale-110"
              onClick={(e) => e.preventDefault()}
            >
              <Facebook />
            </a>
            <a
              href="#google"
              className="hover:scale-110 focus:scale-110"
              onClick={(e) => e.preventDefault()}
            >
              <Google />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
