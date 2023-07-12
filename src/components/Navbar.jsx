import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="">
      <div className="w-[90%] h-12 border-[1.5px] border-black mx-auto rounded-full mt-10 flex flex-row items-center">
        <div className="flex flex-row items-center justify-start w-[50%] ml-[2px]">
          <button className="font-lalezar py-[3px] px-7 border-[1.5px] border-black pt-2 rounded-full text-xl">
            YOUR WAY
          </button>
          <button className="font-raleway py-[7px] px-4 ml-1 border-[1.5px] border-black rounded-full hover:bg-black hover:text-white">
            Application
          </button>
          <button className="font-raleway py-[7px] px-4 ml-1 border-[1.5px] border-black rounded-full hover:bg-black hover:text-white">
            Features
          </button>
          <button className="font-raleway py-[7px] px-4 ml-1 border-[1.5px] border-black rounded-full hover:bg-black hover:text-white">
            Team
          </button>
        </div>
        <div className="flex flex-row items-center justify-end w-[50%] mr-[2px]">
          <button className="p-3     ml-1 border-[1.5px] border-black rounded-full hover:bg-black hover:text-white">
            <AiOutlineInstagram />
          </button>
          <button className="font-raleway py-[7px] px-4 ml-1 border-[1.5px] border-black rounded-full hover:bg-black hover:text-white">
            Log In
          </button>
          <button className="font-raleway py-[7px] px-4 ml-1 bg-black text-white border-[1.5px] border-black rounded-full hover:bg-white hover:text-black hover:border-[1.5px] hover:border-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
