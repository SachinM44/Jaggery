import React from "react";
import { motion } from "framer-motion";

const CategorySelector = ({ onCategoryChange, currentCategory }) => {
  return (
    <div className="absolute left-0 top-1 w-[322px] h-[610px] pt-">
      <svg viewBox="0 0 330 600" className="w-full h-full">
        <defs>
          <linearGradient id="yellowGradient" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 0 }} />
            <stop offset="20%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
            <stop offset="80%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#FFFFFF", stopOpacity: 0 }} />
          </linearGradient>
        </defs>

        <path
          d="M 11,25 A 150,150 0 0 1 0,425"
          fill="none"
          stroke="white"
          strokeWidth="70"
        />

        <motion.path
          d="M 11,25 A 150,150 0 0 1 0,425"
          fill="none"
          stroke="url(#yellowGradient)"
          strokeWidth="70"
          strokeDasharray="350.5987755982989"
          animate={{
            strokeDashoffset:
              currentCategory === "Land"
                ? 0
                : currentCategory === "Water"
                ? -174.53292519943296
                : -349.0658503988659,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        />

        {[
          {
            name: "Land",
            y: 50,
            rides: 72,
            icon: (
              <path
                d="M25 15 L35 25 L45 15 M30 15 L40 25 M35 10 L35 30 M25 25 C25 35 45 35 45 25"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              />
            ),
          },
          {
            name: "Water",
            y: 225,
            rides: 5,
            icon: (
              <path
                d="M30 15 C40 15 40 25 30 25 C20 25 20 35 30 35 C40 35 40 45 30 45"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              />
            ),
          },
          {
            name: "Kids",
            y: 385,
            rides: 35,
            icon: (
              <path
                d="M35 20 L35 40 M25 25 L45 25 M30 15 C30 40 40 40 40 15"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              />
            ),
          },
        ].map(({ name, y, rides, icon }) => {
          const translation =
            name === "Land"
              ? { x: 105, y: y - 3 }
              : name === "Kids"
              ? { x: 80, y: y - 20 }
              : { x: 170, y: y - 30 };

          return (
            <g key={name} className="cursor-pointer" onClick={() => onCategoryChange(name)}>
              <circle
                cx={name === "Land" ? "140" : name === "Kids" ? "120" : "205"}
                cy={name === "Land" ? y - (-20) : name === "Kids" ? y + 5 : y}
                r="50"
                fill={currentCategory === name ? "white" : "transparent"} 
                stroke={currentCategory === name ? "#FFDA63" : "none"}
                strokeWidth="7"
              />

              <motion.g
                initial={{ ...translation, scale: 1 }}
                animate={{ ...translation, scale: currentCategory === name ? 2 : 1 }}
                whileHover={{ ...translation, scale: 2.4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`${currentCategory === name ? "text-[#4338ca]" : "text-blue-500"}`}
              >
                {icon}
              </motion.g>

              <text
                x={name === "Land" ? "215" : name === "Kids" ? "220" : "268"}  
                y={name === "Land" ? y - 15 : name === "Kids" ? y + 15 : y - 15}
                className="text-xl font-semibold fill-white"
              >
                {name}
              </text>
              <g
                transform={`translate(${name === "Land" ? "230" : name === "Kids" ? "210" : "268"}, ${
                  name === "Land" ? y + 10 : name === "Kids" ? y + 45 : y + 10
                })`}
              >
                <rect x="-5" y="-15" width="60" height="25" fill="#5775c2" rx="10" ry="10" />
                <text
                  x="25"
                  y="0"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  className="text-sm fill-white"
                >
                  {rides} Rides
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default CategorySelector;
