import { faCalendarDays, faHouse, faTicket, faStore, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";



export default function BottomNav() {
  return (

    <nav className="fixed bottom-4 left-4 right-4 bg-white rounded-2xl shadow-md p-3 flex justify-between items-center md:hidden">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `flex flex-col gap-0.5 items-center text-xs ${
            isActive ? "text-[#7148E5]" : "text-gray-400"
          }`
        }
      >
        <FontAwesomeIcon icon={faHouse} className="text-lg" />
        <span className="text-sm">Home</span>
      </NavLink>

      <NavLink
        to="/events"
        className={({ isActive }) =>
          `flex flex-col gap-0.5 items-center text-xs ${
            isActive ? "text-[#7148E5]" : "text-gray-400"
          }`
        }
      >
        <FontAwesomeIcon icon={faCalendarDays} className="text-lg" />
        <span className="text-sm">Events</span>
      </NavLink>

      <NavLink
        to="/tickets"
        className={({ isActive }) =>
          `flex flex-col gap-0.5 items-center text-xs ${
            isActive ? "text-[#7148E5]" : "text-gray-400"
          }`
        }
      >
        <FontAwesomeIcon icon={faTicket} className="text-lg font-light" />
        <span className="text-sm">Ticket</span>
      </NavLink>

      <NavLink
        to="/marketplace"
        className={({ isActive }) =>
          `flex flex-col gap-0.5 items-center text-xs ${
            isActive ? "text-[#7148E5]" : "text-gray-400"
          }`
        }
      >
        <FontAwesomeIcon icon={faStore} className="text-lg" />
        <span className="text-sm">Marketplace</span>
      </NavLink>

      <NavLink
        to="/profile-setup"
        className={({ isActive }) =>
          `flex flex-col gap-0.5 items-center text-xs ${
            isActive ? "text-[#7148E5]" : "text-gray-400"
          }`
        }
      >
        <FontAwesomeIcon icon={faGear} className="text-lg" />
        <span className="text-sm">Settings</span>
      </NavLink>
    </nav>
  );
}

