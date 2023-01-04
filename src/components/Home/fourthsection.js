import React from "react";
import { MdChevronLeft, MdChevronRight} from "react-icons/md";
import {data } from "./images";
import "../styles/fourthSection.css";

const fourthSection = () => {
    const slideLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft -= 500;
      };
    
      const slideRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft += 500;
      };
    return (
        <div className="fourth">
            <h1 className="header">Recent Blogs</h1>
        <div className="topd">
        <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
      </div>
      </div>
    
    );
    }

    export default fourthSection;