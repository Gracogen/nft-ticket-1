

import { Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import SearchBar from "./components/SearchBar";
import FilterTabs from "./components/FilterTabs";
import FeaturedEvents from "./components/FeaturedEvents";
import BottomNav from "./components/BottomNav";
import EventCard from "./components/EventCard";
import Homepage from "./pages/HomePage";
import ProfileSetup from "./components/ProfileSetup";
import MarketPlace from "./pages/MarketPlace";
import Events from "./pages/Events";
// import ProfileSetup from "./pages/ProfileSetup"; // example additional page

export default function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <Homepage />
        }
      />

      {/* Profile Setup Page */}
      <Route path="/profile-setup" element={<ProfileSetup />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
}
