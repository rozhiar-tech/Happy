import React from 'react';
import rectangle from './rectangle.svg';

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="my-20 max-w-6xl mx-auto px-4">
        <div className=" md:text-left text-center">
          <h1 className=" mb-2 text-5xl ">HEALING!</h1>
          <h4 className="text-gray-400 mb-16">some cool one liner !</h4>
        </div>
        <p className="text-gray-700 text-lg leading-8 text-justify">
          At Healing, we believe there is a better way to do things. A more
          valuable way where customers are earned rather than bought. We&#39;re
          obsessively passionate about it, and our mission is to help people
          achieve it. We focus on search engine optimization. It&#39;s one of
          the least understood and least transparent aspects of great marketing,
          and we see that as an opportunity. We&#39;re excited to simplify SEO
          for everyone through our software, education, and community.
        </p>
      </div>

      <div className="md:flex flex-row items-center  justify-center gap-10 bg-light-blue md:px-6 py-8 pb-20 sm:grid sm:grid-cols-1">
        <img
          src={rectangle}
          alt="founder"
          className="md:w-[400px] w-[312px] lg:mx-0 mb-2 mx-auto "
        />
        <div className="max-w-2xl lg:mx-0 md:mx-auto sm:mx-auto  px-4">
          <h1 className="mb-4 text-4xl text-gray-700 text-center">
            Our Founding
          </h1>
          <p className="text-gray-900 text-justify text-lg leading-7 lg:pr-6">
            Healing was founded by Payam Abubakr in 2021. It was called Healing
            Online, and started as a blog and an online community where some of
            the world&#39;s therapists shared their research and ideas. We
            launched the Beginner&#39;s Guide to Therapy and our first study,
            and that hub of industry expertise transformed into a small
            consulting firm and led us to create the Online Therapist of today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
