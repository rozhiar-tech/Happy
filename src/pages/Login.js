import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import app from "../firebase/firebaseinit";

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

  return (
    <div className="h-screen bg-vodka flex flex-col">
      <h2 className="text-white">Login</h2>

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
        <button type="submit" disabled={loading} className="">
          Login
        </button>
      </form>
      </div>  
    
    </div>
  );
}

export default Login;