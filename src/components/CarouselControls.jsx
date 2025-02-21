import React from "react";

const CarouselControls = ({ nextSlide, prevSlide }) => {
  return (
    <div className="flex gap-6">
      <button
        className="bg-[#FFDA63] p-4 rounded-full shadow-md text-2xl flex items-center justify-center w-14 h-14"
        onClick={prevSlide}
      >
        <span className="rounded-full w-10 h-10 flex items-center justify-center">
          &lt;
        </span>
      </button>
      <button
        className="bg-[#FFDA63] p-4 rounded-full shadow-md text-2xl flex items-center justify-center w-14 h-14"
        onClick={nextSlide}
      >
        <span className="rounded-full w-10 h-10 flex items-center justify-center">
          &gt;
        </span>
      </button>
    </div>
  );
};

export default CarouselControls;
