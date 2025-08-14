import React from "react";
import gear from "../assets/gear.svg";
import fuel from "../assets/fuel.svg";
import air from "../assets/air.svg";

const cars = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
        name: "Toyota Corolla",
        model: "2022",
        pricePerDay: 45,
        transmission: "Automatic",
        fuel: "Petrol",
        ac: true,
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
        name: "Honda Civic",
        model: "2021",
        pricePerDay: 50,
        transmission: "Manual",
        fuel: "Diesel",
        ac: true,
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
        name: "Ford Mustang",
        model: "2023",
        pricePerDay: 120,
        transmission: "Automatic",
        fuel: "Petrol",
        ac: true,
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
        name: "Chevrolet Spark",
        model: "2020",
        pricePerDay: 35,
        transmission: "Manual",
        fuel: "Petrol",
        ac: false,
    },
    {
        id: 5,
        image: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
        name: "Hyundai Elantra",
        model: "2022",
        pricePerDay: 55,
        transmission: "Automatic",
        fuel: "Diesel",
        ac: true,
    },
    {
        id: 6,
        image: "https://images.pexels.com/photos/981041/pexels-photo-981041.jpeg",
        name: "BMW 3 Series",
        model: "2023",
        pricePerDay: 150,
        transmission: "Automatic",
        fuel: "Petrol",
        ac: true,
    },
    {
        id: 7,
        image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
        name: "Audi A4",
        model: "2022",
        pricePerDay: 140,
        transmission: "Automatic",
        fuel: "Diesel",
        ac: true,
    },
    {
        id: 8,
        image: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
        name: "Kia Seltos",
        model: "2021",
        pricePerDay: 60,
        transmission: "Manual",
        fuel: "Petrol",
        ac: true,
    },
    {
        id: 9,
        image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
        name: "Mercedes-Benz C-Class",
        model: "2023",
        pricePerDay: 180,
        transmission: "Automatic",
        fuel: "Petrol",
        ac: true,
    },
    {
        id: 10,
        image: "https://images.pexels.com/photos/981041/pexels-photo-981041.jpeg",
        name: "Volkswagen Polo",
        model: "2020",
        pricePerDay: 40,
        transmission: "Manual",
        fuel: "Diesel",
        ac: false,
    },
];

const CarData = () => {
    return (
        <div id="#vehicle" className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-bold">Choose the car that suits you</h1>
                <button className="btn btn-link no-underline">View All</button>
            </div>

            {/* Car Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cars.map((car) => (
                    <div key={car.id} className="card bg-base-100 shadow-md">
                        {/* Car Image */}
                        <figure>
                            <img
                                src={car.image}
                                alt={car.name}
                                className="h-48 w-full object-cover"
                            />
                        </figure>

                        {/* Card Body */}
                        <div className="card-body">
                            {/* Name & Price Row */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="card-title">{car.name}</h2>
                                    <p className="text-sm text-gray-500">{car.model}</p>
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        $ <span className="text-xl">{car.pricePerDay}</span>/day
                                    </p>
                                </div>
                            </div>

                            {/* Specs */}
                            <div className="flex justify-between items-center text-sm mt-3">
                                <div className="flex items-center gap-1">
                                    <img src={gear} alt="" className="w-4 h-4" />
                                    <span>{car.transmission}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <img src={fuel} alt="" className="w-4 h-4" />
                                    <span>{car.fuel}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <img src={air} alt="" className="w-4 h-4" />
                                    <span>{car.ac ? "AC" : "--"}</span>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="card-actions mt-4">
                                <button className="btn btn-neutral w-full">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarData;
