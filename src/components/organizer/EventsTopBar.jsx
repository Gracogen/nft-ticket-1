// src/components/EventsTopBar.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCalendar, faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function EventsTopBar({ onCreate, search, setSearch, category, setCategory, date, setDate }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Events</h1>
        <button
          onClick={onCreate}
          className="inline-flex items-center gap-2 bg-linear-to-r from-[#7148E5] to-[#4322A1] text-white px-4 py-2 rounded-lg shadow"
        >
          <FontAwesomeIcon icon={faPlus} />
          Create Event
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm flex-1">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search events"
            className="flex-1 text-sm outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
            <FontAwesomeIcon icon={faFilter} className="text-gray-400" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm outline-none bg-transparent"
            >
              <option value="">Category: All</option>
              <option value="music">Music</option>
              <option value="conference">Conference</option>
              <option value="theatre">Theatre</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
            <FontAwesomeIcon icon={faCalendar} className="text-gray-400" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-sm outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
