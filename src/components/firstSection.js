
import React from "react";
import "./styles/firstSection.css";
import therapy from "../assets/therapy.svg";


const FirstSection = () => {
    return (
        <div className="first w-full sm:flex justify-between ">
        <div  className="ml-auto m-auto">
             <p  className="  text-xl font-semibold">We are Here To Make you <span className="happy">Happy</span></p> 
             <p  className="  text-4xl font-bold">Happy</p> 
        </div>

             <img src={therapy} alt="therapy" className="mr-auto"/>
        </div>
    );
    }

export default FirstSection;