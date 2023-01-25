import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, getFirestore, doc } from 'firebase/firestore';
import app from '../../firebase/firebaseinit';

const auth = getAuth(app);
const db = getFirestore(app);

function TherapistAccountCreate({ isCreated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (email !== confirmEmail) {
      setError('Emails do not match');
      return;
    }

    setError('');
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in

        const { user } = userCredential;

        await setDoc(doc(db, 'Users', user.uid), {
          firstName,
          lastName,
          email,
          uid: user.uid,
          createdAt: new Date(),
          role: 'therapist',
        });

        isCreated(true);
        navigate('/accountCreated');

        // ...
      })
      .catch((errorr) => {
        const state = errorr.message.replace('Firebase: Error ', '');
        switch (state) {
          case '(auth/email-already-in-use).':
            setError('The email address is already in use by another account.');
            break;
          case '(auth/invalid-email).':
            setError('The email address is badly formatted.');
            break;
          case '(auth/operation-not-allowed).':
            setError('Password sign-in is disabled for this project.');
            break;
          case '(auth/weak-password).':
            setError('The password is not strong enough.');
            break;
          default:
            setError('An error occured. Please try again later.');
            break;
        }
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col  bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-end w-[500px] ">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            sign in to your account
          </a>
        </p>

        <form className="mt-8 mb-20 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-16 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
                placeholder="Email address"
              />
              <label htmlFor="email-address" className="sr-only">
                Confirm Email address
              </label>
              <input
                id="confirm-email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                className="h-16 mb-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Email address"
              />

              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-16 mb-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <label htmlFor="password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-16 mb-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
              <label htmlFor="password" className="sr-only">
                First Name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="h-16 mb-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
              />
              <label htmlFor="last-Name" className="sr-only">
                Last Name
              </label>
              <input
                id="last-Name"
                name="last-Name"
                type="texr"
                autoComplete="current-password"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="h-16 mb-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
              />

              {error && <p className="text-red-500 text-lg italic ">{error}</p>}
            </div>
            <button
              disabled={loading}
              type="submit"
              className="group relative w-[186px] flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 h-[60px]"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm4 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H8a1 1 0 01-1-1V3zm0 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H8a1 1 0 01-1-1V7zm0 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H8a1 1 0 01-1-1v-2zm4 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zm0-4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V7zm0-4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V3z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TherapistAccountCreate;
