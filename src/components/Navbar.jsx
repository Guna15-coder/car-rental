import React, { useState } from "react";
import car from "../assets/car.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent px-4 py-2 relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-[40px]">
            <img className="w-full h-full" src={car} alt="Logo" />
          </div>
          <h1 className="text-white font-bold text-2xl">Horizone</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-white font-semibold">
          <p>Hotel</p>
          <p>Flight</p>
          <p>Train</p>
          <p>Travel</p>
          <p>Car Rental</p>
        </div>

        {/* Search */}
        <div className="hidden md:flex p-2 items-center justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
              </svg>
            </div>
            <span className="text-white font-medium">EN</span>
          </div>
          <button className="px-6 py-2 text-white font-medium hover:bg-white/10 rounded-xl transition-all">
            Log in
          </button>
          <button className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-3 bg-black/80 backdrop-blur-md text-white rounded-lg p-4 space-y-3">
          <div className="flex flex-col gap-3 font-semibold">
            <p>Hotel</p>
            <p>Flight</p>
            <p>Train</p>
            <p>Travel</p>
            <p>Car Rental</p>
          </div>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <button className="px-4 py-2 text-white border border-white rounded-xl">
              Log in
            </button>
            <button className="px-4 py-2 bg-white text-gray-900 rounded-xl">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
