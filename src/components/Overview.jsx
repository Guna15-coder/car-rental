import React from "react";
import car from "../assets/car.svg";
import wallet from "../assets/wallet.svg";
import gear from "../assets/gear.svg";
import location from "../assets/location.svg";
import carSkeleton from "../assets/car_skeleton.svg";

const overviewData = [
  {
    id: 1,
    icon: car,
    number: "540+",
    desc: "Cars",
  },
  {
    id: 2,
    icon: gear,
    number: "1.2K+",
    desc: "Happy Customers",
  },
  {
    id: 3,
    icon: wallet,
    number: "3.5K+",
    desc: "Trips Completed",
  },
  {
    id: 4,
    icon: location,
    number: "25+",
    desc: "Locations",
  },
];

const Overview = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 py-12 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md"
      style={{
        backgroundImage: `url(${carSkeleton})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-10 text-white">
        <h1 className="text-3xl text-black font-bold mb-3">Facts In Numbers</h1>
        <p className="max-w-2xl text-gray-700 mx-auto text-gray-200">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in.
          Diam tincidunt tincidunt erat at semper fermentum.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {overviewData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition"
          >
            {/* Icon with Black BG & White Icon */}
            <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-black">
              <img src={item.icon} alt={item.desc} className="w-8 h-8 filter invert" />
            </div>

            {/* Number */}
            <p className="text-2xl font-bold text-gray-900">{item.number}</p>

            {/* Description */}
            <span className="text-gray-500">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
