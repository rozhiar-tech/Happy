import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { datum } from './images.data';
import Gratitude from '../../components/Gratitude';
import './payment.css';

const Payment = () => {
  const [isPayed, setIsPayed] = useState(false);

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 380;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 380;
  };

  return (
    <div className="w-screen">
      {isPayed ? (
        <Gratitude message="Your Purchase Has Been Submitted." />
      ) : (
        <div className="py-24 px-4 sm:px-16 lg:px-[10.25rem] break-words w-screen">
          <h2 className="text-[3.12rem] leading-[4.7rem]">Select Card</h2>
          <p className="text-2xl leading-9 text-black/50">
            Please select the card you want to buy the tickets with
          </p>
          <div className="flex gap-2 items-center px-4 sm:px-8 lg:px-[5.125] my-[4.4rem]">
            <MdChevronLeft
              className="text-lavender-indigo hover:text-wild-strawberry/70 hover:scale-95 focus:text-wild-strawberry/70 focus:scale-95 ease-in-out duration-300 cursor-pointer"
              onClick={slideLeft}
              size={100}
            />
            <div
              id="slider"
              className="flex gap-2 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {datum.map((item) => (
                <img
                  key={item.id}
                  className="cursor-pointer inline-block hover:scale-105 focus:scale-105 ease-in-out duration-300"
                  src={item.img}
                  alt={item.img}
                />
              ))}
            </div>
            <MdChevronRight
              className="text-lavender-indigo hover:text-wild-strawberry/70 hover:scale-95 focus:text-wild-strawberry/70 focus:scale-95 ease-in-out duration-300 cursor-pointer"
              onClick={slideRight}
              size={100}
            />
          </div>
          <p className="capitalize text-4xl leading-[3.375rem]">
            Click confirm to use the selected card to purchase 5 tickets for 10$
          </p>
          <input
            type="button"
            value="Confirm Purchase"
            onClick={() => setIsPayed(() => true)}
            className="relative left-1/2 -translate-x-1/2 uppercase text-2xl leading-[2.25rem] text-white bg-lavender-indigo hover:bg-wild-strawberry/70 hover:scale-95 focus:bg-wild-strawberry/70 focus:scale-95 rounded ease-in-out duration-300 px-[2rem] py-[0.75rem] max-w-full w-fit mt-[4.4rem]"
          />
        </div>
      )}
    </div>
  );
};

export default Payment;
