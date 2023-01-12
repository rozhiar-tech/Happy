import React from 'react';
import { NavLink } from 'react-router-dom';
import image from './section2.png';

const SecondSection = () => {
  return (
    <div className="style bg-pale-spring-bud px-4 sm:px-16 lg:px-[10.25rem] py-24 break-words w-screen">
      <div className="text-[3.12rem] leading-[4.7rem]">
        <h1>PROFESSIONAL, LICENSED, AND VETTED</h1>
        <h1>THERAPISTS THAT YOU CAN TRUST</h1>
      </div>

      <img src={image} alt="pictureof" className="my-8" />

      <div className="text-xl leading-[1.875] font-light text-black/[0.87]">
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
          className="bg-lavender-indigo hover:bg-wild-strawberry/70 hover:scale-95 focus:bg-wild-strawberry/70 focus:scale-95 text-white font-bold py-2 px-4 rounded ease-in-out duration-300 w-fit max-w-full mt-6"
          type="button"
        >
          Book An Appointment
        </NavLink>
      </div>
    </div>
  );
};
export default SecondSection;
