import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Success() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-center">
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="text-green-500 text-6xl mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Congratulations!
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Your wallet and ticket are successfully verified.
      </p>
      <button className="bg-linear-to-r from-[#7148E5] to-[#4322A1] text-white px-6 py-3 rounded-full font-medium">
        Proceed
      </button>
    </div>
  );
}
