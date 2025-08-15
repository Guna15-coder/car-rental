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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto pt-24 px-6">
        <Navbar />
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">BMW</h1>
              <p className="text-gray-600 text-lg">Luxury sedan with premium features</p>
            </div>
            <div className="hidden md:block">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Available
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Car Image - Takes more space */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                alt="BMW"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Specifications & Booking */}
          <div className="lg:col-span-1 space-y-8">
            {/* Technical Specifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Technical Specs
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <img src={gear} alt="Gear Box" className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Gear Box</p>
                    <p className="text-gray-600 text-sm">Automatic</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <img src={fuel} alt="Fuel" className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Fuel Type</p>
                    <p className="text-gray-600 text-sm">Petrol</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <img src={doors} alt="Doors" className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Doors</p>
                    <p className="text-gray-600 text-sm">4</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-cyan-100 p-2 rounded-lg">
                    <img src={ac} alt="Air Conditioner" className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Air Conditioner</p>
                    <p className="text-gray-600 text-sm">Yes</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <img src={seats} alt="Seats" className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Seats</p>
                    <p className="text-gray-600 text-sm">5 People</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <img src={distance} alt="Total Distance" className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Mileage</p>
                    <p className="text-gray-600 text-sm">25,000 km</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Button */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center space-y-4">
                <div>
                  <p className="text-gray-600 text-sm">Starting from</p>
                  <p className="text-3xl font-bold text-gray-900">$89<span className="text-lg text-gray-600">/day</span></p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
                <p className="text-xs text-gray-500">Free cancellation up to 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Car Equipments - Full Width */}
        <div className="mt-12 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Car Equipment & Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "GPS Navigation", icon: "🗺️" },
                { name: "Bluetooth Connectivity", icon: "📱" },
                { name: "Rear Camera", icon: "📷" },
                { name: "ABS Braking System", icon: "🛡️" },
                { name: "LED Headlights", icon: "💡" },
                { name: "Premium Sound System", icon: "🔊" }
              ].map((equipment, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <span className="text-2xl">{equipment.icon}</span>
                  <span className="font-medium text-gray-700">{equipment.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;