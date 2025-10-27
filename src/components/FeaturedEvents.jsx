

import reactpic from "../assets/reactpic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const events = [
  { id: 1, image: reactpic, title: "NFT Fest", date: "Nov. 19, 2025", price: "$50", location: "Ibadan" },
  { id: 2, image: reactpic, title: "NFT Fest", date: "Nov. 19, 2025", price: "$50", location: "Ibadan" },
  { id: 3, image: reactpic, title: "NFT Fest", date: "Nov. 19, 2025", price: "$50", location: "Ibadan" },
];

const FeaturedEvents = () => {
  return (
    <div className="mt-4">
      <div className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide">
        {events.map((event) => (
          <div key={event.id} className="w-59.5 px-1.2 pt-5 pb-8 bg-white rounded-2xl shadow-md shrink-0">
            <img src={event.image} alt={event.title} className="rounded-t-2xl w-57 h-36.25 object-cover" />
            <div className="p-3 py-3.16 flex flex-col gap-1 px-5">
              <div className="list-header flex justify-between">
              <p className="font-semibold text-[#646464]">{event.title}</p>
              <p className="font-semibold text-sm text-[#7148E5]">{event.price}</p>
             </div>
             <div className="location-calender flex justify-between">
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <FontAwesomeIcon icon={faCalendarDays} className="mr-1 text-[#7148E5] " />
                <span>{event.date}</span>
              </div>
              <div className="flex justify-between items-center mt-1 text-sm text-gray-500">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-1 text-[#7148E5]" />
                  <span>{event.location}</span>
                </div>
                {/* <p className="font-semibold text-[#7148E5]">{event.price}</p> */}
              </div>
              </div>
              </div>
             
              <button className="mt-3 w-full bg-[#7148E5] text-white py-2 rounded-full text-sm font-medium">
                Purchase Ticket
              </button>
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
