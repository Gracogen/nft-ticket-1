// src/components/EventsTabs.jsx
import React from "react";

export default function EventsTabs({ activeTab, setActiveTab }) {
  const tabs = ["Upcoming", "Active", "Completed"];
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center gap-3">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === t ? "text-[#7148E5] border-b-2 border-[#7148E5]" : "text-gray-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="text-sm text-gray-500">Showing: {activeTab}</div>
    </div>
  );
}
