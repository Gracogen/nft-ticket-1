import React from "react";
import profile from "../assets/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faSignal, faWifi } from "@fortawesome/free-solid-svg-icons";
import not from "../assets/not.png";
import john from "../assets/profile-pic.png"

export default function TopHeader() {
  return (
    <>
    <div>
        <div className="w-91.7 h-4 flex justify-between bg-black text-white" >
            <div className="nav-time text-[12px]">11.45</div>
            <div className="nav-icon">
                <FontAwesomeIcon icon={faSignal} className="w-3" />
                <FontAwesomeIcon icon={faWifi} className="w-4" />
                <FontAwesomeIcon icon={faBars} className="w-5"/>
            </div>
        </div>
    <div className="flex items-center mt-6 justify-between">
      <div className="flex items-center gap-3">
        <img
          src={john}
          alt="profile"
          className="w-11 h-11 rounded-full border-2 border-white object-cover"
        />
        <div>
          <p className="text-sm text-white/90">Hello,</p>
          <p className="text-white font-semibold">John Doe</p>
        </div>
      </div>

      <button className="w-10.25 h-10.25 rounded-full bg-white/20 flex items-center justify-center relative">
      <div className="bg-[#CC4424] w-2 h-2 absolute right-0 top-1 rounded"></div>
            <img src={not} alt="" />
      </button>
    </div>
    </div>
    </>
  );
}
