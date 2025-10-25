import React from "react";
import EventCard from "./EventCard";
import event1 from "../assets/react.svg";
import event2 from "../assets/react.svg";

const events = [
  { id: 1, title: "NFT Fest", date: "Nov 19, 2025", price: "$50", location: "Ibadan", img: event1 },
  { id: 2, title: "NFT Fest", date: "Nov 19, 2025", price: "$50", location: "Ibadan", img: event2 },
];

export default function FeaturedEvents() {
  return (
    <div className="space-y-4 mt-3 pb-20">
      <div className="grid grid-cols-1 gap-3">
        {events.map((e) => (
          <EventCard key={e.id} {...e} />
        ))}
      </div>

      <h3 className="text-sm text-gray-700 font-semibold">Other Events</h3>

      <div className="space-y-3">
        {events.map((e) => (
          <EventCard key={`other-${e.id}`} {...e} compact />
        ))}
      </div>
    </div>
  );
}
