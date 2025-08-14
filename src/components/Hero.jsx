import React from 'react';
import text from "../assets/Text.svg"
import { ChevronDown } from 'lucide-react';


const Hero = () => {
  return (
    <div className="w-full relative h-auto mt-24 flex items-center justify-between">
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
        <p className='max-w-2xl'> Impedit eaque repellat at sint animi, natus doloremque ab harum quam ea voluptatum eum voluptates veritatis aperiam officiis nostrum numquam facere nam deleniti dicta. Soluta, expedita excepturi!</p>
      </div>

      {/* Right Side: Booking Form */} 
      <div className="w-[420px] bg-white border border-gray-400/40 shadow-2xl p-4 mt-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book your car now</h2>

        {/* Select Car Type */}
        <div className="mb-4">
          <div className="dropdown dropdown-center w-full">
            <div tabIndex={0} role="button" className="w-full bg-white btn m-1 justify-between">
              <span className='text-gray-700 text-xs'>Choose Car Type</span> <ChevronDown />
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
            <div tabIndex={0} role="button" className="w-full bg-white btn m-1 justify-between">
            <span className='text-gray-700 text-xs'>Choose Rental Place</span> <ChevronDown />
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
            <div tabIndex={0} role="button" className="w-full bg-white btn m-1 justify-between">
            <span className='text-gray-700 text-xs'>Choose Drop Place</span> <ChevronDown />
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
            placeholder='Rentail Date'
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
