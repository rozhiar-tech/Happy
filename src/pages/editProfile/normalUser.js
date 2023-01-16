import React from "react";


export default function NormalUser() {
    return (
        <div className="h-screen w-screen bg-slate-300  ">
            <div className="flex flex-col items-center">
                <h2 className="text-xl  text-red-600 mt-6">Please fill all the fields with correct and valid details to complete your profile.</h2>
                <div className="flex gap-36">
                    <div className="bg-black rounded-full">
                        <img className="h-40 w-40 rounded-full" src="https://profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" alt="profile" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <form className="flex flex-col gap-4">
                            <label className="text-white">Name</label>
                            <input className="border-2 border-white rounded-md" type="text" />
                            <label className="text-white">Email</label>
                            <input className="border-2 border-white rounded-md" type="email" />
                            <label className="text-white">Phone Number</label>
                            <input className="border-2 border-white rounded-md" type="tel" />
                            <label className="text-white">Address</label>
                            <input className="border-2 border-white rounded-md" type="text" />
                            <label className="text-white">City</label>
                            <input className="border-2 border-white rounded-md" type="text" />
                            <label className="text-white">State</label>
                            <input className="border-2 border-white rounded-md" type="text" />
                            <label className="text-white">Country</label>
                            <input className="border-2 border-white rounded-md" type="text" />
                            <label className="text-white" onChange={}>Zip Code</label>
                            <input className="border-2 border-white rounded-md" type="text" />
                            <label className="text-white">Date of Birth</label>
                            <input className="border-2 border-white rounded-md" type="date" />
                            
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
    }

