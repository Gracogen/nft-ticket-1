// src/pages/OrganizerEvents.jsx
import React, { useState, useMemo } from "react";
import OrganizerSidebar from "../OrganizerSidebar";
import EventsTopBar from "../EventsTopBar";
import EventsTabs from "../EventsTabs";
import EventTile from "../EventTile";

/* Example mock data (replace with API calls later) */
const MOCK_EVENTS = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: "NFT Fest",
  image: `/assets/event${(i % 2) + 1}.jpg`, // put event1.jpg and event2.jpg in src/assets (or public/assets)
  date: "Nov 19, 2025 11:00AM",
  location: "Ibadan",
  price: "$50",
  category: i % 2 === 0 ? "music" : "conference",
  // dynamic progress (random for demo)
  progress: Math.floor(Math.random() * 80) + 10
}));

export default function OrganizerEvents() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [activeTab, setActiveTab] = useState("Active");

  // Filter logic: in a real app backend should return filtered items
  const filtered = useMemo(() => {
    return MOCK_EVENTS.filter((e) => {
      if (search && !e.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (category && e.category !== category) return false;
      if (date) {
        // simple string includes check; change to real date comparison if needed
        if (!e.date.toLowerCase().includes(date.toLowerCase())) return false;
      }
      // tab filtering example (Active => progress < 100)
      if (activeTab === "Active" && e.progress >= 100) return false;
      if (activeTab === "Completed" && e.progress < 100) return false;
      if (activeTab === "Upcoming") {
        // placeholder: treat all as upcoming if date in future (not implemented)
      }
      return true;
    });
  }, [search, category, date, activeTab]);

  const handleCreate = () => {
    // Placeholder: open create event modal or navigate to create page
    alert("Open Create Event modal (implement later)");
  };

  return (
    <div className="flex">
      <OrganizerSidebar />

      <main className="flex-1 p-8 bg-gray-50 min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          <EventsTopBar
            onCreate={handleCreate}
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            date={date}
            setDate={setDate}
          />

          <EventsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ev) => (
              <EventTile key={ev.id} event={ev} />
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full text-center py-16 text-gray-500">
                No events found.
              </div>
            )}
          </div>

          {/* pagination (simple placeholder) */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-600">
            <button className="px-3 py-1 rounded-md border border-gray-200">{"<"}</button>
            <button className="px-3 py-1 rounded-md bg-[#7148E5] text-white">1</button>
            <button className="px-3 py-1 rounded-md border border-gray-200">2</button>
            <button className="px-3 py-1 rounded-md border border-gray-200">3</button>
            <button className="px-3 py-1 rounded-md border border-gray-200">{">"}</button>
          </div>
        </div>
      </main>
    </div>
  );
}
