import { useEffect, useState } from 'react';
import { setDoc, getFirestore, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import app from '../../firebase/firebaseinit';

const auth = getAuth(app);
const db = getFirestore(app);

function UserProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [Hobbies, setHobbies] = useState([]);
  const [EducationalLevel, setEducationalLevel] = useState('');
  const [familySize, setFamilySize] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userr) => {
      if (userr) {
        setUser(userr.uid);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      Hobbies,
      EducationalLevel,
      familySize,
      gender,
      birthDate,
      email,
      password,
      phone,
    };

    await setDoc(doc(db, 'Users', user), {
      data,
    })
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Profile Updated');
      })
      .catch((errorr) => {
        setError(errorr.message);
      });
  }

  return (
    <div className="h-[1500px] w-screen bg-slate-300">
      <div className="flex flex-col items-center">
        <h2 className="text-xl  text-red-600 mt-6">
          Please fill all the fields with correct and valid details to complete
          your profile.
        </h2>
        {error && <h2 className="text-xl  text-red-600 mt-6">{error}</h2>}
        <div className="flex gap-36 mt-5">
          <div className="bg-black rounded-full h-40">
            <img
              className="h-40 w-40 rounded-full"
              src="https://profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png"
              alt="profile"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-black font-bold">
              Personal Information
            </h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex gap-28 items-center">
                <p className="text-xl text-black ">First Name</p>
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-12 w-96 rounded p-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="flex gap-28 items-center">
                <p className="text-xl text-black ">Last Name</p>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-12 w-96 rounded p-2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex gap-12 items-center">
                <p className="text-xl text-black ">Educational level</p>
                <select
                  className="h-12 w-96 rounded p-2"
                  value={EducationalLevel}
                  onChange={(e) => setEducationalLevel(e.target.value)}
                >
                  <option value="1">High School</option>
                  <option value="2">Undergraduate</option>
                  <option value="3">Graduate</option>
                  <option value="4">Post Graduate</option>
                </select>
              </div>

              <div className="flex gap-[134px] items-center">
                <p className="text-xl text-black ">Hobbies</p>
                <input
                  type="text"
                  placeholder="Hobbies"
                  className="h-12 w-96 rounded p-2"
                  value={Hobbies}
                  onChange={(e) => setHobbies(e.target.value)}
                />
              </div>
              <div className="flex gap-[134px] items-center">
                <p className="text-xl text-black ">Family Size</p>
                <input
                  type="text"
                  className="h-12 w-10 rounded p-2"
                  value={familySize}
                  onChange={(e) => setFamilySize(e.target.value)}
                />
                <p className="text-xl text-black ">Members</p>
              </div>
              <div className="flex gap-[136px] items-center">
                <p className="text-xl text-black ">Gender</p>
                <select
                  className="h-12 w-96 rounded p-2"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
              <div className="flex gap-[114px] items-center">
                <p className="text-xl text-black ">Birth Date</p>
                <input
                  type="date"
                  className="h-12 w-96 rounded p-2"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <div className="flex gap-[155px] items-center">
                <p className="text-xl text-black ">Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="h-12 w-96 rounded p-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex gap-[145px] items-center">
                <p className="text-xl text-black ">Phone</p>
                <input
                  type="text"
                  placeholder="Phone"
                  className="h-12 w-96 rounded p-2"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <h1 className="text-3xl text-black font-bold mb-2">Security</h1>
              <div className="flex gap-[115px] items-center">
                <p className="text-xl text-black ">Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  className="h-12 w-96 rounded p-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex gap-[30px] items-center">
                <p className="text-xl text-black ">Confirm Password</p>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="h-12 w-96 rounded p-2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="flex gap-[30px] items-center">
                <button
                  type="submit"
                  className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white  py-2 px-4 rounded mr-3 h-[60px] w-[186px] mt-7"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white  py-2 px-4 rounded mr-3 h-[60px] w-[186px] mt-7"
                >
                  Delete Account
                </button>
                <button
                  type="button"
                  className="bg-lavender-indigo hover:bg-wild-strawberry/70 focus:bg-wild-strawberry/70 hover:scale-95 focus:scale-95 text-white  py-2 px-4 rounded mr-3 h-[60px] w-[186px] mt-7"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
