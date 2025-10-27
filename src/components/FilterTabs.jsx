import React, { useState } from "react";

export default function FilterTabs() {
  const [active, setActive] = useState("All");
  const tabs = ["All", "Sport", "Concert", "Theatre", "Conference"];

  return (
    <div>
      <div className="flex gap-3 overflow-x-auto text-[#8B8B8B] scrollbar-hide pb-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-full text-sm ${
              active === t
                ? "bg-[#7148E5] text-white"
                : "bg-[#FAFAFA] text-gray-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <h3 className="mt-5 text-sm text-gray-700 font-semibold">
        Featured Events
      </h3>
    </div>
  );
}
