import React from "react";
import gear from "../assets/gear.svg";
import fuel from "../assets/fuel.svg";
import doors from "../assets/fuel.svg";
import ac from "../assets/air.svg";
import seats from "../assets/gear.svg";
import distance from "../assets/location.svg";
import Navbar from "./Navbar";

const CarDetail = () => {
  return (
    <div className="max-w-7xl m-auto mt-24 px-4">
      <Navbar />
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-6">BMW</h1>

        {/* Main layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left - Car Image */}
          <div className="flex-1">
            <img
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
              alt="BMW"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right - Specifications */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Technical Specification</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 border p-3 rounded-lg">
                <img src={gear} alt="Gear Box" className="w-6 h-6" />
                <div>
                  <p className="font-medium">Gear Box</p>
                  <p className="text-gray-600">Automatic</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border p-3 rounded-lg">
                <img src={fuel} alt="Fuel" className="w-6 h-6" />
                <div>
                  <p className="font-medium">Fuel</p>
                  <p className="text-gray-600">Petrol</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border p-3 rounded-lg">
                <img src={doors} alt="Doors" className="w-6 h-6" />
                <div>
                  <p className="font-medium">Doors</p>
                  <p className="text-gray-600">4</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border p-3 rounded-lg">
                <img src={ac} alt="Air Conditioner" className="w-6 h-6" />
                <div>
                  <p className="font-medium">Air Conditioner</p>
                  <p className="text-gray-600">Yes</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border p-3 rounded-lg">
                <img src={seats} alt="Seats" className="w-6 h-6" />
                <div>
                  <p className="font-medium">Seats</p>
                  <p className="text-gray-600">5</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border p-3 rounded-lg">
                <img src={distance} alt="Total Distance" className="w-6 h-6" />
                <div>
                  <p className="font-medium">Total Distance</p>
                  <p className="text-gray-600">25,000 km</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
                <button className="btn btn-neutral">Book now</button>
            </div>

            {/* Car Equipments */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-3">Car Equipments</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>GPS Navigation</li>
                <li>Bluetooth Connectivity</li>
                <li>Rear Camera</li>
                <li>ABS Braking System</li>
                <li>LED Headlights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
