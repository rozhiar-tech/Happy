import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from "./requirements_therapy.svg";

const paragraph = [
  {
    id: 1,
    name: 'Reliable income',
    content: 'Over 10,000 people sign up on BetterHelp every day looking for a counselor to help with life’s challenges BetterHelp can be your main source of income ("full time") or a supplement to your current work.',
  },
  {
    id: 2,
    name: 'Focus on counselling',
    content: 'No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!',
  },
];

const Issue = () => { 
  const navigate2 = useNavigate();
  
  return (
    <div className='lg:flex lg:flex-row max-w-8xl mx-auto px-4  flex flex-col flex-wrap'>
      <div className=" flex flex-col md:my-14 my-6 md:max-w-3xl max-w-xl ">
      <h1 className="mb-4 text-4xl md:text-5xl uppercase font-medium md:text-left text-center">Why work with Healing?</h1>
      {paragraph.map((item) => {
          return (
            <div>
              <h3 className="md:text-2xl text-xl pt-6 pb-1 uppercase font-medium">{item.name}</h3>
              <p className="text-lg leading-7 text-justify capitalize">
                {item.content}
              </p>
            </div>
          );
        })} 
         <div className='md:text-left text-center'>
      <h3 className="text-3xl uppercase mt-10 mb-4 font-medium">Requirements</h3>
      </div>
        <ul className='list-disc space-y-2 text-lg pl-6 capitalize'>
          <li>Licensed by a State Board to provide counseling</li>
          <li>Experience in counseling for adults, couples, and/or teens</li>
          <li>Excellent writing skills</li>
          <li>Reliable Internet connection</li>
          <li>Currently residing in the US</li>
        </ul>
    
      <div>
      <button
            type='submit'
            className=" flex bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white rounded px-[2rem] py-[0.75rem] text-lg md:mb-6 mb-2 mt-10 justify-items-center md:mx-0 mx-auto"
            onClick={() => navigate2('/login')}
          >
            GET STARTED
          </button>
        </div>
      </div>
      <div className=" md:mt-20 mb-10">
      <img  alt="Therapy" src={image} className="pl-20 md:w-[450px] w-[400px] hidden md:flex"/>
      </div>
    </div>
  );
};

export default Issue;
