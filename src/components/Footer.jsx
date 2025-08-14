import React from "react";
import carLogo from "../assets/car.svg";
import locationIcon from "../assets/location.svg";
import emailIcon from "../assets/location.svg";
import phoneIcon from "../assets/location.svg";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";

const Footer = () => {
  return (
    <footer className="pt-12">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img src={carLogo} alt="Car Rental" className="w-8 h-8" />
            <p className="text-white text-xl font-bold">Car Rental</p>
          </div>
          <p className="text-sm leading-relaxed">
            Faucibus faucibus pellentesque dictum turpis. Id pellentesque
            turpis massa a id iaculis lorem turpis euismod. Purus at.
          </p>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="bg-yellow-700 p-3 rounded-full flex items-center justify-center">
            <img src={locationIcon} alt="Location" className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white font-semibold">Address</p>
            <p className="text-sm">123 Main Street, New York, USA</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="bg-yellow-700 p-3 rounded-full flex items-center justify-center">
            <img src={emailIcon} alt="Email" className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white font-semibold">Email</p>
            <p className="text-sm">aaa@yahoo.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="bg-yellow-700 p-3 rounded-full flex items-center justify-center">
            <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white font-semibold">Phone</p>
            <p className="text-sm">+91 3265149874</p>
          </div>
        </div>
      </div>

      {/* Bottom Row - White Background */}
      <div className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <p className="text-sm leading-relaxed">
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem turpis euismod. Purus at.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <p className="font-semibold mb-4">Useful Links</p>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-yellow-600 cursor-pointer">About Us</li>
              <li className="hover:text-yellow-600 cursor-pointer">Contact Us</li>
              <li className="hover:text-yellow-600 cursor-pointer">Gallery</li>
              <li className="hover:text-yellow-600 cursor-pointer">Blog</li>
              <li className="hover:text-yellow-600 cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Vehicles */}
          <div>
            <p className="font-semibold mb-4">Vehicles</p>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-yellow-600 cursor-pointer">Sedan</li>
              <li className="hover:text-yellow-600 cursor-pointer">Pickup</li>
              <li className="hover:text-yellow-600 cursor-pointer">SUV</li>
              <li className="hover:text-yellow-600 cursor-pointer">Luxury</li>
              <li className="hover:text-yellow-600 cursor-pointer">Electric</li>
            </ul>
          </div>

          {/* App Store Links */}
          <div>
            <p className="font-semibold mb-4">Get Our App</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <img src={appstore} alt="App Store" className="w-32" />
              <img src={playstore} alt="Play Store" className="w-32" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="text-center py-4 text-sm">
        © {new Date().getFullYear()} Car Rental. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
