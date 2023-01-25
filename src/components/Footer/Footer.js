import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../firebase/firebaseinit';
import subscribe from './subscribe.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Facebook } from './facebook.svg';
import { ReactComponent as Google } from './google.svg';

function Footer() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState('Enter your email');

  async function handleSubscription() {
    const newsletterRef = doc(db, 'newsletter', 'subscribers');
    try {
      await updateDoc(newsletterRef, {
        emails: arrayUnion(email),
      });
      await emailjs.send(
        'service_3cra5kh',
        'Subscribe_3l6ullq',
        { email },
        'x8DrSwr88UA2SW427'
      );
      setSubStatus(() => 'Subscribed!');
      setEmail(() => '');
    } catch (error) {
      setSubStatus(() => 'Error: please try Again!');
    }
  }

  return (
    <footer className="sm:py-4 px-4 sm:px-16 bg-lavender-indigo break-words w-screen h-fit sm:h-60 mt-auto">
      <div className="flex flex-col xsm:flex-row justify-between items-center w-full h-full">
        <div className="flex flex-col justify-evenly w-full xsm:w-6/12 h-full">
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
              placeholder={subStatus}
              value={email}
              onChange={(event) => setEmail(() => event.target.value)}
            />
            <div className="flex justify-center items-center cursor-pointer bg-vodka border-l-2 border-pale-spring-bud w-[60px] h-[60px]">
              <button type="button" onClick={handleSubscription}>
                <img
                  src={subscribe}
                  alt="Subscribe button"
                  className="cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center text-center w-full xsm:w-6/12 md:w-5/12 lg:w-4/12 h-full">
          <div className="flex flex-col md:flex-row justify-between pt-4 text-xl w-full text-black/[0.65]">
            <NavLink
              to="/home"
              className="hover:text-white focus:text-black font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className="hover:text-white focus:text-black font-semibold"
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-white focus:text-black font-semibold"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-white focus:text-black font-semibold"
            >
              Contact
            </NavLink>
          </div>
          <div className="flex justify-evenly  py-4 w-6/12 ">
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
