
import { useState } from "react"
import { X } from "lucide-react"
import hamburIcon from "../assets/hambur.png"
import wonderlaLogo from "../assets/wonderla.png"
import Sidebar from "./Sidebar"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white py-1 px-6 flex justify-between items-center shadow-md fixed top-9 left-14 right-14 z-50 rounded-2xl">
        <div className="flex items-center">
          <img src={wonderlaLogo || "/placeholder.svg"} alt="Wonderla Logo" className="h-14" />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[#08163c] font-bold">
          <a href="#" className="hover:text-yellow-500">
            Parks
          </a>
          <a href="#" className="hover:text-yellow-500">
            Resorts
          </a>
          <a href="#" className="hover:text-yellow-500">
            Offers & Combos
          </a>
          <a href="#" className="hover:text-yellow-500">
            Timings & Guidelines
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-yellow-300 hover:bg-yellow-500 text-[#08163c] font-bold px-5 py-2 rounded-xl shadow-md">
            BOOK TICKETS
          </button>

          <button className="block" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={28} className="text-slate-800" />
            ) : (
              <img src={hamburIcon || "/placeholder.svg"} alt="Menu" className="h-8 w-8" />
            )}
          </button>
        </div>
      </header>

      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar

