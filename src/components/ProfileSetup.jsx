import { faBatteryFull, faSignal, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ProfileSetup = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");

  const isFormComplete = fullName.trim() !== "" && username.trim() !== "";

  return (
    <div className="min-h-screen bg-linear-to-r from-[#7148E5] to-[#4322A1] flex flex-col">
      
      {/* Gradient Header */}
      <div className=" h-33 pt-7 text-white flex-col flex  px-6 ">
         <div className="w-91.7 h-4 flex justify-between text-white" >
            <div className="nav-time text-sm text-white">11.45</div>
            <div className="nav-icon flex gap-1">
                <FontAwesomeIcon icon={faSignal} className="size-xs" />
                <FontAwesomeIcon icon={faWifi} className="size-xs" />
                <FontAwesomeIcon icon={faBatteryFull} className="size-xs"/>
            </div>
        </div>
        <div className="flex items-center mt-9 justify-end gap-32">
        <h2 className="text-lg font-semibold">Profile Setup</h2>
        <p className="text-sm opacity-80">Skip</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 rounded-t-3xl px-6 py-9 bg-white mt-8">
        <div className="flex flex-col space-y-5">
          <div>
            <label className="text-gray-700 text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7148E5]"
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7148E5]"
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          disabled={!isFormComplete}
          className={`w-full mt-8 py-3 rounded-full font-semibold text-white ${
            isFormComplete ? "bg-[#7148E5]" : "bg-gray-300"
          }`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileSetup;
