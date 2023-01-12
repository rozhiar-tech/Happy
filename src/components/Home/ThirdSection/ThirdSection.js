import React from 'react';
import { NavLink } from 'react-router-dom';
import phone from './phone-call.svg';
import chat from './chat.svg';
import video from './video-call.svg';

const ThirdSection = () => {
  return (
    <div className="px-4 sm:px-16 lg:px-[10.25rem] w-screen py-24 break-words w-screen">
      <h2 className="mb-16 text-5xl">WE CAN COMMUNICATE THROUGH</h2>
      <div className="flex flex-row flex-wrap gap-4 justify-evenly items-center text-center my-7">
        <NavLink className="flex flex-col items-center gap-4 border border-vodka rounded-2xl shadow-xl shadow-vodka/25 w-[23rem] max-w-full min-h-[21.875rem] h-fit pt-[3rem]">
          <img
            src={phone}
            alt="Voice call"
            className="w-[5.625rem] h-[5.625rem]"
          />
          <h4 className="text-4xl w-fit max-w-full">Voice Call</h4>
          <p className="text-gray-500 leading-7 px-2 sm:px-12 w-fit max-w-full">
            Feeling ready to start a conversation? Give your therapist a voice
            call and talk your heart out!
          </p>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-4 border border-vodka rounded-2xl shadow-xl shadow-vodka/25 w-[23rem] max-w-full min-h-[21.875rem] h-fit pt-[3rem]">
          <img src={chat} alt="Chat" className="w-[5.625rem] h-[5.625rem]" />
          <h4 className="text-4xl w-fit max-w-full">Chat</h4>
          <p className="text-gray-500 leading-7 px-2 sm:px-12 w-fit max-w-full">
            Need to talk to someone? Come have a chat with your therapist!
          </p>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-4 border border-vodka rounded-2xl shadow-xl shadow-vodka/25 w-[23rem] max-w-full min-h-[21.875rem] h-fit pt-[3rem]">
          <img
            src={video}
            alt="Video call"
            className="w-[5.625rem] h-[5.625rem]"
          />
          <h4 className="text-4xl w-fit max-w-full">Video Call</h4>
          <p className="text-gray-500 leading-7 px-2 sm:px-12 w-fit max-w-full">
            For better experience therapists recommend video calls, but always
            remember that its a choice!
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default ThirdSection;
