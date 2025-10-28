import { faBatteryFull, faCalendarDays, faDollar, faLocationDot, faSignal, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import reactpic from "../assets/reactpic.svg";
import coin from "../assets/coin.png"
import prosmall from "../assets/small-profilepic.png";
import BottomNav from "../components/BottomNav";


const MarketPlace = () => {
  const [active, setActive] = useState("All");
  const tabs = ["All", "Sport", "Concert", "Theatre", "Conference"];


  const events = [
  { id: 1, image: reactpic, title: "NFT Fest", date: "Nov. 19, 2025", price: "$50", location: "Ibadan" },
  { id: 2, image: reactpic, title: "NFT Fest", date: "Nov. 19, 2025", price: "$50", location: "Ibadan" },
  { id: 3, image: reactpic, title: "NFT Fest", date: "Nov. 19, 2025", price: "$50", location: "Ibadan" },
];



  return (
    <div className="min-h-screen bg-linear-to-r from-[#7148E5] to-[#4322A1] flex flex-col">

      {/* Gradient Header */}
      <div className=" h-33 pt-7 text-white flex-col flex px-6 ">
        <div className="w-91.7 h-4 flex justify-between text-white">
          <div className="nav-time text-sm text-white">11.45</div>
          <div className="nav-icon flex gap-1">
            <FontAwesomeIcon icon={faSignal} className="size-xs" />
            <FontAwesomeIcon icon={faWifi} className="size-xs" />
            <FontAwesomeIcon icon={faBatteryFull} className="size-xs" />
          </div>
        </div>
        <div className="flex items-center my-9 justify-center gap-32">
          <h2 className="text-lg font-semibold">Marketplace</h2>
        </div>
      </div>

      {/* */}
      <div className="-mt-6 bg-white rounded-t-3xl shadow-md px-4 pt-6 flex-1">
        <div className="flex gap-3 overflow-x-auto text-[#8B8B8B] scrollbar-hide pb-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 py-2 rounded-full text-sm ${active === t
                  ? "bg-[#7148E5] text-white"
                  : "bg-[#FAFAFA] text-gray-700"
                }`}
            >
              {t}
            </button>
          ))}

        </div>



      <div className="flex justify-center">
        <div className=" px-2 py-2 bg-white w-90 rounded-t-3xl shadow-sm ">
          <img src={reactpic} alt="title" className="rounded-t-2xl w-57 m-1 h-36.25 object-cover" />
          <div className="p-3 py-3.16 flex flex-col gap-1 px-5">
            <div className="list-header flex justify-between">
              <p className="font-semibold text-[12px] text-[#646464]">Birdie</p>
              <div className="flex gap-1">
                {/* <FontAwesomeIcon icon */}
                <img src={coin} alt="coin image" className="" />
              <p className="font-semibold text-[10px] text-[#7148E5]">SHOBAR</p>
              </div>
            </div>
            <div className="location-calender flex justify-between">
              <div className="flex items-center gap-0.5 text-sm text-gray-500 mt-1">
                <img src={prosmall} alt="user" />
                <span>John Doe</span>
              </div>
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faDollar} className=" text-[10px] text-[#7148E5]" />
                  <span>location</span>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-3 w-full bg-[#7148E5] text-white py-2 rounded-full text-sm font-medium">
         Buy
          </button>


        </div>

      </div>

       <div className="grid grid-cols-2 w-full mt-2.5 overflow-x-auto space-x-4 pb-25 scrollbar-hide">
        {events.map((event) => (
          <div key={event.id} className=" px-3 pt-5 pb-2 bg-white rounded-2xl shadow-md shrink-0">
            <img src={event.image} alt={event.title} className="rounded-t-2xl w-57 h-36.25 object-cover" />
            <div className=" py-3.16 flex flex-col gap-1 ">
              <div className="list-header  mt-2 flex justify-between">
              <p className="font-semibold text-[#646464]">{event.title}</p>
              <p className="font-semibold text-sm text-[#7148E5]">{event.price}</p>
             </div>
              <div className="location-calender flex justify-between">
              <div className="flex items-center gap-0.5 text-sm text-gray-500 mt-1">
                <img src={prosmall} alt="user" />
                <span>John Doe</span>
              </div>
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faDollar} className=" text-[10px] text-[#7148E5]" />
                  <span className="font-light">8.25</span>
                </div>
              </div>
            </div>
              </div>
             
              <button className="mt-3 w-full bg-[#7148E5] text-white py-2 rounded-full text-sm font-medium">
                Buy
              </button>
            
            
          </div>
        ))}
      </div>

      </div>










      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
};

export default MarketPlace;
