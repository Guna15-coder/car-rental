import React from "react";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import mobile from "../assets/mobile.svg";

const Mobile = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Download Mobile App
                </h1>
                <p className="text-gray-600 leading-relaxed">
                    Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh
                    placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit
                    enim condimentum. Condimentum interdum risus bibendum urna.
                </p>

                {/* Store Badges */}
                <div className="flex gap-6">
                    <a href="#" className="transition-transform hover:scale-105">
                        <img src={appstore} alt="Download on App Store" className="h-14" />
                    </a>
                    <a href="#" className="transition-transform hover:scale-105">
                        <img src={playstore} alt="Get it on Google Play" className="h-14" />
                    </a>
                </div>
            </div>

            {/* Right Image */}
            <div className="relative flex h-[500px] items-center justify-center">
                {/* First phone (behind) */}
                <img
                    src={mobile}
                    alt="Mobile App"
                    className="absolute bottom-0 left-1/2 -translate-x-[90%] w-full h-full max-w-sm opacity-90 scale-95"
                />

                {/* Second phone (front) */}
                <img
                    src={mobile}
                    alt="Mobile App"
                    className="absolute bottom-0 left-1/2 -translate-x-[40%] w-full h-full max-w-sm drop-shadow-lg"
                />
            </div>

        </div>
    );
};

export default Mobile;
