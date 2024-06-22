"use Client";
import React from "react";
import Image from "next/image";
import TodaySVG from "./ui/todaySVG";

function Sidebar() {
  return (
    <>
      <div className="rounded-l-[40px] w-[20%] bg-[#fffefa] p-10 flex flex-col items-center h-[100%] justify-between">
        <form className="flex flex-row justify-center items-center gap-3">
          <Image src="/search.svg" alt="search" width={25} height={25}></Image>
          <input
            type="search"
            className="outline-none border-none bg-[transparent] w-[100%] text-[18px] text-[black]"
            placeholder="search for places .."
          />
        </form>
        <div className="mb-[50px]">
          <TodaySVG></TodaySVG>
          <p className="day text-[20px] text-[black]">New Delhi, Delhi</p>
        </div>
        <div className=" pb-[10px] today flex w-[100%]  flex-col items-start justify-start gap-10">
          <div className="temp flex flex-row mt-[50px]">
            <p className="text-start text-[80px] text-[gray]">12</p>
            <span className="text-[80px] text-[gray]">&deg;C</span>
          </div>
          <div className="flex flex-row items-start justify-start">
            <p className="day text-[20px] text-[black]">Monday, </p>
            <p className="time text-[20px] text-[gray]">17:44pm</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
