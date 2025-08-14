import React from 'react'
import location from "../assets/location.svg"
import car from "../assets/car.svg"
import wallet from "../assets/wallet.svg"

const data = [
    {
        id: 1,
        icon: location,
        name: "Availability",
        description: "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis"
    },
    {
        id: 2,
        icon: car,
        name: "comfort",
        description: "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis"
    },
    {
        id: 3,
        icon: wallet,
        name: "Savings",
        description: "Pretium convallis id diam sed commodo vestibulum lobortis volutpat"
    }
]

const CTA = () => {
    return (
        <div className="flex justify-around items-center mt-24">
            {
                data.map((d, i) => (
                    <div className="card bg-base-100 w-86">
                        <figure className="px-10 pt-10">
                            <img
                                src={d.icon}
                                alt={d.name}
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{d.name}</h2>
                            <p>{d.description}</p>
                           
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CTA