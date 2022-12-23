
import React from "react";
import "./styles/secondSection.css";
import image from "../assets/section2.png";


const SecondSection = () => {
    return (
        <div className="style ">
            <div className="one">
                <h1>PROFESSIONAL, LICENSED, AND VETTED</h1>
                <h1>THERAPISTS THAT YOU CAN TRUST</h1>
            </div>
            
            <img src={image} alt="pictureof" className="im"/>
            
            <div className="second">
                <p>Tap into the world&apos;s largest network of licensed, accredited, and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. with our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate whenever and however you want.</p>
            </div>
            <div>
            <button className="btnC" type="button">
                Book An Appointment
            </button>
            </div>
        </div>
    );
    }
export default SecondSection;
