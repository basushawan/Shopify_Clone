import React from "react";
import { assets } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const handleNavigate = (direction) => {
        if (direction === -1 && location.pathname === "/") {
            // Do nothing if on the home page and trying to navigate left
            return;
        }
        navigate(direction);
    };
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
            <img onClick={()=>handleNavigate(-1)} src={assets.arrow_left} alt="" className="w-8 bg-black p-2 rounded-2xl cursor-pointer"/>
            <img onClick={()=>handleNavigate(1)} src={assets.arrow_right} alt="" className="w-8 bg-black p-2 rounded-2xl cursor-pointer"/>
        </div>
        <div className="flex items-center gap-4">
            <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block">Explore Premium</p>
            <p className="py-1 bg-black px-3 rounded-2xl cursor-pointer text-[15px]">Install App</p>
            <p className="w-7 flex ic rounded-full text-black bg-purple-500 justify-center">D</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className="bg-black rounded-2xl px-4 py-1 cursor-pointer">Music</p>
        <p className="bg-black rounded-2xl px-4 py-1 cursor-pointer">Podcasts</p>
      </div>
    </>
  );
}

export default Navbar;
