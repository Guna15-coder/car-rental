import React from 'react';
import text from "../assets/Text.svg"

const Hero = () => {
  return (
    <div className="w-full relative h-[calc(100vh-70px)] flex items-center justify-between">
      <div>
        <img className='absolute top-8' src={text} alt="" />
      </div>
      {/* Left Side: Text + Image */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <h1 className="text-6xl mt-14 font-extrabold uppercase leading-tight text-gray-900">
          Experience the road <br /> like never before
        </h1>

        {/* Car Image */}
        <img
          className="mt-8 w-[700px] h-[450px] object-contain"
          src="https://i.pinimg.com/736x/e6/8c/4a/e68c4ac0052aed91573719d810dd1b3d.jpg"
          alt="Car"
        />
      </div>

      {/* Right Side: Booking Form */}
      <div className="w-[420px] bg-white border border-gray-200 shadow-xl p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book your car now</h2>

        {/* Select Car Type */}
        <div className="mb-4">
          <div className="dropdown dropdown-center w-full">
            <div tabIndex={0} role="button" className="w-full btn m-1 justify-between">
              Choose Car Type 
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm">
              <li><a>Sedan</a></li>
              <li><a>SUV</a></li>
              <li><a>Hatchback</a></li>
              <li><a>Luxury</a></li>
            </ul>
          </div>
        </div>

        {/* Select Rental Place */}
        <div className="mb-4">
          <div className="dropdown dropdown-center w-full">
            <div tabIndex={0} role="button" className="w-full btn m-1 justify-between">
              Choose Rental Place 
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm">
              <li><a>New York</a></li>
              <li><a>Los Angeles</a></li>
              <li><a>Chicago</a></li>
              <li><a>Miami</a></li>
            </ul>
          </div>
        </div>

        {/* Select Drop Place */}
        <div className="mb-4">
          <div className="dropdown dropdown-center w-full">
            <div tabIndex={0} role="button" className="w-full btn m-1 justify-between">
              Choose Drop Place
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm">
              <li><a>New York</a></li>
              <li><a>Los Angeles</a></li>
              <li><a>Chicago</a></li>
              <li><a>Miami</a></li>
            </ul>
          </div>
        </div>

        {/* Rental Date */}
        <div className="mb-4">
          <label className="block pl-1 mb-1 font-medium text-xs">Rental Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Return Date */}
        <div className="mb-6">
          <label className="block mb-1 font-medium text-xs">Return Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Book Now Button */}
        <button className="btn btn-neutral w-full">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
