import React from "react";

export default function EventCard({ title, date, price, location, img, compact }) {
  return (
    <div
      className={`flex items-center gap-3 bg-white rounded-xl shadow-sm p-3 ${
        compact ? "h-24" : ""
      }`}
    >
      <img
        src={img}
        alt={title}
        className={`rounded-lg object-cover ${compact ? "w-20 h-16" : "w-28 h-20"}`}
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-xs text-gray-500 mt-1">
              <i className="fa-regular fa-calendar text-purple-500 mr-1"></i>
              {date}
            </p>
          </div>
          <div className="text-sm text-purple-600 font-semibold">{price}</div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="text-xs text-gray-400">
            <i className="fa-solid fa-location-dot text-purple-500 mr-1"></i>
            {location}
          </div>
          <button className="px-3 py-1 rounded-full text-xs bg-[#7148E5] text-white">
            Purchase Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
