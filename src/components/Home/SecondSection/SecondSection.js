import React from 'react';
import { NavLink } from 'react-router-dom';
import './secondSection.css';
import image from './section2.png';

const SecondSection = () => {
  return (
    <div className="style bg-lavender-indigo/30 px-2 lg:px-[10.25rem] w-screen break-words py-24">
      <div className="one">
        <h1>PROFESSIONAL, LICENSED, AND VETTED</h1>
        <h1>THERAPISTS THAT YOU CAN TRUST</h1>
      </div>

      <img src={image} alt="pictureof" className="im" />

      <div className="second">
        <p>
          Tap into the world&apos;s largest network of licensed, accredited, and
          experienced therapists who can help you with a range of issues
          including depression, anxiety, relationships, trauma, grief, and more.
          with our therapists, you get the same professionalism and quality you
          would expect from an in-office therapist, but with the ability to
          communicate whenever and however you want.
        </p>
      </div>
      <div>
        <NavLink
          to="/booking"
          className="bg-lavender-indigo hover:bg-wild-strawberry/70 hover:scale-95 focus:bg-wild-strawberry/70 focus:scale-95 text-white font-bold py-2 px-4 rounded mt-6"
          type="button"
        >
          Book An Appointment
        </NavLink>
      </div>
    </div>
  );
};
export default SecondSection;
