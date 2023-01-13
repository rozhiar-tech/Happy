import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { data } from './images.data';

const FourthSection = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 380;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 380;
  };
  return (
    <div className="bg-lavender-indigo/30 py-24 break-words w-screen">
      <h2 className="px-4 sm:px-16 lg:px-[10.25rem] text-[3.12rem] leading-[4.7rem] mb-[4.4rem]">
        Recent Blogs
      </h2>
      <div className="flex gap-2 items-center px-4 sm:px-8 lg:px-[5.125]">
        <MdChevronLeft
          className="text-lavender-indigo hover:text-wild-strawberry/70 hover:scale-95 focus:text-wild-strawberry/70 focus:scale-95 ease-in-out duration-300 cursor-pointer"
          onClick={slideLeft}
          size={100}
        />
        <div
          id="slider"
          className="flex gap-2 overflow-x-scroll whitespace-nowrap scroll-auto scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
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
    </div>
  );
};

export default FourthSection;
