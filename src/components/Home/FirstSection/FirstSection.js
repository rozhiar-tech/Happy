import React from 'react';
import { NavLink } from 'react-router-dom';
import therapy from './therapy.svg';
import wave from './wave.svg';

const FirstSection = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center px-4 sm:px-16 lg:px-[11.25rem] pt-[5.38rem] w-screen h-fit min-h-[calc(100vh_-_6.625rem)]"
      style={{ backgroundImage: `url(${wave})` }}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-center text-center gap-y-6">
          <h1 className="md:text-4xl  text-3xl  mt-40 font-medium uppercase text-neutral-800"><span className='text-lavender-indigo md:text-6xl text-5xl font-bold'>We</span> are Here To Make you</h1>
          <p className="text-5xl md:text-8xl  font-semibold text-lavender-indigo">
            Happy
          </p>
          <NavLink
            to="/booking"
            className="bg-lavender-indigo hover:bg-wild-strawberry/70 hover:scale-95 focus:bg-wild-strawberry/70 focus:scale-95 text-white font-bold py-4 px-4 md:text-xl text-lg rounded-2xl ease-in-out duration-300 self-center my-6 w-fit max-w-full mt-24"
          >
            Book an Appointment
          </NavLink>
        </div>
        <div className="w-fit self-center mt-24">
          <img
            src={therapy}
            alt="therapy"
            className="object-contain object-center h-[425px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
