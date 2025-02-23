import { useState, useEffect } from "react";
import RideCard from "./RideCard";
import CarouselControls from "./CarouselControls";
import CategorySelector from "./CategorySelector";
import ridesData from "../data/rides.json";
import RideDetails from "./RideDetails";

const RidesSection = () => {
  const [category, setCategory] = useState("Land");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredRides, setFilteredRides] = useState([]);
  const [selectedRide, setSelectedRide] = useState(null);
  const visibleCards = 4;
  const cardWidth = 260;

  useEffect(() => {
    const newFilteredRides = ridesData.filter((ride) => ride.category === category);
    setFilteredRides(newFilteredRides);
    setCurrentIndex(0);
  }, [category]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredRides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [filteredRides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredRides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredRides.length) % filteredRides.length);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleDetailsClick = (ride) => {
    setSelectedRide(ride);
  };

  const handleCloseDetails = () => {
    setSelectedRide(null);
  };

  return (
    <div className="bg-slate-800 min-h-screen pt-20 relative">
      <section className="text-white py-4">
        <div className="flex justify-center items-center ml-40 pt-10 mt-10 pl-80">
          <h2 className="font-mulish text-[40px] font-black uppercase !leading-[1] tracking-[-0.04em] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-6xl text-white text-center">
            Our Iconic Rides
          </h2>
          <div className="flex gap- ml-auto mr-12 mt-1">
            <CarouselControls nextSlide={nextSlide} prevSlide={prevSlide} />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center mt-">
          <div className="pr-12 -ml-20">
            <CategorySelector onCategoryChange={handleCategoryChange} currentCategory={category} />
          </div>

          {/* Cards Section */}
          <div className="flex-1 flex justify-end" style={{ marginLeft: "-5px" }}>
            <div
              className="overflow-hidden relative"
              style={{
                width: `${cardWidth * visibleCards + 3 * (visibleCards - 1)}px`,
              }}
            >
              <div
                className="flex transition-transform duration-1000 ease-in-out gap-[3px]"
                style={{
                  transform: `translateX(-${currentIndex * (cardWidth + 3)}px)`,
                  width: `${filteredRides.length * (cardWidth + 3)}px`,
                }}
              >
                {filteredRides.map((ride, index) => (
                  <div key={index} className="flex-shrink-0" style={{ width: `${cardWidth}px` }}>
                    <RideCard ride={ride} onDetailsClick={handleDetailsClick} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pl-80 ml-20 mt-8">
          <button className="bg-[#FFDA63] px-12 py-4 font-semibold text-black rounded-full hover:bg-yellow-500">
            Explore All Rides!
          </button>
        </div>
      </section>

      {selectedRide && <RideDetails ride={selectedRide} onClose={handleCloseDetails} />}
    </div>
  );
};

export default RidesSection;