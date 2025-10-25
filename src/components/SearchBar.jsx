import React from "react";

export default function SearchBar() {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-sm">
        <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
        <input
          className="flex-1 outline-none text-sm placeholder:text-gray-400 bg-transparent"
          placeholder="Search event"
        />
      </div>
    </div>
  );
}
