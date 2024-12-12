"use client";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SearchInput } from "./SearchInput";
export default function App() {
  function Card() {
    return (
      <div className="w-[414px] h-[828px] bg-[#FFFFFFBF] rounded-[3rem] flex flex-col justify-between p-6">
        <div className="flex flex-row items-center place-content-between mt-[32px]">
          <div className="flex flex-col ml-[48px]">
            <p className="text-[18px] font-medium text-[#9CA3AF]">
              September 10, 2024
            </p>
            <p className="text-[48px] font-extrabold leading-[58px]">Darhan</p>
          </div>
          <i className="fa-solid fa-location-dot text-[32px]  mr-[24px]"></i>
        </div>
        <div className="ml-auto mr-auto mt-[60px]">
          <img
            className="w-[262.11px] h-[262.11px] object-cover rounded-lg"
            src="Day sun.png"
            alt="Day sun"
          />
        </div>

        <div className="flex flex-col font-extrabold mt-[45px] ml-[48px]">
          <div className="text-[144px] leading-[160px] text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#6B7280] ">
            26°
          </div>
          <p className="text-[24px] text-[#FF8E27] ">Bright</p>
        </div>
        <div className="flex justify-around items-center mt-auto text-[32px] opacity-60 space-x-4">
          <i className="fa-solid fa-house"></i>
          <i className="fa-solid fa-location-dot"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-[1454px] bg-[#404040] flex items-center justify-center">
      <div className="w-[800px] h-[1200px] bg-[#F3F4F6] flex items-center justify-center rounded-l-3xl flex-col">
        <SearchInput />
        <Card />
      </div>
      <div className="w-[800px] h-[1200px] bg-[#0F141E] flex items-center justify-center rounded-r-3xl">
        <Card />
      </div>
    </div>
  );
}
