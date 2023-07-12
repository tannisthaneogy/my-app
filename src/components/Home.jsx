import React from "react";
import runners from "../assets/runners.png";
import people from "../assets/people3x.png";
import arrow from "../assets/arrow.png";
import user from "../assets/user.png";
import "../App.css";
import { BsArrowUpRight } from "react-icons/bs";

export default function Home() {
  const style = { color: "white" };
  return (
    <div className="w-[90%] h-[28rem] mx-auto mt-20 flex flex-row">
      <div className="w-[70%] h-[100%]">
        <div className="w-[100%] h-[40%] flex flex-row">
          <h1 className="text-6xl text-black font-raleway pt-3">
            TRACK YOUR WAY
          </h1>
          <img
            src={runners}
            alt="runner"
            className="w-44 h-16 ml-6 mt-2 shadow-xl rounded-full"
          />
          <h1 className="text-6xl text-black font-raleway pt-3 absolute mt-16">
            TO SUCCESS
          </h1>
          <p className="absolute w-64 leading-[17px] ml-[28%] mt-[6.5%] text-[12px] font-raleway">
            Streamline your day by prioritizing the right tasks and managing
            your time effectively around the most important aspects of your life
          </p>
        </div>
        <div className="w-[100%] h-[60%] flex flex-col justify-center">
          <div className="w-80 h-12 rounded-xl border-[1.5px] border-black flex flex-row justify-between">
            <h2 className="font-raleway py-3 px-4">Conference</h2>
            <div className="pt-4 pr-4">
              <BsArrowUpRight />
            </div>
          </div>
          <div className="w-80 h-12 rounded-xl border-[1.5px] border-black flex flex-row mt-1 justify-between">
            <h2 className="font-raleway py-3 px-4">Weekly Planning</h2>
            <div className="pt-4 pr-4">
              <BsArrowUpRight />
            </div>
          </div>
          <div className="w-80 h-32 rounded-xl bg-black flex flex-col mt-1 opacity-[88%]">
            <div className="h-[30%] flex flex-row justify-between">
              <h3 className="text-white my-auto px-4 text-xs font-raleway">
                March 8 10:00 - 12:00
              </h3>
              <div className="my-auto px-4">
                <BsArrowUpRight style={style} />
              </div>
            </div>
            <div className="h-[30%]">
              <h2 className="text-white mx-4 font-raleway font-semibold text-lg">
                Design Meeting
              </h2>
            </div>
            <div className="h-[40%]">
              <img src={people} alt="people" className="w-28 pt-2 px-4" />
            </div>
          </div>
          <div className="w-48 h-12 bg-[#9b91ba] absolute mt-32 ml-64 rounded-full flex flex-row">
            <div className="w-[42px] h-[42px] bg-black rounded-full my-[3px] mx-1 flex justify-center items-center">
              <h3 className="text-white text-xl font-raleway">#</h3>
            </div>
            <h2 className="text-lg text-white font-raleway my-auto ml-2">
              Development
            </h2>
          </div>
        </div>
      </div>
      <div className="w-[30%] h-[100%] flex flex-col">
        <div className="w-[100%] h-[70%] flex flex-row">
          <div className="w-[50%] h-[100%]">
            <div className="w-[100%] h-[50%] bg-black/50 rounded-3xl mt-6 border-[1px] border-black flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-white text-5xl font-raleway">+</h2>
                <h3 className="text-white w-20 font-raleway text-center text-lg">
                  Create a new task
                </h3>
              </div>
            </div>
            <div className="w-44 h-12 bg-[#9b91ba] absolute rounded-full flex flex-row -mt-44 ml-32">
              <div className="w-[42px] h-[42px] bg-black rounded-full my-[3px] mx-1 flex justify-center items-center">
                <h3 className="text-white text-xl font-raleway">#</h3>
              </div>
              <h2 className="text-lg text-white font-raleway my-auto ml-2">
                Brainstorm
              </h2>
            </div>
          </div>
          <div className="w-[50%] h-[100%]">
            <div className="w-[100%] h-[50%] bg-black/50 rounded-3xl mt-28 border-[1px] border-black">
              <div className="w-[100%] h-[45%] flex flex-row justify-between items-center">
                <img src={user} alt="user" className="w-12 h-auto mx-4" />
                <h3 className="font-raleway px-4 text-xs text-white">
                  March 6
                </h3>
              </div>
              <div className="w-[100%] h-[25%] flex flex-col">
                <h2 className="font-raleway px-4 text-lg font-semibold text-white">
                  Thursday
                </h2>
                <h3 className="font-raleway px-4 text-lg leading-3 font-semibold text-white">
                  12:00 - 13:00
                </h3>
              </div>
              <div className="w-[100%] h-[30%] flex items-center">
                <p className="font-raleway text-xs px-4 text-white">
                  Write a report
                </p>
              </div>
            </div>
            <img src={arrow} alt="arrow" className="w-9 -mt-52 ml-32" />
          </div>
        </div>
        <div className="w-[100%] h-[30%] flex justify-end">
          <h1 className="text-white text-7xl">+</h1>
        </div>
      </div>
    </div>
  );
}
