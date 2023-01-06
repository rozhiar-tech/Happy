import React, { useState } from 'react';
import image from '../assets/contact.svg';

function Contact() {
  const [formInput, setFormInput] = useState({
    'contact-type': 'I have a question about the service.',
    fullName: '',
    email: '',
    details: '',
  });

  const contactType = [
    'I have a question about the service.',
    "I'm a registered client and I need support.",
    "I'm a counselor interested in joining.",
    "I'm a registered counselor and I need support.",
    'I have a business-related inquiry.',
    "I'm interested in Healing Online for my organization.",
    'I have a billing related question.',
  ];

  function handleFormInput(e) {
    const { name, value } = e.target;
    setFormInput((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function isChecked(value) {
    return value === formInput['contact-type'];
  }

  function handleSubmit(e) {
    e.preventDefault();
    // to store or send formInput
  }

  return (
    <div className="grid md:grid-cols-2 gap-4 px-4 sm:px-16 break-words w-screen">
      <div className="md:col-span-2">
        <h1 className="text-[3.12rem] leading-[4.7rem]">
          SEND US YOUR REQUEST!
        </h1>
        <p className="text-2xl text-black/50 font-medium">
          Do you have a question, concern, idea, feedback, or problem? If you
          need assistance, please fill out the form below and we&apos;d be happy
          to help!
        </p>
      </div>
      <form className="w-full py-4" onSubmit={handleSubmit}>
        <div className="contact-type flex flex-col">
          <h2 className="text-2xl">Type of Contact</h2>
          {contactType.map((value, index) => {
            return (
              <label
                key={value}
                htmlFor={`type${index + 1}`}
                className="text-xl leading-[1.875]"
              >
                <input
                  type="radio"
                  id={`type${index + 1}`}
                  name="contact-type"
                  value={value}
                  className="mr-2"
                  checked={isChecked(value)}
                  onChange={handleFormInput}
                />
                {value}
              </label>
            );
          })}
        </div>
        <div className="contact-info flex flex-col my-16 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="full-name" className="text-xl leading-[1.875]">
              Full Name:
            </label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              placeholder="Enter your full name here..."
              className="text-lg h-16 p-4 border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 focus:outline-lavender-indigo"
              value={formInput.fullName}
              onChange={handleFormInput}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xl leading-[1.875]">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address here..."
              className="text-lg h-16 p-4 border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 focus:outline-lavender-indigo"
              value={formInput.email}
              onChange={handleFormInput}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="details" className="text-xl leading-[1.875]">
              Details:
            </label>
            <textarea
              id="details"
              name="details"
              placeholder="Enter your details here..."
              className="text-lg p-4 border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 focus:outline-lavender-indigo resize-none"
              rows={7}
              value={formInput.details}
              onChange={handleFormInput}
            />
          </div>
          <input
            type="submit"
            className="text-2xl leading-[2.25rem] bg-lavender-indigo px-[2rem] py-[0.75rem] hover:scale-[98%] hover:bg-vodka focus:scale-[98%] focus:bg-vodka rounded-md cursor-pointer w-fit mx-auto md:mx-0 mt-4"
          />
        </div>
      </form>
      <div className="py-4 flex flex-col items-center gap-10">
        <img
          src={image}
          alt="Two of the cutomer service team responding to calls"
        />
        <div className="w-fit bg-vodka rounded-3xl py-5 px-14">
          <h2 className="text-2xl">Find Us At:</h2>
          <p className="text-2xl text-black/50 font-light">Nergiz Plaza</p>
          <p className="text-2xl text-black/50 font-light">3rd Floor</p>
          <p className="text-2xl text-black/50 font-light">
            Bakhtiyari Street 40m
          </p>
          <p className="text-2xl text-black/50 font-light">Erbil, Iraq</p>
          <p className="text-2xl text-black/50 font-light">44001</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
