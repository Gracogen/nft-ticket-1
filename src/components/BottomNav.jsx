import { faCalendarDays, faHouse, faTicket, faStore, faGear } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-white rounded-2xl shadow-md p-3 flex justify-between items-center md:hidden">
      <button className="flex flex-col gap-0.5 items-center text-xs text-[#7148E5]">
        <FontAwesomeIcon icon={faHouse}  className="text-lg" />
        <span className="text-sm">Home</span>
      </button>

      <button className="flex flex-col gap-0.5 items-center text-xs text-gray-400">
        <FontAwesomeIcon icon={faCalendarDays}  className=" text-lg" />
        <span className="text-sm">Events</span>
      </button>

      <button className="flex flex-col gap-0.5 items-center text-xs text-gray-400">
          <FontAwesomeIcon icon={faTicket}  className="text-lg font-light" />
        <span className="text-sm">Ticket</span>
      </button>

      <button className="flex flex-col gap-0.5 items-center text-xs text-gray-400">
        <FontAwesomeIcon icon={faStore}  className="text-lg" />
        <span className="text-sm">Marketplace</span>
      </button>

      <Link to="/profile-setup" className="flex flex-col gap-0.5 items-center text-xs text-gray-400">
         <FontAwesomeIcon icon={faGear}  className="text-lg" />
        <span className="text-sm">Settings</span>
      </Link>
    </nav>
  );
}
