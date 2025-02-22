
import { useState } from "react";
import { ChevronDown, Clock, Contact2, Hotel, Info, Link2, MapPin, Percent, Users, Users2, X } from "lucide-react";
import wonderlaLogo from "../assets/wonderla.png";

function Sidebar({ isOpen, onClose }) {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (item) => {
    setExpandedItems((current) => (current.includes(item) ? current.filter((i) => i !== item) : [...current, item]));
  };

  const menuItems = [
    {
      id: "parks",
      icon: MapPin,
      title: "Parks",
      description: "Explore your favourite Wonderla Park",
      hasDropdown: true,
    },
    {
      id: "resorts",
      icon: Hotel,
      title: "Resorts",
      description: "Get A Rejuvenating Experience At Wonderla Resort",
    },
    {
      id: "offers",
      icon: Percent,
      title: "Offers & Combos",
      description: "Plan The Perfect Day With Exciting Offers",
    },
    {
      id: "timings",
      icon: Clock,
      title: "Timings And Guidelines",
      description: "Know The Timings And Other Guidelines",
    },
    {
      id: "group-booking",
      icon: Users,
      title: "Group Booking",
      description: "Reach Out To Wonderla Team",
      variant: "yellow",
    },
    {
      id: "tour-operator",
      icon: Users2,
      title: "Tour Operator Portal",
      description: "Reach Out To Wonderla Team",
      variant: "blue",
    },
    {
      id: "partner",
      icon: Users,
      title: "Partner With Us",
      description: "Reach Out To Wonderla Team",
      variant: "yellow",
    },
    {
      id: "about",
      icon: Info,
      title: "About Us",
      description: "Know All About Wonderla",
    },
    {
      id: "quick-links",
      icon: Link2,
      title: "Quick Links",
      description: "Explore all other relevant information here",
      hasDropdown: true,
    },
    {
      id: "contact",
      icon: Contact2,
      title: "Contact Us",
      description: "Get In Touch Wonderla Team",
    },
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-full w-1/4 bg-white shadow-2xl transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } duration-300 ease-in-out z-50`}
    >
      <div className="p-6 flex justify-between items-center border-b">
        <img src={wonderlaLogo} alt="Wonderla Logo" className="h-14" />
        <button onClick={onClose}>
          <X size={32} className="text-slate-800" />
        </button>
      </div>

      <div className="overflow-y-auto h-[calc(100vh-5rem)]">
        <div className="space-y-2 p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => item.hasDropdown && toggleItem(item.id)}
              className={`
                w-full rounded-lg text-left transition-colors
                ${item.variant === "yellow" ? "bg-yellow-300 hover:bg-yellow-400" : ""}
                ${item.variant === "blue" ? "bg-[#4169E1] text-white hover:bg-[#4169E1]/90" : ""}
                ${!item.variant ? "hover:bg-gray-100" : ""}
              `}
            >
              <div className="flex items-start gap-4 p-3">
                <item.icon
                  className={`
                  mt-1 h-5 w-5
                  ${item.variant === "blue" ? "text-white" : "text-[#08163c]"}
                `}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`
                      font-bold
                      ${item.variant === "blue" ? "text-white" : "text-[#08163c]"}
                    `}
                    >
                      {item.title}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`
                          h-4 w-4 text-[#08163c] transition-transform
                          ${expandedItems.includes(item.id) ? "rotate-180" : ""}
                          ${item.variant === "blue" ? "text-white" : ""}
                        `}
                      />
                    )}
                  </div>
                  <p
                    className={`
                    text-sm
                    ${item.variant === "blue" ? "text-white/90" : "text-gray-500"}
                  `}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

