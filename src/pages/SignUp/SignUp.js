/* eslint-disable no-console */
import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import {  setDoc, getFirestore,doc } from "firebase/firestore";
import app from "../../firebase/firebaseinit";
import signupImage from "./SignupImage.svg";


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
                case "The email address is badly formatted.":
                    setError("The email address is badly formatted.");
                    break;
                case "The password must be 6 characters long or more.":
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
        <div className="h-screen bg-vodka flex justify-evenly">
        <img src={signupImage} alt="therapy" className="h-3/6 mt-14 "/>
            

            <div className="bg-white h-[500px] w-[550px] rounded-lg m-24 shadow-lg px-11 flex justify-between ">
            <form onSubmit={handleSubmit} className="flex flex-col  justify-evenly">
                <div className="flex  justify-evenly">
                <input
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className=" w-48 h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md mr-7"
                />
                <input
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className=" w-48 h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md "
                />
                    </div>
                    <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" w-full h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md "
                />
                <input
                    placeholder="Confirm Email"
                    type="email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    className=" w-full h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md "
                />
                <div className="flex justify-between">
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-48 h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md"

                />
                <input
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-48 h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md"

                />
                </div>
                <div className="flex justify-between">
                <p className="text-gray-500 text-sm">Birth date</p>
                
                 <input type="date" className="w-48 h-[65px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md" 
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}

                 />
                </div>
            {error && <p>{error}</p>}
            <div className="">

                <button type="button" onClick={senToLogin} disabled={loading} className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white  py-2 px-4 rounded mr-3 h-[60px] w-[186px]">
                    Login
                </button>
                <button
                    type="submit"
                    className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white rounded p-4 h-[60px] w-[186px] self-center"
                    disabled={loading}
                    >
                    Sign Up
                </button>
                </div>
            </form>
            </div>

        </div>
    )


    
}
    

export default SignUp