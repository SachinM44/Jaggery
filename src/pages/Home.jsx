import React from "react";
import Navbar from "../components/Navbar";
import RidesSection from "../components/RidesSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <main className="py-10 px-6">
        <RidesSection />
      </main>
      
    </div>
  );
};

export default Home;
