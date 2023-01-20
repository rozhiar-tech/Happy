import React from "react";
import "./card.css";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { datum } from "../Payment/image.data.";

const Card = () => {
  const slideLeft = () => {
    const slider3 = document.getElementById('slider2');
    slider3.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider4 = document.getElementById('slider2');
    slider4.scrollLeft += 500;
  };

  const navigate = useNavigate();

  return (
   <div className="Card-page">
    <div className="Card">
        <h1 className="ca1">Your saved cards</h1>
        <p className="ca2">We only support cards as a payment method at the moment!</p>  
    </div>
    <div className="leader">
          <div className="relative flex items-center">
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideLeft}
              size={40}
            />
            <div
              id="slider3"
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
    </div>
    <button
            id="button1"
            type="submit"
            className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white rounded px-4 py-2"
            onClick={() => navigate('/Afterpayment')}
          > ADD NEW CARD </button>
    </div>
  );
};

export default Card;
