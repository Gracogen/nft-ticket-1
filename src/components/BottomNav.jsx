import React from "react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-white rounded-2xl shadow-md p-3 flex justify-between items-center md:hidden">
      <button className="flex flex-col items-center text-xs text-gray-500">
        <i className="fa-solid fa-house text-lg"></i>
        <span>Home</span>
      </button>

      <button className="flex flex-col items-center text-xs text-gray-500">
        <i className="fa-solid fa-ticket text-lg"></i>
        <span>Ticket</span>
      </button>

      <button className="flex flex-col items-center text-xs text-gray-500">
        <i className="fa-solid fa-store text-lg"></i>
        <span>Market</span>
      </button>

      <button className="flex flex-col items-center text-xs text-gray-500">
        <i className="fa-solid fa-gear text-lg"></i>
        <span>Settings</span>
      </button>
    </nav>
  );
}
