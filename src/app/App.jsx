"use client";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SearchInput } from "./SearchInput";

const API_KEY = "a9bd50909a544a9c84172455241312";

export default function App() {
  return (
    <div className="w-full h-[1454px] bg-[#404040] flex items-center justify-center">
      <div className="w-[800px] h-[1200px] bg-[#F3F4F6] flex items-center justify-center rounded-l-3xl flex-col">
        <SearchInput />
        <Card value="day" />
        <img
          className="w-[200px] h-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-full~ bg-[#F3F4F6]"
          src="logo.png"
          alt="Logo"
        ></img>
      </div>
      <div className="w-[800px] h-[1200px] bg-[#0F141E] flex items-center justify-center rounded-r-3xl">
        <Card value=" night" />
      </div>
    </div>
  );
  function Card({ value }) {
    const sun = "Day sun.png";
    const moon = "moon.png";
    const img = value === "day" ? sun : moon;
    const nightcolors = value === "day" ? "bg-[#FFFFFFBF]" : "bg-[#111827BF]";
    const cityName = value === "day" ? "text-[#111827]" : "text-[#FFFFFF]";
    const temperature =
      " text-[144px] leading-[160px] text-transparent bg-clip-text bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00]";
    const nightTemperature =
      value === "day"
        ? "bg-gradient-to-b from-[#111827] to-[#6B7280]"
        : temperature;
    const icons = "text-[white] opacity-50";
    const nightIcons = value === "day" ? "text-[black] opacity-50 " : icons;
    const nightConditions =
      value === "day" ? "text-[#FF8E27]" : "text-[#777CCE]";

    return (
      <div
        className={`w-[414px] h-[828px] ${nightcolors} rounded-[3rem] flex flex-col justify-between p-6`}
      >
        <div
          className={`flex flex-row items-center place-content-between mt-[32px] ${cityName}`}
        >
          <div className="flex flex-col ml-[48px]">
            <p className="text-[18px] font-medium text-[#9CA3AF]">
              September 10, 2024
            </p>
            <p className="text-[48px] font-extrabold leading-[58px]">Darhan</p>
          </div>
          <i className="fa-solid fa-location-dot text-[32px] mr-[24px]"></i>
        </div>
        <div className="ml-auto mr-auto mt-[60px]">
          <img
            className="w-[262.11px] h-[262.11px] object-cover rounded-lg drop-shadow-[0_5px_25px_rgba(255,255,255,0.5)]"
            src={img}
            alt="Day sun"
          />
        </div>
        <div className="flex flex-col font-extrabold mt-[45px] ml-[48px]">
          <div
            className={`text-[144px] leading-[160px] text-transparent bg-clip-text bg-gradient-to-b ${nightTemperature} `}
          >
            26°
          </div>
          <p className={`text-[24px] ${nightConditions}`}>Bright</p>
        </div>
        <div
          className={`flex justify-around items-center mt-auto text-[32px] space-x-4 ${nightIcons}`}
        >
          <i className="fa-solid fa-house"></i>
          <i className="fa-solid fa-location-dot"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    );
  }
}
