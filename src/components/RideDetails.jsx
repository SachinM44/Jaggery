import React from "react";

const RideDetails = ({ ride, onClose }) => {
  if (!ride) {
    return null; 
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg w-96 text-white">
        <button onClick={onClose} className="text-white font-bold text-xl mb-4"></button>
        <img
          src={ride.image}
          alt={ride.title}
          className="rounded-2xl w-full h-48 object-cover mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">{ride.title}</h3>
        <p className="text-gray-300 mb-2">{ride.location}</p>
        <p className="text-gray-400 mb-4">{ride.description}</p>
        <button onClick={onClose} className="bg-[#FFDA63] px-4 py-2 text-black font-semibold rounded-full hover:bg-yellow-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default RideDetails;