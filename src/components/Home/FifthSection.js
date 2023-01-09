import React from 'react';
import { NavLink } from 'react-router-dom';

function FifthSection() {
  return (
    <div className="px-2 lg:px-[10.25rem] w-screen break-words my-24">
      <div>
        <h2 className="text-[3.12rem] leading-[4.7rem]">Purchase Tickets</h2>
        <p className="text-2xl">
          PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center text-center my-7">
        <div className="flex flex-col justify-center gap-4 border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 w-[21.875rem] max-w-full min-h-[21.875rem] h-fit">
          <h2 className="text-[3.12rem] leading-[4.7rem]">5 TICKETS</h2>
          <p className="text-[2.2rem] leading-[3.3rem]">10$</p>
          <NavLink
            to="/contact"
            className="text-2xl leading-[2.25rem] bg-lavender-indigo px-[2rem] py-[0.75rem] hover:scale-95 hover:bg-vodka focus:scale-95 focus:bg-vodka rounded-md max-w-full w-fit self-center"
          >
            PURCHASE
          </NavLink>
        </div>
        <div className="flex flex-col justify-center gap-4 border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 w-[21.875rem] max-w-full min-h-[21.875rem] h-fit">
          <h2 className="text-[3.12rem] leading-[4.7rem]">25 TICKETS</h2>
          <p className="text-[2.2rem] leading-[3.3rem]">40$</p>
          <NavLink
            to="/contact"
            className="text-2xl leading-[2.25rem] bg-lavender-indigo px-[2rem] py-[0.75rem] hover:scale-95 hover:bg-vodka focus:scale-95 focus:bg-vodka rounded-md max-w-full w-fit self-center"
          >
            PURCHASE
          </NavLink>
        </div>
        <div className="flex flex-col justify-center gap-4 border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 w-[21.875rem] max-w-full min-h-[21.875rem] h-fit">
          <h2 className="text-[3.12rem] leading-[4.7rem]">50 TICKETS</h2>
          <p className="text-[2.2rem] leading-[3.3rem]">70$</p>
          <NavLink
            to="/contact"
            className="text-2xl leading-[2.25rem] bg-lavender-indigo px-[2rem] py-[0.75rem] hover:scale-95 hover:bg-vodka focus:scale-95 focus:bg-vodka rounded-md max-w-full w-fit self-center"
          >
            PURCHASE
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 py-[4.4rem] text-center">
        <h2 className="text-[3.12rem] leading-[4.7rem]">
          ARE YOU A COUNSELOR?
        </h2>
        <p className="text-xl leading-[1.875]">
          Interested in joining our mental health platform? You decide your
          schedule and how much you want to work, we’ll take care of the client
          referrals and billing details!
        </p>
        <NavLink
          to="about/counselor"
          className="text-2xl leading-[2.25rem] bg-lavender-indigo px-[2rem] py-[0.75rem] hover:scale-95 hover:bg-vodka focus:scale-95 focus:bg-vodka rounded-md max-w-full w-fit self-center"
        >
          LEARN MORE
        </NavLink>
      </div>
    </div>
  );
}

export default FifthSection;
