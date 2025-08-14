import React from 'react'
import logo from "../assets/logo.svg"

const Navbar = () => {
    return (
        <div className='w-full h-[70px] flex justify-between bg-transparent items-center'>
            <div className='flex items-center gap-2'>
                <img src={logo} alt="logo" className=' w-[30px] h-1/3 object-contain'/>
                <h1 className='text-xl font-bold'>Car Rental</h1>
            </div>
            <div className='flex items-center'>
                <button className="btn btn-ghost hover:bg-transparent hover:border-none hover:shadow-none">Home</button>
                <p className='btn btn-ghost hover:bg-transparent hover:border-none hover:shadow-none'>Vehicles</p>
                <p className='btn btn-ghost hover:bg-transparent hover:border-none hover:shadow-none'>Details</p>
                <p className='btn btn-ghost hover:bg-transparent hover:border-none hover:shadow-none'>About Us</p>
                <p className='btn btn-ghost hover:bg-transparent hover:border-none hover:shadow-none'>Contact Us</p>
            </div>
            <div>
                <div>

                </div>
                <div>
                    <button className="btn bg-transparent border-2 border-black hover:bg-neutral hover:text-white">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar