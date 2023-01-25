import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Gratitude from '../../components/Gratitude';
import { datum } from './image.data.';
import './payment.css';

const Payment = () => {
  const [isPayed, setIsPayed] = useState(false);

  const slideLeft = () => {
    const slider2 = document.getElementById('slider1');
    slider2.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider3 = document.getElementById('slider1');
    slider3.scrollLeft += 500;
  };

  return (
    <div className="w-screen">
      {isPayed ? (
        <Gratitude message="Your Purchase Has Been Submitted." />
      ) : (
        <div className="Payment">
          <div className="text">
            <h1 className="text-1">SELECT CARD</h1>
            <h6 className="text-2">
              Please select the card you want to buy the tickets with
            </h6>
            <div className="leader">
              <div className="relative flex items-center">
                <MdChevronLeft
                  className="opacity-50 cursor-pointer hover:opacity-100"
                  onClick={slideLeft}
                  size={40}
                />
                <div
                  id="slider1"
                  className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
                >
                  {datum.map((item) => (
                    <img
                      key={item.id}
                      className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                      src={item.img}
                      alt="/"
                    />
                  ))}
                </div>

                <MdChevronRight
                  className="opacity-50 cursor-pointer hover:opacity-100"
                  onClick={slideRight}
                  size={40}
                />
              </div>
              <h6 className="text3">
                Click confirm to use the selected card to purchase 5 tickets for
                10$
              </h6>
              <button
                id="button"
                type="submit"
                className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white rounded px-4 py-2"
                onClick={() => setIsPayed(true)}
              >
                CONFIRM PURCHASE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
