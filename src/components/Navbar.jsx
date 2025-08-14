import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "#vehicle", label: "Vehicles" },
    { to: "/details", label: "Details" },
    { to: "/aboutus", label: "About Us" },
    { to: "/contactus", label: "Contact Us" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 h-[70px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-[30px] object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative group font-semibold hover:bg-transparent hover:border-none hover:shadow-none"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          <button className="btn bg-transparent border-2 border-black hover:bg-neutral hover:text-white">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="block md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 border-b hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
          <div className="p-4">
            <button className="btn w-full bg-transparent border-2 border-black hover:bg-neutral hover:text-white">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
