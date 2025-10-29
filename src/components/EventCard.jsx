import event1 from "../assets/reactpic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLocationDot } from "@fortawesome/free-solid-svg-icons";



function OtherItem({ img, title, date, price, location }) {


  return (
    <div className="flex gap-3 items-center bg-white rounded-xl pb-2 pt-1.2 px-1 border border-[#F0F0F3] w-full">
      <img src={img} alt={title} className="w-33.5 h-16 object-cover rounded-md" />
      <div className="flex-1 w-54.5 ">
       <div className="py-3 flex flex-col gap-1 px-1.5">
              <div className="list-header flex justify-between">
              <p className="font-semibold text-[#646464]">{title}</p>
              <p className="font-semibold text-sm text-[#7148E5]">{price}</p>
             </div>
             <div className="location-calender flex justify-between">
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <FontAwesomeIcon icon={faCalendarDays} className="mr-1 text-[#7148E5] " />
                <span>{date}</span>
              </div>
              <div className="flex justify-between items-center mt-1 text-sm text-gray-500">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-1 text-[#7148E5]" />
                  <span>{location}</span>
                </div>
                {/* <p className="font-semibold text-[#7148E5]">{event.price}</p> */}
              </div>
              </div>
              </div>
             
              <button className="mt-3 w-full h-7 bg-[#7148E5] text-white py-2 rounded-full flex items-center justify-center text-sm font-medium">
                Purchase Ticket
              </button>
      </div>
    </div>
  );
}

export default function EventCard() {
  const list = [
    { id: 1, img: event1, title: "NFT Fest", date: "Nov. 19, 2025", price: "$50", location: "Ibadan" },
    { id: 2, img: event1, title: "NFT Fest", date: "Nov. 19, 2025", price: "$50", location: "Ibadan" },
    { id: 3, img: event1, title: "NFT Fest", date: "Nov. 19, 2025", price: "$50", location: "Ibadan" },
  ];

  return (
    <div className="mt-5 mb-20">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">Other Events</h3>
        <span className="text-xs text-gray-400">See all &gt;</span>
      </div>
<div className=" flex justify-center " >
      <div className="space-y-3 ">
        {list.map((it) => (
          <OtherItem key={it.id} {...it} />
        ))}
      </div>
      </div>
    </div>
  );
}
