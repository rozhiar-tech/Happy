import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from './booking.data';

function Booking() {
  const [currentData, setCurrentData] = useState(data[0]);
  const [answers, setAnswers] = useState({});
  const [isAnswered, setIsAnswered] = useState(false);
  const [isPrompt, setIsPrompt] = useState(false);
  const index = data.indexOf(currentData);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPrompt(() => false);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [isPrompt]);

  // Change fn name
  function handleFormInput(e) {
    const { value } = e.target;
    setAnswers((prev) => {
      return { ...prev, [currentData.question]: value };
    });
    return value ? setIsAnswered(() => true) : setIsAnswered(() => false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isAnswered || index >= data.length - 2) {
      if (index < data.length - 1) {
        setCurrentData(() => data[index + 1]);
        setIsAnswered(() => false);
      }
      if (index === data.length - 2) {
        // return answers
        console.log(answers);
      }
      if (index === data.length - 1) {
        navigate('/');
      }
    } else {
      setIsPrompt(() => true);
    }
  }

  return (
    <div className="sm:py-4 px-4 sm:px-16 break-words w-screen">
      <h1 className="text-[3.12rem] leading-[4.7rem] uppercase">
        {currentData.title}
      </h1>
      <p className="text-2xl leading-9 text-justify text-black/50">
        {currentData.paragraph}
      </p>
      {isPrompt && (
        <p className="absolute left-1/2 -translate-x-1/2 top-52 z-10 text-2xl leading-9 text-center border border-vodka rounded-md shadow-[0_4px_12px_4px] shadow-vodka/25 p-4 bg-white before:content-[''] before:absolute before:left-0 before:top-0 before:w-3 before:h-full before:bg-lavender-indigo before:rounded-l-md after:content-[''] after:absolute after:right-0 after:top-0 after:w-3 after:h-full after:bg-lavender-indigo after:rounded-r-md w-[calc(100vw-2rem)] sm:w-[calc(100vw-8rem)] lg:w-[calc(100vw-20.5rem)]">
          Please Select an Answer
        </p>
      )}

      <form
        className="flex flex-col p-10 my-16 mx-auto border border-vodka rounded-2xl shadow-xl shadow-vodka/25 max-w-full w-[50rem] h-fit min-h-[35rem]"
        onSubmit={handleSubmit}
      >
        {currentData.type !== 'textarea' && index < data.length - 2 ? (
          <h2 className="text-[2rem] leading-[3rem] capitalize">
            {currentData.question}
          </h2>
        ) : null}
        <div className="flex flex-col gap-5 my-10 grow">
          {currentData.type === 'button'
            ? currentData.answers.map((answer) => (
                <input
                  key={answer.id}
                  type="button"
                  value={answer.value}
                  onClick={handleFormInput}
                  className="text-2xl leading-[2.4rem] border border-lavender-indigo hover:border-0 hover:bg-lavender-indigo focus:bg-lavender-indigo hover:text-white focus:text-white rounded ease-in-out duration-300 capitalize text-left px-6 py-4"
                />
              ))
            : null}
          {currentData.type === 'radio'
            ? currentData.answers.map((answer, i) => (
                <label
                  key={answer.id}
                  htmlFor={`type${i + 1}`}
                  className="text-2xl leading-[2.4rem] border border-lavender-indigo hover:border-0 hover:bg-lavender-indigo focus:bg-lavender-indigo hover:text-white focus:text-white rounded ease-in-out duration-300 capitalize text-left px-6 py-4"
                >
                  <input
                    type="radio"
                    id={`type${i + 1}`}
                    name="answers"
                    value={answer.value}
                    className="mr-2"
                    onChange={handleFormInput}
                  />
                  {answer.value}
                </label>
              ))
            : null}
          {currentData.type === 'textarea' ? (
            <textarea
              className="resize-none"
              rows={17}
              onChange={handleFormInput}
            />
          ) : null}
          {currentData.btnValue === 'Next' && (
            <input
              type="submit"
              value={currentData.btnValue}
              className="text-2xl leading-[2.25rem] uppercase text-white bg-lavender-indigo hover:bg-wild-strawberry/70 hover:scale-95 focus:bg-wild-strawberry/70 focus:scale-95 rounded ease-in-out duration-300 px-[2rem] py-[0.75rem] max-w-full w-fit self-start mt-auto"
            />
          )}
          {index >= data.length - 2 && (
            <>
              <h2 className="text-[2rem] leading-[3rem] capitalize text-center">
                {currentData.question}
              </h2>
              <p className="text-center text-2xl leading-9 my-28">
                {currentData.message}
              </p>
              <input
                type="submit"
                value={currentData.btnValue}
                className="text-2xl leading-[2.25rem] uppercase text-white bg-lavender-indigo hover:bg-wild-strawberry/70 hover:scale-95 focus:bg-wild-strawberry/70 focus:scale-95 rounded ease-in-out duration-300 py-2 px-16 max-w-full w-fit self-center"
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default Booking;
