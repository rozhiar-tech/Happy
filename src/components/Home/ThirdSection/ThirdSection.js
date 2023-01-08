import React from 'react';
import { NavLink } from 'react-router-dom';
import phone from './phone-call.svg';
import chat from './chat.svg';
import video from './video-call.svg';

const ThirdSection = () => {
  return (
    <div className="pt-20 pb-16  max-w-7xl mx-auto">
      <h2 className="mb-16 text-5xl sm:px-7">WE CAN COMMUNICATE THROUGH</h2>
      <div className="cards grid lg:grid-cols-3 md:grid-cols-2 md:px-7 sm:grid-cols-1 sm:px-5 gap-6">
        <div className="card-1 py-6 border border-gray-100  rounded-2xl shadow-xl">
          <NavLink>
            <img src={phone} alt="voiceCall" className="mx-auto mb-8" />
            <h4 className=" text-4xl text-center mb-4">Voice Call</h4>
            <p className="text-center mx-12 text-gray-500 leading-7">
              Feeling ready to start a conversation? Give your therapist a voice
              call and talk your heart out!
            </p>
          </NavLink>
        </div>
        <div className="card-2 py-6 border border-gray-100  rounded-2xl shadow-xl">
          <NavLink>
            <img src={chat} alt="chat" className="mx-auto mb-8" />
            <h4 className="text-4xl text-center mb-4">Chat</h4>
            <p className="text-center mx-12 text-gray-500 leading-7">
              Need to talk to someone? Come have a chat with your therapist!
            </p>
          </NavLink>
        </div>
        <div className="card-3 py-6 border border-gray-100  rounded-2xl shadow-xl">
          <NavLink>
            <img src={video} alt="videoCall" className="mx-auto mb-8" />
            <h4 className="text-4xl text-center mb-4">Video Call</h4>
            <p className="text-center mx-12 text-gray-500 leading-7">
              For better experience therapists recommend video calls, but always
              remember that its a choice!
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
