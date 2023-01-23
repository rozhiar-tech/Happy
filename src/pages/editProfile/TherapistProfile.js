import React, { useState, useRef, useEffect } from 'react';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseinit';
import defaultPic from './defaultPic.svg';
import editIcon from './editIcon.svg';

function TherapistProfile({ data }) {
  const [formInput, setFormInput] = useState({
    fullName: data.fullName,
    bio: data.bio,
    birthDate: data.birthDate,
    email: data.email,
    phoneNumber: data.phoneNumber,
  });
  const [disabled, setDisabled] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const inputElement = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUpdated(() => false);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [isUpdated]);

  function handleFormInput(e) {
    const { name, value } = e.target;
    setFormInput((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'Users', data), {
        formInput,
      });
      setIsUpdated(() => 'Your Profile is Updated!');
      setDisabled(() => true);
    } catch (error) {
      setIsUpdated(() => `An Error has occured: ${error.message}`);
    }
  }

  return (
    <div className="relative flex flex-col md:flex-row gap-4 px-4 sm:px-16 lg:px-[10.25rem] py-14 break-words w-screen">
      {isUpdated && (
        <p className="absolute top-14 z-10 text-2xl leading-9 text-center border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 p-4 bg-white before:content-[''] before:absolute before:left-0 before:top-0 before:w-3 before:h-full before:bg-lavender-indigo before:rounded-l-md after:content-[''] after:absolute after:right-0 after:top-0 after:w-3 after:h-full after:bg-lavender-indigo after:rounded-r-md w-[calc(100vw-2rem)] sm:w-[calc(100vw-8rem)] lg:w-[calc(100vw-20.5rem)]">
          {isUpdated}
        </p>
      )}
      <div className="relative self-center md:self-start">
        <img src={defaultPic} alt="Profile" />
        <button
          type="button"
          className="absolute left-1/2 translate-x-[-50%] bottom-2"
          onClick={() => {
            inputElement.current.focus();
            setDisabled(() => false);
          }}
        >
          <img
            src={editIcon}
            alt="Edit Profile"
            className="cursor-pointer border-4 border-black rounded-full bg-white"
          />
        </button>
      </div>
      <div className="w-full">
        <h1 className="text-center text-[3.12rem] leading-[4.7rem] font-medium mb-7">
          THERAPIST PROFILE
        </h1>
        <form
          className="flex flex-col justify-center gap-4 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4">
            <label
              htmlFor="fullName"
              className="text-2xl leading-9 self-center min-w-0 w-48"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="text-lg border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 focus:outline-lavender-indigo disabled:bg-white grow p-4 min-w-0 min-h-16"
              value={formInput.fullName}
              onChange={handleFormInput}
              disabled={disabled ? 'disabled' : ''}
              ref={inputElement}
            />
          </div>
          <div className="flex gap-4">
            <label htmlFor="bio" className="text-2xl leading-9 min-w-0 w-48">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              className="text-lg border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 focus:outline-lavender-indigo disabled:bg-white grow p-4 min-w-0 min-h-16 resize-none"
              rows={7}
              value={formInput.bio}
              onChange={handleFormInput}
              disabled={disabled ? 'disabled' : ''}
            />
          </div>
          <div className="flex gap-4">
            <label
              htmlFor="birthDate"
              className="text-2xl leading-9 self-center min-w-0 w-48"
            >
              Birth Date
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              className="text-lg border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 focus:outline-lavender-indigo disabled:bg-white grow p-4 min-w-0 min-h-16"
              value={formInput.birthDate}
              onChange={handleFormInput}
              disabled={disabled ? 'disabled' : ''}
            />
          </div>
          <div className="flex gap-4">
            <label
              htmlFor="email"
              className="text-2xl leading-9 self-center min-w-0 w-48"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="text-lg border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 focus:outline-lavender-indigo disabled:bg-white grow p-4 min-w-0 min-h-16"
              value={formInput.email}
              onChange={handleFormInput}
              disabled={disabled ? 'disabled' : ''}
            />
          </div>
          <div className="flex gap-4">
            <label
              htmlFor="phoneNumber"
              className="text-2xl leading-9 self-center min-w-0 w-48"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="text-lg border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 focus:outline-lavender-indigo disabled:bg-white grow p-4 min-w-0 min-h-16"
              value={formInput.phoneNumber}
              onChange={handleFormInput}
              disabled={disabled ? 'disabled' : ''}
            />
          </div>
          {disabled ? null : (
            <input
              type="submit"
              value="Save"
              className="text-2xl leading-[2.25rem] text-white bg-lavender-indigo hover:bg-wild-strawberry/70 hover:scale-95 focus:bg-wild-strawberry/70 focus:scale-95 rounded ease-in-out duration-300 px-[2rem] py-[0.75rem] max-w-full w-fit self-center"
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default TherapistProfile;
