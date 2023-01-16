import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Booking1 = () => {
    const [chosen, setChosen] = useState('');
    const handleClick = e => {setChosen(e.target.value)
    // console.log(e.target.value)
};
    const navigate = useNavigate();
    function handleClickNext() {
        if (chosen === '') {
            // eslint-disable-next-line
          alert("Please choose an option ")
        } else {
          navigate('/booking2');}}
    

    return (
        <div className="flex flex-col mt-16 max-w-6xl mx-auto px-4">
             <div className="md:text-left text-center mb-20">
                <h1 className="mb-6 md:text-4xl text-3xl uppercase ">Let&#39;s match you with the right therapist</h1>
                <p className="text-gray-600 text-lg leading-8 text-justify"> Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you&#39;d like to deal with in online therapy. It would help us match you with the most suitable therapist for you.</p>
            </div>
            <div className='flex flex-col max-w-2xl mx-auto border  border-gray-100 pt-10 px-10 rounded-2xl shadow-xl mb-20'>
                <form>
                <h4 className='text-2xl mb-8 md:text-left text-center '>What Type Of Counseling Are You Looking For?</h4>
                
                <input
                    className={`flex flex-col place-items-center w-full mx-auto bg-lavender-indigo hover:bg-wild-strawberry/70  text-white rounded px-[2rem] py-[0.75rem] text-lg  mb-10 md:mx-0 ${
                        chosen === 'Individual Counselling' ? 'bg-wild-strawberry/70' : ' '
                     }`}
                    value="Individual Counselling"
                    type="button"
                    onClick={handleClick} 
                />
                <input
                    className={`flex flex-col place-items-center w-full  mx-auto bg-lavender-indigo hover:bg-wild-strawberry/70  text-white rounded px-[2rem] py-[0.75rem] text-lg  mb-10 md:mx-0 ${
                        chosen === 'Teen Counseling (For My Child)' ? 'bg-wild-strawberry/70' : ' '
                     }`}
                    value="Teen Counseling (For My Child)"
                    type="button"
                    onClick={handleClick}
                    />
                <button
                    className="flex bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white rounded px-[2rem] py-[0.75rem] text-lg mb-6 mt-24 justify-items-center md:mx-0 mx-auto "
                    type="submit"
                    onClick={handleClickNext}>
                    NEXT    
                </button>
                </form>
            </div>
    </div>
    )
}

export default Booking1;