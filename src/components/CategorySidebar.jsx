// import React, { useState } from "react";
// import { X, ChevronDown, Clock, Contact2, Hotel, Info, Link2, MapPin, Percent, Users, Users2 } from "lucide-react";
// import hamburIcon from "../assets/hambur.png";
// import wonderlaLogo from "../assets/wonderla.png";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [expandedItems, setExpandedItems] = useState<string[]>([]);

//   const toggleItem = (item: string) => {
//     setExpandedItems((current) => (current.includes(item) ? current.filter((i) => i !== item) : [...current, item]));
//   };

//   const menuItems = [
//     { id: "parks", icon: MapPin, title: "Parks", description: "Explore your favourite Wonderla Park", hasDropdown: true },
//     { id: "resorts", icon: Hotel, title: "Resorts", description: "Get A Rejuvenating Experience At Wonderla Resort" },
//     { id: "offers", icon: Percent, title: "Offers & Combos", description: "Plan The Perfect Day With Exciting Offers" },
//     { id: "timings", icon: Clock, title: "Timings And Guidelines", description: "Know The Timings And Other Guidelines" },
//     { id: "group-booking", icon: Users, title: "Group Booking", description: "Reach Out To Wonderla Team", variant: "yellow" },
//     { id: "tour-operator", icon: Users2, title: "Tour Operator Portal", description: "Reach Out To Wonderla Team", variant: "blue" },
//     { id: "partner", icon: Users, title: "Partner With Us", description: "Reach Out To Wonderla Team", variant: "yellow" },
//     { id: "about", icon: Info, title: "About Us", description: "Know All About Wonderla" },
//     { id: "quick-links", icon: Link2, title: "Quick Links", description: "Explore all other relevant information here", hasDropdown: true },
//     { id: "contact", icon: Contact2, title: "Contact Us", description: "Get In Touch Wonderla Team" },
//   ];

//   return (
//     <header className="bg-white py-1 px-6 flex justify-between items-center shadow-md fixed top-9 left-14 right-14 z-50 rounded-2xl">
//       <div className="flex items-center">
//         <img src={wonderlaLogo} alt="Wonderla Logo" className="h-14" />
//       </div>

//       <nav className="hidden md:flex items-center gap-8 text-[#08163c] font-bold">
//         <a href="#" className="hover:text-yellow-500">Locations</a>
//         <a href="#" className="hover:text-yellow-500">Offers</a>
//         <a href="#" className="hover:text-yellow-500">Rides</a>
//         <a href="#" className="hover:text-yellow-500">Restaurants</a>
//         <a href="#" className="hover:text-yellow-500">Events</a>
//       </nav>

//       <div className="flex items-center gap-4">
//         <button className="bg-yellow-300 hover:bg-yellow-500 text-[#08163c] font-bold px-5 py-2 rounded-xl shadow-md">
//           BOOK TICKETS
//         </button>

//         <button className="block" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X size={28} className="text-slate-800" /> : <img src={hamburIcon} alt="Menu" className="h-8 w-8" />}
//         </button>
//       </div>

//       <div
//         className={cn(
//           "fixed inset-y-0 left-0 z-50 flex w-full flex-col bg-white transition-transform duration-300 ease-in-out sm:w-[400px]",
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         )}
//       >
//         <div className="flex h-16 items-center justify-between border-b px-6">
//           <Button variant="ghost" size="icon" className="absolute right-4" onClick={() => setMenuOpen(false)}>
//             <X className="h-4 w-4" />
//             <span className="sr-only">Close sidebar</span>
//           </Button>
//         </div>
//         <ScrollArea className="flex-1">
//           <div className="space-y-2 p-4">
//             {menuItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => item.hasDropdown && toggleItem(item.id)}
//                 className={cn(
//                   "w-full rounded-lg text-left transition-colors",
//                   item.variant === "yellow" && "bg-[#FFD700]/90 hover:bg-[#FFD700]",
//                   item.variant === "blue" && "bg-[#4169E1] text-white hover:bg-[#4169E1]/90",
//                   !item.variant && "hover:bg-gray-100"
//                 )}
//               >
//                 <div className="flex items-start gap-4 p-3">
//                   <item.icon className={cn("mt-1 h-5 w-5", item.variant === "blue" ? "text-white" : "text-gray-600")} />
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <span className={cn("font-medium", item.variant === "blue" ? "text-white" : "text-gray-900")}>
//                         {item.title}
//                       </span>
//                       {item.hasDropdown && (
//                         <ChevronDown
//                           className={cn(
//                             "h-4 w-4 text-gray-500 transition-transform",
//                             expandedItems.includes(item.id) && "rotate-180"
//                           )}
//                         />
//                       )}
//                     </div>
//                     <p className={cn("text-sm", item.variant === "blue" ? "text-white/90" : "text-gray-500")}>
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </ScrollArea>
//       </div>
//     </header>
//   );
// };

// export default Navbar;