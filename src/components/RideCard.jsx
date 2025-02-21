import React from "react";

const RideCard = ({ ride, onDetailsClick }) => {
  if (!ride) {
    return null; 
  }

  return (
    <div className="bg-slate-800 p-4 rounded-2xl shadow-lg text-left w-80">
      <div className="overflow-hidden rounded-2xl mb-4">
        <img
          src={ride.image}
          alt={ride.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-white">{ride.title}</h3>
      <p className="text-gray-300 mt-2 text-sm">{ride.location}</p>
      <p className="text-gray-400 mt-2 text-sm">{ride.description}</p>
      <button
        onClick={() => onDetailsClick(ride)}
        className="mt-4 bg-[#FFDA63] px-4 py-2 text-black font-semibold rounded-full hover:bg-yellow-500 text-sm"
      >
        Ride Details
      </button>
    </div>
  );
};

export default RideCard;