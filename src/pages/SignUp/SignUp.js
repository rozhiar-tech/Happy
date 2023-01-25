/* eslint-disable no-console */
import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import {  setDoc, getFirestore,doc } from "firebase/firestore";
import app from "../../firebase/firebaseinit";
import signupImage from "./SignupImag.png";
import line from './line.svg'
import facebook from './facebook.svg'
import google from './google.svg'


const auth = getAuth(app);
const db = getFirestore(app);


function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setError("");
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            // Signed in 

            const {user} = userCredential;
            console.log(user)
            await setDoc(doc(db, "Users",user.uid), {
                firstName
                ,lastName
                ,email
                ,birthDate
                ,uid:user.uid
                ,createdAt: new Date(),
                role:"user"

              });
              
            

            navigate("/");
            // ...
        })
        .catch((errorr) => {
            const state = errorr.message.replace("Firebase: Error ", "");
            switch (state) {
                case "(auth/email-already-in-use).":
                    setError("The email address is already in use by another account.");
                    break;
                case "(auth/invalid-email).":
                    setError("The email address is badly formatted.");
                    break;
                case "(auth/weak-password).":
                    setError("The password must be 6 characters long or more.");
                    break;
                default:
                    setError("Failed to create an account");
                    break;
            }
            console.log(state)

            // ..
        });
        setLoading(false);
    };

    const senToLogin = () => {
        navigate("/login");
    };
    
    
    return (
        <div className="mt-10 mb-24 flex  justify-center flex-wrap items-center w-screen">
        <img src={signupImage} alt="therapy" className="md:h-3/6  h-[25%] w-[40%] hidden lg:flex"/>
            
            <div className="flex flex-col">
                <h1 className="text-5xl  px-[5.25rem] text-center md:text-left uppercase mb-14">Signup now</h1>
            
            <div className="bg-white h-[380px] w-[500px] rounded-lg m-14 shadow-2xl px-8 flex  justify-between  ">
            <form onSubmit={handleSubmit} className="flex flex-col  justify-evenly pt-10 gap-y-3">
                <div className="flex  justify-evenly">
                <input
                    required
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className=" w-48 h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md mr-7"
                />
                <input
                    required
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className=" w-48 h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md "
                />
                    </div>
                    <input
                    required
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" w-full h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md "
                />
                <input
                    required
                    placeholder="Confirm Email"
                    type="email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    className=" w-full h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md "
                />
                <div className="flex justify-between">
                <input
                    required
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-48 h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md"

                />
                <input
                    required
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-48 h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md"

                />
                </div>
                <div className="flex justify-between">
                <p className="text-gray-500 ml-2 text-sm">Birth date</p>
                
                 <input type="date" className="w-48 h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md" 
                    value={birthDate}
                    required
                    onChange={(e) => setBirthDate(e.target.value)}

                 />
                </div>
            {error && <p>{error}</p>}
            <div className="flex mb-10 mt-2 gap-x-4 mx-auto">

                <button type="button" onClick={senToLogin} disabled={loading} className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white  py-2 px-4 rounded mr-3 h-[60px] w-[186px]">
                    Login
                </button>
                <button
                    type="submit"
                    className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white rounded p-4 h-[60px] w-[186px] self-center active:bg-violet-700"
                    disabled={loading}
                    >
                    Sign Up
                </button>
                </div>
                <div className="flex justify-around my-3">
          <img src={line} alt="line" />
          <span>Or</span>
          <img src={line} alt="line" />
        </div>
        <div className="flex justify-center  gap-x-20">
          <button type="button">
            <img
              className="cursor-pointer"
              src={facebook}
              alt="logo"
            />
          </button>

          <button type="button">
            <img
              className="cursor-pointer w-[30px]"
              src={google}
              alt="logo"
            />
          </button>
        </div>
            </form>
            
            </div>
            </div>
        </div>
    )


    
}
    

export default SignUp