
import React from "react";
import "./styles/firstSection.css";
import therapy from "../assets/therapy.svg";


const FirstSection = () => {
    return (
        <div className="first w-full sm:flex justify-between ">
        <div  className="ml-auto m-auto">
             <p  className="  text-xl font-semibold">We are Here To Make you <span className="happy">Happy</span></p> 
             <p  className="  text-4xl font-bold">Happy</p> 
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6" type="button">
                Book an Appointment 
            </button>
        </div>
             <img src={therapy} alt="therapy" className="mr-auto"/>
        </div>
    );
    }

export default FirstSection;