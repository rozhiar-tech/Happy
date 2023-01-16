import React from 'react';
import "./requirement.css";
import { useNavigate } from 'react-router-dom';
import image from "./requirements_therapy.svg";

const Issue = () => { 
  const navigate2 = useNavigate();
  return (
    <div className='requirements'>
      <img alt="Therapy" src={image} className="image1"/>
    <div className="text-new">
      <h3 className="text1">Why work with Healing?</h3>
      <h4 className='text2'>Reliable Income</h4>
      <p className='text5'>Over 10,000 people sign up on 
      BetterHelp every day looking for a counselor to help with life’s challenges. 
      BetterHelp can be your main source of income (full time) or a supplement to your current work.</p>
      <h4 className='text6'>Focus on Counseling</h4>
      <p className='text5'>No need to worry about costs from acquiring clients, billing, support or operations.
         Let us handle the fees and paperwork so you can focus on what you do best!</p>
         <h4 className='text6'>Focus on Counseling</h4>
      <p className='text5'>No need to worry about costs from acquiring clients, billing, support or operations.
         Let us handle the fees and paperwork so you can focus on what you do best!</p>
         <div>
      <h3 className="text7">Requirements</h3>
        <ul className='important'>
          <li>Licensed by a State Board to provide counseling</li>
          <li>Experience in counseling for adults, couples, and/or teens</li>
          <li>Excellent writing skills</li>
          <li>Reliable Internet connection</li>
          <li>Currently residing in the US</li>
        </ul>
      </div>
      <button
            id='button2'
            type='button'
            className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white rounded px-4 py-2"
            onClick={() => navigate2('/')}
          >
            GET STARTED
          </button>
    </div>
    </div>
  );
};

export default Issue;
