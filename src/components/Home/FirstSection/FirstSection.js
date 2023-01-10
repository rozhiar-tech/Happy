import React from 'react';
import therapy from './therapy.svg';

const FirstSection = () => {
  return (
    <div className="bg-vodka break-words px-4 sm:px-16 lg:px-[10.25rem] pt-[5.38rem] w-screen h-fit min-h-[46.6rem]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-center text-center">
          <p className="text-4xl leading-[3.28rem]">We are Here To Make you</p>
          <p className="text-7xl md:text-8xl  font-semibold text-lavender-indigo/60">
            Happy
          </p>
          <button
            className="bg-lavender-indigo hover:bg-wild-strawberry/70 hover:scale-95 focus:bg-wild-strawberry/70 focus:scale-95 text-white font-bold py-2 px-4 rounded self-center my-6 w-fit max-w-full"
            type="button"
          >
            Book an Appointment
          </button>
        </div>
        <div className="w-fit self-center">
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
