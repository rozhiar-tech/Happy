import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import app from '../../../firebase/firebaseinit';
import phone from './phone-call.svg';
import chat from './chat.svg';
import video from './video-call.svg';

const db = getFirestore(app);
const auth = getAuth(app);
const ThirdSection = () => {
  const handleSelectChatToSendidOfUser = async (id) => {
    const combinedId =
      auth.currentUser.uid > id
        ? auth.currentUser.uid + id
        : id + auth.currentUser.uid;
    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        // create a chat in chats collection

        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        // create user chats
        await updateDoc(doc(db, 'userChats', auth.currentUser.uid), {
          // eslint-disable-next-line prefer-template
          [combinedId + '.userInfo']: {
            uid: id,
            displayName: 'Dr. John Doe',
          },
          // eslint-disable-next-line prefer-template
          [combinedId + '.date']: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', id), {
          // eslint-disable-next-line prefer-template
          [combinedId + '.userInfo']: {
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
          },
          // eslint-disable-next-line prefer-template
          [combinedId + '.date']: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-4 sm:px-16 lg:px-[10.25rem] py-14  w-screen">
      <h2 className="text-[2.5rem] leading-[4.7rem]">
        WE CAN COMMUNICATE THROUGH
      </h2>
      <div className="flex flex-row flex-wrap gap-4 justify-evenly items-center text-center mt-[4.4rem]">
        <NavLink className="flex flex-col items-center gap-4 border border-vodka rounded-2xl shadow-xl shadow-vodka/25 hover:scale-95 focus:scale-95 ease-in-out duration-300 w-[23rem] max-w-full min-h-[21.875rem] h-fit pt-[3rem]">
          <img
            src={phone}
            alt="Voice call"
            className="w-[5.625rem] h-[5.625rem]"
          />
          <h4 className="text-[2.5rem] leading-[4.7rem] w-fit max-w-full">
            Voice Call
          </h4>
          <p className="text-black/[54%] text-base px-2 sm:px-12 w-fit max-w-full">
            Feeling ready to start a conversation? Give your therapist a voice
            call and talk your heart out!
          </p>
        </NavLink>
        <NavLink
          onClick={() =>
            handleSelectChatToSendidOfUser('Mrb92EjXeJRRHGC57swOzv0PoMm2')
          }
          to="/chat"
          className="flex flex-col items-center gap-4 border border-vodka rounded-2xl shadow-xl shadow-vodka/25 hover:scale-95 focus:scale-95 ease-in-out duration-300 w-[23rem] max-w-full min-h-[21.875rem] h-fit pt-[3rem]"
        >
          <img src={chat} alt="Chat" className="w-[5.625rem] h-[5.625rem]" />
          <h4 className="text-[2.5rem] leading-[4.7rem] w-fit max-w-full">
            Chat
          </h4>
          <p className="text-black/[54%] text-base px-2 sm:px-12 w-fit max-w-full">
            Need to talk to someone? Come have a chat with your therapist!
          </p>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-4 border border-vodka rounded-2xl shadow-xl shadow-vodka/25 hover:scale-95 focus:scale-95 ease-in-out duration-300 w-[23rem] max-w-full min-h-[21.875rem] h-fit pt-[3rem]">
          <img
            src={video}
            alt="Video call"
            className="w-[5.625rem] h-[5.625rem]"
          />
          <h4 className="text-[2.5rem] leading-[4.7rem] w-fit max-w-full">
            Video Call
          </h4>
          <p className="text-black/[54%] text-base px-2 sm:px-12 w-fit max-w-full">
            For better experience therapists recommend video calls, but always
            remember that its a choice!
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default ThirdSection;
