import React from "react";
import { BiChevronRight, BiSearch ,BiChevronDown ,BiMenu,BiChevronLeft,BiShareAlt} from "react-icons/bi";

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div >
                    <h3 className="text-2xl font-bold">It All Starts Here!</h3>
                    
                </div>
                <div className="w-8 h-8"><BiShareAlt className="w-full h-full " /></div>
            </div>
        </>
    )
};

const NavLg = () => {
    return (
        <>
            <div className=" container mx-auto px-5 flex items-center justify-between">
                <div className="flex gap-5 items-center w-1/2 ">
                    <div className="w-40 h-10">
                        <img src="https://www.vhv.rs/dpng/f/422-4222380_50-off-png.png" alt="logo" className="w-full h-full" />
                    </div>
                    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded">
                        <BiSearch className="opacity-50" />
                        <input type="search" className="w-full focus:outline-none" placeholder="Search for Movies, Event, Plays, Sports and Activities" />
                    </div>

                </div>
                <div className="flex itmes-center gap-4">
                    <span className="text-gray-300 text-s flex items-center hover:text-white cursor-pointer">
                        Bhubaneswar <BiChevronDown />
                    </span>
                    <button className="bg-red-500 text-white text-sm rounded px-2 py-1">Sign in</button>
                    <div className="w-8 h-8 text-white"><BiMenu className="w-full h-full"/></div>
                </div>
            </div>
        </>
    )
};

const MovieNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-700 px-4 py-2">
                <div className="md:hidden">
                    {/* Mobile screen */
                        <NavSm />
                    }
                </div>
                <div className="hidden lg:hidden md:block">
                    {/* Tablet screen */
                        <NavSm />
                    }
                </div>
                <div className="hidden lg:flex">
                    {/* desktop screen */
                        <NavLg />
                    }
                </div>


            </nav>
        </>
    )
};

export default MovieNavbar;