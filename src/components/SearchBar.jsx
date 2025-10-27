import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SearchBar() {
  return (
    <div className="my-5">
      <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-sm">
        <FontAwesomeIcon icon={faMagnifyingGlass} className=" text-[#C4C4C4]"/>
        <input
          className="flex-1 outline-none text-sm placeholder:text-gray-400 bg-transparent"
          placeholder="Search event"
        />
      </div>
    </div>
  );
}
