"use client";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function App() {
  function Card() {
    return (
      <div className="w-[414px] h-[828px] bg-[#FFFFFFBF] rounded-[3rem] flex justify-center">
        <img className="size-[262.11px] " src="Day sun.png" alt="Day sun"></img>
      </div>
    );
  }
  return (
    <div className="w-[auto] h-[1454px] bg-[#404040] flex items-center justify-center">
      <div className="w-[800px] h-[1200px] bg-[#F3F4F6] flex items-center justify-center rounded-l-3xl flex-col">
        <div className="w-[567px] h-[80px]  rounded-[48px] bg-[#FFFFFF] flex justify-start items-center gap-[24px] ">
          <i className="fa-solid fa-magnifying-glass text-[24px] ml-[24px] opacity-40"></i>
          <input
            className="text-[20px] font-[700] outline-none w-[450px]"
            type="search"
            placeholder="Search for a city"
          ></input>
        </div>
        <Card />
      </div>
      <div className="w-[800px] h-[1200px] bg-[#0F141E] flex items-center justify-center rounded-r-3xl">
        <Card />
      </div>
    </div>
  );
}
