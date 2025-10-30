// src/components/OrganizerSidebar.jsx
import { NavLink } from "react-router-dom";

const navItems = [
  { key: "dashboard", label: "Dashboard", to: "/organizer/dashboard" },
  { key: "events", label: "Events", to: "/organizer/events" },
  { key: "tickets", label: "Tickets", to: "/organizer/tickets" },
  { key: "settings", label: "Settings", to: "/organizer/settings" }
];

export default function OrganizerSidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-100 min-h-screen hidden md:block">
      <div className="px-6 py-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[#7148E5] rounded-full flex items-center justify-center text-white font-bold">H</div>
          <div>
            <div className="text-sm font-semibold">Hedera</div>
            <div className="text-xs text-gray-500">Organizer</div>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "text-[#7148E5] bg-[#F8F5FF]" : "text-gray-600 hover:bg-gray-50"
                }`
              }
            >
              {/* Simple square icon placeholder */}
              <span className={`w-8 h-8 rounded-md flex items-center justify-center mr-3 ${/* color for icon bg */ ""}`}>
                <svg width="16" height="16" fill="currentColor" className={isActive => (isActive ? "text-[#7148E5]" : "text-gray-400")}>
                  <rect width="16" height="16" rx="2" />
                </svg>
              </span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
