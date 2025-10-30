

import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ProfileSetup from "./components/ProfileSetup";
import MarketPlace from "./pages/MarketPlace";
import Events from "./pages/Events";
import OnboardingFlow from "./components/onboarding";
import OrganizerEvents from "./components/organizer/pages/OrganizerEvents";
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
      <Route path="/onboard" element={<OnboardingFlow />} />
      <Route path="/organizer/events" element={<OrganizerEvents />} />
    </Routes>
  );
}
