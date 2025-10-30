// src/components/EventTile.jsx
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faCalendarDays, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function EventTile({ event }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const progress = Math.max(0, Math.min(100, event.progress ?? 0)); // ensure 0-100

  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden relative">
      {/* 3-dot menu */}
      <div className="absolute top-3 right-3" ref={menuRef}>
        <button onClick={() => setMenuOpen((s) => !s)} className="p-2 rounded-full hover:bg-gray-50">
          <FontAwesomeIcon icon={faEllipsisVertical} className="text-gray-600" />
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-md shadow-lg z-30">
            <ul className="text-sm">
              <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">View details</li>
              <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Edit</li>
              <li className="px-4 py-2 hover:bg-gray-50 text-red-600 cursor-pointer">Delete</li>
            </ul>
          </div>
        )}
      </div>

      {/* image */}
      <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-800">{event.title}</h3>
            <div className="mt-2 text-xs text-gray-500 flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendarDays} className="text-[#7148E5]" />
              <span>{event.date}</span>
            </div>
            <div className="mt-1 text-xs text-gray-500 flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#7148E5]" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="text-sm font-semibold text-[#7148E5]">{event.price}</div>
        </div>

        {/* progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-gray-500">Progress</div>
            <div className="text-xs font-semibold text-gray-700">{progress}%</div>
          </div>

          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div
              className="h-2 rounded-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #7148E5, #4322A1)"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
