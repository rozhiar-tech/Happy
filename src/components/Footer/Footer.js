import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { ReactComponent as Subscribe } from './Subscribe.svg';
import { ReactComponent as Twitter } from './Twitter.svg';
import { ReactComponent as Facebook } from './Facebook.svg';
import { ReactComponent as Github } from './Github.svg';

function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="p-4 w-screen">
      <div className="flex justify-between items-center w-full">
        <div className="w-4/12">
          <h2 className="text-start">Subscribe</h2>
          <p className="text-start">We’ll never spam you or share your email</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your e-mail"
              value={email}
              onChange={(event) => setEmail(() => event.target.value)}
            />
            <div>
              <Subscribe />
            </div>
          </div>
        </div>
        <div className="w-4/12">
          <div className="flex justify-evenly">
            <a href="/home">Home</a>
            <a href="/blogs">Blogs</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <Twitter />
            <Facebook />
            <Github />
          </div>
          {/* <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div>
            <NavLink to="">
              <img src={Twitter} alt="Twitter icon" />
            </NavLink>
            <NavLink to="">
              <img src={Facebook} alt="Facebook icon" />
            </NavLink>
            <NavLink to="">
              <Github />
            </NavLink>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
