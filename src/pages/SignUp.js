/* eslint-disable no-console */
import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebaseinit";
import therapy from "../assets/therapy.svg";


const auth = getAuth(app);

function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setError("");
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 

            const {user} = userCredential;
            console.log(user)

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

 

    return (
        <div className="h-screen bg-vodka flex justify-evenly">
            

            <div className="bg-white h-96 w-96 rounded-lg m-24 shadow-lg p-10">
            <form onSubmit={handleSubmit} className="flex flex-col  justify-center ">
                <label 
                htmlFor="email"
                className="flex flex-col text-center mb-10"
                >        
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    
                </label>
                <label
                className="flex flex-col text-center  mb-10"

                htmlFor="password"
                >
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </label>
                {error && <p>{error}</p>}

                <button
                type="submit"
                className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white rounded p-4 w-1/2 self-center"
                disabled={loading}
                >
                    Sign Up
                </button>
            </form>
            </div>
      <img src={therapy} alt="therapy" className="h-3/6 mt-14 "/>

        </div>
    )


    
}
    

export default SignUp