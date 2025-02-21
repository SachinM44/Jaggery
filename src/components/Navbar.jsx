import React, { useState } from "react";
import { X } from "lucide-react";
import hamburIcon from "../assets/hambur.png";
import wonderlaLogo from "../assets/wonderla.png";  

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white py-1 px-6 flex justify-between items-center shadow-md fixed top-9 left-14 right-14 z-50 rounded-2xl">
      <div className="flex items-center">
        <img src={wonderlaLogo} alt="Wonderla Logo" className="h-14" />
      </div>

      <nav className="hidden md:flex items-center gap-8 text-[#08163c] font-bold">
        <a href="#" className="hover:text-yellow-500">Locations</a>
        <a href="#" className="hover:text-yellow-500">Offers</a>
        <a href="#" className="hover:text-yellow-500">Rides</a>
        <a href="#" className="hover:text-yellow-500">Restaurants</a>
        <a href="#" className="hover:text-yellow-500">Events</a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="bg-yellow-300 hover:bg-yellow-500 text-[#08163c] font-bold px-5 py-2 rounded-xl shadow-md">
          BOOK TICKETS
        </button>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={28} className="text-slate-800" />
          ) : (
            <img src={hamburIcon} alt="Menu" className="h-8 w-8" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col text-center py-4 md:hidden rounded-b-lg">
          {["Locations", "Offers", "Rides", "Restaurants", "Events"].map((item, index) => (
            <a key={index} href="#" className="py-3 text-[#08163c] hover:bg-yellow-400">
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
