import React from 'react';
import { useNavigate } from 'react-router-dom';

function Gratitude({
  message,
  title = 'THANK YOU!',
  btnValue = 'Back To Home',
  onHandleClick = false,
}) {
  const navigate = useNavigate();

  function handleClick() {
    return !onHandleClick ? navigate('/') : onHandleClick();
  }

  return (
    <div className="px-4 sm:px-16 py-8 break-words w-screen">
      <h1 className="text-[3.12rem] leading-[4.7rem]">{title}</h1>
      <p className="text-2xl text-black/50 mb-4 xl:mb-8">{message}</p>
      <button
        type="button"
        onClick={handleClick}
        className="bg-lavender-indigo hover:bg-wild-strawberry/70 hover:scale-95 focus:bg-wild-strawberry/70 focus:scale-95 text-white font-bold py-2 px-8 xl:py-4 xl:px-16 rounded ease-in-out duration-300 w-fit max-w-full"
      >
        {btnValue}
      </button>
    </div>
  );
}

export default Gratitude;
