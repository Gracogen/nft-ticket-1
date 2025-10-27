import React from "react";
import TopHeader from "../components/TopHeader";
import SearchBar from "../components/SearchBar";
import FilterTabs from "../components/FilterTabs";
import FeaturedEvents from "../components/FeaturedEvents";
import BottomNav from "../components/BottomNav";
import EventCard from "../components/EventCard";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f7fb]">
      {/* Header */}
      <div className="px-4 pt-6 pb-8 bg-linear-to-b from-[#7148E5] to-[#4322A1]">
        <TopHeader />
        <SearchBar />
      </div>

      {/* Main content */}
      <div className="-mt-6 bg-white rounded-t-3xl shadow-md px-4 pt-6 flex-1">
        <FilterTabs />
        <FeaturedEvents />
        <EventCard />
      </div>

      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
}
