import React, { useRef } from 'react';

const CareerPart1 = () => {
  const part2 = useRef(null);
  const handleClick = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col ">
      <div className="mt-14 max-w-6xl mx-auto px-4">
        <div className="md:text-left text-center">
          <h1 className="mb-2 md:text-5xl text-4xl">CAREERS AT HEALING</h1>
          <h4 className="text-gray-400 mb-24 px-1 text-xl">
            Be a part of making people feel better.
          </h4>
        </div>
        <div className="text-gray-700 text-lg px-1">
          <p className="leading-8 text-justify">
            Our SEO software cuts through mountains of data to surface critical
            insights. We build and maintain systems that process massive amounts
            of data (we&#39;re talking 36 trillion records per day and multiple
            petabytes of storage.) We model transparent and empathetic marketing
            for the world. We educate our community, making every effort to help
            them improve their skill. And we do it all by fostering a culture
            that encourages accountability, empathy, and transparency.
          </p>
          <h4 className="mt-14 mb-10 md:text-left text-center">
            What role will you play?
          </h4>
        </div>
        <div>
          <button
            type="button"
            className="flex bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white rounded px-[2rem] py-[0.75rem] text-lg mb-10 justify-items-center md:mx-0 mx-auto "
            onClick={() => {
              handleClick(part2);
            }}
          >
            SEE OUR OPEN LIST
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center  justify-center  bg-lavender-indigo opacity-[90%] py-6 md:text-left text-center">
        <div className="max-w-6xl  md:mx-auto sm:mx-auto lg:mx-0  px-4">
          <h1 className="mb-2 text-4xl text-gray-900">OUR HIRING PHILOSOPHY</h1>
          <p className="leading-8 text-justify text-lg">
            To build the very best SEO tools, we need a workforce that reflects
            the diversity of our communities and customers. We want Online
            Therapy to be a place where everyone feels welcome and engaged, bar
            none. It&#39;s our mission and promise to interview a diverse and
            representative slate of candidates before making an offer for our
            open roles.
          </p>
        </div>
      </div>
      <div className="part2" ref={part2} />
    </div>
  );
};

export default CareerPart1;
