import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <div className="relative w-full h-screen flex flex-col justify-between">
            <Navbar />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 rounded-lg">
                <div className="absolute top-0 left-0 w-full h-full bg-black/20  rounded-lg"></div>
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src="https://gadgetlite.com/wp-content/uploads/2024/06/Tips-to-Protect-Your-Car-This-Summer-800x400.jpg.webp"
                    alt="Seattle City"
                />
            </div>

            <div className="flex flex-col mx-10 mb-10">
                <div className="text-white mb-8">
                    <p className="text-6xl font-bold">Rent a Car for Every Journey</p>
                </div>
                <div className="h-auto bg-white rounded-lg p-6 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Departure */}
                        <div>
                            <h1 className="text-sm font-semibold mb-1">Departure</h1>
                            <input
                                type="text"
                                placeholder="Enter departure location"
                                className="w-full bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Return Location */}
                        <div>
                            <h1 className="text-sm font-semibold mb-1">Return Location</h1>
                            <input
                                type="text"
                                placeholder="Enter return location"
                                className="w-full bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Pickup Date & Time */}
                        <div>
                            <h1 className="text-sm font-semibold mb-1">Pickup Date & Time</h1>
                            <input
                                type="datetime-local"
                                className="w-full bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Return Date & Time */}
                        <div>
                            <h1 className="text-sm font-semibold mb-1">Return Date & Time</h1>
                            <input
                                type="datetime-local"
                                className="w-full bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                <div className="mt-4 flex justify-between">
                    <div className="flex items-center gap-4">
                        <p>Search Filter: </p>
                        <p className="text-white bg-black rounded-full px-2 py-1">without Driver</p>
                        <p className="text-black rounded-full px-2 py-1">with Driver</p>
                    </div>
                    <div>
                        <button className="">Search</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
