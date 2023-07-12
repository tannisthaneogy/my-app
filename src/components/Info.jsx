import React from "react";
import { BsFillSkipEndFill } from "react-icons/bs";
import sand from "../assets/sandd.png";

export default function Info() {
  const style = { fontSize: "23px" };
  return (
    <div className="flex justify-center">
      <div className="w-[90%] h-[70%] bg-[#111110] mt-5 rounded-t-3xl flex flex-row p-5">
        <div className="w-[50%] h-[100%] flex flex-col items-center mt-12">
          <h1 className="font-raleway text-white text-3xl w-[70%]">
            INCREASE PRODUCTIVITY WITH YOUR DAILY ACTIVITY
          </h1>
          <div className="flex flex-row justify-start -ml-12 mt-8">
            <div className="w-40 h-12 rounded-full border-[1.5px] border-white flex justify-center items-center">
              <button className="w-[154px] h-[44px] bg-white rounded-full font-raleway hover:bg-transparent hover:text-white">
                Get Started
              </button>
            </div>
            <div className="w-12 h-12 rounded-full border-[1.5px] border-white flex justify-center items-center">
              <button className="w-[42px] h-[42px] bg-white rounded-full font-raleway flex justify-center items-center hover:bg-transparent hover:text-white">
                <BsFillSkipEndFill style={style} />
              </button>
            </div>
            <div className="w-40 h-12 rounded-full border-[1.5px] border-white flex justify-center items-center ml-6 ">
              <button className="w-[153px] h-[43px] rounded-full font-raleway text-white border-[1.5px] border-white hover:bg-white hover:text-black">
                Contact Now
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between -ml-20 mt-9">
            <p className="font-raleway text-white text-xs opacity-60">
              + 300 000 users
            </p>
            <p className="font-raleway text-white text-xs ml-24 opacity-60">
              free subscription for 3 months
            </p>
          </div>
        </div>
        <div className="w-[50%] h-[100% flex flex-row items-center">
          <img src={sand} alt="sand" className="w-36 h-44 ml-8 mt-8" />
          <div className="flex flex-col w-64 h-[54%] ml-10">
            <p className="leading-5 text-white font-raleway text-[14px]">
              YOUR WAY makes it easy for you to manage your tasks, set
              priorities by automating your goal-setting process and visualising
              your productivity within a realistic timeframe
            </p>
            <p className="text-xs font-raleway text-white mt-10">
              Start your day with a sense of calm and confidence
            </p>
          </div>
          <div className="w-3 h-[25%] ml-20 flex flex-col">
            <div className="w-3 h-3 bg-white rounded-full mb-2"></div>
            <div className="w-3 h-3 border-white border-[1.5px] rounded-full mb-2"></div>
            <div className="w-3 h-3 border-white border-[1.5px]  rounded-full mb-2"></div>
            <div className="w-3 h-3 border-white border-[1.5px]  rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
