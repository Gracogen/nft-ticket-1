import React from "react";

export default function ConnectWallet({ onNext }) {
  return (
    <div className="relative h-screen w-full bg-[url('/images/wallet-bg.png')] bg-cover flex flex-col justify-end">
      <div className="bg-white rounded-t-3xl p-6 shadow-lg text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Connect Wallet
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Securely connect your wallet to manage and verify NFT tickets.
        </p>
        <button
          onClick={onNext}
          className="w-full bg-linear-to-r from-[#7148E5] to-[#4322A1] text-white py-3 rounded-full font-medium"
        >
          Connect
        </button>
      </div>
    </div>
  );
}
