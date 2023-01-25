import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import app from "../../firebase/firebaseinit";
import therapy from "./therapy.svg";
import line from './line.svg'
import facebook from './facebook.svg'
import google from './google.svg'


const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      
      navigate("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  };

  const senUserToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className=" mt-14 mb-36  flex   justify-center   items-center  w-screen ">
      <div className="flex flex-col">
      <h1 className="text-5xl  px-[5.25rem] text-center md:text-left uppercase mb-14">Login</h1>

      <div className="bg-white h-[230px] w-[470px] rounded-lg md:my-10 md:mr-24 shadow-2xl my-6 px-11 flex justify-between  ">
      <form onSubmit={handleSubmit} className="flex flex-col  justify-evenly gap-y-10 pt-20">
      <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" w-96 h-[75px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md "
          />
        <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-96 h-[75px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md"

          />
      {error && <p>{error}</p>}
       <div className="flex justify-between">

       <button type="submit" disabled={loading} className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white  py-2 px-4 rounded mr-3 h-[60px] w-[186px]">
          Login
        </button>
        <button type="button" onClick={senUserToSignUp} disabled={loading} className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white  py-2 px-4 rounded h-[60px] w-[186px]">
          SignUp
        </button>
        </div>
        <div className="flex justify-around my-1">
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
      <div>
      <img src={therapy} alt="therapy" className="md:h-3/6 mt-14 h-[25%] mb-14 hidden md:hidden lg:flex lg:flex-row"/>
      </div>
    </div>
  );
}

export default Login;