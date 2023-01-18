import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import image from './contact.svg';
import { inquiries } from './inquiries.data';

function Contact() {
  const [formInput, setFormInput] = useState({
    inquiries: 'I have a question about the service.',
    fullName: '',
    email: '',
    details: '',
  });

  function handleFormInput(e) {
    const { name, value } = e.target;
    setFormInput((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function isChecked(value) {
    return value === formInput.inquiries;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_6ec28wg',
        'contactInfo_jpnijnd',
        formInput,
        'ZlNHx4VKV2bjEUvC5'
      );
      await emailjs.send(
        'service_6ec28wg',
        'contactSuccess_b7jcpv9',
        formInput,
        'ZlNHx4VKV2bjEUvC5'
      );
    } catch (error) {
      console.log(error.text);
    }
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
        <div className="inquiries flex flex-col">
          <h2 className="text-2xl">Inquiries</h2>
          {inquiries.map((value, index) => {
            return (
              <label
                key={value}
                htmlFor={`type${index + 1}`}
                className="text-xl leading-[1.875]"
              >
                <input
                  type="radio"
                  id={`type${index + 1}`}
                  name="inquiries"
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
