import React from "react";

export default function OtpVerification({ onNext }) {
  return (
    <div className="relative h-screen w-full bg-white flex flex-col justify-end">
      <div className="rounded-t-3xl p-6 text-center shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          OTP Verification
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Enter the 6-digit code sent to your email.
        </p>
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              maxLength="1"
              className="w-10 h-12 border border-gray-300 text-center rounded-lg focus:outline-none focus:border-[#7148E5]"
            />
          ))}
        </div>
        <button
          onClick={onNext}
          className="w-full bg-linear-to-r from-[#7148E5] to-[#4322A1] text-white py-3 rounded-full font-medium"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
