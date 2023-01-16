
import { useState } from "react";

 function NormalUser() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(firstName, lastName, email, password, confirmEmail, confirmPassword, birthDate);
    }
    
    return (
        <div className="h-screen w-screen bg-slate-300  ">
            <div className="flex flex-col items-center">
                <h2 className="text-xl  text-red-600 mt-6">Please fill all the fields with correct and valid details to complete your profile.</h2>
                <div className="flex gap-36">
                    <div className="bg-black rounded-full">
                        <img className="h-40 w-40 rounded-full" src="https://profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" alt="profile" />
                    </div>
                    <div className="flex flex-col gap-4">
                       <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input type="text" placeholder="First Name" className="h-10 w-80 rounded-lg" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}

                            />
                            <input type="text" placeholder="Last Name" className="h-10 w-80 rounded-lg"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                            <input type="text" placeholder="Birth Date" className="h-10 w-80 rounded-lg"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            />
                            <input type="text" placeholder="Email" className="h-10 w-80 rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <input type="text" placeholder="Confirm Email" className="h-10 w-80 rounded-lg"
                            value={confirmEmail}
                            onChange={(e) => setConfirmEmail(e.target.value)}
                            />
                            <input type="text" placeholder="Password" className="h-10 w-80 rounded-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <input type="text" placeholder="Confirm Password" className="h-10 w-80 rounded-lg"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button type="submit" className="h-10 w-80 rounded-lg bg-red-600 text-white">Save</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
    }


export default NormalUser;