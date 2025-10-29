import React from "react";

export default function NftIntro({ onNext }) {
  return (
    <div className="relative h-screen w-full bg-linear-to-r from-[#7148E5] to-[#4322A1] flex flex-col justify-end">
      <div className="bg-white rounded-t-3xl p-6 text-center shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          NFT Ticketing System
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Eliminate ticket fraud, scalping, and high fees using Hedera blockchain
          technology.
        </p>
        <button
          onClick={onNext}
          className="w-full bg-linear-to-r from-[#7148E5] to-[#4322A1] text-white py-3 rounded-full font-medium"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
