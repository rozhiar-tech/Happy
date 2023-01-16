import React from "react";

import { useNavigate } from "react-router-dom";




function ThankYou() {

  const navigate = useNavigate();

  return (

    <div className="flex flex-col justify-center items-center h-screen">

      <h1 className="text-3xl font-bold">Thank you for signing up!</h1>
      <p className="text-xl mt-4 break-normal w-[550px] jus">Thank you for your interest in working with Happy,
       we have recieved your application.
       You will receive an email guiding you for the next steps soon after your information is reviewed.
       </p>

      <button
      type="button"

        className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 text-white p-2 rounded mt-4 h-[60px] w-[150px]"

        onClick={() => navigate("/login")}

      >

        Login

      </button>

    </div>

  );

}

export default ThankYou;


