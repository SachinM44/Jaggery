import React from "react";

const categories = [
  { name: "Land", count: 72, icon: "/images/land-icon.png" },
  { name: "Water", count: 54, icon: "/images/water-icon.png" },
  { name: "Kids", count: 35, icon: "/images/kids-icon.png" },
];

const CategorySidebar = ({ category, setCategory }) => {
  return (
    <div className="w-1/4">
      {categories.map((cat) => (
        <button
          key={cat.name}
          className={`flex items-center w-full text-left px-4 py-3 my-2 rounded-full text-lg font-semibold
            ${
              category === cat.name
                ? "bg-[#FFDA63] text-black"
                : "text-white hover:bg-[#1e3163]"
            }`}
          onClick={() => setCategory(cat.name)}
        >
          <div
            className="w-12 h-12 rounded-full bg-white mr-3 flex items-center justify-center"
            style={{ opacity: 0.8 }}
          >
            <img src={cat.icon} alt={cat.name} className="h-8 w-8" />
          </div>
          {cat.name}
          <span className="text-sm ml-1">{cat.count} Rides</span>
        </button>
      ))}
    </div>
  );
};

export default CategorySidebar;
